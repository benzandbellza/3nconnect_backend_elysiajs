# Next.js migration guide: API switched to `public_*`

วันที่: 2026-07-14

เอกสารนี้ใช้สำหรับ agent/ทีม Front-end ที่ต้องแก้โปรเจกต์ Next.js ให้ทำงานกับ route backend เวอร์ชันที่เปลี่ยนจาก Prisma model `nconnect_*` ไปเป็น `public_*`

## เป้าหมายการแก้ไข

ไม่ต้องเปลี่ยน URL หรือ HTTP method ของ API แต่ต้องปรับ:

1. TypeScript types ของ response
2. `fetch`/API client ที่อ่านชื่อ field เดิม
3. form payload สำหรับ create/update
4. algorithm ที่สร้าง category tree หรือคำนวณ hierarchy
5. fallback กรณี product ไม่มี images/payment methods ใน response

Backend files ที่เกี่ยวข้อง:

- `src/ecommerce/route.ts` — prefix `/api/ecommerce`
- `src/publics/route.ts` — prefix `/api/publics`
- `src/ecommerce-customer/route.ts` — ไม่มีการเปลี่ยนแปลงจากงานนี้

## กฎสำคัญสำหรับ API client

อย่าแก้ด้วยการเปลี่ยนเฉพาะชื่อ Prisma model ใน Front-end เพราะ Front-end ไม่ควรรู้จัก `nconnect_*` หรือ `public_*` อยู่แล้ว ให้แก้ที่ DTO/mapper ระหว่าง API response กับ domain model ของ Next.js

แนะนำให้มี boundary เดียวสำหรับ normalize response:

```ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API ${response.status}: ${await response.text()}`);
  }

  return response.json() as Promise<T>;
}
```

ให้ components ใช้ domain type ที่ normalize แล้ว แทนการอ่าน raw response โดยตรง

## 1. Companies

Endpoints:

- `GET /api/ecommerce/companies`
- `GET /api/ecommerce/companies/active`
- `POST /api/ecommerce/companies`
- `PUT /api/ecommerce/companies/:company_id`
- `DELETE /api/ecommerce/companies/:company_id`

### Raw response/payload ใหม่

| ความหมาย | เดิม | ใหม่ |
|---|---|---|
| ชื่อบริษัท | `company_name` | `name` |
| สถานะ active | `is_active` | `active` |
| รูปหลัก | `company_image` | `companypic` |
| รูป/URL เพิ่มเติม | - | `company_image`, `url_image` |

ตัวอย่าง type ที่ควรใช้ใน Next.js:

```ts
type PublicCompany = {
  id: number;
  name: string | null;
  active: boolean | null;
  companypic: string | null;
  company_image: string | null;
  url_image: string | null;
};

type CompanyForm = {
  name: string;
  active: boolean;
  company_image?: string | null;
  url_image?: string | null;
};
```

ต้องแก้ใน Front-end:

- table/card ใช้ `company.name` แทน `company.company_name`
- active switch ใช้ `company.active` แทน `company.is_active`
- create/update ส่ง `name` และ `active`
- ถ้าต้องการรูปหลักให้ใช้ `companypic` ตอนอ่าน response
- `/companies/active` ใช้ response field `id` และ `name`

## 2. Product categories: เปลี่ยนจาก nested เป็น flat

Endpoints:

- `GET /api/ecommerce/product-categories`
- `GET /api/ecommerce/product-categories/active`
- `POST /api/ecommerce/product-categories`
- `PUT /api/ecommerce/product-categories/:category_id`
- `DELETE /api/ecommerce/product-categories/:category_id`
- `GET /api/publics/product-categories/active`

### Response ใหม่

เดิม Front-end อาจคาดหวังแบบนี้:

```ts
root.other_product_categories[0].other_product_categories
```

ตอนนี้ response เป็น flat array:

```ts
type CategoryRow = {
  id: string;
  name: string | null;
  slug: string | null;
  parent_id: string | null;
  level: number | null;
};
```

ตัวอย่าง algorithm สร้าง tree ใน Next.js:

```ts
type CategoryNode = CategoryRow & { children: CategoryNode[] };

function buildCategoryTree(rows: CategoryRow[]): CategoryNode[] {
  const nodes = new Map<string, CategoryNode>();

  for (const row of rows) {
    nodes.set(row.id, { ...row, children: [] });
  }

  const roots: CategoryNode[] = [];

  for (const node of nodes.values()) {
    const parent = node.parent_id ? nodes.get(node.parent_id) : undefined;
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  return roots;
}
```

ข้อควรระวัง:

- อย่าใช้ `other_product_categories` จาก response อีกต่อไป
- ใช้ `parent_id` เป็นตัวเชื่อม parent/child
- `level` และ `parent_id` อาจเป็น `null`
- `id`, `parent_id`, `category_id` เป็น string
- `ancestors` ฝั่ง backend เป็น JSON ไม่ใช่ `string[]` ที่รับประกันรูปแบบเดิม

### Category payload

Create/update ยังคงใช้ field หลัก:

```ts
{
  name: string;
  slug: string;
  parent_id?: string | null;
}
```

ไม่ต้องส่ง `ancestors` หรือคำนวณ `level` จาก Front-end สำหรับ create เพราะ backend คำนวณจาก parent

## 3. Products และ product options

Endpoints หลัก:

- `GET /api/ecommerce/products`
- `GET /api/ecommerce/products/active`
- `GET /api/ecommerce/products/:product_id`
- `POST /api/ecommerce/products`
- `PUT /api/ecommerce/products/:product_id`
- `DELETE /api/ecommerce/products/:product_id`
- `GET /api/publics/products/:product_option_id`

### ชนิดข้อมูลที่ต้องเปลี่ยนใน Front-end

```ts
type Product = {
  id: number;
  category_id: string | null;
  category_hierarchy: unknown; // public schema เป็น Json
  product_options: ProductOption[];
};

type ProductOption = {
  id: number;
  mat_identity: string | null;
  option_name: string | null;
  online_price: string | number | null; // Decimal อาจถูก serialize เป็น string
  min_price: string | number | null;
  attributes_hierarchy: unknown; // public schema เป็น Json
};
```

ห้าม assume ว่า:

- `category_hierarchy` เป็น `string[]` เสมอ
- `attributes_hierarchy` เป็น `number[]` เสมอ
- `online_price`/`min_price` เป็น JavaScript number เสมอ

แนะนำ helper สำหรับราคา:

```ts
function toNumber(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === "") return null;
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}
```

สำหรับ hierarchy ให้ตรวจสอบก่อนใช้ spread/map:

```ts
function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}
```

## 4. Product images

`public_products` ไม่มี nested relation `product_images` ใน Prisma model ที่ route ใช้ ดังนั้น product response ไม่ควรถูก type เป็นแบบที่รับประกันว่า `product_images` มีอยู่

ให้เปลี่ยนจาก:

```ts
product.product_images.map(...)
```

เป็นอย่างน้อย:

```ts
const imageUrl = product.product_images?.[0]?.url_image ?? "/images/product-placeholder.png";
```

หรือแยก image loading ออกจาก product loading ตาม endpointที่ backend จัดเตรียมให้

Backend ยังใช้ model `public_product_images` สำหรับ create/update/delete รูป แต่ relation ไม่ได้ถูกส่ง nested ใน product read response

## 5. Payment methods

`public_product_payment_method` เป็น join table ที่ใช้ `payment_method_id` และ relation `payment_methods` โดย endpoint ที่อ่านจาก `public_products` จะคืนข้อมูล payment methods ที่เชื่อมกับ product แล้วใน field `product_payment_method` ได้แก่ `/api/ecommerce/products`, `/api/ecommerce/products/active`, `/api/ecommerce/products/:product_id`, `/api/ecommerce/products-online/active`, `/api/ecommerce/products-online/company` และ `/api/publics/products/:product_option_id` (ส่วน `/api/publics/products` จะ enrich จาก `product_id` ใน view)

ไม่มี boolean columns เดิม:

- `qr_code_promptpay`
- `visa_card`
- `mobile_banking`
- `credit_terms`

ดังนั้นต้องลบ assumption ใน UI และ mapper เช่น:

```ts
product.product_payment_method.qr_code_promptpay
```

ให้รองรับข้อมูล normalized เช่น:

```ts
type ProductPaymentMethod = {
  payment_method_id: number | null;
  payment_methods?: {
    name: string;
  } | null;
};
```

หมายเหตุสำคัญ: payload เดิมที่ส่ง boolean payment methods ยังไม่มี mapping ไปเป็น `payment_method_id` ใน backend route ปัจจุบัน ถ้า UI ต้องแก้ payment methods จริง ต้องคุยเพิ่มเพื่อกำหนด mapping/endpoint ก่อน อย่าแปลง boolean เป็น ID แบบเดาเอง การแสดงผลควรอ่านจาก `product_payment_method[].payment_methods` และตรวจ `is_active` ก่อนแสดง

## 6. Events

Endpoints:

- `GET /api/ecommerce/events`
- `POST /api/ecommerce/events`
- `PUT /api/ecommerce/events/:event_id`

### GET response ใช้ชื่อ field ของ `public_events`

```ts
type PublicEvent = {
  id: string; // UUID ไม่ใช่ number
  eventname: string | null;
  event_detail: string | null;
  event_registerdate: string | null;
  event_preregister: string | null;
  eventStartDate: string | null;
  event_pic: string | null;
  location: string | null;
  tierregister: string | null;
  tierpreregister: string | null;
  eventEndDate: string | null;
  link: string | null;
};
```

Mapping ที่ต้องแก้ใน UI:

| Front-end domain เดิม | Raw API response ใหม่ |
|---|---|
| `event_name` | `eventname` |
| `event_image` | `event_pic` |
| `event_startdate` | `eventStartDate` |
| `event_enddate` | `eventEndDate` |
| `register_date` | `event_registerdate` |
| `preregister_date` | `event_preregister` |
| `location_name` | `location` |
| `ref_url` | `link` |
| `tier_register` | `tierregister` |
| `tier_preregister` | `tierpreregister` |

ตัวอย่าง mapper กลับเป็น domain model ของ Front-end:

```ts
function mapEvent(event: PublicEvent) {
  return {
    id: event.id,
    event_name: event.eventname,
    event_image: event.event_pic,
    event_startdate: event.eventStartDate,
    event_enddate: event.eventEndDate,
    register_date: event.event_registerdate,
    preregister_date: event.event_preregister,
    location_name: event.location,
    ref_url: event.link,
    tier_register: event.tierregister,
    tier_preregister: event.tierpreregister,
    event_detail: event.event_detail,
  };
}
```

Create/update ยังคงรับ form field เดิมจาก route เช่น `event_name`, `event_image`, `event_startdate` แต่ backend map ไปเก็บเป็น public column และแปลงวันที่เป็น ISO string

ข้อควรระวัง:

- `event_id` ต้องส่งเป็น UUID string ห้ามใช้ `Number(event_id)`
- `event_category_id` และ relation `event_categories` ไม่ได้ถูกใช้ใน `public_events` route ปัจจุบัน
- `tierregister`/`tierpreregister` ถูกเก็บเป็น string JSON หาก UI ต้องแสดงเป็น array ให้ `JSON.parse` แบบมี try/catch

## 7. Brands, attributes และ promotions

Model กลุ่มต่อไปนี้เปลี่ยนไปใช้ `public_*` แต่ชื่อ field หลักส่วนใหญ่ยังเหมือนเดิม:

- brands
- countries
- attribute groups
- attributes
- promotion flashsale products
- promotion discount products
- promotion extra points products/tier rules
- promotion bundle deal products/tiers

สิ่งที่ต้องตรวจใน Next.js:

- อย่า hardcode nullable field เป็น required
- ตรวจ `null` ก่อน render และก่อนส่ง update payload
- อย่า assume timestamp เป็น non-null
- ตรวจราคา promotion เพราะบาง public columns เป็น `Int` หรือ `Float` ต่างกัน

## 8. Suggested Next.js migration sequence

ทำตามลำดับนี้เพื่อให้แก้และทดสอบได้ทีละส่วน:

1. แก้ shared API types สำหรับ company/category/product/event
2. แก้ API client ให้ response เป็น `unknown` แล้ว normalize ผ่าน mapper
3. แก้ category selector/tree ให้ใช้ `parent_id`
4. แก้ product card/detail ให้รองรับไม่มี `product_images` และ payment booleans
5. แก้ event list/detail/form และเปลี่ยน ID เป็น string
6. แก้ company form ให้ส่ง `name`/`active`
7. ค้นหา reference เก่าด้วยคำสั่ง:

```bash
rg "company_name|is_active|other_product_categories|event_name|event_image|qr_code_promptpay|visa_card|mobile_banking|credit_terms|product_images" src app components
```

8. รัน typecheck, unit tests และทดสอบหน้า list/detail/create/update/delete ของแต่ละกลุ่ม

## 9. Acceptance checklist

- [ ] Company list ใช้ `name` และไม่อ่าน `company_name`
- [ ] Company form ส่ง `name`/`active`
- [ ] Category list สร้าง tree จาก flat rows ได้
- [ ] Category code รองรับ `parent_id`, `level`, `name` เป็น `null`
- [ ] Product price รองรับ string/number/null
- [ ] Product hierarchy ตรวจ `Array.isArray` ก่อนใช้งาน
- [ ] Product UI ไม่พังเมื่อไม่มี `product_images`
- [ ] Product payment UI ไม่อ่าน boolean fields ที่ถูกถอดออก
- [ ] Event ID ใช้ string UUID
- [ ] Event mapper รองรับชื่อ field แบบ `eventname`, `event_pic`, `eventStartDate`
- [ ] Event tier strings parse อย่างปลอดภัย
- [ ] ไม่มีการแก้ URL หรือ HTTP method โดยไม่จำเป็น

## References

- [src/ecommerce/route.ts](../src/ecommerce/route.ts)
- [src/publics/route.ts](../src/publics/route.ts)
- [prisma/schema.prisma](../prisma/schema.prisma)
