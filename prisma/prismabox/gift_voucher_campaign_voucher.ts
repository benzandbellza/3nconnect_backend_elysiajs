import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const gift_voucher_campaign_voucherPlain = t.Object(
  {
    id: t.Integer(),
    gift_voucher_id: __nullable__(t.Integer()),
    generic_voucher_id: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gift_voucher_campaign_voucherRelations = t.Object(
  {
    gift_voucher: __nullable__(
      t.Object(
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
          specific_customers: t.Array(t.String(), {
            additionalProperties: false,
          }),
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
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gift_voucher_campaign_voucherPlainInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gift_voucher_campaign_voucherPlainInputUpdate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gift_voucher_campaign_voucherRelationsInputCreate = t.Object(
  {
    gift_voucher: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gift_voucher_campaign_voucherRelationsInputUpdate = t.Partial(
  t.Object(
    {
      gift_voucher: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gift_voucher_campaign_voucherWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          gift_voucher_id: t.Integer(),
          generic_voucher_id: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "gift_voucher_campaign_voucher" },
  ),
);

export const gift_voucher_campaign_voucherWhereUnique = t.Recursive(
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
              gift_voucher_id: t.Integer(),
              generic_voucher_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "gift_voucher_campaign_voucher" },
);

export const gift_voucher_campaign_voucherSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      gift_voucher_id: t.Boolean(),
      generic_voucher_id: t.Boolean(),
      gift_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gift_voucher_campaign_voucherInclude = t.Partial(
  t.Object(
    { gift_voucher: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gift_voucher_campaign_voucherOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      generic_voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gift_voucher_campaign_voucher = t.Composite(
  [gift_voucher_campaign_voucherPlain, gift_voucher_campaign_voucherRelations],
  { additionalProperties: false },
);

export const gift_voucher_campaign_voucherInputCreate = t.Composite(
  [
    gift_voucher_campaign_voucherPlainInputCreate,
    gift_voucher_campaign_voucherRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const gift_voucher_campaign_voucherInputUpdate = t.Composite(
  [
    gift_voucher_campaign_voucherPlainInputUpdate,
    gift_voucher_campaign_voucherRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
