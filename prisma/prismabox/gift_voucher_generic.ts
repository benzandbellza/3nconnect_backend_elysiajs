import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const gift_voucher_genericPlain = t.Object(
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
);

export const gift_voucher_genericRelations = t.Object(
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
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const gift_voucher_genericPlainInputCreate = t.Object(
  {
    discount_type: t.Optional(__nullable__(t.String())),
    min_purchase: t.Optional(__nullable__(t.Number())),
    percent_discount: t.Optional(__nullable__(t.Number())),
    max_discount: t.Optional(__nullable__(t.Number())),
    usage_period_day: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const gift_voucher_genericPlainInputUpdate = t.Object(
  {
    discount_type: t.Optional(__nullable__(t.String())),
    min_purchase: t.Optional(__nullable__(t.Number())),
    percent_discount: t.Optional(__nullable__(t.Number())),
    max_discount: t.Optional(__nullable__(t.Number())),
    usage_period_day: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const gift_voucher_genericRelationsInputCreate = t.Object(
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
  { additionalProperties: false },
);

export const gift_voucher_genericRelationsInputUpdate = t.Partial(
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
    { additionalProperties: false },
  ),
);

export const gift_voucher_genericWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          gift_voucher_id: t.Integer(),
          discount_type: t.String(),
          min_purchase: t.Number(),
          percent_discount: t.Number(),
          max_discount: t.Number(),
          usage_period_day: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "gift_voucher_generic" },
  ),
);

export const gift_voucher_genericWhereUnique = t.Recursive(
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
              gift_voucher_id: t.Integer(),
              discount_type: t.String(),
              min_purchase: t.Number(),
              percent_discount: t.Number(),
              max_discount: t.Number(),
              usage_period_day: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "gift_voucher_generic" },
);

export const gift_voucher_genericSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      gift_voucher_id: t.Boolean(),
      discount_type: t.Boolean(),
      min_purchase: t.Boolean(),
      percent_discount: t.Boolean(),
      max_discount: t.Boolean(),
      usage_period_day: t.Boolean(),
      gift_voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const gift_voucher_genericInclude = t.Partial(
  t.Object(
    { gift_voucher: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const gift_voucher_genericOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discount_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_purchase: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      percent_discount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      max_discount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      usage_period_day: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const gift_voucher_generic = t.Composite(
  [gift_voucher_genericPlain, gift_voucher_genericRelations],
  { additionalProperties: false },
);

export const gift_voucher_genericInputCreate = t.Composite(
  [
    gift_voucher_genericPlainInputCreate,
    gift_voucher_genericRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const gift_voucher_genericInputUpdate = t.Composite(
  [
    gift_voucher_genericPlainInputUpdate,
    gift_voucher_genericRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
