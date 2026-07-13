import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_bundle_deal_free_productsPlain = t.Object(
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
);

export const promotion_bundle_deal_free_productsRelations = t.Object(
  {
    promotion_bundle_deal_get_products: __nullable__(
      t.Object(
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
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_free_productsPlainInputCreate = t.Object(
  { free_quantity: t.Optional(__nullable__(t.Integer())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_free_productsPlainInputUpdate = t.Object(
  { free_quantity: t.Optional(__nullable__(t.Integer())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_free_productsRelationsInputCreate = t.Object(
  {
    promotion_bundle_deal_get_products: t.Optional(
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

export const promotion_bundle_deal_free_productsRelationsInputUpdate =
  t.Partial(
    t.Object(
      {
        promotion_bundle_deal_get_products: t.Partial(
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

export const promotion_bundle_deal_free_productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          bundle_deal_get_id: t.Integer(),
          product_option_id: t.Integer(),
          free_quantity: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion_bundle_deal_free_products" },
  ),
);

export const promotion_bundle_deal_free_productsWhereUnique = t.Recursive(
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
              bundle_deal_get_id: t.Integer(),
              product_option_id: t.Integer(),
              free_quantity: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_bundle_deal_free_products" },
);

export const promotion_bundle_deal_free_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      bundle_deal_get_id: t.Boolean(),
      product_option_id: t.Boolean(),
      free_quantity: t.Boolean(),
      promotion_bundle_deal_get_products: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_free_productsInclude = t.Partial(
  t.Object(
    { promotion_bundle_deal_get_products: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_free_productsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bundle_deal_get_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_free_products = t.Composite(
  [
    promotion_bundle_deal_free_productsPlain,
    promotion_bundle_deal_free_productsRelations,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_free_productsInputCreate = t.Composite(
  [
    promotion_bundle_deal_free_productsPlainInputCreate,
    promotion_bundle_deal_free_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_free_productsInputUpdate = t.Composite(
  [
    promotion_bundle_deal_free_productsPlainInputUpdate,
    promotion_bundle_deal_free_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
