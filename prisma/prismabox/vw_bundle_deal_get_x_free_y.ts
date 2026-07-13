import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_bundle_deal_get_x_free_yPlain = t.Object(
  {
    promotion_type: __nullable__(t.String()),
    promotion_name: __nullable__(t.String()),
    get_company_name: __nullable__(t.String()),
    get_brand_name: __nullable__(t.String()),
    get_product_category: __nullable__(t.String()),
    get_mat_identity: __nullable__(t.String()),
    get_product_name: __nullable__(t.String()),
    get_product_unit: __nullable__(t.String()),
    get_quantity: __nullable__(t.Integer()),
    free_company_name: __nullable__(t.String()),
    free_brand_name: __nullable__(t.String()),
    free_product_category: __nullable__(t.String()),
    free_mat_identity: __nullable__(t.String()),
    free_product_name: __nullable__(t.String()),
    free_product_unit: __nullable__(t.String()),
    free_quantity: __nullable__(t.Integer()),
    promotion_start: __nullable__(t.Date()),
    promotion_end: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yPlainInputCreate = t.Object(
  {
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    get_company_name: t.Optional(__nullable__(t.String())),
    get_brand_name: t.Optional(__nullable__(t.String())),
    get_product_category: t.Optional(__nullable__(t.String())),
    get_mat_identity: t.Optional(__nullable__(t.String())),
    get_product_name: t.Optional(__nullable__(t.String())),
    get_product_unit: t.Optional(__nullable__(t.String())),
    get_quantity: t.Optional(__nullable__(t.Integer())),
    free_company_name: t.Optional(__nullable__(t.String())),
    free_brand_name: t.Optional(__nullable__(t.String())),
    free_product_category: t.Optional(__nullable__(t.String())),
    free_mat_identity: t.Optional(__nullable__(t.String())),
    free_product_name: t.Optional(__nullable__(t.String())),
    free_product_unit: t.Optional(__nullable__(t.String())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yPlainInputUpdate = t.Object(
  {
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    get_company_name: t.Optional(__nullable__(t.String())),
    get_brand_name: t.Optional(__nullable__(t.String())),
    get_product_category: t.Optional(__nullable__(t.String())),
    get_mat_identity: t.Optional(__nullable__(t.String())),
    get_product_name: t.Optional(__nullable__(t.String())),
    get_product_unit: t.Optional(__nullable__(t.String())),
    get_quantity: t.Optional(__nullable__(t.Integer())),
    free_company_name: t.Optional(__nullable__(t.String())),
    free_brand_name: t.Optional(__nullable__(t.String())),
    free_product_category: t.Optional(__nullable__(t.String())),
    free_mat_identity: t.Optional(__nullable__(t.String())),
    free_product_name: t.Optional(__nullable__(t.String())),
    free_product_unit: t.Optional(__nullable__(t.String())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_bundle_deal_get_x_free_yWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          promotion_type: t.String(),
          promotion_name: t.String(),
          get_company_name: t.String(),
          get_brand_name: t.String(),
          get_product_category: t.String(),
          get_mat_identity: t.String(),
          get_product_name: t.String(),
          get_product_unit: t.String(),
          get_quantity: t.Integer(),
          free_company_name: t.String(),
          free_brand_name: t.String(),
          free_product_category: t.String(),
          free_mat_identity: t.String(),
          free_product_name: t.String(),
          free_product_unit: t.String(),
          free_quantity: t.Integer(),
          promotion_start: t.Date(),
          promotion_end: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_bundle_deal_get_x_free_y" },
  ),
);

export const vw_bundle_deal_get_x_free_yWhereUnique = t.Recursive(
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
              get_company_name: t.String(),
              get_brand_name: t.String(),
              get_product_category: t.String(),
              get_mat_identity: t.String(),
              get_product_name: t.String(),
              get_product_unit: t.String(),
              get_quantity: t.Integer(),
              free_company_name: t.String(),
              free_brand_name: t.String(),
              free_product_category: t.String(),
              free_mat_identity: t.String(),
              free_product_name: t.String(),
              free_product_unit: t.String(),
              free_quantity: t.Integer(),
              promotion_start: t.Date(),
              promotion_end: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_bundle_deal_get_x_free_y" },
);

export const vw_bundle_deal_get_x_free_ySelect = t.Partial(
  t.Object(
    {
      promotion_type: t.Boolean(),
      promotion_name: t.Boolean(),
      get_company_name: t.Boolean(),
      get_brand_name: t.Boolean(),
      get_product_category: t.Boolean(),
      get_mat_identity: t.Boolean(),
      get_product_name: t.Boolean(),
      get_product_unit: t.Boolean(),
      get_quantity: t.Boolean(),
      free_company_name: t.Boolean(),
      free_brand_name: t.Boolean(),
      free_product_category: t.Boolean(),
      free_mat_identity: t.Boolean(),
      free_product_name: t.Boolean(),
      free_product_unit: t.Boolean(),
      free_quantity: t.Boolean(),
      promotion_start: t.Boolean(),
      promotion_end: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_bundle_deal_get_x_free_yInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_bundle_deal_get_x_free_yOrderBy = t.Partial(
  t.Object(
    {
      promotion_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_brand_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_brand_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const vw_bundle_deal_get_x_free_y = t.Composite(
  [vw_bundle_deal_get_x_free_yPlain, vw_bundle_deal_get_x_free_yRelations],
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yInputCreate = t.Composite(
  [
    vw_bundle_deal_get_x_free_yPlainInputCreate,
    vw_bundle_deal_get_x_free_yRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_bundle_deal_get_x_free_yInputUpdate = t.Composite(
  [
    vw_bundle_deal_get_x_free_yPlainInputUpdate,
    vw_bundle_deal_get_x_free_yRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
