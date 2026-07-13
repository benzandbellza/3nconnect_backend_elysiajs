import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_redeem_codePlain = t.Object(
  {
    id: t.Integer(),
    customeruser_id: __nullable__(t.String()),
    gift_voucher_id: __nullable__(t.Integer()),
    used_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_redeem_codeRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_redeem_codePlainInputCreate = t.Object(
  { used_at: t.Optional(__nullable__(t.Date())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_redeem_codePlainInputUpdate = t.Object(
  { used_at: t.Optional(__nullable__(t.Date())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_redeem_codeRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_redeem_codeRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_redeem_codeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          customeruser_id: t.String(),
          gift_voucher_id: t.Integer(),
          used_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customer_redeem_code" },
  ),
);

export const customer_redeem_codeWhereUnique = t.Recursive(
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
              customeruser_id: t.String(),
              gift_voucher_id: t.Integer(),
              used_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_redeem_code" },
);

export const customer_redeem_codeSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customeruser_id: t.Boolean(),
      gift_voucher_id: t.Boolean(),
      used_at: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_redeem_codeInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_redeem_codeOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gift_voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      used_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_redeem_code = t.Composite(
  [customer_redeem_codePlain, customer_redeem_codeRelations],
  { additionalProperties: false },
);

export const customer_redeem_codeInputCreate = t.Composite(
  [
    customer_redeem_codePlainInputCreate,
    customer_redeem_codeRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const customer_redeem_codeInputUpdate = t.Composite(
  [
    customer_redeem_codePlainInputUpdate,
    customer_redeem_codeRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
