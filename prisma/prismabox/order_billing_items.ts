import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const order_billing_itemsPlain = t.Object(
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
);

export const order_billing_itemsRelations = t.Object(
  {
    order_billing: __nullable__(
      t.Object(
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
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_itemsPlainInputCreate = t.Object(
  {
    order_product_quantity: t.Optional(__nullable__(t.Integer())),
    item_status: t.Optional(__nullable__(t.String())),
    mr_code: t.Optional(__nullable__(t.String())),
    localtion_code: t.Optional(__nullable__(t.String())),
    product_owner: t.Optional(__nullable__(t.String())),
    expire_date: t.Optional(__nullable__(t.Date())),
    lot_code: t.Optional(__nullable__(t.String())),
    sale_price: t.Optional(__nullable__(t.Number())),
    order_price: t.Optional(__nullable__(t.Number())),
    waiting_out_quantity: t.Optional(__nullable__(t.Integer())),
    admin_updated_by: t.Optional(__nullable__(t.String())),
    admin_updated_at: t.Optional(__nullable__(t.Date())),
    is_free: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_itemsPlainInputUpdate = t.Object(
  {
    order_product_quantity: t.Optional(__nullable__(t.Integer())),
    item_status: t.Optional(__nullable__(t.String())),
    mr_code: t.Optional(__nullable__(t.String())),
    localtion_code: t.Optional(__nullable__(t.String())),
    product_owner: t.Optional(__nullable__(t.String())),
    expire_date: t.Optional(__nullable__(t.Date())),
    lot_code: t.Optional(__nullable__(t.String())),
    sale_price: t.Optional(__nullable__(t.Number())),
    order_price: t.Optional(__nullable__(t.Number())),
    waiting_out_quantity: t.Optional(__nullable__(t.Integer())),
    admin_updated_by: t.Optional(__nullable__(t.String())),
    admin_updated_at: t.Optional(__nullable__(t.Date())),
    is_free: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_itemsRelationsInputCreate = t.Object(
  {
    order_billing: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_itemsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      order_billing: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_itemsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          order_billing_id: t.Integer(),
          product_option_id: t.Integer(),
          order_product_quantity: t.Integer(),
          item_status: t.String(),
          mr_code: t.String(),
          localtion_code: t.String(),
          product_owner: t.String(),
          expire_date: t.Date(),
          lot_code: t.String(),
          sale_price: t.Number(),
          order_price: t.Number(),
          waiting_out_quantity: t.Integer(),
          admin_updated_by: t.String(),
          admin_updated_at: t.Date(),
          is_free: t.Boolean(),
          promotion_from_product_option_id: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order_billing_items" },
  ),
);

export const order_billing_itemsWhereUnique = t.Recursive(
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
              order_billing_id: t.Integer(),
              product_option_id: t.Integer(),
              order_product_quantity: t.Integer(),
              item_status: t.String(),
              mr_code: t.String(),
              localtion_code: t.String(),
              product_owner: t.String(),
              expire_date: t.Date(),
              lot_code: t.String(),
              sale_price: t.Number(),
              order_price: t.Number(),
              waiting_out_quantity: t.Integer(),
              admin_updated_by: t.String(),
              admin_updated_at: t.Date(),
              is_free: t.Boolean(),
              promotion_from_product_option_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order_billing_items" },
);

export const order_billing_itemsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      order_billing_id: t.Boolean(),
      product_option_id: t.Boolean(),
      order_product_quantity: t.Boolean(),
      item_status: t.Boolean(),
      mr_code: t.Boolean(),
      localtion_code: t.Boolean(),
      product_owner: t.Boolean(),
      expire_date: t.Boolean(),
      lot_code: t.Boolean(),
      sale_price: t.Boolean(),
      order_price: t.Boolean(),
      waiting_out_quantity: t.Boolean(),
      admin_updated_by: t.Boolean(),
      admin_updated_at: t.Boolean(),
      is_free: t.Boolean(),
      promotion_from_product_option_id: t.Boolean(),
      order_billing: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_itemsInclude = t.Partial(
  t.Object(
    { order_billing: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_itemsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_billing_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_product_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      item_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mr_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      localtion_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_owner: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expire_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lot_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      waiting_out_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_updated_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_free: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_from_product_option_id: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_items = t.Composite(
  [order_billing_itemsPlain, order_billing_itemsRelations],
  { additionalProperties: false },
);

export const order_billing_itemsInputCreate = t.Composite(
  [
    order_billing_itemsPlainInputCreate,
    order_billing_itemsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const order_billing_itemsInputUpdate = t.Composite(
  [
    order_billing_itemsPlainInputUpdate,
    order_billing_itemsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
