import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_product_payment_methodPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    payment_method_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const public_product_payment_methodRelations = t.Object(
  {
    payment_methods: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          name: t.String(),
          icon: t.String(),
          icon_color: t.String(),
          is_active: t.Boolean(),
          sort_order: t.Integer(),
          created_at: t.Date(),
          image_url: __nullable__(t.String()),
          category: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    products: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          product_name: __nullable__(t.String()),
          product_description: __nullable__(t.String()),
          company_id: __nullable__(t.Integer()),
          brand_id: __nullable__(t.Integer()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
          category_hierarchy: __nullable__(t.Any()),
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
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  { additionalProperties: false },
);

export const public_product_payment_methodPlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const public_product_payment_methodPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const public_product_payment_methodRelationsInputCreate = t.Object(
  {
    payment_methods: t.Optional(
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

export const public_product_payment_methodRelationsInputUpdate = t.Partial(
  t.Object(
    {
      payment_methods: t.Partial(
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

export const public_product_payment_methodWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_id: t.Integer(),
          created_at: t.Date(),
          updated_at: t.Date(),
          payment_method_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "public_product_payment_method" },
  ),
);

export const public_product_payment_methodWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              updated_at: t.Date(),
              payment_method_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_product_payment_method" },
);

export const public_product_payment_methodSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      payment_method_id: t.Boolean(),
      payment_methods: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_product_payment_methodInclude = t.Partial(
  t.Object(
    {
      payment_methods: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_product_payment_methodOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_method_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const public_product_payment_method = t.Composite(
  [public_product_payment_methodPlain, public_product_payment_methodRelations],
  { additionalProperties: false },
);

export const public_product_payment_methodInputCreate = t.Composite(
  [
    public_product_payment_methodPlainInputCreate,
    public_product_payment_methodRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_product_payment_methodInputUpdate = t.Composite(
  [
    public_product_payment_methodPlainInputUpdate,
    public_product_payment_methodRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
