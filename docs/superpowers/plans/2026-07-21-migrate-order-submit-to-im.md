# Migrate Order Submit Tables to IM Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เปลี่ยน `/orders-create/submit` และ `/orders-update/submit` จาก `order_billing`/`order_billing_items` ไปใช้ `IM`/`im_goods` โดยรักษา input และ response contract ของ API เดิมเท่าที่ทำได้

**Architecture:** ใช้ transaction เดิมของ Prisma แต่เปลี่ยน header เป็น `IM` และ item เป็น `im_goods`. หลังสร้าง `IM` จะใช้ `IM.id` เป็นค่า `im_goods.docid` เพราะ relation ใน schema ระบุ `im_goods.docid -> IM.id`; response จะ map ชื่อ field กลับเป็นรูปแบบเดิมของ endpoint เพื่อไม่ให้ frontend ต้องเปลี่ยนพร้อมกัน

**Tech Stack:** Elysia, Prisma 7, PostgreSQL, Bun test, TypeScript

## Global Constraints

- ใช้ชื่อ column ตาม schema จริง: `IM.created_at`, `IM.update_by` ไม่ใช่ `create_at`, `updated_by`
- `order_billing.order_no -> IM.docid` แต่ `im_goods.docid` ต้องใช้ `IM.id` ไม่ใช่ `IM.docid`
- รักษา transaction และ duplicate `order_uuid` protection
- ไม่แก้ endpoint อื่นที่อ่าน order จนกว่าจะตรวจสอบผลกระทบและได้รับ scope เพิ่ม
- ไม่สร้าง migration ใหม่จาก schema โดยอัตโนมัติโดยไม่ตรวจสอบสถานะ database/migration history

---

### Task 1: ตรวจ baseline ของ schema, generated client และ order-number allocator

**Files:**
- Inspect: `prisma/schema.prisma:1114-1162`
- Inspect: `prisma/schema.prisma:2540-2578`
- Modify: `src/ecommerce/order-number.ts:64-89`
- Test: `src/ecommerce/order-number.test.ts`

**Interfaces:**
- Consumes: `IM.docid`, `IM.id`, `IM.order_uuid` และ `im_goods.docid`
- Produces: `allocateNextOrderNumber()` ที่อ่านเลขล่าสุดจาก `public.IM.docid`

- [ ] **Step 1: ตรวจ schema และ migration state**

Run:

```bash
bunx prisma validate
bunx prisma migrate status
```

Expected: schema parse/validate ผ่าน และได้สถานะ migration ที่ชัดเจนก่อนแก้ route. ถ้า `migrate status` ติดต่อ database ไม่ได้ ให้หยุดเฉพาะขั้น migration แต่ยังตรวจ source ได้

- [ ] **Step 2: เปลี่ยน order-number query ให้ใช้ `IM`**

เปลี่ยน raw SQL ใน `allocateNextOrderNumber()` จาก:

```sql
FROM "3nconnect"."order_billing"
WHERE "order_no" ~ ${pattern}
```

เป็น:

```sql
FROM "public"."IM"
WHERE "docid" ~ ${pattern}
```

คง advisory lock, period pattern และ monthly limit เดิมไว้

- [ ] **Step 3: ตรวจ unit test ของเลข order**

Run:

```bash
bun test src/ecommerce/order-number.test.ts
```

Expected: format/pattern tests ผ่าน. เพิ่ม test เฉพาะ query ได้ก็ต่อเมื่อมี test seam สำหรับ transaction client อยู่แล้ว; ไม่ควรเพิ่ม database mock framework ใหม่ในงานนี้

---

### Task 2: เปลี่ยน create transaction เป็น `IM` และ `im_goods`

**Files:**
- Modify: `src/ecommerce/route.ts:6668-6843`

**Interfaces:**
- Consumes: request body เดิมของ `/orders-create/submit`
- Produces: `IM` header, `im_goods` rows และ response `billing_items` ที่ยังใช้ชื่อ field เดิม

- [ ] **Step 1: เปลี่ยน duplicate check และ header create**

เปลี่ยน:

```ts
tx.order_billing.findFirst({ where: { order_uuid: body.order_uuid } })
tx.order_billing.create({ data: { ... } })
```

เป็น `tx.IM.findFirst()` และ `tx.IM.create()` โดยใช้ mapping นี้:

```ts
docid: orderNo,
status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
im: body.im_no,
type: body.order_type,
invoice_id: body.invoice_id,
created_at: orderDate,
updated_at: loggedAt,
update_by: body.admin_updated_by,
create_by: body.order_created_by,
buyer_customeruser_id: normalizeBuyerCustomerUserId(body.buyer_customeruser_id),
shipping_address_id: body.shipping_address_id,
payment_status: body.payment_status,
log_payment: loggedAt,
order_uuid: body.order_uuid,
admin_updated_at: loggedAt,
company_id: body.company_id,
shipping_cost: body.shipping_cost,
admin_verify_status: body.admin_verify_status,
payment_invoice_no: body.payment_invoice_no,
credit_terms_day: body.credit_terms_day,
is_admin_order_created: true,
```

ฟังก์ชัน `normalizeBuyerCustomerUserId` ต้องตรวจจากข้อมูลจริงก่อนว่า request ส่ง numeric customer ID หรือ UUID; ห้ามใช้ `Number()` กับ UUID โดยไม่ตรวจ เพราะ `IM.buyer_customeruser_id` เป็น `Int?`

- [ ] **Step 2: สร้าง item หลังได้ `createdOrder.id`**

เปลี่ยน `tx.order_billing_items.createMany()` เป็น `tx.im_goods.createMany()` และ map เป็น:

```ts
docid: createdOrder.id,
product_option_id: item.product_option_id,
qty: item.order_product_quantity,
itemstatus: item.item_status,
MR: item.mr_code,
location: item.localtion_code,
Owner: item.product_owner,
exp: parseNullableDate(item.expire_date),
lot: item.lot_code === "0" ? null : item.lot_code,
io_qty: item.waiting_out_quantity,
users_id: body.admin_updated_by,
sale_price: item.sale_price,
order_price: item.order_price,
admin_updated_at: loggedAt,
is_free: item.is_free,
promotion_from_product_option_id: item.promotion_from_product_option_id,
```

- [ ] **Step 3: อ่าน created items และรักษา response contract**

อ่านจาก `tx.im_goods.findMany({ where: { docid: createdOrder.id } })` แล้ว map response กลับเป็นชื่อเดิม:

```ts
{
  product_option_id: item.product_option_id,
  order_product_quantity: item.qty,
  item_status: item.itemstatus,
  mr_code: item.MR,
  localtion_code: item.location,
  product_owner: item.Owner,
  expire_date: item.exp,
  lot_code: item.lot,
  sale_price: item.sale_price,
  order_price: item.order_price,
  waiting_out_quantity: item.io_qty,
  admin_updated_by: item.users_id,
  admin_updated_at: item.admin_updated_at,
  is_free: item.is_free,
  promotion_from_product_option_id: item.promotion_from_product_option_id,
}
```

header response ควร map `IM.docid` กลับเป็น `order_no` และ `IM.im` กลับเป็น `im_no` หาก frontend ยังใช้ response เดิม

---

### Task 3: เปลี่ยน update transaction เป็น `IM` และ `im_goods`

**Files:**
- Modify: `src/ecommerce/route.ts:6846-6960`

**Interfaces:**
- Consumes: `order_uuid` และ request body เดิมของ `/orders-update/submit`
- Produces: update `IM`, replace item rows ใน `im_goods`, response shape เดิม

- [ ] **Step 1: ค้นหา header ด้วย `IM.order_uuid`**

เปลี่ยน `tx.order_billing.findFirst()` เป็น `tx.IM.findFirst()` และ error เดิมสามารถคงไว้เพื่อ compatibility ได้ แต่ข้อความควรพิจารณาเปลี่ยนเป็น `Not found IM order.` หาก frontend ไม่ได้พึ่งข้อความเดิม

- [ ] **Step 2: update เฉพาะ column ที่ endpoint รองรับ**

ใช้ mapping ใหม่กับ `tx.IM.update()`:

```ts
status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
update_by: body.admin_updated_by,
admin_verify_status: body.admin_verify_status,
im: body.im_no,
shipping_cost: body.shipping_cost,
shipping_address_id: body.shipping_address_id,
log_payment: loggedAt,
updated_at: loggedAt,
admin_updated_at: loggedAt,
credit_terms_day: body.credit_terms_day,
```

- [ ] **Step 3: ลบและสร้างรายการใหม่ใน `im_goods`**

เปลี่ยน `deleteMany` เป็น:

```ts
await tx.im_goods.deleteMany({ where: { docid: existingOrder.id } });
```

จากนั้นใช้ item mapping เดียวกับ create โดยใช้ `docid: existingOrder.id`

- [ ] **Step 4: อ่านและ map response**

ใช้ response mapper เดียวกับ create เพื่อป้องกัน create/update ให้ชื่อ response ไม่ตรงกัน

---

### Task 4: แยก mapper และ normalize helper เพื่อลดความเสี่ยงของ create/update

**Files:**
- Create or modify: `src/ecommerce/order-mapping.ts`
- Modify: `src/ecommerce/route.ts:1-20, 6668-6960`
- Test: `src/ecommerce/order-mapping.test.ts`

**Interfaces:**
- Produces: `mapOrderItemToImGoods()`, `mapImGoodsToOrderItemResponse()`, `normalizeBuyerCustomerUserId()`

- [ ] **Step 1: ย้าย mapping ที่เหมือนกันออกจาก route**

สร้าง helper ที่รับ `IM.id`, item payload และ timestamp แล้วคืนค่า Prisma-compatible object สำหรับ `im_goods`; create และ update ต้องเรียก helper เดียวกัน

- [ ] **Step 2: เพิ่ม unit tests สำหรับ mapping**

ครอบคลุมอย่างน้อย:

```text
order_product_quantity -> qty
localtion_code -> location
expire_date แบบ dd/mm/yyyy -> exp Date
lot_code = "0" -> null ใน create
waiting_out_quantity -> io_qty
admin_updated_by -> users_id
is_free และ promotion_from_product_option_id ถูกส่งต่อ
response map กลับเป็นชื่อ billing item เดิม
```

- [ ] **Step 3: รัน test mapper**

Run:

```bash
bun test src/ecommerce/order-mapping.test.ts
```

Expected: PASS โดยไม่ต้องเชื่อมต่อ database

---

### Task 5: ตรวจ request schema, generated Prisma client และผลกระทบ downstream

**Files:**
- Modify: `src/ecommerce/route.ts:6797-6833, 6960-7020` ถ้าจำเป็น
- Inspect: `src/ecommerce/route.ts:6170-6470`
- Inspect: `src/ecommerce/order-number.ts`

- [ ] **Step 1: เพิ่ม/ตรวจ request field ที่ถูกใช้จริง**

ตรวจว่า `payment_invoice_no` และ field ที่ header mapping ต้องใช้มีอยู่ใน Elysia body schema; ปัจจุบัน request schema ต้องเพิ่ม `payment_invoice_no` หาก route จะ persist ค่านี้

- [ ] **Step 2: ตรวจ field ที่รับแต่ไม่ได้บันทึก**

ตัดสินใจอย่างใดอย่างหนึ่งกับ `invoice_id_mat_in` และ `stock_age`: เพิ่ม target column/mapping หรือเอาออกจาก request schema. ห้ามปล่อยให้รับค่าแล้วเงียบหายโดยไม่ระบุเหตุผล

- [ ] **Step 3: Generate และ validate Prisma client**

Run:

```bash
bunx prisma generate
bunx prisma validate
```

Expected: Prisma client รู้จัก `tx.IM` และ `tx.im_goods` พร้อม field ที่เพิ่มใหม่ และ schema ผ่าน validation

- [ ] **Step 4: ตรวจ endpoint อ่าน order เดิม**

ตรวจ endpoint ที่ยังอ่าน `order_billing`/`order_billing_items` โดยเฉพาะ `/orders` และ `/orders/:order_uuid`. ถ้า create/update เปลี่ยน table แต่ endpoint อ่านยังใช้ table เดิม จะทำให้สร้างสำเร็จแต่ค้นหาไม่พบ; ให้เพิ่มเป็น follow-up scope หรือแก้ในงานเดียวกันตาม requirement ของ API

---

### Task 6: Verification ของ create/update และ database migration

**Files:**
- Modify: `prisma/migrations/<timestamp>_migrate_orders_to_im/` only if migration is approved and required
- Test: route integration/smoke test location selected from existing project test conventions

- [ ] **Step 1: ตรวจ migration ก่อนสร้าง**

ยืนยันว่า column ใหม่ในฐานข้อมูลจริงมีครบ: `IM.shipping_address_id`, `IM.*` order fields และ `im_goods.product_option_id`, `sale_price`, `order_price`, `admin_updated_at`, `is_free`, `promotion_from_product_option_id`. ถ้า schema ถูกแก้แต่ database ยังไม่มี ให้สร้าง migration ที่ไม่ทำลายข้อมูลและ review SQL ก่อน apply

- [ ] **Step 2: ทดสอบ create**

ตรวจว่า:

```text
สร้าง IM ได้หนึ่งแถว
สร้าง im_goods ทุกแถวด้วย docid = IM.id
order_no อยู่ใน IM.docid
order_uuid ซ้ำตอบ 409
item fields ถูก map ครบ
```

- [ ] **Step 3: ทดสอบ update**

ตรวจว่า:

```text
หา IM ด้วย order_uuid ได้
ข้อมูล header ถูก update
im_goods เดิมถูกลบเฉพาะของ IM นั้น
รายการใหม่ถูกสร้างด้วย docid เดิม
order_uuid ที่ไม่พบตอบ 404
```

- [ ] **Step 4: รัน verification commands**

Run:

```bash
bun test
bunx prisma validate
```

Expected: tests ผ่าน และ Prisma schema validate ผ่านก่อนสรุปว่างานเสร็จ

---

## Self-review / จุดที่ต้องยืนยันก่อนเริ่มแก้จริง

1. ใช้ชื่อ schema จริง `created_at` และ `update_by` ไม่สร้างชื่อใหม่ `create_at`/`updated_by`
2. `IM.shipping_address_id` ที่เพิ่มใหม่เป็น `Int` และอยู่ร่วมกับ `delivery_address_id` ที่เป็น UUID
3. `im_goods.docid` เป็น FK ไป `IM.id`; ห้ามใส่ `IM.docid` ที่เป็น String
4. Request schema ยังไม่มี `payment_invoice_no` แต่ mapping ระบุว่าจะบันทึก จึงต้องเพิ่ม field นี้หรือกำหนดค่าอื่นให้ชัดเจน
5. `payment_method_type` และ `contact_id` ไม่ได้อยู่ในรายการ mapping ที่ให้มา แม้ `IM` มี `contact_id`; ต้องตัดสินใจว่าจะ map `contact_id` ต่อหรือไม่
6. Endpoint อ่าน order เดิมยังใช้ `order_billing`; ต้องยืนยันว่าจะเปลี่ยนเฉพาะ submit หรือเปลี่ยน read endpoints ให้รองรับข้อมูลใหม่ด้วย
