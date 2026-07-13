import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_promotion_bundle_deal_indexPlain = t.Object(
  {
    promotion_id: __nullable__(t.Integer()),
    promotion_name: __nullable__(t.String()),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    url_product_image: __nullable__(t.String()),
    get_product_option_id: __nullable__(t.Integer()),
    get_product_name: __nullable__(t.String()),
    get_product_price: __nullable__(t.Number()),
    get_quantity: __nullable__(t.Integer()),
    get_product_unit: __nullable__(t.String()),
    free_url_image: __nullable__(t.String()),
    free_product_option_id: __nullable__(t.Integer()),
    free_product_name: __nullable__(t.String()),
    free_product_price: __nullable__(t.Number()),
    free_quantity: __nullable__(t.Integer()),
    free_product_unit: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexPlainInputCreate = t.Object(
  {
    promotion_name: t.Optional(__nullable__(t.String())),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    url_product_image: t.Optional(__nullable__(t.String())),
    get_product_name: t.Optional(__nullable__(t.String())),
    get_product_price: t.Optional(__nullable__(t.Number())),
    get_quantity: t.Optional(__nullable__(t.Integer())),
    get_product_unit: t.Optional(__nullable__(t.String())),
    free_url_image: t.Optional(__nullable__(t.String())),
    free_product_name: t.Optional(__nullable__(t.String())),
    free_product_price: t.Optional(__nullable__(t.Number())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    free_product_unit: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexPlainInputUpdate = t.Object(
  {
    promotion_name: t.Optional(__nullable__(t.String())),
    customer_tiers: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    url_product_image: t.Optional(__nullable__(t.String())),
    get_product_name: t.Optional(__nullable__(t.String())),
    get_product_price: t.Optional(__nullable__(t.Number())),
    get_quantity: t.Optional(__nullable__(t.Integer())),
    get_product_unit: t.Optional(__nullable__(t.String())),
    free_url_image: t.Optional(__nullable__(t.String())),
    free_product_name: t.Optional(__nullable__(t.String())),
    free_product_price: t.Optional(__nullable__(t.Number())),
    free_quantity: t.Optional(__nullable__(t.Integer())),
    free_product_unit: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_promotion_bundle_deal_indexWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          promotion_id: t.Integer(),
          promotion_name: t.String(),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
          is_accept_overlapse_promotion: t.Boolean(),
          url_product_image: t.String(),
          get_product_option_id: t.Integer(),
          get_product_name: t.String(),
          get_product_price: t.Number(),
          get_quantity: t.Integer(),
          get_product_unit: t.String(),
          free_url_image: t.String(),
          free_product_option_id: t.Integer(),
          free_product_name: t.String(),
          free_product_price: t.Number(),
          free_quantity: t.Integer(),
          free_product_unit: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_promotion_bundle_deal_index" },
  ),
);

export const vw_promotion_bundle_deal_indexWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              promotion_name: t.String(),
              customer_tiers: t.Array(t.String(), {
                additionalProperties: false,
              }),
              is_accept_overlapse_promotion: t.Boolean(),
              url_product_image: t.String(),
              get_product_option_id: t.Integer(),
              get_product_name: t.String(),
              get_product_price: t.Number(),
              get_quantity: t.Integer(),
              get_product_unit: t.String(),
              free_url_image: t.String(),
              free_product_option_id: t.Integer(),
              free_product_name: t.String(),
              free_product_price: t.Number(),
              free_quantity: t.Integer(),
              free_product_unit: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_promotion_bundle_deal_index" },
);

export const vw_promotion_bundle_deal_indexSelect = t.Partial(
  t.Object(
    {
      promotion_id: t.Boolean(),
      promotion_name: t.Boolean(),
      customer_tiers: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      url_product_image: t.Boolean(),
      get_product_option_id: t.Boolean(),
      get_product_name: t.Boolean(),
      get_product_price: t.Boolean(),
      get_quantity: t.Boolean(),
      get_product_unit: t.Boolean(),
      free_url_image: t.Boolean(),
      free_product_option_id: t.Boolean(),
      free_product_name: t.Boolean(),
      free_product_price: t.Boolean(),
      free_quantity: t.Boolean(),
      free_product_unit: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_bundle_deal_indexInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_promotion_bundle_deal_indexOrderBy = t.Partial(
  t.Object(
    {
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_tiers: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      url_product_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_product_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      free_product_unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_bundle_deal_index = t.Composite(
  [
    vw_promotion_bundle_deal_indexPlain,
    vw_promotion_bundle_deal_indexRelations,
  ],
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexInputCreate = t.Composite(
  [
    vw_promotion_bundle_deal_indexPlainInputCreate,
    vw_promotion_bundle_deal_indexRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_promotion_bundle_deal_indexInputUpdate = t.Composite(
  [
    vw_promotion_bundle_deal_indexPlainInputUpdate,
    vw_promotion_bundle_deal_indexRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
