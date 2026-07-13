import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_promotion_flashsale_productsPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    sale_price: __nullable__(t.Integer()),
    sale_percent: __nullable__(t.Number()),
  },
  { additionalProperties: false },
);

export const public_promotion_flashsale_productsRelations = t.Object(
  {
    product_options: __nullable__(
      t.Object(
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
      ),
    ),
    promotion: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          proname: __nullable__(t.String()),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          filelink: __nullable__(t.String()),
          banner: __nullable__(t.String()),
          description: __nullable__(t.String()),
          type: __nullable__(t.String()),
          points_reward: __nullable__(t.Number()),
          max_claims: __nullable__(t.Integer()),
          current_claims: __nullable__(t.Integer()),
          voucher_id: __nullable__(t.Integer()),
          location_lat: __nullable__(t.Number()),
          location_lng: __nullable__(t.Number()),
          location_radius_m: __nullable__(t.Integer()),
          location_name: __nullable__(t.String()),
          conditions: __nullable__(t.String()),
          per_person_limit: __nullable__(t.Integer()),
          subtype: __nullable__(t.String()),
          status: __nullable__(t.Boolean()),
          sort_order: __nullable__(t.Integer()),
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

export const public_promotion_flashsale_productsPlainInputCreate = t.Object(
  {
    sale_price: t.Optional(__nullable__(t.Integer())),
    sale_percent: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const public_promotion_flashsale_productsPlainInputUpdate = t.Object(
  {
    sale_price: t.Optional(__nullable__(t.Integer())),
    sale_percent: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const public_promotion_flashsale_productsRelationsInputCreate = t.Object(
  {
    product_options: t.Optional(
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
    promotion: t.Optional(
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

export const public_promotion_flashsale_productsRelationsInputUpdate =
  t.Partial(
    t.Object(
      {
        product_options: t.Partial(
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
        promotion: t.Partial(
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

export const public_promotion_flashsale_productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          product_option_id: t.Integer(),
          sale_price: t.Integer(),
          sale_percent: t.Number(),
        },
        { additionalProperties: false },
      ),
    { $id: "public_promotion_flashsale_products" },
  ),
);

export const public_promotion_flashsale_productsWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              product_option_id: t.Integer(),
              sale_price: t.Integer(),
              sale_percent: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_promotion_flashsale_products" },
);

export const public_promotion_flashsale_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      product_option_id: t.Boolean(),
      sale_price: t.Boolean(),
      sale_percent: t.Boolean(),
      product_options: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_flashsale_productsInclude = t.Partial(
  t.Object(
    {
      product_options: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_flashsale_productsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_percent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_flashsale_products = t.Composite(
  [
    public_promotion_flashsale_productsPlain,
    public_promotion_flashsale_productsRelations,
  ],
  { additionalProperties: false },
);

export const public_promotion_flashsale_productsInputCreate = t.Composite(
  [
    public_promotion_flashsale_productsPlainInputCreate,
    public_promotion_flashsale_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_promotion_flashsale_productsInputUpdate = t.Composite(
  [
    public_promotion_flashsale_productsPlainInputUpdate,
    public_promotion_flashsale_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
