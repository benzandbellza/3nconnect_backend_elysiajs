import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_extra_points_productsPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    points_multiplier: __nullable__(t.Number()),
  },
  { additionalProperties: false },
);

export const promotion_extra_points_productsRelations = t.Object(
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
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const promotion_extra_points_productsPlainInputCreate = t.Object(
  { points_multiplier: t.Optional(__nullable__(t.Number())) },
  { additionalProperties: false },
);

export const promotion_extra_points_productsPlainInputUpdate = t.Object(
  { points_multiplier: t.Optional(__nullable__(t.Number())) },
  { additionalProperties: false },
);

export const promotion_extra_points_productsRelationsInputCreate = t.Object(
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
  { additionalProperties: false },
);

export const promotion_extra_points_productsRelationsInputUpdate = t.Partial(
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
    { additionalProperties: false },
  ),
);

export const promotion_extra_points_productsWhere = t.Partial(
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
          points_multiplier: t.Number(),
        },
        { additionalProperties: false },
      ),
    { $id: "promotion_extra_points_products" },
  ),
);

export const promotion_extra_points_productsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
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
              points_multiplier: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_extra_points_products" },
);

export const promotion_extra_points_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      product_option_id: t.Boolean(),
      points_multiplier: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_extra_points_productsInclude = t.Partial(
  t.Object(
    { promotions: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const promotion_extra_points_productsOrderBy = t.Partial(
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
      points_multiplier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const promotion_extra_points_products = t.Composite(
  [
    promotion_extra_points_productsPlain,
    promotion_extra_points_productsRelations,
  ],
  { additionalProperties: false },
);

export const promotion_extra_points_productsInputCreate = t.Composite(
  [
    promotion_extra_points_productsPlainInputCreate,
    promotion_extra_points_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_extra_points_productsInputUpdate = t.Composite(
  [
    promotion_extra_points_productsPlainInputUpdate,
    promotion_extra_points_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
