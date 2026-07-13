import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_sync_stock_ecommercePlain = t.Object(
  {
    id: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
    mat_unit_identity: __nullable__(t.String()),
    ecommerce_mat_identity: __nullable__(t.String()),
    mat_name: __nullable__(t.String()),
    mat_category_text: __nullable__(t.String()),
    mat_status: __nullable__(t.String()),
    mat_qty_unit: __nullable__(t.String()),
    mat_agqty_unit: __nullable__(t.String()),
    company_id: __nullable__(t.Integer()),
    company_name: __nullable__(t.String()),
    min_price: __nullable__(t.Number()),
    online_price: __nullable__(t.Number()),
    sale_option_name: __nullable__(t.String()),
    is_stock: __nullable__(t.Boolean()),
    attributes_hierarchy: t.Array(t.Integer(), { additionalProperties: false }),
    is_online_status: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const vw_sync_stock_ecommerceRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_sync_stock_ecommercePlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    mat_unit_identity: t.Optional(__nullable__(t.String())),
    ecommerce_mat_identity: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    mat_category_text: t.Optional(__nullable__(t.String())),
    mat_status: t.Optional(__nullable__(t.String())),
    mat_qty_unit: t.Optional(__nullable__(t.String())),
    mat_agqty_unit: t.Optional(__nullable__(t.String())),
    company_name: t.Optional(__nullable__(t.String())),
    min_price: t.Optional(__nullable__(t.Number())),
    online_price: t.Optional(__nullable__(t.Number())),
    sale_option_name: t.Optional(__nullable__(t.String())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
    attributes_hierarchy: t.Array(t.Integer(), { additionalProperties: false }),
    is_online_status: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_sync_stock_ecommercePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    mat_unit_identity: t.Optional(__nullable__(t.String())),
    ecommerce_mat_identity: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    mat_category_text: t.Optional(__nullable__(t.String())),
    mat_status: t.Optional(__nullable__(t.String())),
    mat_qty_unit: t.Optional(__nullable__(t.String())),
    mat_agqty_unit: t.Optional(__nullable__(t.String())),
    company_name: t.Optional(__nullable__(t.String())),
    min_price: t.Optional(__nullable__(t.Number())),
    online_price: t.Optional(__nullable__(t.Number())),
    sale_option_name: t.Optional(__nullable__(t.String())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
    attributes_hierarchy: t.Optional(
      t.Array(t.Integer(), { additionalProperties: false }),
    ),
    is_online_status: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_sync_stock_ecommerceRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_sync_stock_ecommerceRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_sync_stock_ecommerceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          mat_unit_identity: t.String(),
          ecommerce_mat_identity: t.String(),
          mat_name: t.String(),
          mat_category_text: t.String(),
          mat_status: t.String(),
          mat_qty_unit: t.String(),
          mat_agqty_unit: t.String(),
          company_id: t.Integer(),
          company_name: t.String(),
          min_price: t.Number(),
          online_price: t.Number(),
          sale_option_name: t.String(),
          is_stock: t.Boolean(),
          attributes_hierarchy: t.Array(t.Integer(), {
            additionalProperties: false,
          }),
          is_online_status: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_sync_stock_ecommerce" },
  ),
);

export const vw_sync_stock_ecommerceWhereUnique = t.Recursive(
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
              id: t.Integer(),
              created_at: t.Date(),
              mat_unit_identity: t.String(),
              ecommerce_mat_identity: t.String(),
              mat_name: t.String(),
              mat_category_text: t.String(),
              mat_status: t.String(),
              mat_qty_unit: t.String(),
              mat_agqty_unit: t.String(),
              company_id: t.Integer(),
              company_name: t.String(),
              min_price: t.Number(),
              online_price: t.Number(),
              sale_option_name: t.String(),
              is_stock: t.Boolean(),
              attributes_hierarchy: t.Array(t.Integer(), {
                additionalProperties: false,
              }),
              is_online_status: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_sync_stock_ecommerce" },
);

export const vw_sync_stock_ecommerceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      mat_unit_identity: t.Boolean(),
      ecommerce_mat_identity: t.Boolean(),
      mat_name: t.Boolean(),
      mat_category_text: t.Boolean(),
      mat_status: t.Boolean(),
      mat_qty_unit: t.Boolean(),
      mat_agqty_unit: t.Boolean(),
      company_id: t.Boolean(),
      company_name: t.Boolean(),
      min_price: t.Boolean(),
      online_price: t.Boolean(),
      sale_option_name: t.Boolean(),
      is_stock: t.Boolean(),
      attributes_hierarchy: t.Boolean(),
      is_online_status: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_sync_stock_ecommerceInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_sync_stock_ecommerceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_unit_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ecommerce_mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_category_text: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_qty_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_agqty_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_stock: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attributes_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_online_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_sync_stock_ecommerce = t.Composite(
  [vw_sync_stock_ecommercePlain, vw_sync_stock_ecommerceRelations],
  { additionalProperties: false },
);

export const vw_sync_stock_ecommerceInputCreate = t.Composite(
  [
    vw_sync_stock_ecommercePlainInputCreate,
    vw_sync_stock_ecommerceRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_sync_stock_ecommerceInputUpdate = t.Composite(
  [
    vw_sync_stock_ecommercePlainInputUpdate,
    vw_sync_stock_ecommerceRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
