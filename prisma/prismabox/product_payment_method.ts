import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_payment_methodPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    qr_code_promptpay: __nullable__(t.Boolean()),
    visa_card: __nullable__(t.Boolean()),
    mobile_banking: __nullable__(t.Boolean()),
    credit_terms: __nullable__(t.Boolean()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const product_payment_methodRelations = t.Object(
  {
    products: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          product_name: __nullable__(t.String()),
          product_description: __nullable__(t.String()),
          company_id: __nullable__(t.Integer()),
          brand_id: __nullable__(t.Integer()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
          category_hierarchy: t.Array(t.String(), {
            additionalProperties: false,
          }),
          unit: __nullable__(t.String()),
          is_online_active: __nullable__(t.Boolean()),
          category_id: __nullable__(t.String()),
          video_product: __nullable__(t.String()),
          condition_description: __nullable__(t.String()),
          warranty_description: __nullable__(t.String()),
          youtube_url: __nullable__(t.String()),
          is_pre_order: __nullable__(t.Boolean()),
          is_custom_options: __nullable__(t.Boolean()),
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

export const product_payment_methodPlainInputCreate = t.Object(
  {
    qr_code_promptpay: t.Optional(__nullable__(t.Boolean())),
    visa_card: t.Optional(__nullable__(t.Boolean())),
    mobile_banking: t.Optional(__nullable__(t.Boolean())),
    credit_terms: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const product_payment_methodPlainInputUpdate = t.Object(
  {
    qr_code_promptpay: t.Optional(__nullable__(t.Boolean())),
    visa_card: t.Optional(__nullable__(t.Boolean())),
    mobile_banking: t.Optional(__nullable__(t.Boolean())),
    credit_terms: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const product_payment_methodRelationsInputCreate = t.Object(
  {
    products: t.Optional(
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

export const product_payment_methodRelationsInputUpdate = t.Partial(
  t.Object(
    {
      products: t.Partial(
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

export const product_payment_methodWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_id: t.Integer(),
          qr_code_promptpay: t.Boolean(),
          visa_card: t.Boolean(),
          mobile_banking: t.Boolean(),
          credit_terms: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "product_payment_method" },
  ),
);

export const product_payment_methodWhereUnique = t.Recursive(
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
              product_id: t.Integer(),
              qr_code_promptpay: t.Boolean(),
              visa_card: t.Boolean(),
              mobile_banking: t.Boolean(),
              credit_terms: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "product_payment_method" },
);

export const product_payment_methodSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      qr_code_promptpay: t.Boolean(),
      visa_card: t.Boolean(),
      mobile_banking: t.Boolean(),
      credit_terms: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const product_payment_methodInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const product_payment_methodOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qr_code_promptpay: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      visa_card: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mobile_banking: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      credit_terms: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const product_payment_method = t.Composite(
  [product_payment_methodPlain, product_payment_methodRelations],
  { additionalProperties: false },
);

export const product_payment_methodInputCreate = t.Composite(
  [
    product_payment_methodPlainInputCreate,
    product_payment_methodRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const product_payment_methodInputUpdate = t.Composite(
  [
    product_payment_methodPlainInputUpdate,
    product_payment_methodRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
