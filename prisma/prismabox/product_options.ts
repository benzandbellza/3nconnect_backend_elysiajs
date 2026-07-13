import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_optionsPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    mat_identity: __nullable__(t.String()),
    option_name: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    min_price: __nullable__(t.Number()),
    created_at: t.Date(),
    row_no: __nullable__(t.Integer()),
    updated_at: __nullable__(t.Date()),
    is_stock: __nullable__(t.Boolean()),
    attributes_hierarchy: t.Array(t.Integer(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const product_optionsRelations = t.Object(
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
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const product_optionsPlainInputCreate = t.Object(
  {
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    min_price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(t.Date()),
    row_no: t.Optional(__nullable__(t.Integer())),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
    attributes_hierarchy: t.Array(t.Integer(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const product_optionsPlainInputUpdate = t.Object(
  {
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    min_price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(t.Date()),
    row_no: t.Optional(__nullable__(t.Integer())),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
    attributes_hierarchy: t.Optional(
      t.Array(t.Integer(), { additionalProperties: false }),
    ),
  },
  { additionalProperties: false },
);

export const product_optionsRelationsInputCreate = t.Object(
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
  { additionalProperties: false },
);

export const product_optionsRelationsInputUpdate = t.Partial(
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
    { additionalProperties: false },
  ),
);

export const product_optionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_id: t.Integer(),
          mat_identity: t.String(),
          option_name: t.String(),
          online_price: t.Number(),
          min_price: t.Number(),
          created_at: t.Date(),
          row_no: t.Integer(),
          updated_at: t.Date(),
          is_stock: t.Boolean(),
          attributes_hierarchy: t.Array(t.Integer(), {
            additionalProperties: false,
          }),
        },
        { additionalProperties: false },
      ),
    { $id: "product_options" },
  ),
);

export const product_optionsWhereUnique = t.Recursive(
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
              product_id: t.Integer(),
              mat_identity: t.String(),
              option_name: t.String(),
              online_price: t.Number(),
              min_price: t.Number(),
              created_at: t.Date(),
              row_no: t.Integer(),
              updated_at: t.Date(),
              is_stock: t.Boolean(),
              attributes_hierarchy: t.Array(t.Integer(), {
                additionalProperties: false,
              }),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "product_options" },
);

export const product_optionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      mat_identity: t.Boolean(),
      option_name: t.Boolean(),
      online_price: t.Boolean(),
      min_price: t.Boolean(),
      created_at: t.Boolean(),
      row_no: t.Boolean(),
      updated_at: t.Boolean(),
      is_stock: t.Boolean(),
      attributes_hierarchy: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const product_optionsInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const product_optionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_identity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      row_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_stock: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attributes_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const product_options = t.Composite(
  [product_optionsPlain, product_optionsRelations],
  { additionalProperties: false },
);

export const product_optionsInputCreate = t.Composite(
  [product_optionsPlainInputCreate, product_optionsRelationsInputCreate],
  { additionalProperties: false },
);

export const product_optionsInputUpdate = t.Composite(
  [product_optionsPlainInputUpdate, product_optionsRelationsInputUpdate],
  { additionalProperties: false },
);
