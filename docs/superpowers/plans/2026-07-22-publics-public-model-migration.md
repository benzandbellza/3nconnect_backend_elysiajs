# Publics Public Model Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เปลี่ยน endpoint `products/pre-order` และ `events` ใน `src/publics/route.ts` ไปใช้ `public_*` models โดยคง response shape เดิมเท่าที่ public schema รองรับ

**Architecture:** แยก pure mapping/flattening ของ public Prisma rows ไว้ใน helper module เพื่อทดสอบได้โดยไม่ต้อง bootstrap Elysia, แล้วให้ route ใช้ `public_products`/relations และ `public_events` ก่อนส่งข้อมูลผ่าน mapper เดิมของ endpoint

**Tech Stack:** Bun, TypeScript, Elysia, Prisma, Bun test

## Global Constraints

- แก้เฉพาะ `GET /api/publics/products/pre-order` และ `GET /api/publics/events`
- คง response field names เดิมของทั้งสอง endpoint
- คง `vw_promotion_*`, `vw_planetone_stocks`, `gift_voucher` และ model อื่นที่ไม่มี public replacement โดยตรง
- ไม่แก้ schema หรือสร้าง migration
- ตรวจด้วย focused tests, `bun test`, `bunx tsc --noEmit` และ `git diff --check`

---

### Task 1: เพิ่ม failing tests สำหรับ public row mappers

**Files:**
- Create: `src/publics/public-model-mappers.test.ts`
- Create: `src/publics/public-model-mappers.ts`

**Interfaces:**
- Produces: `mapPreOrderProducts(rows)` คืนค่า product-option rows ที่ endpoint เดิมใช้
- Produces: `mapPublicEvents(rows)` คืนค่า event rows ที่ใช้ alias เดิมของ `vw_all_events`

- [ ] **Step 1: เขียน tests ที่แสดง contract ที่ต้องการ**

ครอบคลุมการ flatten options, การเลือก image ที่ `is_show === true`, การ map event aliases และการคงค่า `null` เมื่อไม่มี relation

- [ ] **Step 2: รัน focused test ให้เห็น failure**

```bash
bun test src/publics/public-model-mappers.test.ts
```

Expected: FAIL เพราะ mapper functions ยังไม่มี implementation

- [ ] **Step 3: เพิ่ม implementation ขั้นต่ำใน helper**

สร้าง type เฉพาะสำหรับ fields ที่ route ใช้ และ implement mapper ให้คืน shape ตาม tests โดยไม่เพิ่ม fallback ที่ไม่ได้อยู่ใน contract

- [ ] **Step 4: รัน focused test ให้ผ่าน**

```bash
bun test src/publics/public-model-mappers.test.ts
```

Expected: PASS

### Task 2: ย้าย `/products/pre-order` ไป public models

**Files:**
- Modify: `src/publics/route.ts:322-337`
- Modify: `src/publics/public-model-mappers.ts`
- Test: `src/publics/public-model-mappers.test.ts`

**Interfaces:**
- Consumes: `public_products.findMany` พร้อม `product_options` และ `product_images`
- Produces: response `{ success, message, data: { products } }` shape เดิม

- [ ] **Step 1: เพิ่ม test สำหรับ public product row mapping ที่ตรงกับ Prisma payload**
- [ ] **Step 2: เปลี่ยน query เป็น `prisma.public_products.findMany`**

ใช้ `where: { is_pre_order: true }`, select เฉพาะ fields ที่จำเป็น, include options และ images ที่แสดงอยู่ และเรียงด้วย `product_name: "desc"`

- [ ] **Step 3: ใช้ `mapPreOrderProducts` ก่อนคืน response**

ให้ mapper flatten options เป็นหนึ่ง row ต่อ option และใช้ `url_image` จาก image ที่แสดงอยู่

- [ ] **Step 4: ตรวจว่า endpoint ไม่อ้างอิง `vw_products`**

```bash
rg -n 'vw_products|public_products' src/publics/route.ts
```

Expected: endpoint pre-order ใช้ `public_products`; references to unrelated views remain unchanged

### Task 3: ย้าย `/events` ไป `public_events`

**Files:**
- Modify: `src/publics/route.ts:1484-1490`
- Modify: `src/publics/public-model-mappers.ts`
- Test: `src/publics/public-model-mappers.test.ts`

**Interfaces:**
- Consumes: `public_events.findMany` rows filtered by `is_active: true`
- Produces: event response aliases compatible with the existing public endpoint

- [ ] **Step 1: เพิ่ม test สำหรับ event alias mapping**
- [ ] **Step 2: เปลี่ยน query เป็น `prisma.public_events.findMany`**

เลือก fields ของ public table ที่ map ได้ และเรียงตาม `eventname: "asc"` ให้สอดคล้องกับ ecommerce route

- [ ] **Step 3: ใช้ `mapPublicEvents` ก่อน return**
- [ ] **Step 4: รัน focused tests**

```bash
bun test src/publics/public-model-mappers.test.ts
```

Expected: PASS

### Task 4: ตรวจสอบ integration และสรุป mapping

**Files:**
- Read: `src/publics/route.ts`
- Read: `src/publics/public-model-mappers.ts`
- Read: `src/publics/public-model-mappers.test.ts`

- [ ] **Step 1: รัน test suite**

```bash
bun test
```

- [ ] **Step 2: รัน TypeScript check**

```bash
bunx tsc --noEmit
```

- [ ] **Step 3: ตรวจ diff และ whitespace**

```bash
git diff --check
git diff -- src/publics/route.ts src/publics/public-model-mappers.ts src/publics/public-model-mappers.test.ts
```

- [ ] **Step 4: ตรวจจำนวน model references**

ยืนยันว่า `vw_products` และ `vw_all_events` ไม่ถูกใช้ใน endpoint เป้าหมาย และ model อื่นนอก scope ยังไม่ถูกแก้
