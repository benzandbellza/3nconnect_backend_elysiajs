import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const order_billing_payment_responsePlain = t.Object(
  {
    id: t.Integer(),
    invoice_no: __nullable__(t.String()),
    amount: __nullable__(t.Number()),
    currency_code: __nullable__(t.String()),
    tran_ref: __nullable__(t.String()),
    reference_no: __nullable__(t.String()),
    payment_agent_code: __nullable__(t.String()),
    payment_channel_code: __nullable__(t.String()),
    approval_code: __nullable__(t.String()),
    datetime: __nullable__(t.Date()),
    response_code: __nullable__(t.String()),
    response_description: __nullable__(t.String()),
    card_info: __nullable__(t.Any()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_payment_responseRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_payment_responsePlainInputCreate = t.Object(
  {
    invoice_no: t.Optional(__nullable__(t.String())),
    amount: t.Optional(__nullable__(t.Number())),
    currency_code: t.Optional(__nullable__(t.String())),
    tran_ref: t.Optional(__nullable__(t.String())),
    reference_no: t.Optional(__nullable__(t.String())),
    payment_agent_code: t.Optional(__nullable__(t.String())),
    payment_channel_code: t.Optional(__nullable__(t.String())),
    approval_code: t.Optional(__nullable__(t.String())),
    datetime: t.Optional(__nullable__(t.Date())),
    response_code: t.Optional(__nullable__(t.String())),
    response_description: t.Optional(__nullable__(t.String())),
    card_info: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_payment_responsePlainInputUpdate = t.Object(
  {
    invoice_no: t.Optional(__nullable__(t.String())),
    amount: t.Optional(__nullable__(t.Number())),
    currency_code: t.Optional(__nullable__(t.String())),
    tran_ref: t.Optional(__nullable__(t.String())),
    reference_no: t.Optional(__nullable__(t.String())),
    payment_agent_code: t.Optional(__nullable__(t.String())),
    payment_channel_code: t.Optional(__nullable__(t.String())),
    approval_code: t.Optional(__nullable__(t.String())),
    datetime: t.Optional(__nullable__(t.Date())),
    response_code: t.Optional(__nullable__(t.String())),
    response_description: t.Optional(__nullable__(t.String())),
    card_info: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_payment_responseRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const order_billing_payment_responseRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_payment_responseWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          invoice_no: t.String(),
          amount: t.Number(),
          currency_code: t.String(),
          tran_ref: t.String(),
          reference_no: t.String(),
          payment_agent_code: t.String(),
          payment_channel_code: t.String(),
          approval_code: t.String(),
          datetime: t.Date(),
          response_code: t.String(),
          response_description: t.String(),
          card_info: t.Any(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order_billing_payment_response" },
  ),
);

export const order_billing_payment_responseWhereUnique = t.Recursive(
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
              amount: t.Number(),
              currency_code: t.String(),
              tran_ref: t.String(),
              reference_no: t.String(),
              payment_agent_code: t.String(),
              payment_channel_code: t.String(),
              approval_code: t.String(),
              datetime: t.Date(),
              response_code: t.String(),
              response_description: t.String(),
              card_info: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order_billing_payment_response" },
);

export const order_billing_payment_responseSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      invoice_no: t.Boolean(),
      amount: t.Boolean(),
      currency_code: t.Boolean(),
      tran_ref: t.Boolean(),
      reference_no: t.Boolean(),
      payment_agent_code: t.Boolean(),
      payment_channel_code: t.Boolean(),
      approval_code: t.Boolean(),
      datetime: t.Boolean(),
      response_code: t.Boolean(),
      response_description: t.Boolean(),
      card_info: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_payment_responseInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_payment_responseOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      currency_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tran_ref: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reference_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_agent_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_channel_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approval_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      datetime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      response_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      response_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      card_info: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order_billing_payment_response = t.Composite(
  [
    order_billing_payment_responsePlain,
    order_billing_payment_responseRelations,
  ],
  { additionalProperties: false },
);

export const order_billing_payment_responseInputCreate = t.Composite(
  [
    order_billing_payment_responsePlainInputCreate,
    order_billing_payment_responseRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const order_billing_payment_responseInputUpdate = t.Composite(
  [
    order_billing_payment_responsePlainInputUpdate,
    order_billing_payment_responseRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
