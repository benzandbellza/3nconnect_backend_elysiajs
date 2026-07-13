import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_bundle_deal_get_productsPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    get_quantity: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_get_productsRelations = t.Object(
  {
    promotion_bundle_deal_free_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          bundle_deal_get_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          free_quantity: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
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

export const promotion_bundle_deal_get_productsPlainInputCreate = t.Object(
  { get_quantity: t.Optional(__nullable__(t.Integer())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_get_productsPlainInputUpdate = t.Object(
  { get_quantity: t.Optional(__nullable__(t.Integer())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_get_productsRelationsInputCreate = t.Object(
  {
    promotion_bundle_deal_free_products: t.Optional(
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

export const promotion_bundle_deal_get_productsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_free_products: t.Partial(
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

export const promotion_bundle_deal_get_productsWhere = t.Partial(
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
          get_quantity: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion_bundle_deal_get_products" },
  ),
);

export const promotion_bundle_deal_get_productsWhereUnique = t.Recursive(
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
              get_quantity: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_bundle_deal_get_products" },
);

export const promotion_bundle_deal_get_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      product_option_id: t.Boolean(),
      get_quantity: t.Boolean(),
      promotion_bundle_deal_free_products: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_get_productsInclude = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_free_products: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_get_productsOrderBy = t.Partial(
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
      get_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_get_products = t.Composite(
  [
    promotion_bundle_deal_get_productsPlain,
    promotion_bundle_deal_get_productsRelations,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_get_productsInputCreate = t.Composite(
  [
    promotion_bundle_deal_get_productsPlainInputCreate,
    promotion_bundle_deal_get_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_get_productsInputUpdate = t.Composite(
  [
    promotion_bundle_deal_get_productsPlainInputUpdate,
    promotion_bundle_deal_get_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
