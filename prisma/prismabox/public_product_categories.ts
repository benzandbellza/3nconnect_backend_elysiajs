import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_product_categoriesPlain = t.Object(
  {
    id: t.String(),
    name: __nullable__(t.String()),
    slug: __nullable__(t.String()),
    parent_id: __nullable__(t.String()),
    ancestors: __nullable__(t.Any()),
    level: __nullable__(t.Integer()),
    sort_order: __nullable__(t.Integer()),
    image_url: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_categoriesRelations = t.Object(
  {
    products: t.Array(
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
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_categoriesPlainInputCreate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    slug: t.Optional(__nullable__(t.String())),
    ancestors: t.Optional(__nullable__(t.Any())),
    level: t.Optional(__nullable__(t.Integer())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    image_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_categoriesPlainInputUpdate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    slug: t.Optional(__nullable__(t.String())),
    ancestors: t.Optional(__nullable__(t.Any())),
    level: t.Optional(__nullable__(t.Integer())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    image_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_categoriesRelationsInputCreate = t.Object(
  {
    products: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_categoriesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      products: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_categoriesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          slug: t.String(),
          parent_id: t.String(),
          ancestors: t.Any(),
          level: t.Integer(),
          sort_order: t.Integer(),
          image_url: t.String(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "public_product_categories" },
  ),
);

export const public_product_categoriesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
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
              id: t.String(),
              name: t.String(),
              slug: t.String(),
              parent_id: t.String(),
              ancestors: t.Any(),
              level: t.Integer(),
              sort_order: t.Integer(),
              image_url: t.String(),
              is_active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_product_categories" },
);

export const public_product_categoriesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      slug: t.Boolean(),
      parent_id: t.Boolean(),
      ancestors: t.Boolean(),
      level: t.Boolean(),
      sort_order: t.Boolean(),
      image_url: t.Boolean(),
      is_active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_categoriesInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_categoriesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      slug: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      parent_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ancestors: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      level: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sort_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_categories = t.Composite(
  [public_product_categoriesPlain, public_product_categoriesRelations],
  { additionalProperties: false },
);

export const public_product_categoriesInputCreate = t.Composite(
  [
    public_product_categoriesPlainInputCreate,
    public_product_categoriesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_product_categoriesInputUpdate = t.Composite(
  [
    public_product_categoriesPlainInputUpdate,
    public_product_categoriesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
