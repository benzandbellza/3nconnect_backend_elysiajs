import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_imagesPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    url_image: __nullable__(t.String()),
    is_show: __nullable__(t.Boolean()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const product_imagesRelations = t.Object(
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

export const product_imagesPlainInputCreate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    is_show: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const product_imagesPlainInputUpdate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    is_show: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const product_imagesRelationsInputCreate = t.Object(
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

export const product_imagesRelationsInputUpdate = t.Partial(
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

export const product_imagesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_id: t.Integer(),
          url_image: t.String(),
          is_show: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "product_images" },
  ),
);

export const product_imagesWhereUnique = t.Recursive(
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
              url_image: t.String(),
              is_show: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "product_images" },
);

export const product_imagesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      url_image: t.Boolean(),
      is_show: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const product_imagesInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const product_imagesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_show: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const product_images = t.Composite(
  [product_imagesPlain, product_imagesRelations],
  { additionalProperties: false },
);

export const product_imagesInputCreate = t.Composite(
  [product_imagesPlainInputCreate, product_imagesRelationsInputCreate],
  { additionalProperties: false },
);

export const product_imagesInputUpdate = t.Composite(
  [product_imagesPlainInputUpdate, product_imagesRelationsInputUpdate],
  { additionalProperties: false },
);
