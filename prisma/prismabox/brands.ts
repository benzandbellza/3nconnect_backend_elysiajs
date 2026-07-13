import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const brandsPlain = t.Object(
  {
    id: t.Integer(),
    brand_image: __nullable__(t.String()),
    url_image: __nullable__(t.String()),
    brand_name: t.String(),
    country_id: __nullable__(t.Integer()),
    is_active: t.Boolean(),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const brandsRelations = t.Object(
  {
    products: t.Array(
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

export const brandsPlainInputCreate = t.Object(
  {
    brand_image: t.Optional(__nullable__(t.String())),
    url_image: t.Optional(__nullable__(t.String())),
    brand_name: t.String(),
    is_active: t.Boolean(),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const brandsPlainInputUpdate = t.Object(
  {
    brand_image: t.Optional(__nullable__(t.String())),
    url_image: t.Optional(__nullable__(t.String())),
    brand_name: t.Optional(t.String()),
    is_active: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const brandsRelationsInputCreate = t.Object(
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

export const brandsRelationsInputUpdate = t.Partial(
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

export const brandsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          brand_image: t.String(),
          url_image: t.String(),
          brand_name: t.String(),
          country_id: t.Integer(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "brands" },
  ),
);

export const brandsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
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
              brand_image: t.String(),
              url_image: t.String(),
              brand_name: t.String(),
              country_id: t.Integer(),
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
  { $id: "brands" },
);

export const brandsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      brand_image: t.Boolean(),
      url_image: t.Boolean(),
      brand_name: t.Boolean(),
      country_id: t.Boolean(),
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

export const brandsInclude = t.Partial(
  t.Object(
    { products: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const brandsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      country_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const brands = t.Composite([brandsPlain, brandsRelations], {
  additionalProperties: false,
});

export const brandsInputCreate = t.Composite(
  [brandsPlainInputCreate, brandsRelationsInputCreate],
  { additionalProperties: false },
);

export const brandsInputUpdate = t.Composite(
  [brandsPlainInputUpdate, brandsRelationsInputUpdate],
  { additionalProperties: false },
);
