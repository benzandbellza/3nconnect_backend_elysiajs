import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_discount_products_listPlain = t.Object(
  {
    promotion_type: __nullable__(t.String()),
    promotion_name: __nullable__(t.String()),
    company_name: __nullable__(t.String()),
    brand_name: __nullable__(t.String()),
    category_name: __nullable__(t.String()),
    mat_identity: __nullable__(t.String()),
    product_name: __nullable__(t.String()),
    unit: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    sale_price: __nullable__(t.Number()),
    sale_percent: __nullable__(t.Number()),
    promotion_start: __nullable__(t.Date()),
    promotion_end: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const vw_discount_products_listRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_discount_products_listPlainInputCreate = t.Object(
  {
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    company_name: t.Optional(__nullable__(t.String())),
    brand_name: t.Optional(__nullable__(t.String())),
    category_name: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_discount_products_listPlainInputUpdate = t.Object(
  {
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    company_name: t.Optional(__nullable__(t.String())),
    brand_name: t.Optional(__nullable__(t.String())),
    category_name: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_discount_products_listRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_discount_products_listRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_discount_products_listWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          promotion_type: t.String(),
          promotion_name: t.String(),
          company_name: t.String(),
          brand_name: t.String(),
          category_name: t.String(),
          mat_identity: t.String(),
          product_name: t.String(),
          unit: t.String(),
          online_price: t.Number(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
          promotion_start: t.Date(),
          promotion_end: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_discount_products_list" },
  ),
);

export const vw_discount_products_listWhereUnique = t.Recursive(
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
              promotion_type: t.String(),
              promotion_name: t.String(),
              company_name: t.String(),
              brand_name: t.String(),
              category_name: t.String(),
              mat_identity: t.String(),
              product_name: t.String(),
              unit: t.String(),
              online_price: t.Number(),
              sale_price: t.Number(),
              sale_percent: t.Number(),
              promotion_start: t.Date(),
              promotion_end: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_discount_products_list" },
);

export const vw_discount_products_listSelect = t.Partial(
  t.Object(
    {
      promotion_type: t.Boolean(),
      promotion_name: t.Boolean(),
      company_name: t.Boolean(),
      brand_name: t.Boolean(),
      category_name: t.Boolean(),
      mat_identity: t.Boolean(),
      product_name: t.Boolean(),
      unit: t.Boolean(),
      online_price: t.Boolean(),
      sale_price: t.Boolean(),
      sale_percent: t.Boolean(),
      promotion_start: t.Boolean(),
      promotion_end: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_discount_products_listInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_discount_products_listOrderBy = t.Partial(
  t.Object(
    {
      promotion_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
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
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_percent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_discount_products_list = t.Composite(
  [vw_discount_products_listPlain, vw_discount_products_listRelations],
  { additionalProperties: false },
);

export const vw_discount_products_listInputCreate = t.Composite(
  [
    vw_discount_products_listPlainInputCreate,
    vw_discount_products_listRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_discount_products_listInputUpdate = t.Composite(
  [
    vw_discount_products_listPlainInputUpdate,
    vw_discount_products_listRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
