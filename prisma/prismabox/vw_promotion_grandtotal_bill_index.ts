import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_promotion_grandtotal_bill_indexPlain = t.Object(
  {
    url_promotion_image: __nullable__(t.String()),
    promotion_id: __nullable__(t.Integer()),
    promotion_name: __nullable__(t.String()),
    promotion_description: __nullable__(t.String()),
    promotion_start: __nullable__(t.Date()),
    promotion_end: __nullable__(t.Date()),
    bundle_deal_grand_total_tiers_id: __nullable__(t.Integer()),
    level_no: __nullable__(t.Integer()),
    minimum_grand_total: __nullable__(t.Number()),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    url_image: __nullable__(t.String()),
    product_id: __nullable__(t.Integer()),
    product_name: __nullable__(t.String()),
    product_option_id: __nullable__(t.Integer()),
    option_name: __nullable__(t.String()),
    online_price: __nullable__(t.Number()),
    free_quantity: __nullable__(t.Integer()),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexPlainInputCreate = t.Object(
  {
    url_promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_description: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    level_no: t.Optional(__nullable__(t.Integer())),
    minimum_grand_total: t.Optional(__nullable__(t.Number())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    url_image: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexPlainInputUpdate = t.Object(
  {
    url_promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_description: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    level_no: t.Optional(__nullable__(t.Integer())),
    minimum_grand_total: t.Optional(__nullable__(t.Number())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    url_image: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    online_price: t.Optional(__nullable__(t.Number())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    customer_tiers: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_promotion_grandtotal_bill_indexWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          url_promotion_image: t.String(),
          promotion_id: t.Integer(),
          promotion_name: t.String(),
          promotion_description: t.String(),
          promotion_start: t.Date(),
          promotion_end: t.Date(),
          bundle_deal_grand_total_tiers_id: t.Integer(),
          level_no: t.Integer(),
          minimum_grand_total: t.Number(),
          is_accept_overlapse_promotion: t.Boolean(),
          url_image: t.String(),
          product_id: t.Integer(),
          product_name: t.String(),
          product_option_id: t.Integer(),
          option_name: t.String(),
          online_price: t.Number(),
          free_quantity: t.Integer(),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_promotion_grandtotal_bill_index" },
  ),
);

export const vw_promotion_grandtotal_bill_indexWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(t.Object({}, { additionalProperties: false }), {
          additionalProperties: false,
        }),
        t.Union([], { additionalProperties: false }),
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
              url_promotion_image: t.String(),
              promotion_id: t.Integer(),
              promotion_name: t.String(),
              promotion_description: t.String(),
              promotion_start: t.Date(),
              promotion_end: t.Date(),
              bundle_deal_grand_total_tiers_id: t.Integer(),
              level_no: t.Integer(),
              minimum_grand_total: t.Number(),
              is_accept_overlapse_promotion: t.Boolean(),
              url_image: t.String(),
              product_id: t.Integer(),
              product_name: t.String(),
              product_option_id: t.Integer(),
              option_name: t.String(),
              online_price: t.Number(),
              free_quantity: t.Integer(),
              customer_tiers: t.Array(t.String(), {
                additionalProperties: false,
              }),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_promotion_grandtotal_bill_index" },
);

export const vw_promotion_grandtotal_bill_indexSelect = t.Partial(
  t.Object(
    {
      url_promotion_image: t.Boolean(),
      promotion_id: t.Boolean(),
      promotion_name: t.Boolean(),
      promotion_description: t.Boolean(),
      promotion_start: t.Boolean(),
      promotion_end: t.Boolean(),
      bundle_deal_grand_total_tiers_id: t.Boolean(),
      level_no: t.Boolean(),
      minimum_grand_total: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      url_image: t.Boolean(),
      product_id: t.Boolean(),
      product_name: t.Boolean(),
      product_option_id: t.Boolean(),
      option_name: t.Boolean(),
      online_price: t.Boolean(),
      free_quantity: t.Boolean(),
      customer_tiers: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_grandtotal_bill_indexInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_promotion_grandtotal_bill_indexOrderBy = t.Partial(
  t.Object(
    {
      url_promotion_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bundle_deal_grand_total_tiers_id: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      level_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      minimum_grand_total: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      online_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_tiers: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_grandtotal_bill_index = t.Composite(
  [
    vw_promotion_grandtotal_bill_indexPlain,
    vw_promotion_grandtotal_bill_indexRelations,
  ],
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexInputCreate = t.Composite(
  [
    vw_promotion_grandtotal_bill_indexPlainInputCreate,
    vw_promotion_grandtotal_bill_indexRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_promotion_grandtotal_bill_indexInputUpdate = t.Composite(
  [
    vw_promotion_grandtotal_bill_indexPlainInputUpdate,
    vw_promotion_grandtotal_bill_indexRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
