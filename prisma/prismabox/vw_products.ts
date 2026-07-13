import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_productsPlain = t.Object(
  {
    company_name: __nullable__(t.String()),
    brand_name: __nullable__(t.String()),
    category_name: __nullable__(t.String()),
    mat_identity: __nullable__(t.String()),
    product_name: __nullable__(t.String()),
    option_name: __nullable__(t.String()),
    unit: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    product_option_id: __nullable__(t.Integer()),
    url_image: __nullable__(t.String()),
    is_online_active: __nullable__(t.Boolean()),
    is_pre_order: __nullable__(t.Boolean()),
    is_active: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const vw_productsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_productsPlainInputCreate = t.Object(
  {
    company_name: t.Optional(__nullable__(t.String())),
    brand_name: t.Optional(__nullable__(t.String())),
    category_name: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    url_image: t.Optional(__nullable__(t.String())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_productsPlainInputUpdate = t.Object(
  {
    company_name: t.Optional(__nullable__(t.String())),
    brand_name: t.Optional(__nullable__(t.String())),
    category_name: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    url_image: t.Optional(__nullable__(t.String())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_productsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_productsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          company_name: t.String(),
          brand_name: t.String(),
          category_name: t.String(),
          mat_identity: t.String(),
          product_name: t.String(),
          option_name: t.String(),
          unit: t.String(),
          online_price: t.Number(),
          product_option_id: t.Integer(),
          url_image: t.String(),
          is_online_active: t.Boolean(),
          is_pre_order: t.Boolean(),
          is_active: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_products" },
  ),
);

export const vw_productsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(t.Object({}, { additionalProperties: false }), {
          additionalProperties: false,
        }),
        t.Union([], { additionalProperties: false }),
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
              company_name: t.String(),
              brand_name: t.String(),
              category_name: t.String(),
              mat_identity: t.String(),
              product_name: t.String(),
              option_name: t.String(),
              unit: t.String(),
              online_price: t.Number(),
              product_option_id: t.Integer(),
              url_image: t.String(),
              is_online_active: t.Boolean(),
              is_pre_order: t.Boolean(),
              is_active: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_products" },
);

export const vw_productsSelect = t.Partial(
  t.Object(
    {
      company_name: t.Boolean(),
      brand_name: t.Boolean(),
      category_name: t.Boolean(),
      mat_identity: t.Boolean(),
      product_name: t.Boolean(),
      option_name: t.Boolean(),
      unit: t.Boolean(),
      online_price: t.Boolean(),
      product_option_id: t.Boolean(),
      url_image: t.Boolean(),
      is_online_active: t.Boolean(),
      is_pre_order: t.Boolean(),
      is_active: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_productsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_productsOrderBy = t.Partial(
  t.Object(
    {
      company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_online_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_pre_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_products = t.Composite(
  [vw_productsPlain, vw_productsRelations],
  { additionalProperties: false },
);

export const vw_productsInputCreate = t.Composite(
  [vw_productsPlainInputCreate, vw_productsRelationsInputCreate],
  { additionalProperties: false },
);

export const vw_productsInputUpdate = t.Composite(
  [vw_productsPlainInputUpdate, vw_productsRelationsInputUpdate],
  { additionalProperties: false },
);
