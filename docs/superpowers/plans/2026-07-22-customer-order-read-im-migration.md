# Customer Order Read Migration to IM Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** เปลี่ยน read-only customer order queries จาก `order_billing` เป็น `IM` โดยคง response contract เดิม

**Architecture:** แก้เฉพาะ Prisma query ใน `src/ecommerce-customer/route.ts` สำหรับ `GET /order-billing` และ `GET /orders/:customeruser_id`. ใช้ Prisma client `iM` (`IM.docid` เป็น `order_no`, `IM.im` เป็น `im_no`) และ batch-load `nconnect_companies` เพื่อประกอบ `companies.company_name` เพราะ schema ปัจจุบันยังไม่มี IM-to-company relation; ไม่แตะ submit, monthly count, payment หรือ voucher endpoints

**Tech Stack:** Bun, TypeScript, Elysia, Prisma

## Global Constraints

- คง path, HTTP method, status behavior และชื่อ field response เดิม
- ไม่เพิ่ม fallback ไปยัง `order_billing`
- ไม่เพิ่ม `billing_items` เพราะ response เดิมของทั้งสอง route ไม่มี field นี้

---

### Task 1: Migrate customer order list queries

**Files:**
- Modify: `src/ecommerce-customer/route.ts:1630-1730`
- Test: existing TypeScript/test checks; no new API fixture required because the change is a field-preserving query migration

**Interfaces:**
- Consumes: Prisma `iM` client for the `IM` model and `nconnect_companies` model
- Produces: the existing response objects for `/order-billing` and `/orders/:customeruser_id`

- [ ] **Step 1: Change `/order-billing` Prisma model and compatible field mappings**

Replace `prisma.order_billing.findMany` with `prisma.iM.findMany`. Select the fields needed for the existing response, mapping only fields whose names differ:

```ts
const response = await prisma.iM.findMany({
  select: {
    id: true,
    docid: true,
    buyer_customeruser_id: true,
    payment_method_type: true,
    status: true,
    im: true,
    type: true,
    invoice_id: true,
    shipping_address_id: true,
    payment_status: true,
    log_payment: true,
    order_uuid: true,
    created_at: true,
    updated_at: true,
    update_by: true,
    admin_updated_at: true,
    order_created_by: true,
    contact_id: true,
    company_id: true,
    credit_terms_day: true,
    shipping_cost: true,
  },
});
```

Because Prisma does not alias selected fields, return `response.map(({ docid, im, status, type, update_by, ...order }) => ({ ...order, order_no: docid, im_no: im, order_status: status, order_type: type, admin_updated_by: update_by }))`.

- [ ] **Step 2: Change `/orders/:customeruser_id` source and preserve filtering/shape**

Use `prisma.iM.findMany` with the same `OR` condition translated to the field populated by the existing ecommerce submit path:

```ts
where: {
  OR: [
    { update_by: null },
    { buyer_customeruser_id: customeruser_id },
  ],
}
```

Select `docid`, `im`, `status`, `type`, `update_by`, and `company_id` plus the existing shared fields. Load matching rows from `prisma.nconnect_companies.findMany({ where: { id: { in: companyIds } }, select: { id: true, company_name: true } })`, index them by `id`, and map each order to `companies: { company_name: companyMap.get(order.company_id)?.company_name ?? null }`.

- [ ] **Step 3: Verify the scope is unchanged**

Run:

```bash
rg -n "prisma\.(order_billing|order_billing_items)|tx\.(order_billing|order_billing_items)" src/ecommerce-customer/route.ts
```

Expected: only the intentionally out-of-scope usages in `/monthly_order_count` and `/order-submit` remain; the two read routes use `prisma.IM`.

### Task 2: Run focused verification

**Files:**
- Verify: `src/ecommerce-customer/route.ts`, `src/ecommerce/order-mapping.test.ts`, Prisma schema

- [ ] **Step 1: Run mapping tests**

```bash
bun test src/ecommerce/order-mapping.test.ts
```

Expected: all tests pass.

- [ ] **Step 2: Run project typecheck**

```bash
bunx tsc --noEmit
```

Expected: exit code 0 with no TypeScript errors.

- [ ] **Step 3: Review the final diff**

```bash
git diff -- src/ecommerce-customer/route.ts
```

Expected: only the two read queries and their field mapping change; submit/monthly/payment/voucher code is untouched.
