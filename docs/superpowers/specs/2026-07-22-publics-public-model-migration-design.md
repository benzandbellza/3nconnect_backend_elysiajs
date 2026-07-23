# Publics Route Public Model Migration Design

**Goal:** เปลี่ยน query ใน `src/publics/route.ts` เฉพาะ endpoint ที่มีตาราง `public_*` รองรับโดยตรง โดยคง response contract เดิมของ API ไว้

## Scope

เปลี่ยน 2 endpoint:

- `GET /api/publics/products/pre-order`
- `GET /api/publics/events`

คงการใช้งานเดิมของ `vw_promotion_*`, `vw_planetone_stocks`, `gift_voucher`, `gift_voucher_campaign_voucher` และ model อื่นที่ยังไม่มี public replacement โดยตรง

## Design

### Pre-order products

ใช้ `public_products.findMany` โดยกรอง `is_pre_order: true` และเลือก `product_options` ที่สัมพันธ์กับสินค้า รวม `product_images` ที่ `is_show: true` จากนั้น flatten แต่ละ option เป็น response row เดิม:

`mat_identity`, `product_name`, `unit`, `online_price`, `product_option_id`, `url_image`, `option_name`

การ flatten จะเรียงตาม `product_name` จากมากไปน้อยเหมือน query เดิม และใช้รูปแรกที่แสดงอยู่ของสินค้าเป็น `url_image` เพื่อรักษา shape เดิมของ `vw_products`

### Events

ใช้ `public_events.findMany` กรอง `is_active: true` และ map field ของ public table กลับเป็น alias เดิมของ `vw_all_events`:

`id` → `event_id`, `event_pic` → `event_image`, `eventname` → `event_name`, `event_registerdate` → `register_date`, `event_preregister` → `preregister_date`, `eventStartDate` → `event_startdate`, `eventEndDate` → `event_enddate`, `location` → `location_name`, `tierregister` → `tier_register`, `tierpreregister` → `tier_preregister`, `link` → `ref_url`

`event_cate_name` จะไม่ถูกสร้างขึ้นใหม่ เพราะ `public_events` ไม่มี relation/field นี้ใน model ที่ route ใช้; response จะไม่เพิ่มข้อมูลจาก view เดิมที่ไม่มี public table โดยตรง

## Error handling

คง status code และรูปแบบ error เดิมของทั้งสอง endpoint ไม่เปลี่ยนแปลง

## Verification

- เพิ่ม focused tests สำหรับ pure mapping/flattening behavior
- รัน focused tests, `bun test`, `bunx tsc --noEmit` และ `git diff --check`
- ตรวจว่า 2 endpoint เป้าหมายไม่อ้างอิง `vw_products` หรือ `vw_all_events` อีกต่อไป
