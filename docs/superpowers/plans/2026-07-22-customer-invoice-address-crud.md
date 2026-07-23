# Customer Invoice Address CRUD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** เพิ่ม POST, PUT และ DELETE สำหรับ `customer_invoice_address` ใน ecommerce-customer route

**Architecture:** เพิ่ม route ต่อจาก GET invoice-address เดิมใน `src/ecommerce-customer/route.ts` ใช้ Prisma model เดิมและ auth plugin เดิม ไม่เพิ่ม abstraction หรือแก้ schema

**Tech Stack:** Elysia, Elysia TypeBox schemas, Prisma, Bun

## Global Constraints

- ใช้ prefix `/api/ecommerce-customer` และ authentication ของ route เดิม
- ใช้ payload ฟิลด์ `customeruser_id`, `company_name`, `tax_no`, `entity_id`, `entity_name`, `branch_name`, `branch_code`, `address_line1`, `address_line2`, `sub_district`, `district`, `province`, `post_code`, `set_default`
- เมื่อ `set_default` เป็น `true` ให้ clear default เฉพาะรายการของ `customeruser_id` เดียวกัน
- แก้เฉพาะ `src/ecommerce-customer/route.ts` สำหรับ implementation

### Task 1: Add invoice-address mutation routes

**Files:**
- Modify: `/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce-customer/route.ts` หลัง GET `/myaccount/tax-invoice-address/:customeruser_id`

**Interfaces:**
- POST body ใช้ field ทั้ง 15 รายการ โดยชนิดข้อมูลเป็น string/boolean ตาม Prisma model และรองรับ nullable string ด้วย `t.Union([t.String(), t.Null()])` หาก local schema ต้องรับ null
- PUT params ใช้ `customer_invoice_address_id: t.Number()` และ body เดียวกับ POST
- DELETE params ใช้ `customer_invoice_address_id: t.Number()`

- [ ] **Step 1: เพิ่ม POST route**

ใช้ `prisma.customer_invoice_address.create({ data: body })`; เมื่อ `body.set_default` เป็น true ให้เรียก `updateMany` ด้วย `customeruser_id` เดียวกันและ `id: { not: response.id }` ก่อน update รายการที่สร้างให้เป็น default แล้วคืนรายการที่สร้าง

- [ ] **Step 2: เพิ่ม PUT route**

ใช้ `prisma.customer_invoice_address.update({ where: { id: params.customer_invoice_address_id }, data: body })`; เมื่อ `body.set_default` เป็น true ให้ clear รายการอื่นของ customer เดียวกัน แล้วคืนรายการที่แก้ไข

- [ ] **Step 3: เพิ่ม DELETE route**

ใช้ `prisma.customer_invoice_address.delete({ where: { id: params.customer_invoice_address_id } })` และคืนผลลัพธ์ตาม pattern CRUD เดิม

- [ ] **Step 4: เพิ่ม schemas และ OpenAPI details**

ทุก route ต้องมี `body`/`params`/`headers.authorization` ที่เกี่ยวข้อง และใช้ summary/description/tags รูปแบบเดียวกับ address routes เดิม

- [ ] **Step 5: ตรวจสอบ**

รัน `bun test` และ `git diff --check`; ตรวจ diff ให้แน่ใจว่า route ใหม่ filter `customeruser_id` ตอน clear default และไม่มีไฟล์ implementation อื่นถูกแก้
