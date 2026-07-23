# Customer `/order-submit` IM Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เปลี่ยน `POST /api/ecommerce-customer/order-submit` ให้สร้าง order header ใน `public.IM` และรายการสินค้าใน `public.im_goods` โดยรักษา request/payment contract เดิมเท่าที่ schema ใหม่รองรับ

**Architecture:** คง Prisma transaction และ payload เดิม (`order_billing[].billing_detail`) ไว้ก่อน เพื่อลดผลกระทบต่อ frontend แต่เปลี่ยนการสร้าง header เป็น `tx.iM.create()` และ item เป็น `tx.im_goods.createMany()`. ใช้ `IM.id` เป็น foreign key ของ `im_goods.docid` และ map ชื่อ field ของ item จาก legacy เป็นชื่อ column ของ `im_goods`. ตาราง payment เดิมยังคงใช้ต่อ ส่วน voucher usage ต้องมี decision ก่อน implement เพราะไม่มี relation ไป `IM`.

**Tech Stack:** Elysia, Prisma, PostgreSQL, TypeScript, Bun test

## Global Constraints

- `IM.docid` รับค่า `billing_detail.order_no`; ห้ามใช้ `IM.id` แทน order number
- `im_goods.docid` ต้องรับค่า `IM.id`; ห้ามใส่ `IM.docid` เพราะชนิดข้อมูลและ foreign key คนละแบบ
- คง transaction เดิม เพื่อให้ header, items และ payment records สำเร็จหรือ rollback พร้อมกัน
- อย่าสร้าง `order_billing` shadow row เพียงเพื่อรองรับ voucher usage เพราะจะทำให้ migration ไม่ได้ย้ายออกจาก table เดิมจริง
- ตรวจ working tree ก่อนแก้และไม่ทับการเปลี่ยนแปลงที่มีอยู่แล้วใน `src/ecommerce-customer/route.ts`
- ก่อนลงมือจริงต้องตัดสินใจเรื่อง `voucher_usage` เนื่องจาก `order_billing_voucher_usage.order_billing_id` อ้างถึง `order_billing.id` เท่านั้น

---

### Task 1: Confirm schema and API compatibility rules

**Files:**
- Inspect: `src/ecommerce-customer/route.ts:1401-1628`
- Inspect: `src/ecommerce/route.ts:6752-6845`
- Inspect: `prisma/schema.prisma:1114-1161,2482-2525`
- Inspect: `src/ecommerce/order-mapping.ts`
- Test: request/route test location used by the project, if an existing route-test seam exists

**Interfaces:**
- Consumes: current customer payload and `IM`/`im_goods` Prisma models
- Produces: a finalized field mapping and an explicit voucher-storage decision before code changes

- [ ] **Step 1: Record header mapping**

Use this mapping in the implementation:

```text
order_no                 -> IM.docid
buyer_customeruser_id    -> IM.buyer_customeruser_id
payment_method           -> IM.payment_method_type
order_status             -> IM.status
im_no                    -> IM.im
order_type               -> IM.type
invoice_id               -> IM.invoice_id
shipping_address_id      -> IM.shipping_address_id
payment_status           -> IM.payment_status
log_payment              -> IM.log_payment
order_uuid               -> IM.order_uuid
created_at               -> IM.created_at
updated_at               -> IM.updated_at
admin_updated_by         -> IM.update_by
admin_updated_at         -> IM.admin_updated_at
order_created_by         -> IM.order_created_by
contact_id/company_id    -> IM.contact_id/company_id
credit_terms_day         -> IM.credit_terms_day
shipping_cost            -> IM.shipping_cost
admin_verify_status      -> IM.admin_verify_status
payment invoice          -> IM.payment_invoice_no
```

Preserve the current customer endpoint's supplied `order_no`, timestamps, status, and per-order payment invoice rather than introducing the admin endpoint's order-number allocator unless the caller contract is intentionally changed.

- [ ] **Step 2: Record item mapping**

```text
product_option_id                -> im_goods.product_option_id
order_product_quantity           -> im_goods.qty
item_status                      -> im_goods.itemstatus
mr_code                          -> im_goods.MR
location_code                    -> im_goods.location
product_owner                    -> im_goods.Owner
expire_date                      -> im_goods.exp
lot_number                       -> im_goods.lot
waiting_out_quantity              -> im_goods.io_qty
admin_updated_by                 -> im_goods.admin_updated_by
admin_updated_at                 -> im_goods.admin_updated_at
sale_price/order_price            -> im_goods.sale_price/order_price
is_free                           -> im_goods.is_free
promotion_from_product_option_id  -> same column
```

For required `im_goods.qty`, and any other non-null field that the legacy schema currently permits as nullable, reject invalid null input with a client error rather than silently converting null to zero.

- [ ] **Step 3: Decide voucher handling**

Choose one before implementation:

1. Add a new `IM`-keyed voucher table/relation and migration, then write voucher usage there.
2. Keep voucher usage out of this migration and make the endpoint reject/disable non-empty `voucher_usage` until its replacement is available.

Do not continue inserting into `order_billing_voucher_usage` with an `IM.id`; that value is not a valid `order_billing_id`.

---

### Task 2: Add/reuse focused mapping helpers

**Files:**
- Modify: `src/ecommerce/order-mapping.ts` only if its types can safely support the customer payload
- Modify: `src/ecommerce-customer/route.ts` near the route imports/helpers if a customer-specific mapper is needed
- Test: `src/ecommerce/order-mapping.test.ts` or a new focused customer mapping test

**Interfaces:**
- Consumes: nullable legacy item input
- Produces: a typed `im_goods` create object with `docid: number`, parsed dates, and explicit null validation

- [ ] **Step 1: Add tests for field and date mapping**

Cover: quantity, MR/location/Owner, `lot_number === "0"` behavior, Buddhist/slash date if the shared parser is reused, prices, `io_qty`, `is_free`, and promotion id.

- [ ] **Step 2: Implement the smallest mapper**

Reuse `mapOrderItemToImGoods` only if its required numeric types match the customer schema. Otherwise add a small customer mapper that returns:

```ts
{
  docid: imId,
  product_option_id: item.product_option_id,
  qty: item.order_product_quantity,
  itemstatus: item.item_status,
  MR: item.mr_code,
  location: item.location_code,
  Owner: item.product_owner,
  exp: parsedExpireDate,
  lot: item.lot_number === "0" ? null : item.lot_number,
  io_qty: item.waiting_out_quantity,
  admin_updated_by: item.admin_updated_by,
  admin_updated_at: parsedItemUpdatedAt,
  sale_price: item.sale_price,
  order_price: item.order_price,
  is_free: item.is_free,
  promotion_from_product_option_id: item.promotion_from_product_option_id,
}
```

- [ ] **Step 3: Run the focused mapper test**

Run: `bun test src/ecommerce/order-mapping.test.ts` (or the new test path).

Expected: all mapping tests pass before changing the route transaction.

---

### Task 3: Migrate `/order-submit` transaction header and items

**Files:**
- Modify: `src/ecommerce-customer/route.ts:1401-1545`
- Modify: `src/ecommerce-customer/route.ts:1551-1625` only if validation/description changes are required

**Interfaces:**
- Consumes: existing `order_billing` request shape
- Produces: `IM` rows, `im_goods` rows, and a response whose order id field is explicitly documented

- [ ] **Step 1: Replace header create**

Change `tx.order_billing.create()` to `tx.iM.create()` using the Task 1 mapping. Capture at least `id`, `docid`, and `order_uuid`.

The result collection should stop naming the key `order_billing_id`; use `im_id` for the new storage identity. If backward compatibility requires the old response key, return both `im_id` and the deprecated `order_billing_id` only after confirming consumers do not interpret it as an id from schema `3nconnect.order_billing`.

- [ ] **Step 2: Replace item create**

Change `tx.order_billing_items.createMany()` to `tx.im_goods.createMany()`, using `createdOrder.id` for every row's `docid`. Keep item order and all price/promotion fields.

- [ ] **Step 3: Keep payment writes and update the new header**

Continue writing `order_billing_payment` and `order_billing_payment_response` because no replacement models are present. When 2C2P returns `0000`, change the status update from `tx.order_billing.updateMany()` to `tx.iM.updateMany()` filtered by `payment_invoice_no`, updating `payment_status` and `admin_verify_status`.

- [ ] **Step 4: Implement the selected voucher strategy**

Apply the decision from Task 1. If no replacement table is selected, do not insert into `order_billing_voucher_usage` and make the behavior explicit in validation/error handling.

- [ ] **Step 5: Update route schema and OpenAPI description**

Keep the outer payload names for compatibility unless a breaking API change is approved. Tighten nullable item fields that are required by `im_goods`, or add a pre-transaction validation path that returns 4xx. Update the description from “Create order_billing” to “Create IM order and im_goods items”.

---

### Task 4: Verify behavior and database impact

**Files:**
- Inspect: `src/ecommerce-customer/route.ts`
- Test: focused route/mapping tests and existing test suite
- Database: migration only if Task 1 selected a new voucher table

- [ ] **Step 1: Run static and focused checks**

Run:

```bash
bun test
bunx prisma validate
```

Expected: tests pass and Prisma schema validates. If the repository has a project-specific typecheck command, run it as well.

- [ ] **Step 2: Check source references**

Run:

```bash
rg -n "tx\.order_billing\.create|tx\.order_billing_items\.createMany|tx\.order_billing\.updateMany|tx\.im_goods|tx\.iM" src/ecommerce-customer/route.ts
```

Expected: `/order-submit` has `iM`/`im_goods` for order and items; legacy table references remain only where intentionally retained for payment/voucher handling.

- [ ] **Step 3: Smoke-test transaction semantics**

Use a representative payload containing one order with two items and a 2C2P success response. Verify:

```text
IM.docid == billing_detail.order_no
im_goods.docid == created IM.id
im_goods.qty == order_product_quantity
IM.payment_status == "Paid" when respCode == "0000"
```

Also test empty items, credit-terms payment without `invoiceNo`, malformed nullable required item values, and rollback when item/payment insertion fails.

