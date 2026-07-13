import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_product_imagesPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    url_image: __nullable__(t.String()),
    is_show: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const public_product_imagesRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const public_product_imagesPlainInputCreate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    is_show: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const public_product_imagesPlainInputUpdate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    is_show: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const public_product_imagesRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const public_product_imagesRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const public_product_imagesWhere = t.Partial(
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
          updated_at: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "public_product_images" },
  ),
);

export const public_product_imagesWhereUnique = t.Recursive(
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
              updated_at: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_product_images" },
);

export const public_product_imagesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      url_image: t.Boolean(),
      is_show: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_product_imagesInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const public_product_imagesOrderBy = t.Partial(
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

export const public_product_images = t.Composite(
  [public_product_imagesPlain, public_product_imagesRelations],
  { additionalProperties: false },
);

export const public_product_imagesInputCreate = t.Composite(
  [
    public_product_imagesPlainInputCreate,
    public_product_imagesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_product_imagesInputUpdate = t.Composite(
  [
    public_product_imagesPlainInputUpdate,
    public_product_imagesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
