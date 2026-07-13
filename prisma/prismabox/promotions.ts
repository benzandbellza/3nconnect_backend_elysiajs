import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotionsPlain = t.Object(
  {
    id: t.Integer(),
    url_image: __nullable__(t.String()),
    promotion_image: __nullable__(t.String()),
    promotion_name: __nullable__(t.String()),
    promotion_type: __nullable__(t.String()),
    promotion_start: __nullable__(t.Date()),
    promotion_end: __nullable__(t.Date()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    is_active: __nullable__(t.Boolean()),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    promotion_description: __nullable__(t.String()),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const promotionsRelations = t.Object(
  {
    promotion_bundle_deal_get_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          get_quantity: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_bundle_deal_grand_total_tiers: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          level_no: __nullable__(t.Integer()),
          minimum_grand_total: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_discount_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          sale_price: __nullable__(t.Number()),
          sale_percent: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_extra_points_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          points_multiplier: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_extra_points_tier_rules: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          level_no: __nullable__(t.Integer()),
          min_amount: __nullable__(t.Number()),
          points_multiplier: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_flashsale_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          sale_price: __nullable__(t.Number()),
          sale_percent: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const promotionsPlainInputCreate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    promotion_description: t.Optional(__nullable__(t.String())),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const promotionsPlainInputUpdate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_type: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    promotion_description: t.Optional(__nullable__(t.String())),
    customer_tiers: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  { additionalProperties: false },
);

export const promotionsRelationsInputCreate = t.Object(
  {
    promotion_bundle_deal_get_products: t.Optional(
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
    promotion_bundle_deal_grand_total_tiers: t.Optional(
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
    promotion_discount_products: t.Optional(
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
    promotion_extra_points_products: t.Optional(
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
    promotion_extra_points_tier_rules: t.Optional(
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
  { additionalProperties: false },
);

export const promotionsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_get_products: t.Partial(
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
      promotion_bundle_deal_grand_total_tiers: t.Partial(
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
      promotion_discount_products: t.Partial(
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
      promotion_extra_points_products: t.Partial(
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
      promotion_extra_points_tier_rules: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const promotionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          url_image: t.String(),
          promotion_image: t.String(),
          promotion_name: t.String(),
          promotion_type: t.String(),
          promotion_start: t.Date(),
          promotion_end: t.Date(),
          created_at: t.Date(),
          updated_at: t.Date(),
          is_active: t.Boolean(),
          is_accept_overlapse_promotion: t.Boolean(),
          promotion_description: t.String(),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
        },
        { additionalProperties: false },
      ),
    { $id: "promotions" },
  ),
);

export const promotionsWhereUnique = t.Recursive(
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
              url_image: t.String(),
              promotion_image: t.String(),
              promotion_name: t.String(),
              promotion_type: t.String(),
              promotion_start: t.Date(),
              promotion_end: t.Date(),
              created_at: t.Date(),
              updated_at: t.Date(),
              is_active: t.Boolean(),
              is_accept_overlapse_promotion: t.Boolean(),
              promotion_description: t.String(),
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
  { $id: "promotions" },
);

export const promotionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      url_image: t.Boolean(),
      promotion_image: t.Boolean(),
      promotion_name: t.Boolean(),
      promotion_type: t.Boolean(),
      promotion_start: t.Boolean(),
      promotion_end: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      promotion_description: t.Boolean(),
      customer_tiers: t.Boolean(),
      promotion_bundle_deal_get_products: t.Boolean(),
      promotion_bundle_deal_grand_total_tiers: t.Boolean(),
      promotion_discount_products: t.Boolean(),
      promotion_extra_points_products: t.Boolean(),
      promotion_extra_points_tier_rules: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotionsInclude = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_get_products: t.Boolean(),
      promotion_bundle_deal_grand_total_tiers: t.Boolean(),
      promotion_discount_products: t.Boolean(),
      promotion_extra_points_products: t.Boolean(),
      promotion_extra_points_tier_rules: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      promotion_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_tiers: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const promotions = t.Composite([promotionsPlain, promotionsRelations], {
  additionalProperties: false,
});

export const promotionsInputCreate = t.Composite(
  [promotionsPlainInputCreate, promotionsRelationsInputCreate],
  { additionalProperties: false },
);

export const promotionsInputUpdate = t.Composite(
  [promotionsPlainInputUpdate, promotionsRelationsInputUpdate],
  { additionalProperties: false },
);
