import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_categoriesPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    slug: t.String(),
    parent_id: __nullable__(t.String()),
    ancestors: t.Array(t.String(), { additionalProperties: false }),
    level: t.Integer(),
    sort_order: t.Integer(),
    image_url: __nullable__(t.String()),
    is_active: t.Boolean(),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const product_categoriesRelations = t.Object(
  {
    product_categories: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          slug: t.String(),
          parent_id: __nullable__(t.String()),
          ancestors: t.Array(t.String(), { additionalProperties: false }),
          level: t.Integer(),
          sort_order: t.Integer(),
          image_url: __nullable__(t.String()),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
    ),
    other_product_categories: t.Array(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          slug: t.String(),
          parent_id: __nullable__(t.String()),
          ancestors: t.Array(t.String(), { additionalProperties: false }),
          level: t.Integer(),
          sort_order: t.Integer(),
          image_url: __nullable__(t.String()),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
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
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const product_categoriesPlainInputCreate = t.Object(
  {
    name: t.String(),
    slug: t.String(),
    ancestors: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    level: t.Optional(t.Integer()),
    sort_order: t.Optional(t.Integer()),
    image_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const product_categoriesPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    slug: t.Optional(t.String()),
    ancestors: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    level: t.Optional(t.Integer()),
    sort_order: t.Optional(t.Integer()),
    image_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const product_categoriesRelationsInputCreate = t.Object(
  {
    product_categories: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    other_product_categories: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
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
  { additionalProperties: false },
);

export const product_categoriesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      product_categories: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      other_product_categories: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
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
    { additionalProperties: false },
  ),
);

export const product_categoriesWhere = t.Partial(
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
          ancestors: t.Array(t.String(), { additionalProperties: false }),
          level: t.Integer(),
          sort_order: t.Integer(),
          image_url: t.String(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "product_categories" },
  ),
);

export const product_categoriesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), slug: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ slug: t.String() })],
          { additionalProperties: false },
        ),
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
              ancestors: t.Array(t.String(), { additionalProperties: false }),
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
  { $id: "product_categories" },
);

export const product_categoriesSelect = t.Partial(
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
      product_categories: t.Boolean(),
      other_product_categories: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const product_categoriesInclude = t.Partial(
  t.Object(
    {
      product_categories: t.Boolean(),
      other_product_categories: t.Boolean(),
      products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const product_categoriesOrderBy = t.Partial(
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
    { additionalProperties: false },
  ),
);

export const product_categories = t.Composite(
  [product_categoriesPlain, product_categoriesRelations],
  { additionalProperties: false },
);

export const product_categoriesInputCreate = t.Composite(
  [product_categoriesPlainInputCreate, product_categoriesRelationsInputCreate],
  { additionalProperties: false },
);

export const product_categoriesInputUpdate = t.Composite(
  [product_categoriesPlainInputUpdate, product_categoriesRelationsInputUpdate],
  { additionalProperties: false },
);
