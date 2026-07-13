import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const voucherPlain = t.Object(
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
);

export const voucherRelations = t.Object(
  {
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
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    order: t.Array(
      t.Object(
        {
          created_at: t.Date(),
          member_id: __nullable__(t.String()),
          invoicehead_id: __nullable__(t.Integer()),
          delivery: __nullable__(t.String()),
          payment_type: __nullable__(t.Integer()),
          payment_date: __nullable__(t.Date()),
          parmanet_referrence: __nullable__(t.String()),
          id: t.String(),
          status: t.String(),
          total_amount: __nullable__(t.Number()),
          subtotal: __nullable__(t.Number()),
          discount: __nullable__(t.Number()),
          shipping_fee: __nullable__(t.Number()),
          note: __nullable__(t.String()),
          invoice: __nullable__(t.String()),
          log: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
          voucher_discount: __nullable__(t.Number()),
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

export const voucherPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    name: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    pic: t.Optional(__nullable__(t.String())),
    condition: t.Optional(__nullable__(t.String())),
    tier: t.Optional(__nullable__(t.String())),
    voucherpic: t.Optional(__nullable__(t.String())),
    type: t.Optional(t.String()),
    discount_value: t.Optional(t.Number()),
    max_discount: t.Optional(__nullable__(t.Number())),
    min_order: t.Optional(__nullable__(t.Number())),
    combinable: t.Optional(t.Boolean()),
    status: t.Optional(t.Boolean()),
    startdate: t.Optional(__nullable__(t.Date())),
    enddate: t.Optional(__nullable__(t.Date())),
    discount_type: t.Optional(__nullable__(t.String())),
    usage_limit: t.Optional(__nullable__(t.String())),
    redemption_method: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const voucherPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    name: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    pic: t.Optional(__nullable__(t.String())),
    condition: t.Optional(__nullable__(t.String())),
    tier: t.Optional(__nullable__(t.String())),
    voucherpic: t.Optional(__nullable__(t.String())),
    type: t.Optional(t.String()),
    discount_value: t.Optional(t.Number()),
    max_discount: t.Optional(__nullable__(t.Number())),
    min_order: t.Optional(__nullable__(t.Number())),
    combinable: t.Optional(t.Boolean()),
    status: t.Optional(t.Boolean()),
    startdate: t.Optional(__nullable__(t.Date())),
    enddate: t.Optional(__nullable__(t.Date())),
    discount_type: t.Optional(__nullable__(t.String())),
    usage_limit: t.Optional(__nullable__(t.String())),
    redemption_method: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const voucherRelationsInputCreate = t.Object(
  {
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
    order: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const voucherRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
      order: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const voucherWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          name: t.String(),
          detail: t.String(),
          pic: t.String(),
          condition: t.String(),
          tier: t.String(),
          voucherpic: t.String(),
          type: t.String(),
          discount_value: t.Number(),
          max_discount: t.Number(),
          min_order: t.Number(),
          combinable: t.Boolean(),
          status: t.Boolean(),
          startdate: t.Date(),
          enddate: t.Date(),
          discount_type: t.String(),
          usage_limit: t.String(),
          redemption_method: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "voucher" },
  ),
);

export const voucherWhereUnique = t.Recursive(
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
              name: t.String(),
              detail: t.String(),
              pic: t.String(),
              condition: t.String(),
              tier: t.String(),
              voucherpic: t.String(),
              type: t.String(),
              discount_value: t.Number(),
              max_discount: t.Number(),
              min_order: t.Number(),
              combinable: t.Boolean(),
              status: t.Boolean(),
              startdate: t.Date(),
              enddate: t.Date(),
              discount_type: t.String(),
              usage_limit: t.String(),
              redemption_method: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "voucher" },
);

export const voucherSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      name: t.Boolean(),
      detail: t.Boolean(),
      pic: t.Boolean(),
      condition: t.Boolean(),
      tier: t.Boolean(),
      voucherpic: t.Boolean(),
      type: t.Boolean(),
      discount_value: t.Boolean(),
      max_discount: t.Boolean(),
      min_order: t.Boolean(),
      combinable: t.Boolean(),
      status: t.Boolean(),
      startdate: t.Boolean(),
      enddate: t.Boolean(),
      discount_type: t.Boolean(),
      usage_limit: t.Boolean(),
      redemption_method: t.Boolean(),
      customernoti: t.Boolean(),
      order: t.Boolean(),
      promotion: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const voucherInclude = t.Partial(
  t.Object(
    {
      customernoti: t.Boolean(),
      order: t.Boolean(),
      promotion: t.Boolean(),
      promotion_claim_history: t.Boolean(),
      promotion_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const voucherOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      condition: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucherpic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discount_value: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      max_discount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      combinable: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      startdate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      enddate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discount_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      usage_limit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redemption_method: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const voucher = t.Composite([voucherPlain, voucherRelations], {
  additionalProperties: false,
});

export const voucherInputCreate = t.Composite(
  [voucherPlainInputCreate, voucherRelationsInputCreate],
  { additionalProperties: false },
);

export const voucherInputUpdate = t.Composite(
  [voucherPlainInputUpdate, voucherRelationsInputUpdate],
  { additionalProperties: false },
);
