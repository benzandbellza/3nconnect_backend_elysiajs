import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const gift_voucherPlain = t.Object(
  {
    id: t.Integer(),
    url_image: __nullable__(t.String()),
    voucher_image: __nullable__(t.String()),
    voucher_name: __nullable__(t.String()),
    voucher_description: __nullable__(t.String()),
    voucher_conditions: __nullable__(t.String()),
    campaign_start: __nullable__(t.Date()),
    campaign_end: __nullable__(t.Date()),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
    specific_customers: t.Array(t.String(), { additionalProperties: false }),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    is_limit_voucher: __nullable__(t.Boolean()),
    is_specific_customers: __nullable__(t.Boolean()),
    is_active: __nullable__(t.Boolean()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    gift_voucher_type: __nullable__(t.String()),
    gift_voucher_method: __nullable__(t.String()),
    voucher_uuid: t.String(),
    limited_total_quantity: __nullable__(t.Integer()),
    is_lifetime_period: __nullable__(t.Boolean()),
    usage_period_day: __nullable__(t.Integer()),
    event_trigger: __nullable__(t.String()),
    tier_trigger_name: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const gift_voucherRelations = t.Object(
  {
    gift_voucher_campaign_voucher: t.Array(
      t.Object(
        {
          id: t.Integer(),
          gift_voucher_id: __nullable__(t.Integer()),
          generic_voucher_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    gift_voucher_generic: t.Array(
      t.Object(
        {
          id: t.Integer(),
          gift_voucher_id: __nullable__(t.Integer()),
          discount_type: __nullable__(t.String()),
          min_purchase: __nullable__(t.Number()),
          percent_discount: __nullable__(t.Number()),
          max_discount: __nullable__(t.Number()),
          usage_period_day: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    gift_voucher_redeem_code: t.Array(
      t.Object(
        {
          id: t.Integer(),
          gift_voucher_id: __nullable__(t.Integer()),
          redeem_code: __nullable__(t.String()),
          max_discount: __nullable__(t.Number()),
          max_usage_per_customer: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const gift_voucherPlainInputCreate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    voucher_image: t.Optional(__nullable__(t.String())),
    voucher_name: t.Optional(__nullable__(t.String())),
    voucher_description: t.Optional(__nullable__(t.String())),
    voucher_conditions: t.Optional(__nullable__(t.String())),
    campaign_start: t.Optional(__nullable__(t.Date())),
    campaign_end: t.Optional(__nullable__(t.Date())),
    customer_tiers: t.Array(t.String(), { additionalProperties: false }),
    specific_customers: t.Array(t.String(), { additionalProperties: false }),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    is_limit_voucher: t.Optional(__nullable__(t.Boolean())),
    is_specific_customers: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    gift_voucher_type: t.Optional(__nullable__(t.String())),
    gift_voucher_method: t.Optional(__nullable__(t.String())),
    limited_total_quantity: t.Optional(__nullable__(t.Integer())),
    is_lifetime_period: t.Optional(__nullable__(t.Boolean())),
    usage_period_day: t.Optional(__nullable__(t.Integer())),
    event_trigger: t.Optional(__nullable__(t.String())),
    tier_trigger_name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const gift_voucherPlainInputUpdate = t.Object(
  {
    url_image: t.Optional(__nullable__(t.String())),
    voucher_image: t.Optional(__nullable__(t.String())),
    voucher_name: t.Optional(__nullable__(t.String())),
    voucher_description: t.Optional(__nullable__(t.String())),
    voucher_conditions: t.Optional(__nullable__(t.String())),
    campaign_start: t.Optional(__nullable__(t.Date())),
    campaign_end: t.Optional(__nullable__(t.Date())),
    customer_tiers: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    specific_customers: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    is_limit_voucher: t.Optional(__nullable__(t.Boolean())),
    is_specific_customers: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    gift_voucher_type: t.Optional(__nullable__(t.String())),
    gift_voucher_method: t.Optional(__nullable__(t.String())),
    limited_total_quantity: t.Optional(__nullable__(t.Integer())),
    is_lifetime_period: t.Optional(__nullable__(t.Boolean())),
    usage_period_day: t.Optional(__nullable__(t.Integer())),
    event_trigger: t.Optional(__nullable__(t.String())),
    tier_trigger_name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const gift_voucherRelationsInputCreate = t.Object(
  {
    gift_voucher_campaign_voucher: t.Optional(
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
    gift_voucher_generic: t.Optional(
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
    gift_voucher_redeem_code: t.Optional(
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

export const gift_voucherRelationsInputUpdate = t.Partial(
  t.Object(
    {
      gift_voucher_campaign_voucher: t.Partial(
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
      gift_voucher_generic: t.Partial(
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
      gift_voucher_redeem_code: t.Partial(
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

export const gift_voucherWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          url_image: t.String(),
          voucher_image: t.String(),
          voucher_name: t.String(),
          voucher_description: t.String(),
          voucher_conditions: t.String(),
          campaign_start: t.Date(),
          campaign_end: t.Date(),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
          specific_customers: t.Array(t.String(), {
            additionalProperties: false,
          }),
          is_accept_overlapse_promotion: t.Boolean(),
          is_limit_voucher: t.Boolean(),
          is_specific_customers: t.Boolean(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
          gift_voucher_type: t.String(),
          gift_voucher_method: t.String(),
          voucher_uuid: t.String(),
          limited_total_quantity: t.Integer(),
          is_lifetime_period: t.Boolean(),
          usage_period_day: t.Integer(),
          event_trigger: t.String(),
          tier_trigger_name: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "gift_voucher" },
  ),
);

export const gift_voucherWhereUnique = t.Recursive(
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
              voucher_image: t.String(),
              voucher_name: t.String(),
              voucher_description: t.String(),
              voucher_conditions: t.String(),
              campaign_start: t.Date(),
              campaign_end: t.Date(),
              customer_tiers: t.Array(t.String(), {
                additionalProperties: false,
              }),
              specific_customers: t.Array(t.String(), {
                additionalProperties: false,
              }),
              is_accept_overlapse_promotion: t.Boolean(),
              is_limit_voucher: t.Boolean(),
              is_specific_customers: t.Boolean(),
              is_active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
              gift_voucher_type: t.String(),
              gift_voucher_method: t.String(),
              voucher_uuid: t.String(),
              limited_total_quantity: t.Integer(),
              is_lifetime_period: t.Boolean(),
              usage_period_day: t.Integer(),
              event_trigger: t.String(),
              tier_trigger_name: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "gift_voucher" },
);

export const gift_voucherSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      url_image: t.Boolean(),
      voucher_image: t.Boolean(),
      voucher_name: t.Boolean(),
      voucher_description: t.Boolean(),
      voucher_conditions: t.Boolean(),
      campaign_start: t.Boolean(),
      campaign_end: t.Boolean(),
      customer_tiers: t.Boolean(),
      specific_customers: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      is_limit_voucher: t.Boolean(),
      is_specific_customers: t.Boolean(),
      is_active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      gift_voucher_type: t.Boolean(),
      gift_voucher_method: t.Boolean(),
      voucher_uuid: t.Boolean(),
      limited_total_quantity: t.Boolean(),
      is_lifetime_period: t.Boolean(),
      usage_period_day: t.Boolean(),
      event_trigger: t.Boolean(),
      tier_trigger_name: t.Boolean(),
      gift_voucher_campaign_voucher: t.Boolean(),
      gift_voucher_generic: t.Boolean(),
      gift_voucher_redeem_code: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const gift_voucherInclude = t.Partial(
  t.Object(
    {
      gift_voucher_campaign_voucher: t.Boolean(),
      gift_voucher_generic: t.Boolean(),
      gift_voucher_redeem_code: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const gift_voucherOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      url_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_conditions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      campaign_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      campaign_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_tiers: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      specific_customers: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      is_limit_voucher: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_specific_customers: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      gift_voucher_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_voucher_method: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_uuid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      limited_total_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_lifetime_period: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      usage_period_day: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_trigger: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier_trigger_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const gift_voucher = t.Composite(
  [gift_voucherPlain, gift_voucherRelations],
  { additionalProperties: false },
);

export const gift_voucherInputCreate = t.Composite(
  [gift_voucherPlainInputCreate, gift_voucherRelationsInputCreate],
  { additionalProperties: false },
);

export const gift_voucherInputUpdate = t.Composite(
  [gift_voucherPlainInputUpdate, gift_voucherRelationsInputUpdate],
  { additionalProperties: false },
);
