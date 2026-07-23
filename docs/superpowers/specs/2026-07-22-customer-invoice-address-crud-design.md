# Customer Invoice Address CRUD Design

## Scope

เพิ่ม API สำหรับจัดการ `customer_invoice_address` ใน `src/ecommerce-customer/route.ts` โดยใช้ authentication และรูปแบบ error handling เดิมของ route นี้

## Endpoints

- `POST /myaccount/tax-invoice-address` สร้างรายการใหม่จาก payload ที่ผู้ใช้ระบุ
- `PUT /myaccount/tax-invoice-address/:customer_invoice_address_id` แก้ไขรายการตาม `id`
- `DELETE /myaccount/tax-invoice-address/:customer_invoice_address_id` ลบรายการตาม `id`

ทุก endpoint จะประกาศ Elysia schema สำหรับ body/params/authorization และมี OpenAPI detail ตาม pattern ของ address routes เดิม

## Default behavior

เมื่อ request มี `set_default: true` ให้ตั้ง `set_default: false` ให้รายการ invoice address อื่นของ `customeruser_id` เดียวกัน หลังจาก create/update สำเร็จ โดยรายการปัจจุบันยังคงเป็น default

## Error handling and verification

ใช้ try/catch และ status 500 ตาม route เดิม ส่วน Prisma error จาก id ที่ไม่มีอยู่ให้ไหลเข้า error handling เดิม การตรวจสอบจะรัน TypeScript/Bun test command ที่โปรเจกต์รองรับ และตรวจ diff เฉพาะไฟล์ที่เกี่ยวข้อง
