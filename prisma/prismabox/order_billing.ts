import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const order_billingPlain = t.Object(
  {
    id: t.Integer(),
    order_no: __nullable__(t.String()),
    buyer_customeruser_id: t.String(),
    payment_method_type: __nullable__(t.String()),
    order_status: __nullable__(t.String()),
    im_no: __nullable__(t.String()),
    order_type: __nullable__(t.String()),
    invoice_id: __nullable__(t.Integer()),
    shipping_address_id: __nullable__(t.Integer()),
    payment_status: __nullable__(t.String()),
    log_payment: __nullable__(t.Date()),
    order_uuid: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    admin_updated_by: __nullable__(t.String()),
    admin_updated_at: __nullable__(t.Date()),
    order_created_by: __nullable__(t.String()),
    contact_id: __nullable__(t.Integer()),
    company_id: __nullable__(t.Integer()),
    shipping_cost: __nullable__(t.Number()),
    admin_verify_status: __nullable__(t.String()),
    payment_invoice_no: __nullable__(t.String()),
    credit_terms_day: __nullable__(t.Integer()),
    is_admin_order_created: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billingRelations = t.Object(
  {
    companies: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          company_image: __nullable__(t.String()),
          url_image: __nullable__(t.String()),
          company_name: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    customer_address: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          customeruser_id: __nullable__(t.String()),
          tag_name: __nullable__(t.String()),
          receiver_name: __nullable__(t.String()),
          phone_no: __nullable__(t.String()),
          address_name: __nullable__(t.String()),
          address_line1: __nullable__(t.String()),
          address_line2: __nullable__(t.String()),
          sub_district: __nullable__(t.String()),
          district: __nullable__(t.String()),
          province: __nullable__(t.String()),
          post_code: __nullable__(t.String()),
          set_default: __nullable__(t.Boolean()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    order_billing_items: t.Array(
      t.Object(
        {
          id: t.Integer(),
          order_billing_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          order_product_quantity: __nullable__(t.Integer()),
          item_status: __nullable__(t.String()),
          mr_code: __nullable__(t.String()),
          localtion_code: __nullable__(t.String()),
          product_owner: __nullable__(t.String()),
          expire_date: __nullable__(t.Date()),
          lot_code: __nullable__(t.String()),
          sale_price: __nullable__(t.Number()),
          order_price: __nullable__(t.Number()),
          waiting_out_quantity: __nullable__(t.Integer()),
          admin_updated_by: __nullable__(t.String()),
          admin_updated_at: __nullable__(t.Date()),
          is_free: __nullable__(t.Boolean()),
          promotion_from_product_option_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billingPlainInputCreate = t.Object(
  {
    order_no: t.Optional(__nullable__(t.String())),
    payment_method_type: t.Optional(__nullable__(t.String())),
    order_status: t.Optional(__nullable__(t.String())),
    im_no: t.Optional(__nullable__(t.String())),
    order_type: t.Optional(__nullable__(t.String())),
    payment_status: t.Optional(__nullable__(t.String())),
    log_payment: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    admin_updated_by: t.Optional(__nullable__(t.String())),
    admin_updated_at: t.Optional(__nullable__(t.Date())),
    order_created_by: t.Optional(__nullable__(t.String())),
    shipping_cost: t.Optional(__nullable__(t.Number())),
    admin_verify_status: t.Optional(__nullable__(t.String())),
    payment_invoice_no: t.Optional(__nullable__(t.String())),
    credit_terms_day: t.Optional(__nullable__(t.Integer())),
    is_admin_order_created: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billingPlainInputUpdate = t.Object(
  {
    order_no: t.Optional(__nullable__(t.String())),
    payment_method_type: t.Optional(__nullable__(t.String())),
    order_status: t.Optional(__nullable__(t.String())),
    im_no: t.Optional(__nullable__(t.String())),
    order_type: t.Optional(__nullable__(t.String())),
    payment_status: t.Optional(__nullable__(t.String())),
    log_payment: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    admin_updated_by: t.Optional(__nullable__(t.String())),
    admin_updated_at: t.Optional(__nullable__(t.Date())),
    order_created_by: t.Optional(__nullable__(t.String())),
    shipping_cost: t.Optional(__nullable__(t.Number())),
    admin_verify_status: t.Optional(__nullable__(t.String())),
    payment_invoice_no: t.Optional(__nullable__(t.String())),
    credit_terms_day: t.Optional(__nullable__(t.Integer())),
    is_admin_order_created: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billingRelationsInputCreate = t.Object(
  {
    companies: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customer_address: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    order_billing_items: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billingRelationsInputUpdate = t.Partial(
  t.Object(
    {
      companies: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      customer_address: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      order_billing_items: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billingWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          order_no: t.String(),
          buyer_customeruser_id: t.String(),
          payment_method_type: t.String(),
          order_status: t.String(),
          im_no: t.String(),
          order_type: t.String(),
          invoice_id: t.Integer(),
          shipping_address_id: t.Integer(),
          payment_status: t.String(),
          log_payment: t.Date(),
          order_uuid: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          admin_updated_by: t.String(),
          admin_updated_at: t.Date(),
          order_created_by: t.String(),
          contact_id: t.Integer(),
          company_id: t.Integer(),
          shipping_cost: t.Number(),
          admin_verify_status: t.String(),
          payment_invoice_no: t.String(),
          credit_terms_day: t.Integer(),
          is_admin_order_created: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order_billing" },
  ),
);

export const order_billingWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              order_no: t.String(),
              buyer_customeruser_id: t.String(),
              payment_method_type: t.String(),
              order_status: t.String(),
              im_no: t.String(),
              order_type: t.String(),
              invoice_id: t.Integer(),
              shipping_address_id: t.Integer(),
              payment_status: t.String(),
              log_payment: t.Date(),
              order_uuid: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              admin_updated_by: t.String(),
              admin_updated_at: t.Date(),
              order_created_by: t.String(),
              contact_id: t.Integer(),
              company_id: t.Integer(),
              shipping_cost: t.Number(),
              admin_verify_status: t.String(),
              payment_invoice_no: t.String(),
              credit_terms_day: t.Integer(),
              is_admin_order_created: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order_billing" },
);

export const order_billingSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      order_no: t.Boolean(),
      buyer_customeruser_id: t.Boolean(),
      payment_method_type: t.Boolean(),
      order_status: t.Boolean(),
      im_no: t.Boolean(),
      order_type: t.Boolean(),
      invoice_id: t.Boolean(),
      shipping_address_id: t.Boolean(),
      payment_status: t.Boolean(),
      log_payment: t.Boolean(),
      order_uuid: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      admin_updated_by: t.Boolean(),
      admin_updated_at: t.Boolean(),
      order_created_by: t.Boolean(),
      contact_id: t.Boolean(),
      company_id: t.Boolean(),
      shipping_cost: t.Boolean(),
      admin_verify_status: t.Boolean(),
      payment_invoice_no: t.Boolean(),
      credit_terms_day: t.Boolean(),
      is_admin_order_created: t.Boolean(),
      companies: t.Boolean(),
      customer_address: t.Boolean(),
      order_billing_items: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billingInclude = t.Partial(
  t.Object(
    {
      companies: t.Boolean(),
      customer_address: t.Boolean(),
      order_billing_items: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billingOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      buyer_customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_method_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      im_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shipping_address_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      log_payment: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_uuid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_updated_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_created_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shipping_cost: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_verify_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_invoice_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      credit_terms_day: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_admin_order_created: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing = t.Composite(
  [order_billingPlain, order_billingRelations],
  { additionalProperties: false },
);

export const order_billingInputCreate = t.Composite(
  [order_billingPlainInputCreate, order_billingRelationsInputCreate],
  { additionalProperties: false },
);

export const order_billingInputUpdate = t.Composite(
  [order_billingPlainInputUpdate, order_billingRelationsInputUpdate],
  { additionalProperties: false },
);
