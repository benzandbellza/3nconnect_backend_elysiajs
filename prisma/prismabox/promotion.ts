import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotionPlain = t.Object(
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
);

export const promotionRelations = t.Object(
  {
    popup_image: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          image_url: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          start: __nullable__(t.Date()),
          end: __nullable__(t.Date()),
          tier: __nullable__(t.String()),
          promotion_id: __nullable__(t.Integer()),
          target_event_id: __nullable__(t.String()),
          target_seminar_dwid: __nullable__(t.String()),
          target_seminar_company: __nullable__(t.String()),
          weblink: __nullable__(t.String()),
          navigation: __nullable__(t.String()),
          target_reading_campaign_id: __nullable__(t.String()),
          segment_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    voucher: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          detail: __nullable__(t.String()),
          pic: __nullable__(t.String()),
          condition: __nullable__(t.String()),
          tier: __nullable__(t.String()),
          voucherpic: __nullable__(t.String()),
          type: t.String(),
          discount_value: t.Number(),
          max_discount: __nullable__(t.Number()),
          min_order: __nullable__(t.Number()),
          combinable: t.Boolean(),
          status: t.Boolean(),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          discount_type: __nullable__(t.String()),
          usage_limit: __nullable__(t.String()),
          redemption_method: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    promotion_analytics: t.Array(
      t.Object(
        {
          id: t.String(),
          promotion_id: t.Integer(),
          member_id: __nullable__(t.String()),
          event: t.String(),
          created_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
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
          minimum_grand_total: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
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
          sale_price: __nullable__(t.Integer()),
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
          points_multiplier: __nullable__(t.Integer()),
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
          min_amount: __nullable__(t.Integer()),
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
          sale_price: __nullable__(t.Integer()),
          sale_percent: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_gift: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    promotion_product: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          promotion_id: __nullable__(t.Integer()),
          product_id: __nullable__(t.Integer()),
          promotion_price: __nullable__(t.Number()),
          qty: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_redeem: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          promotion_id: __nullable__(t.Integer()),
          promotion_price: __nullable__(t.Number()),
          qty: __nullable__(t.Number()),
          rewards_id: t.String(),
          per_person_limit: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
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

export const promotionPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    proname: t.Optional(__nullable__(t.String())),
    startdate: t.Optional(__nullable__(t.Date())),
    enddate: t.Optional(__nullable__(t.Date())),
    filelink: t.Optional(__nullable__(t.String())),
    banner: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    type: t.Optional(__nullable__(t.String())),
    points_reward: t.Optional(__nullable__(t.Number())),
    max_claims: t.Optional(__nullable__(t.Integer())),
    current_claims: t.Optional(__nullable__(t.Integer())),
    location_lat: t.Optional(__nullable__(t.Number())),
    location_lng: t.Optional(__nullable__(t.Number())),
    location_radius_m: t.Optional(__nullable__(t.Integer())),
    location_name: t.Optional(__nullable__(t.String())),
    conditions: t.Optional(__nullable__(t.String())),
    per_person_limit: t.Optional(__nullable__(t.Integer())),
    subtype: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotionPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    proname: t.Optional(__nullable__(t.String())),
    startdate: t.Optional(__nullable__(t.Date())),
    enddate: t.Optional(__nullable__(t.Date())),
    filelink: t.Optional(__nullable__(t.String())),
    banner: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    type: t.Optional(__nullable__(t.String())),
    points_reward: t.Optional(__nullable__(t.Number())),
    max_claims: t.Optional(__nullable__(t.Integer())),
    current_claims: t.Optional(__nullable__(t.Integer())),
    location_lat: t.Optional(__nullable__(t.Number())),
    location_lng: t.Optional(__nullable__(t.Number())),
    location_radius_m: t.Optional(__nullable__(t.Integer())),
    location_name: t.Optional(__nullable__(t.String())),
    conditions: t.Optional(__nullable__(t.String())),
    per_person_limit: t.Optional(__nullable__(t.Integer())),
    subtype: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotionRelationsInputCreate = t.Object(
  {
    popup_image: t.Optional(
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
    voucher: t.Optional(
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
    promotion_analytics: t.Optional(
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
    promotion_gift: t.Optional(
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
    promotion_product: t.Optional(
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
    promotion_redeem: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotionRelationsInputUpdate = t.Partial(
  t.Object(
    {
      popup_image: t.Partial(
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
      voucher: t.Partial(
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
      promotion_analytics: t.Partial(
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
      promotion_gift: t.Partial(
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
      promotion_product: t.Partial(
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
      promotion_redeem: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          proname: t.String(),
          startdate: t.Date(),
          enddate: t.Date(),
          filelink: t.String(),
          banner: t.String(),
          description: t.String(),
          type: t.String(),
          points_reward: t.Number(),
          max_claims: t.Integer(),
          current_claims: t.Integer(),
          voucher_id: t.Integer(),
          location_lat: t.Number(),
          location_lng: t.Number(),
          location_radius_m: t.Integer(),
          location_name: t.String(),
          conditions: t.String(),
          per_person_limit: t.Integer(),
          subtype: t.String(),
          status: t.Boolean(),
          sort_order: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion" },
  ),
);

export const promotionWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              proname: t.String(),
              startdate: t.Date(),
              enddate: t.Date(),
              filelink: t.String(),
              banner: t.String(),
              description: t.String(),
              type: t.String(),
              points_reward: t.Number(),
              max_claims: t.Integer(),
              current_claims: t.Integer(),
              voucher_id: t.Integer(),
              location_lat: t.Number(),
              location_lng: t.Number(),
              location_radius_m: t.Integer(),
              location_name: t.String(),
              conditions: t.String(),
              per_person_limit: t.Integer(),
              subtype: t.String(),
              status: t.Boolean(),
              sort_order: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion" },
);

export const promotionSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      proname: t.Boolean(),
      startdate: t.Boolean(),
      enddate: t.Boolean(),
      filelink: t.Boolean(),
      banner: t.Boolean(),
      description: t.Boolean(),
      type: t.Boolean(),
      points_reward: t.Boolean(),
      max_claims: t.Boolean(),
      current_claims: t.Boolean(),
      voucher_id: t.Boolean(),
      location_lat: t.Boolean(),
      location_lng: t.Boolean(),
      location_radius_m: t.Boolean(),
      location_name: t.Boolean(),
      conditions: t.Boolean(),
      per_person_limit: t.Boolean(),
      subtype: t.Boolean(),
      status: t.Boolean(),
      sort_order: t.Boolean(),
      popup_image: t.Boolean(),
      voucher: t.Boolean(),
      promotion_analytics: t.Boolean(),
      promotion_bundle_deal_get_products: t.Boolean(),
      promotion_bundle_deal_grand_total_tiers: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_discount_products: t.Boolean(),
      promotion_extra_points_products: t.Boolean(),
      promotion_extra_points_tier_rules: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      promotion_gift: t.Boolean(),
      promotion_product: t.Boolean(),
      promotion_redeem: t.Boolean(),
      promotion_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotionInclude = t.Partial(
  t.Object(
    {
      popup_image: t.Boolean(),
      voucher: t.Boolean(),
      promotion_analytics: t.Boolean(),
      promotion_bundle_deal_get_products: t.Boolean(),
      promotion_bundle_deal_grand_total_tiers: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_discount_products: t.Boolean(),
      promotion_extra_points_products: t.Boolean(),
      promotion_extra_points_tier_rules: t.Boolean(),
      promotion_flashsale_products: t.Boolean(),
      promotion_gift: t.Boolean(),
      promotion_product: t.Boolean(),
      promotion_redeem: t.Boolean(),
      promotion_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotionOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      proname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      startdate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      enddate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      filelink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banner: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_reward: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      max_claims: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      current_claims: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_lat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_lng: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_radius_m: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      conditions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      per_person_limit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subtype: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sort_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion = t.Composite([promotionPlain, promotionRelations], {
  additionalProperties: false,
});

export const promotionInputCreate = t.Composite(
  [promotionPlainInputCreate, promotionRelationsInputCreate],
  { additionalProperties: false },
);

export const promotionInputUpdate = t.Composite(
  [promotionPlainInputUpdate, promotionRelationsInputUpdate],
  { additionalProperties: false },
);
