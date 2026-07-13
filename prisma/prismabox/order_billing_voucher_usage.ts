import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const order_billing_voucher_usagePlain = t.Object(
  {
    id: t.Integer(),
    order_billing_id: __nullable__(t.Integer()),
    gift_voucher_code: __nullable__(t.String()),
    promotion_id: __nullable__(t.Integer()),
    usaged_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_voucher_usageRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_voucher_usagePlainInputCreate = t.Object(
  {
    gift_voucher_code: t.Optional(__nullable__(t.String())),
    usaged_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_voucher_usagePlainInputUpdate = t.Object(
  {
    gift_voucher_code: t.Optional(__nullable__(t.String())),
    usaged_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_voucher_usageRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_voucher_usageRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_voucher_usageWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          order_billing_id: t.Integer(),
          gift_voucher_code: t.String(),
          promotion_id: t.Integer(),
          usaged_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order_billing_voucher_usage" },
  ),
);

export const order_billing_voucher_usageWhereUnique = t.Recursive(
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
              order_billing_id: t.Integer(),
              gift_voucher_code: t.String(),
              promotion_id: t.Integer(),
              usaged_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order_billing_voucher_usage" },
);

export const order_billing_voucher_usageSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      order_billing_id: t.Boolean(),
      gift_voucher_code: t.Boolean(),
      promotion_id: t.Boolean(),
      usaged_at: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_voucher_usageInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_voucher_usageOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_billing_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_voucher_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      usaged_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_voucher_usage = t.Composite(
  [order_billing_voucher_usagePlain, order_billing_voucher_usageRelations],
  { additionalProperties: false },
);

export const order_billing_voucher_usageInputCreate = t.Composite(
  [
    order_billing_voucher_usagePlainInputCreate,
    order_billing_voucher_usageRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const order_billing_voucher_usageInputUpdate = t.Composite(
  [
    order_billing_voucher_usagePlainInputUpdate,
    order_billing_voucher_usageRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
