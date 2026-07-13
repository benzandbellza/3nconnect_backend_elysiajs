import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_discount_productsPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    sale_price: __nullable__(t.Number()),
    sale_percent: __nullable__(t.Number()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_discount_productsRelations = t.Object(
  {
    promotions: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          url_image: __nullable__(t.String()),
          promotion_image: __nullable__(t.String()),
          promotion_name: __nullable__(t.String()),
          promotion_type: __nullable__(t.String()),
          promotion_start: __nullable__(t.Date()),
          promotion_end: __nullable__(t.Date()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
          is_accept_overlapse_promotion: __nullable__(t.Boolean()),
          promotion_description: __nullable__(t.String()),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
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

export const promotion_discount_productsPlainInputCreate = t.Object(
  {
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_discount_productsPlainInputUpdate = t.Object(
  {
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_discount_productsRelationsInputCreate = t.Object(
  {
    promotions: t.Optional(
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

export const promotion_discount_productsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotions: t.Partial(
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

export const promotion_discount_productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          product_option_id: t.Integer(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion_discount_products" },
  ),
);

export const promotion_discount_productsWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              product_option_id: t.Integer(),
              sale_price: t.Number(),
              sale_percent: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_discount_products" },
);

export const promotion_discount_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      product_option_id: t.Boolean(),
      sale_price: t.Boolean(),
      sale_percent: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_discount_productsInclude = t.Partial(
  t.Object(
    { promotions: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_discount_productsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_percent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_discount_products = t.Composite(
  [promotion_discount_productsPlain, promotion_discount_productsRelations],
  { additionalProperties: false },
);

export const promotion_discount_productsInputCreate = t.Composite(
  [
    promotion_discount_productsPlainInputCreate,
    promotion_discount_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_discount_productsInputUpdate = t.Composite(
  [
    promotion_discount_productsPlainInputUpdate,
    promotion_discount_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
