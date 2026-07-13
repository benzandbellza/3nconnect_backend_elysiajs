import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const order_billing_paymentPlain = t.Object(
  {
    id: t.Integer(),
    invoice_no: __nullable__(t.String()),
    merchant_id: __nullable__(t.String()),
    description: __nullable__(t.String()),
    amount: __nullable__(t.Number()),
    currency_code: __nullable__(t.String()),
    payment_channel_code: __nullable__(t.String()),
    payment_agent_code: __nullable__(t.String()),
    response_url: __nullable__(t.String()),
    backend_url: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_paymentRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_paymentPlainInputCreate = t.Object(
  {
    invoice_no: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    amount: t.Optional(__nullable__(t.Number())),
    currency_code: t.Optional(__nullable__(t.String())),
    payment_channel_code: t.Optional(__nullable__(t.String())),
    payment_agent_code: t.Optional(__nullable__(t.String())),
    response_url: t.Optional(__nullable__(t.String())),
    backend_url: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_paymentPlainInputUpdate = t.Object(
  {
    invoice_no: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    amount: t.Optional(__nullable__(t.Number())),
    currency_code: t.Optional(__nullable__(t.String())),
    payment_channel_code: t.Optional(__nullable__(t.String())),
    payment_agent_code: t.Optional(__nullable__(t.String())),
    response_url: t.Optional(__nullable__(t.String())),
    backend_url: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_paymentRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_paymentRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_paymentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          invoice_no: t.String(),
          merchant_id: t.String(),
          description: t.String(),
          amount: t.Number(),
          currency_code: t.String(),
          payment_channel_code: t.String(),
          payment_agent_code: t.String(),
          response_url: t.String(),
          backend_url: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order_billing_payment" },
  ),
);

export const order_billing_paymentWhereUnique = t.Recursive(
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
              invoice_no: t.String(),
              merchant_id: t.String(),
              description: t.String(),
              amount: t.Number(),
              currency_code: t.String(),
              payment_channel_code: t.String(),
              payment_agent_code: t.String(),
              response_url: t.String(),
              backend_url: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order_billing_payment" },
);

export const order_billing_paymentSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      invoice_no: t.Boolean(),
      merchant_id: t.Boolean(),
      description: t.Boolean(),
      amount: t.Boolean(),
      currency_code: t.Boolean(),
      payment_channel_code: t.Boolean(),
      payment_agent_code: t.Boolean(),
      response_url: t.Boolean(),
      backend_url: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_paymentInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_paymentOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      merchant_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      currency_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_channel_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_agent_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      response_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      backend_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_payment = t.Composite(
  [order_billing_paymentPlain, order_billing_paymentRelations],
  { additionalProperties: false },
);

export const order_billing_paymentInputCreate = t.Composite(
  [
    order_billing_paymentPlainInputCreate,
    order_billing_paymentRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const order_billing_paymentInputUpdate = t.Composite(
  [
    order_billing_paymentPlainInputUpdate,
    order_billing_paymentRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
