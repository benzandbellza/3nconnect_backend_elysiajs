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
    voucherpic: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
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
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
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
          expire_period_day: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
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
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customernoti: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          title: t.String(),
          message: __nullable__(t.String()),
          senddate: t.Date(),
          tier: __nullable__(t.String()),
          status: __nullable__(t.String()),
          sent_at: __nullable__(t.Date()),
          navigation: __nullable__(t.String()),
          age_range: __nullable__(t.String()),
          province: __nullable__(t.String()),
          specific_name: __nullable__(t.String()),
          send_on_birthday: __nullable__(t.Boolean()),
          weblink: __nullable__(t.String()),
          image: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
          target_type: __nullable__(t.String()),
          target_auth_ids: t.Array(t.String(), { additionalProperties: false }),
          sent_count: __nullable__(t.Integer()),
          target_promotion_id: __nullable__(t.Integer()),
          target_event_id: __nullable__(t.String()),
          target_seminar_dwid: __nullable__(t.String()),
          target_seminar_company: __nullable__(t.String()),
          send_channels: t.Array(t.String(), { additionalProperties: false }),
          segment_id: __nullable__(t.String()),
          target_customer_group_id: __nullable__(t.String()),
          targeting_logic: t.String(),
          click_tag_id: __nullable__(t.String()),
          target_tag_id: __nullable__(t.String()),
          target_tag_mode: __nullable__(t.String()),
          target_tag_date_from: __nullable__(t.Date()),
          target_tag_date_to: __nullable__(t.Date()),
          click_tag_ids: __nullable__(t.Any()),
          send_mode: t.String(),
          target_channel_config_ids: t.Array(t.String(), {
            additionalProperties: false,
          }),
          gift_voucher_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    customervoucher: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customer_id: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
          used: __nullable__(t.Boolean()),
          exp: __nullable__(t.Date()),
          use_detail: __nullable__(t.String()),
          used_at: __nullable__(t.Date()),
          voucherid: t.String(),
          gift_voucher_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    promotion: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          promotion_name: __nullable__(t.String()),
          promotion_start: __nullable__(t.Date()),
          promotion_end: __nullable__(t.Date()),
          filelink: __nullable__(t.String()),
          banner: __nullable__(t.String()),
          promotion_description: __nullable__(t.String()),
          promotion_type: __nullable__(t.String()),
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
          is_active: __nullable__(t.Boolean()),
          sort_order: __nullable__(t.Integer()),
          url_image: __nullable__(t.String()),
          promotion_image: __nullable__(t.String()),
          updated_at: __nullable__(t.Date()),
          is_accept_overlapse_promotion: __nullable__(t.Boolean()),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
          gift_voucher_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    promotion_claim_history: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: t.Integer(),
          user_id: t.String(),
          claimed_at: __nullable__(t.Date()),
          points_awarded: t.Integer(),
          voucher_id: __nullable__(t.Integer()),
          gift_voucher_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_voucher: t.Array(
      t.Object(
        {
          id: t.Integer(),
          promotion_id: __nullable__(t.Integer()),
          voucher_id: __nullable__(t.Integer()),
          created_at: __nullable__(t.Date()),
          gift_voucher_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    quiz_event_prizes: t.Array(
      t.Object(
        {
          id: t.String(),
          event_id: t.String(),
          rank: t.Integer(),
          prize_type: t.String(),
          reward_id: __nullable__(t.String()),
          points: __nullable__(t.Integer()),
          gift_voucher_id: __nullable__(t.Integer()),
          manual_label: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
    voucherpic: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
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
    voucherpic: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
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
    customernoti: t.Optional(
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
    customervoucher: t.Optional(
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
    promotion: t.Optional(
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
    promotion_claim_history: t.Optional(
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
    promotion_voucher: t.Optional(
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
    quiz_event_prizes: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
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
      customernoti: t.Partial(
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
      customervoucher: t.Partial(
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
      promotion: t.Partial(
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
      promotion_claim_history: t.Partial(
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
      promotion_voucher: t.Partial(
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
      quiz_event_prizes: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
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
          voucherpic: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "gift_voucher" },
  ),
);

export const gift_voucherWhereUnique = t.Recursive(
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
              voucherpic: t.String(),
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
      voucherpic: t.Boolean(),
      gift_voucher_campaign_voucher: t.Boolean(),
      gift_voucher_generic: t.Boolean(),
      gift_voucher_redeem_code: t.Boolean(),
      customernoti: t.Boolean(),
      customervoucher: t.Boolean(),
      promotion: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_voucher: t.Boolean(),
      quiz_event_prizes: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gift_voucherInclude = t.Partial(
  t.Object(
    {
      gift_voucher_campaign_voucher: t.Boolean(),
      gift_voucher_generic: t.Boolean(),
      gift_voucher_redeem_code: t.Boolean(),
      customernoti: t.Boolean(),
      customervoucher: t.Boolean(),
      promotion: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_voucher: t.Boolean(),
      quiz_event_prizes: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
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
      voucherpic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
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
