# Customer Order Read Migration to IM Design

## Goal

เปลี่ยนแหล่งข้อมูลของ endpoint อ่าน order ใน `src/ecommerce-customer/route.ts` จาก `order_billing`/`order_billing_items` เป็น `IM`/`im_goods` โดยไม่เปลี่ยน response contract ที่ frontend ใช้งานอยู่

## Scope

- `GET /api/ecommerce-customer/order-billing`
- `GET /api/ecommerce-customer/orders/:customeruser_id`

ไม่รวม `POST /monthly_order_count`, `POST /order-submit` และตาราง payment/voucher

## Data mapping

- `IM.docid` -> `order_no`
- `IM.im` -> `im_no`
- Field อื่นของ order ใช้ชื่อเดียวกันจาก `IM`
- `IM.company_id` ใช้ relation `companies` เพื่อคง `companies.company_name`
- รายการสินค้าจะอ่านจาก `im_goods` โดยใช้ `docid = IM.id` และ map field กลับเป็นชื่อเดิมของ API หาก endpoint นั้นคืนรายการสินค้า

## Compatibility and behavior

- คง path, HTTP method, status behavior และชื่อ field response เดิม
- เงื่อนไข customer ของ `/orders/:customeruser_id` คง semantics เดิม: แสดงรายการที่ `admin_updated_by` เป็น `null` หรือเป็นของ customer ที่ร้องขอ
- ไม่เพิ่ม fallback ไปยังตารางเก่า เพื่อให้ข้อมูลที่อ่านมาจาก source ใหม่สอดคล้องกัน

## Verification

- ตรวจว่า route ไม่มี query อ่าน order จาก `order_billing`/`order_billing_items` ใน scope นี้
- เพิ่มหรือปรับ focused tests สำหรับ mapping และรัน test/typecheck ที่โปรเจกต์รองรับ
