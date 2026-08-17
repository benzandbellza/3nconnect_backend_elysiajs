import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_promotion_products_indexPlain = t.Object(
  {
    product_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    url_image: __nullable__(t.String()),
    category_hierarchy: t.Array(t.String(), { additionalProperties: false }),
    product_name: __nullable__(t.String()),
    unit: __nullable__(t.String()),
    mat_identity: __nullable__(t.String()),
    option_name: __nullable__(t.String()),
    promotion_type: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    promotion_id: __nullable__(t.Integer()),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    sale_price: __nullable__(t.Number()),
    sale_percent: __nullable__(t.Number()),
    is_online_active: __nullable__(t.Boolean()),
    is_pre_order: __nullable__(t.Boolean()),
    company_name: __nullable__(t.String()),
    company_id: __nullable__(t.Integer()),
    quantity_limit: __nullable__(t.Integer()),
    quantity_sold: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const vw_promotion_products_indexRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_products_indexPlainInputCreate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    category_hierarchy: t.Array(t.String(), { additionalProperties: false }),
    product_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    promotion_type: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    company_name: t.Optional(__nullable__(t.String())),
    quantity_limit: t.Optional(__nullable__(t.Integer())),
    quantity_sold: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const vw_promotion_products_indexPlainInputUpdate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    category_hierarchy: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    product_name: t.Optional(__nullable__(t.String())),
    unit: t.Optional(__nullable__(t.String())),
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    promotion_type: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    sale_price: t.Optional(__nullable__(t.Number())),
    sale_percent: t.Optional(__nullable__(t.Number())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    company_name: t.Optional(__nullable__(t.String())),
    quantity_limit: t.Optional(__nullable__(t.Integer())),
    quantity_sold: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const vw_promotion_products_indexRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_products_indexRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_promotion_products_indexWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          product_id: t.Integer(),
          product_option_id: t.Integer(),
          url_image: t.String(),
          category_hierarchy: t.Array(t.String(), {
            additionalProperties: false,
          }),
          product_name: t.String(),
          unit: t.String(),
          mat_identity: t.String(),
          option_name: t.String(),
          promotion_type: t.String(),
          online_price: t.Number(),
          promotion_id: t.Integer(),
          is_accept_overlapse_promotion: t.Boolean(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
          is_online_active: t.Boolean(),
          is_pre_order: t.Boolean(),
          company_name: t.String(),
          company_id: t.Integer(),
          quantity_limit: t.Integer(),
          quantity_sold: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_promotion_products_index" },
  ),
);

export const vw_promotion_products_indexWhereUnique = t.Recursive(
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
              product_id: t.Integer(),
              product_option_id: t.Integer(),
              url_image: t.String(),
              category_hierarchy: t.Array(t.String(), {
                additionalProperties: false,
              }),
              product_name: t.String(),
              unit: t.String(),
              mat_identity: t.String(),
              option_name: t.String(),
              promotion_type: t.String(),
              online_price: t.Number(),
              promotion_id: t.Integer(),
              is_accept_overlapse_promotion: t.Boolean(),
              sale_price: t.Number(),
              sale_percent: t.Number(),
              is_online_active: t.Boolean(),
              is_pre_order: t.Boolean(),
              company_name: t.String(),
              company_id: t.Integer(),
              quantity_limit: t.Integer(),
              quantity_sold: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_promotion_products_index" },
);

export const vw_promotion_products_indexSelect = t.Partial(
  t.Object(
    {
      product_id: t.Boolean(),
      product_option_id: t.Boolean(),
      url_image: t.Boolean(),
      category_hierarchy: t.Boolean(),
      product_name: t.Boolean(),
      unit: t.Boolean(),
      mat_identity: t.Boolean(),
      option_name: t.Boolean(),
      promotion_type: t.Boolean(),
      online_price: t.Boolean(),
      promotion_id: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      sale_price: t.Boolean(),
      sale_percent: t.Boolean(),
      is_online_active: t.Boolean(),
      is_pre_order: t.Boolean(),
      company_name: t.Boolean(),
      company_id: t.Boolean(),
      quantity_limit: t.Boolean(),
      quantity_sold: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_products_indexInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_promotion_products_indexOrderBy = t.Partial(
  t.Object(
    {
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      sale_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_percent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_online_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_pre_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity_limit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity_sold: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_products_index = t.Composite(
  [vw_promotion_products_indexPlain, vw_promotion_products_indexRelations],
  { additionalProperties: false },
);

export const vw_promotion_products_indexInputCreate = t.Composite(
  [
    vw_promotion_products_indexPlainInputCreate,
    vw_promotion_products_indexRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_promotion_products_indexInputUpdate = t.Composite(
  [
    vw_promotion_products_indexPlainInputUpdate,
    vw_promotion_products_indexRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
