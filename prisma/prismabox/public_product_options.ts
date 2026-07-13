import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_product_optionsPlain = t.Object(
  {
    id: t.Integer(),
    product_id: __nullable__(t.Integer()),
    mat_identity: __nullable__(t.String()),
    option_name: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    min_price: __nullable__(t.Number()),
    created_at: __nullable__(t.Date()),
    row_no: __nullable__(t.Integer()),
    updated_at: __nullable__(t.Date()),
    attributes_hierarchy: __nullable__(t.Any()),
    productdata_id: __nullable__(t.Integer()),
    is_stock: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_optionsRelations = t.Object(
  {
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
    Productdata: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          MM_RPTMAT_MATUnit_ID: __nullable__(t.String()),
          MM_RPTMAT_MAT_ID: __nullable__(t.String()),
          MM_RPTMAT_MAT_Name: __nullable__(t.String()),
          MM_RPTMAT_Displayed_Unit_Category: __nullable__(t.String()),
          MM_RPTMAT_MAT_Category: __nullable__(t.String()),
          MM_RPTMAT_Status: __nullable__(t.String()),
          MM_RPTMAT_Default_Unit_Size: __nullable__(t.String()),
          MM_RPTMAT_Qty_Unit: __nullable__(t.String()),
          MM_RPTMAT_AGQty_Unit: __nullable__(t.String()),
          MM_RPTMAT_Description: __nullable__(t.String()),
          priceonline: __nullable__(t.Number()),
          detail: __nullable__(t.String()),
          tag: __nullable__(t.String()),
          productpic: __nullable__(t.String()),
          company_id: __nullable__(t.Integer()),
          rich_description: __nullable__(t.String()),
          brand: __nullable__(t.Integer()),
          MM_RPTMAT_MAT_Type: __nullable__(t.Integer()),
          onlinestatus: __nullable__(t.Boolean()),
          product_manager: __nullable__(t.String()),
          type_l2_id: __nullable__(t.Integer()),
          type_l3_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
    ),
    promotion_flashsale_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          sale_price: __nullable__(t.Integer()),
          sale_percent: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_optionsPlainInputCreate = t.Object(
  {
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    min_price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(__nullable__(t.Date())),
    row_no: t.Optional(__nullable__(t.Integer())),
    updated_at: t.Optional(__nullable__(t.Date())),
    attributes_hierarchy: t.Optional(__nullable__(t.Any())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_optionsPlainInputUpdate = t.Object(
  {
    mat_identity: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    min_price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(__nullable__(t.Date())),
    row_no: t.Optional(__nullable__(t.Integer())),
    updated_at: t.Optional(__nullable__(t.Date())),
    attributes_hierarchy: t.Optional(__nullable__(t.Any())),
    is_stock: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_product_optionsRelationsInputCreate = t.Object(
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
    Productdata: t.Optional(
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
    promotion_flashsale_products: t.Optional(
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

export const public_product_optionsRelationsInputUpdate = t.Partial(
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
      Productdata: t.Partial(
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
      promotion_flashsale_products: t.Partial(
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

export const public_product_optionsWhere = t.Partial(
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
          attributes_hierarchy: t.Any(),
          productdata_id: t.Integer(),
          is_stock: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "public_product_options" },
  ),
);

export const public_product_optionsWhereUnique = t.Recursive(
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
              product_id: t.Integer(),
              mat_identity: t.String(),
              option_name: t.String(),
              online_price: t.Number(),
              min_price: t.Number(),
              created_at: t.Date(),
              row_no: t.Integer(),
              updated_at: t.Date(),
              attributes_hierarchy: t.Any(),
              productdata_id: t.Integer(),
              is_stock: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_product_options" },
);

export const public_product_optionsSelect = t.Partial(
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
      attributes_hierarchy: t.Boolean(),
      productdata_id: t.Boolean(),
      is_stock: t.Boolean(),
      products: t.Boolean(),
      Productdata: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_optionsInclude = t.Partial(
  t.Object(
    {
      products: t.Boolean(),
      Productdata: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_optionsOrderBy = t.Partial(
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
      attributes_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productdata_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_stock: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_product_options = t.Composite(
  [public_product_optionsPlain, public_product_optionsRelations],
  { additionalProperties: false },
);

export const public_product_optionsInputCreate = t.Composite(
  [
    public_product_optionsPlainInputCreate,
    public_product_optionsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_product_optionsInputUpdate = t.Composite(
  [
    public_product_optionsPlainInputUpdate,
    public_product_optionsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
