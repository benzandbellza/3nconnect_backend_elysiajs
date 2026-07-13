import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_giftPlain = t.Object(
  {
    id: t.Integer(),
    created_at: __nullable__(t.Date()),
    promotion_id: t.Integer(),
    trigger_product_id: __nullable__(t.Integer()),
    min_quantity: t.Integer(),
    min_amount: __nullable__(t.Number()),
    gift_product_id: t.Integer(),
    gift_quantity: t.Integer(),
  },
  { additionalProperties: false },
);

export const promotion_giftRelations = t.Object(
  {
    Productdata_promotion_gift_gift_product_idToProductdata: t.Object(
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
    promotion: t.Object(
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
    Productdata_promotion_gift_trigger_product_idToProductdata: __nullable__(
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
  },
  { additionalProperties: false },
);

export const promotion_giftPlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    min_quantity: t.Optional(t.Integer()),
    min_amount: t.Optional(__nullable__(t.Number())),
    gift_quantity: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const promotion_giftPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    min_quantity: t.Optional(t.Integer()),
    min_amount: t.Optional(__nullable__(t.Number())),
    gift_quantity: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const promotion_giftRelationsInputCreate = t.Object(
  {
    Productdata_promotion_gift_gift_product_idToProductdata: t.Object(
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
    promotion: t.Object(
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
    Productdata_promotion_gift_trigger_product_idToProductdata: t.Optional(
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

export const promotion_giftRelationsInputUpdate = t.Partial(
  t.Object(
    {
      Productdata_promotion_gift_gift_product_idToProductdata: t.Object(
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
      promotion: t.Object(
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
      Productdata_promotion_gift_trigger_product_idToProductdata: t.Partial(
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

export const promotion_giftWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          promotion_id: t.Integer(),
          trigger_product_id: t.Integer(),
          min_quantity: t.Integer(),
          min_amount: t.Number(),
          gift_product_id: t.Integer(),
          gift_quantity: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "promotion_gift" },
  ),
);

export const promotion_giftWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              promotion_id: t.Integer(),
              trigger_product_id: t.Integer(),
              min_quantity: t.Integer(),
              min_amount: t.Number(),
              gift_product_id: t.Integer(),
              gift_quantity: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_gift" },
);

export const promotion_giftSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      promotion_id: t.Boolean(),
      trigger_product_id: t.Boolean(),
      min_quantity: t.Boolean(),
      min_amount: t.Boolean(),
      gift_product_id: t.Boolean(),
      gift_quantity: t.Boolean(),
      Productdata_promotion_gift_gift_product_idToProductdata: t.Boolean(),
      promotion: t.Boolean(),
      Productdata_promotion_gift_trigger_product_idToProductdata: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_giftInclude = t.Partial(
  t.Object(
    {
      Productdata_promotion_gift_gift_product_idToProductdata: t.Boolean(),
      promotion: t.Boolean(),
      Productdata_promotion_gift_trigger_product_idToProductdata: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_giftOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      trigger_product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const promotion_gift = t.Composite(
  [promotion_giftPlain, promotion_giftRelations],
  { additionalProperties: false },
);

export const promotion_giftInputCreate = t.Composite(
  [promotion_giftPlainInputCreate, promotion_giftRelationsInputCreate],
  { additionalProperties: false },
);

export const promotion_giftInputUpdate = t.Composite(
  [promotion_giftPlainInputUpdate, promotion_giftRelationsInputUpdate],
  { additionalProperties: false },
);
