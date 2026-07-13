import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const productsPlain = t.Object(
  {
    id: t.Integer(),
    product_name: __nullable__(t.String()),
    product_description: __nullable__(t.String()),
    company_id: __nullable__(t.Integer()),
    brand_id: __nullable__(t.Integer()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    is_active: __nullable__(t.Boolean()),
    category_hierarchy: t.Array(t.String(), { additionalProperties: false }),
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
);

export const productsRelations = t.Object(
  {
    product_images: t.Array(
      t.Object(
        {
          id: t.Integer(),
          product_id: __nullable__(t.Integer()),
          url_image: __nullable__(t.String()),
          is_show: __nullable__(t.Boolean()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    product_options: t.Array(
      t.Object(
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
          attributes_hierarchy: t.Array(t.Integer(), {
            additionalProperties: false,
          }),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    product_payment_method: t.Array(
      t.Object(
        {
          id: t.Integer(),
          product_id: __nullable__(t.Integer()),
          qr_code_promptpay: __nullable__(t.Boolean()),
          visa_card: __nullable__(t.Boolean()),
          mobile_banking: __nullable__(t.Boolean()),
          credit_terms: __nullable__(t.Boolean()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    brands: __nullable__(
      t.Object(
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
      ),
    ),
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
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    companies: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          company_image: __nullable__(t.String()),
          url_image: __nullable__(t.String()),
          company_name: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const productsPlainInputCreate = t.Object(
  {
    product_name: t.Optional(__nullable__(t.String())),
    product_description: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    category_hierarchy: t.Array(t.String(), { additionalProperties: false }),
    unit: t.Optional(__nullable__(t.String())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    video_product: t.Optional(__nullable__(t.String())),
    condition_description: t.Optional(__nullable__(t.String())),
    warranty_description: t.Optional(__nullable__(t.String())),
    youtube_url: t.Optional(__nullable__(t.String())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    is_custom_options: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const productsPlainInputUpdate = t.Object(
  {
    product_name: t.Optional(__nullable__(t.String())),
    product_description: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    category_hierarchy: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    unit: t.Optional(__nullable__(t.String())),
    is_online_active: t.Optional(__nullable__(t.Boolean())),
    video_product: t.Optional(__nullable__(t.String())),
    condition_description: t.Optional(__nullable__(t.String())),
    warranty_description: t.Optional(__nullable__(t.String())),
    youtube_url: t.Optional(__nullable__(t.String())),
    is_pre_order: t.Optional(__nullable__(t.Boolean())),
    is_custom_options: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const productsRelationsInputCreate = t.Object(
  {
    product_images: t.Optional(
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
    product_options: t.Optional(
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
    product_payment_method: t.Optional(
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
    brands: t.Optional(
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
    companies: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const productsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      product_images: t.Partial(
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
      product_options: t.Partial(
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
      product_payment_method: t.Partial(
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
      brands: t.Partial(
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
      companies: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_name: t.String(),
          product_description: t.String(),
          company_id: t.Integer(),
          brand_id: t.Integer(),
          created_at: t.Date(),
          updated_at: t.Date(),
          is_active: t.Boolean(),
          category_hierarchy: t.Array(t.String(), {
            additionalProperties: false,
          }),
          unit: t.String(),
          is_online_active: t.Boolean(),
          category_id: t.String(),
          video_product: t.String(),
          condition_description: t.String(),
          warranty_description: t.String(),
          youtube_url: t.String(),
          is_pre_order: t.Boolean(),
          is_custom_options: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "products" },
  ),
);

export const productsWhereUnique = t.Recursive(
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
              product_name: t.String(),
              product_description: t.String(),
              company_id: t.Integer(),
              brand_id: t.Integer(),
              created_at: t.Date(),
              updated_at: t.Date(),
              is_active: t.Boolean(),
              category_hierarchy: t.Array(t.String(), {
                additionalProperties: false,
              }),
              unit: t.String(),
              is_online_active: t.Boolean(),
              category_id: t.String(),
              video_product: t.String(),
              condition_description: t.String(),
              warranty_description: t.String(),
              youtube_url: t.String(),
              is_pre_order: t.Boolean(),
              is_custom_options: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "products" },
);

export const productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_name: t.Boolean(),
      product_description: t.Boolean(),
      company_id: t.Boolean(),
      brand_id: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      category_hierarchy: t.Boolean(),
      unit: t.Boolean(),
      is_online_active: t.Boolean(),
      category_id: t.Boolean(),
      video_product: t.Boolean(),
      condition_description: t.Boolean(),
      warranty_description: t.Boolean(),
      youtube_url: t.Boolean(),
      is_pre_order: t.Boolean(),
      is_custom_options: t.Boolean(),
      product_images: t.Boolean(),
      product_options: t.Boolean(),
      product_payment_method: t.Boolean(),
      brands: t.Boolean(),
      product_categories: t.Boolean(),
      companies: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const productsInclude = t.Partial(
  t.Object(
    {
      product_images: t.Boolean(),
      product_options: t.Boolean(),
      product_payment_method: t.Boolean(),
      brands: t.Boolean(),
      product_categories: t.Boolean(),
      companies: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const productsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_online_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      video_product: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      condition_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      warranty_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      youtube_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_pre_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_custom_options: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const products = t.Composite([productsPlain, productsRelations], {
  additionalProperties: false,
});

export const productsInputCreate = t.Composite(
  [productsPlainInputCreate, productsRelationsInputCreate],
  { additionalProperties: false },
);

export const productsInputUpdate = t.Composite(
  [productsPlainInputUpdate, productsRelationsInputUpdate],
  { additionalProperties: false },
);
