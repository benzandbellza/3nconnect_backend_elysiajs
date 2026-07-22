# Event Tier Fields as Text Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** เปลี่ยน `tierregister` และ `tierpreregister` ของ ecommerce events จาก request แบบ array/การบันทึกด้วย `JSON.stringify` ให้รับและบันทึกเป็นข้อความธรรมดา และให้ public events ส่งออกเป็นข้อความเช่นเดียวกัน

**Architecture:** คงคอลัมน์ `public_events.tierregister` และ `public_events.tierpreregister` เป็น `String?` ตาม Prisma model ที่มีอยู่แล้ว แก้เฉพาะ contract และ mapping ใน `src/ecommerce/route.ts` ให้ส่งค่า string ตรงเข้า Prisma จากนั้นแก้ SQL view และ generated view schema ไม่ให้แปลงข้อความกลับเป็น `text[]` เพื่อให้ `/api/publics/events` คืนค่าเป็น string ด้วย

**Tech Stack:** Bun, TypeScript, Elysia TypeBox schema, Prisma, PostgreSQL view, Bun test

## Global Constraints

- ห้ามเปลี่ยนหรือทับการแก้ไขที่มีอยู่ก่อนใน `prisma/schema.prisma`, `prisma/views/3nconnect/vw_all_events.sql` และ `src/publics/route.ts`
- เปลี่ยนเฉพาะ `tierregister`/`tierpreregister`; field อื่นและชื่อ field ของ endpoint เดิมต้องคงพฤติกรรมเดิม
- ต้องตรวจชนิดคอลัมน์จริงของฐานข้อมูลก่อนเพิ่ม migration; ถ้าเป็น text อยู่แล้วไม่ต้องสร้าง migration เปล่า
- ข้อมูลเก่าที่เป็น JSON string เช่น `["Gold","Silver"]` ไม่ควรแปลงอัตโนมัติในงานนี้ เพราะผู้ใช้ระบุให้เก็บเป็น text ธรรมดาและไม่มี format ใหม่ที่ระบุ

---

### Task 1: ยืนยันชนิดคอลัมน์และ contract ที่ได้รับผลกระทบ

**Files:**
- Read: `prisma/schema.prisma:2451-2468`
- Read: `src/ecommerce/route.ts:2490-2640`
- Read: `prisma/views/3nconnect/vw_all_events.sql:1-20`
- Read: `prisma/prismabox/vw_all_events.ts:1-70`

**Interfaces:**
- Consumes: schema และ SQL/database ที่ deploy จริง
- Produces: ข้อสรุปว่า `public_events.tierregister` และ `public_events.tierpreregister` เป็น `text/varchar` หรือยังเป็น array

- [ ] **Step 1: ตรวจชนิดคอลัมน์ในฐานข้อมูลจริง**

รัน query read-only กับ database ที่ใช้โดย environment เป้าหมาย:

```sql
SELECT column_name, data_type, udt_name
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'events'
  AND column_name IN ('tierregister', 'tierpreregister');
```

Expected: `data_type` เป็น `text`/\`character varying\` และ `udt_name` ไม่ใช่ `_text` หรือ array type

- [ ] **Step 2: ตรวจค่าเดิมที่ต้องรองรับ**

```sql
SELECT id, tierregister, tierpreregister
FROM public.events
WHERE tierregister LIKE '[%' OR tierpreregister LIKE '[%'
LIMIT 20;
```

Expected: ได้รายการข้อมูลเดิมที่เป็น JSON stringถ้ามี เพื่อแจ้ง consumer ว่าข้อมูลเก่าอาจยังมีรูปแบบเดิม; ห้ามแก้ข้อมูลใน task นี้

- [ ] **Step 3: ตรวจสถานะ worktree ก่อนแก้**

```bash
git status --short
git diff -- prisma/schema.prisma prisma/views/3nconnect/vw_all_events.sql src/publics/route.ts
```

Expected: เก็บ diff เดิมไว้และแก้เฉพาะบรรทัดที่เกี่ยวกับ tier fields

**Verification:** มีผล query และ diff baseline สำหรับใช้ตรวจหลัง implementation

### Task 2: เปลี่ยน ecommerce create/update ให้รับและบันทึก text ตรง

**Files:**
- Modify: `src/ecommerce/route.ts:2512-2513,2548-2549,2597-2598,2634-2635`
- Test: เพิ่ม focused tests ในไฟล์ test ของ ecommerce ที่เหมาะกับ pattern ของ repository หรือเพิ่ม `src/ecommerce/events.test.ts`

**Interfaces:**
- Consumes: request fields `tier_preregister: string` และ `tier_register: string`
- Produces: Prisma create/update data ที่มี `tierpreregister: tier_preregister` และ `tierregister: tier_register`

- [ ] **Step 1: เพิ่ม failing test สำหรับ schema และ persistence mapping**

ครอบคลุมอย่างน้อยสองกรณี:

```ts
test("event tier fields accept plain text", async () => {
  const body = {
    tier_preregister: "สมาชิกเดิมเท่านั้น",
    tier_register: "สมาชิกทั่วไป",
  };

  expect(typeof body.tier_preregister).toBe("string");
  expect(typeof body.tier_register).toBe("string");
});

test("event tier fields are persisted without JSON serialization", () => {
  const tier_preregister = "สมาชิกเดิมเท่านั้น";
  const tier_register = "สมาชิกทั่วไป";

  expect({ tierpreregister: tier_preregister, tierregister: tier_register })
    .toEqual({ tierpreregister: "สมาชิกเดิมเท่านั้น", tierregister: "สมาชิกทั่วไป" });
});
```

ถ้า route ยังไม่สามารถ unit-test โดยไม่เปิด server ให้ใช้ mock `prisma.public_events.create/update` และตรวจ argument ที่ถูกส่งเข้า mock แทน โดยต้องตรวจว่าไม่มีค่าเป็น `JSON.stringify(...)`

- [ ] **Step 2: รัน focused test เพื่อยืนยัน baseline**

```bash
bun test src/ecommerce/events.test.ts
```

Expected: FAIL ก่อนแก้ หรืออย่างน้อย test ที่ตรวจ route contract ต้องแสดงว่า implementation ปัจจุบันยังเป็น array/JSON serialization

- [ ] **Step 3: เปลี่ยน Elysia body schema เป็น string**

ในทั้ง `POST /events` และ `PUT /events/:event_id` เปลี่ยนเฉพาะสอง fieldนี้:

```ts
tier_preregister: t.String(),
tier_register: t.String(),
```

- [ ] **Step 4: ลบ JSON serialization ใน create/update**

ใช้ mapping ตรงดังนี้ทั้งสอง endpoint:

```ts
tierpreregister: tier_preregister,
tierregister: tier_register,
```

ไม่เพิ่ม parsing, delimiter หรือ fallback format ที่ผู้ใช้ไม่ได้ขอ

- [ ] **Step 5: รัน focused test และ typecheck ที่มีอยู่**

```bash
bun test src/ecommerce/events.test.ts
bunx tsc --noEmit
```

Expected: test PASS และ TypeScript ไม่มี error ใหม่จากการเปลี่ยน request type

### Task 3: ทำให้ public view และ generated contract คืนค่าเป็น text

**Files:**
- Modify: `prisma/views/3nconnect/vw_all_events.sql:12-13`
- Modify/Regenerate: `prisma/schema.prisma:4216-4223`
- Regenerate: `prisma/prismabox/vw_all_events.ts:19-20,43-67`

**Interfaces:**
- Consumes: `public.events.tierregister` และ `public.events.tierpreregister` ที่เป็น text
- Produces: `vw_all_events.tier_register: string | null` และ `vw_all_events.tier_preregister: string | null`

- [ ] **Step 1: เพิ่ม/ปรับ contract test สำหรับ public response**

ตรวจว่า row จาก `vw_all_events` มีค่าแบบนี้:

```ts
expect(typeof event.tier_register).toBe("string");
expect(typeof event.tier_preregister).toBe("string");
```

และไม่คาดหวัง `Array.isArray(...) === true`

- [ ] **Step 2: แก้ SQL view แบบ surgical**

คง expression เดิมของไฟล์ที่ user แก้ไว้ และทำให้สองบรรทัดเป็น:

```sql
  e.tierregister AS tier_register,
  e.tierpreregister AS tier_preregister,
```

ห้ามแก้ join, alias หรือ field อื่นใน view

- [ ] **Step 3: ปรับ Prisma view model ให้เป็น nullable string**

ใน `view vw_all_events` ใช้:

```prisma
  tier_register    String?
  tier_preregister String?
```

- [ ] **Step 4: Regenerate generated schema แทนการแก้ generated file แบบเดาสุ่ม**

```bash
bunx prisma generate
```

Expected: `prisma/prismabox/vw_all_events.ts` เปลี่ยนสอง field จาก `t.Array(t.String())` เป็น nullable `t.String()` ตาม schema/view

- [ ] **Step 5: ตรวจ diff และรัน test/typecheck**

```bash
git diff --check
bun test
bunx tsc --noEmit
```

Expected: ไม่มี whitespace error, test ผ่าน และไม่มี type mismatch ระหว่าง `vw_all_events` กับ route

### Task 4: Smoke test endpoint และสรุป compatibility

**Files:**
- Read: `src/ecommerce/route.ts`
- Read: `src/publics/route.ts`
- Read: `docs/frontend-public-model-migration.md:295-355`

**Interfaces:**
- Consumes: API ที่แก้จาก Task 2 และ view ที่แก้จาก Task 3
- Produces: หลักฐานว่า create/update เก็บ plain text และ public GET คืน plain text

- [ ] **Step 1: ทดสอบ POST ด้วยข้อความธรรมดา**

ส่ง payload ที่มี:

```json
{
  "tier_preregister": "สมาชิกเดิมเท่านั้น",
  "tier_register": "สมาชิกทั่วไป"
}
```

Expected: validation ผ่าน และ query row ที่สร้างพบค่าคอลัมน์ตรงกับข้อความ ไม่ใช่ JSON array string

- [ ] **Step 2: ทดสอบ PUT ด้วยข้อความใหม่**

Expected: ค่าใน `tierregister`/`tierpreregister` ถูกแทนที่ด้วยข้อความใหม่ตรงตัว

- [ ] **Step 3: ทดสอบ public GET**

Expected: `tier_register` และ `tier_preregister` เป็น string หรือ null ตามข้อมูล และไม่ใช่ array

- [ ] **Step 4: ตรวจเอกสาร contract**

อัปเดต `docs/frontend-public-model-migration.md` เฉพาะถ้าข้อความยังระบุว่า field ถูกเก็บเป็น JSON string หรือให้ UI parse เป็น array; เปลี่ยนเป็น plain text และระบุว่า consumer ไม่ควร `JSON.parse` ค่าใหม่

- [ ] **Step 5: ตรวจ final diff โดยไม่รวมงานเดิม**

```bash
git diff --check
git status --short
git diff -- src/ecommerce/route.ts prisma/views/3nconnect/vw_all_events.sql prisma/schema.prisma prisma/prismabox/vw_all_events.ts docs/frontend-public-model-migration.md
```

Expected: ทุกบรรทัดใหม่ trace กลับไปยัง requirement นี้ และ diff เดิมที่ไม่เกี่ยวข้องยังคงอยู่โดยไม่ถูกเขียนทับ

## Self-review checklist

- `POST` และ `PUT` เปลี่ยน input เป็น `t.String()` ครบทั้งสอง field
- ไม่มี `JSON.stringify(tier_preregister)` หรือ `JSON.stringify(tier_register)` เหลือใน event route
- public SQL view ไม่ cast text เป็น `text[]`
- Prisma view/generated schema สอดคล้องกันเป็น `String?`
- มีการตรวจชนิดคอลัมน์จริงก่อนตัดสินใจสร้าง migration
- ไม่ได้แก้ unrelated diff ใน worktree

