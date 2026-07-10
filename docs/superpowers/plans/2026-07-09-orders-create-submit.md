# Orders Create Submit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `POST /api/ecommerce/orders-create/submit` for admin-side order creation by adapting the existing `orders-update/submit` transaction pattern to insert a new `order_billing` record plus its `order_billing_items` in one request.

**Architecture:** Keep the implementation inside [src/ecommerce/route.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts) beside the existing orders endpoints so the new route follows the current Elysia + Prisma style. Reuse the same date parsing and `admin_verify_status -> order_status` rules used by `orders-update/submit`, but switch the transaction flow from `find + update + replace items` to `optional duplicate check + create header + createMany items + read back response`.

**Tech Stack:** Elysia, Prisma, TypeScript, Bun runtime

## Global Constraints

- Keep the new endpoint in [src/ecommerce/route.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts); do not introduce a new router module just for this feature.
- Follow the request/response shape of `POST /orders-update/submit` in [src/ecommerce/route.ts:6570](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts:6570) wherever possible so the admin frontend can adopt the new route with minimal branching.
- Add only the fields required to create `order_billing` records that do not exist in the update payload: `buyer_customeruser_id`, `payment_method_type`, `order_type`, `invoice_id`, `payment_status`, `order_created_by`, `contact_id`, `company_id`, and optional `order_uuid`.
- Derive `order_status` from `admin_verify_status` using the same mapping as the update endpoint: `Pending|Paid -> Open`, `Cancelled -> Cancelled`, `Tranferring -> Tranferring`, `Completed -> Completed`, otherwise `Processing`.
- Parse `logged_at` into `log_payment`, `updated_at`, and `admin_updated_at`; rely on the Prisma schema default for `created_at` instead of accepting a caller-provided create timestamp.
- Parse item `expire_date` using the same nullable `dd/mm/yyyy`, Buddhist year, and ISO fallback behavior as the update endpoint.
- If the caller supplies `order_uuid`, reject the request when that UUID already exists so `/orders/:order_uuid` remains unambiguous.
- Preserve current code style: route-local helpers, `set.status`, and `{ message, data }` responses.
- There is no working automated test script in [package.json](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/package.json); verification must use TypeScript compilation plus manual API exercise.

---

### Task 1: Normalize shared order-submit helper logic

**Files:**
- Modify: [src/ecommerce/route.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts)
- Test: manual compile of [src/ecommerce/route.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts)

**Interfaces:**
- Consumes: existing `POST /orders-update/submit` block in [src/ecommerce/route.ts:6570](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts:6570)
- Produces: local helpers with signatures
  - `const parseNullableDate = (value?: string | null) => Date | null`
  - `const parseNullableDateTime = (value?: string | null) => Date | null`
  - `const mapAdminVerifyStatusToOrderStatus = (status?: string | null) => string`

- [ ] **Step 1: Insert shared helper functions immediately above `POST /orders-update/submit`**

```ts
  const parseNullableDate = (value?: string | null) => {
    if (!value || value === "-") return null;

    const slashDateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
    if (slashDateMatch) {
      const [, dd, mm, yyyy] = slashDateMatch;
      const christianYear =
        Number(yyyy) > 2400 ? Number(yyyy) - 543 : Number(yyyy);
      return new Date(`${christianYear}-${mm}-${dd}`);
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const parseNullableDateTime = (value?: string | null) => {
    if (!value || value === "-") return null;

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const mapAdminVerifyStatusToOrderStatus = (status?: string | null) => {
    if (status === "Pending" || status === "Paid") return "Open";
    if (status === "Cancelled") return "Cancelled";
    if (status === "Tranferring") return "Tranferring";
    if (status === "Completed") return "Completed";
    return "Processing";
  };
```

- [ ] **Step 2: Replace the inline helper definitions inside `POST /orders-update/submit` with calls to the shared helpers**

```ts
        const loggedAt = parseNullableDateTime(body.logged_at);

        const result = await prisma.$transaction(async (tx) => {
          const existingOrder = await tx.order_billing.findFirst({
            where: {
              order_uuid: body.order_uuid,
            },
            select: {
              id: true,
              order_uuid: true,
              order_no: true,
            },
          });

          if (!existingOrder) {
            throw new Error("Not found order billing.");
          }

          const updatedOrder = await tx.order_billing.update({
            where: {
              id: existingOrder.id,
            },
            data: {
              order_no: body.order_no,
              admin_verify_status: body.admin_verify_status,
              admin_updated_by: body.admin_updated_by,
              order_status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
              im_no: body.im_no,
              shipping_cost: body.shipping_cost,
              shipping_address_id: body.shipping_address_id,
              log_payment: loggedAt,
              updated_at: loggedAt,
              admin_updated_at: loggedAt,
              credit_payment_duedate: body.credit_payment_duedate,
              credit_term_days: body.credit_term_days,
            },
            select: {
              id: true,
              order_uuid: true,
              order_no: true,
              admin_verify_status: true,
              im_no: true,
              shipping_cost: true,
            },
          });
```

- [ ] **Step 3: Compile before adding the new endpoint to ensure the helper extraction is clean**

Run: `./node_modules/.bin/tsc --noEmit`
Expected: TypeScript completes without introducing new errors from the helper extraction.

- [ ] **Step 4: Commit the helper refactor**

```bash
git add src/ecommerce/route.ts
git commit -m "refactor: share order submit helper logic"
```

### Task 2: Add `POST /orders-create/submit`

**Files:**
- Modify: [src/ecommerce/route.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/ecommerce/route.ts)
- Test: manual request against the new route

**Interfaces:**
- Consumes:
  - `parseNullableDate(value?: string | null): Date | null`
  - `parseNullableDateTime(value?: string | null): Date | null`
  - `mapAdminVerifyStatusToOrderStatus(status?: string | null): string`
- Produces:
  - `POST /api/ecommerce/orders-create/submit`
  - Request body:
    - `order_no: string`
    - `buyer_customeruser_id: string`
    - `payment_method_type: string | null`
    - `order_type: string | null`
    - `invoice_id: number | null`
    - `shipping_address_id: number`
    - `payment_status: string | null`
    - `order_created_by: string | null`
    - `contact_id: number | null`
    - `company_id: number | null`
    - `order_uuid?: string | null`
    - `credit_payment_duedate: any`
    - `credit_term_days: any`
    - `admin_verify_status: string`
    - `admin_updated_by: string`
    - `im_no?: string | null`
    - `shipping_cost?: number | null`
    - `billing_items: Array<...same item shape as update endpoint...>`
    - `logged_at?: string | null`
  - Response body:
    - `{ message: "Order create success", data: { order_uuid, order_no, admin_verify_status, im_no, shipping_cost, billing_items, logged_at } }`

- [ ] **Step 1: Insert the new route above `POST /orders-update/submit` so create and update stay adjacent**

```ts
  .post(
    "/orders-create/submit",
    async ({ headers, set, body }) => {
      try {
        const loggedAt = parseNullableDateTime(body.logged_at);

        const result = await prisma.$transaction(async (tx) => {
          if (body.order_uuid) {
            const duplicateOrder = await tx.order_billing.findFirst({
              where: {
                order_uuid: body.order_uuid,
              },
              select: {
                id: true,
              },
            });

            if (duplicateOrder) {
              throw new Error("Order uuid already exists.");
            }
          }

          const createdOrder = await tx.order_billing.create({
            data: {
              order_no: body.order_no,
              buyer_customeruser_id: body.buyer_customeruser_id,
              payment_method_type: body.payment_method_type,
              order_status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
              im_no: body.im_no,
              order_type: body.order_type,
              invoice_id: body.invoice_id,
              shipping_address_id: body.shipping_address_id,
              payment_status: body.payment_status,
              log_payment: loggedAt,
              order_uuid: body.order_uuid,
              updated_at: loggedAt,
              admin_updated_by: body.admin_updated_by,
              admin_updated_at: loggedAt,
              order_created_by: body.order_created_by,
              contact_id: body.contact_id,
              company_id: body.company_id,
              credit_term_days: body.credit_term_days,
              credit_payment_duedate: body.credit_payment_duedate,
              shipping_cost: body.shipping_cost,
              admin_verify_status: body.admin_verify_status,
            },
            select: {
              id: true,
              order_uuid: true,
              order_no: true,
              admin_verify_status: true,
              im_no: true,
              shipping_cost: true,
            },
          });

          if (body.billing_items.length > 0) {
            await tx.order_billing_items.createMany({
              data: body.billing_items.map((item) => ({
                order_billing_id: createdOrder.id,
                product_option_id: item.product_option_id,
                order_product_quantity: item.order_product_quantity,
                item_status: item.item_status,
                mr_code: item.mr_code,
                localtion_code: item.localtion_code,
                product_owner: item.product_owner,
                expire_date: parseNullableDate(item.expire_date),
                lot_code: item.lot_code,
                sale_price: item.sale_price,
                order_price: item.order_price,
                waiting_out_quantity: item.waiting_out_quantity,
                admin_updated_at: loggedAt,
                is_free: item.is_free,
                promotion_from_product_option_id: item.promotion_from_product_option_id,
              })),
            });
          }

          const createdItems = await tx.order_billing_items.findMany({
            where: {
              order_billing_id: createdOrder.id,
            },
            select: {
              product_option_id: true,
              order_product_quantity: true,
              item_status: true,
              mr_code: true,
              localtion_code: true,
              product_owner: true,
              expire_date: true,
              lot_code: true,
              sale_price: true,
              order_price: true,
              waiting_out_quantity: true,
              is_free: true,
              promotion_from_product_option_id: true,
            },
          });

          return {
            ...createdOrder,
            billing_items: createdItems,
            logged_at: body.logged_at,
          };
        });

        return {
          message: "Order create success",
          data: result,
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = errorMessage === "Order uuid already exists." ? 409 : 500;
        return { message: errorMessage };
      }
    },
```

- [ ] **Step 2: Add the new body schema and OpenAPI metadata immediately after the handler**

```ts
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        order_no: t.String(),
        buyer_customeruser_id: t.String(),
        payment_method_type: t.Optional(t.Nullable(t.String())),
        order_type: t.Optional(t.Nullable(t.String())),
        invoice_id: t.Optional(t.Nullable(t.Number())),
        shipping_address_id: t.Number(),
        payment_status: t.Optional(t.Nullable(t.String())),
        order_created_by: t.Optional(t.Nullable(t.String())),
        contact_id: t.Optional(t.Nullable(t.Number())),
        company_id: t.Optional(t.Nullable(t.Number())),
        order_uuid: t.Optional(t.Nullable(t.String())),
        credit_payment_duedate: t.Any(),
        credit_term_days: t.Any(),
        admin_verify_status: t.String(),
        admin_updated_by: t.String(),
        im_no: t.Optional(t.Nullable(t.String())),
        shipping_cost: t.Optional(t.Nullable(t.Number())),
        billing_items: t.Array(
          t.Object({
            product_option_id: t.Number(),
            order_product_quantity: t.Number(),
            item_status: t.Optional(t.Nullable(t.String())),
            mr_code: t.Optional(t.Nullable(t.String())),
            localtion_code: t.Optional(t.Nullable(t.String())),
            product_owner: t.Optional(t.Nullable(t.String())),
            expire_date: t.Optional(t.Nullable(t.String())),
            lot_code: t.Optional(t.Nullable(t.String())),
            sale_price: t.Number(),
            order_price: t.Number(),
            waiting_out_quantity: t.Optional(t.Nullable(t.Number())),
            is_free: t.Boolean(),
            promotion_from_product_option_id: t.Optional(t.Nullable(t.Number())),
            invoice_id_mat_in: t.Optional(t.Nullable(t.String())),
            stock_age: t.Optional(t.Nullable(t.String())),
          })
        ),
        logged_at: t.Optional(t.Nullable(t.String())),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Orders - Create Order",
        description: `
          This endpoint creates order header and billing items in one transaction.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    },
  )
```

- [ ] **Step 3: Make the update endpoint use the shared status mapper instead of duplicating the conditional**

```ts
              order_status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
```

- [ ] **Step 4: Compile after inserting the new endpoint**

Run: `./node_modules/.bin/tsc --noEmit`
Expected: TypeScript completes without new type errors from the route definition.

- [ ] **Step 5: Commit the new route**

```bash
git add src/ecommerce/route.ts
git commit -m "feat: add orders create submit endpoint"
```

### Task 3: Verify the new request contract manually

**Files:**
- Modify: none
- Test: running local API and exercising the new route

**Interfaces:**
- Consumes:
  - `POST /api/ecommerce/orders-create/submit`
  - local server bootstrap in [src/index.ts](/Users/noppanat/Documents/GitHub/3nconnect_backend_elysiajs/src/index.ts)
- Produces:
  - successful create response
  - duplicate UUID rejection response
  - item/date parsing sanity check

- [ ] **Step 1: Start the API locally**

Run: `npm run dev`
Expected: Bun starts the Elysia server without crashing on route registration.

- [ ] **Step 2: Exercise a successful create request with one item**

Run:

```bash
curl -X POST http://127.0.0.1:3000/api/ecommerce/orders-create/submit \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer REPLACE_ME' \
  -d '{
    "order_no": "ADM26070901",
    "buyer_customeruser_id": "11111111-1111-1111-1111-111111111111",
    "payment_method_type": "credit_terms",
    "order_type": "admin_create",
    "invoice_id": null,
    "shipping_address_id": 1,
    "payment_status": "Pending",
    "order_created_by": "22222222-2222-2222-2222-222222222222",
    "contact_id": 1,
    "company_id": 1,
    "order_uuid": "44444444-4444-4444-4444-444444444444",
    "credit_payment_duedate": "2026-07-31",
    "credit_term_days": 30,
    "admin_verify_status": "Pending",
    "admin_updated_by": "33333333-3333-3333-3333-333333333333",
    "im_no": null,
    "shipping_cost": 120,
    "billing_items": [
      {
        "product_option_id": 1,
        "order_product_quantity": 2,
        "item_status": "Pending",
        "mr_code": null,
        "localtion_code": null,
        "product_owner": null,
        "expire_date": "09/07/2569",
        "lot_code": "LOT-A",
        "sale_price": 100,
        "order_price": 200,
        "waiting_out_quantity": 2,
        "is_free": false,
        "promotion_from_product_option_id": null,
        "invoice_id_mat_in": null,
        "stock_age": null
      }
    ],
    "logged_at": "2026-07-09T10:30:00.000Z"
  }'
```

Expected: HTTP `200` with `message: "Order create success"` and a `data` object containing the echoed `order_uuid`, the saved order header fields, and one returned `billing_items` record.

- [ ] **Step 3: Exercise the duplicate UUID path**

Run the same `curl` again with the same non-null `order_uuid`.
Expected: HTTP `409` with `{ "message": "Order uuid already exists." }`.

- [ ] **Step 4: Confirm readback through the existing order detail endpoint**

Run: `curl -H 'Authorization: Bearer REPLACE_ME' http://127.0.0.1:3000/api/ecommerce/orders/REPLACE_CREATED_ORDER_UUID`
Expected: the order appears in the existing `GET /orders/:order_uuid` response with matching `shipping_cost`, `credit_term_days`, `credit_payment_duedate`, and `order_billing_items`.

- [ ] **Step 5: Commit verification notes if any request-contract adjustments were needed**

```bash
git add src/ecommerce/route.ts
git commit -m "chore: verify orders create submit contract"
```
