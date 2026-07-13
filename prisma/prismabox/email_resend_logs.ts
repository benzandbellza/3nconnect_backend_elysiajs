import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const email_resend_logsPlain = t.Object(
  {
    id: t.String(),
    redemption_id: t.String(),
    user_id: __nullable__(t.String()),
    action_taken: t.String(),
    created_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const email_resend_logsRelations = t.Object(
  {
    reward_redemptions: t.Object(
      {
        id: t.String(),
        user_id: t.String(),
        reward_id: t.String(),
        points_used: t.Integer(),
        redeemed_at: __nullable__(t.Date()),
        status: __nullable__(t.String()),
        note: __nullable__(t.String()),
        redeemed_count: __nullable__(t.Number()),
        address: __nullable__(t.String()),
        address_type: __nullable__(t.String()),
        delivery_status: __nullable__(t.String()),
        updated_at: __nullable__(t.String()),
        log: __nullable__(t.String()),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
  },
  { additionalProperties: false },
);

export const email_resend_logsPlainInputCreate = t.Object(
  { action_taken: t.String(), created_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const email_resend_logsPlainInputUpdate = t.Object(
  {
    action_taken: t.Optional(t.String()),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const email_resend_logsRelationsInputCreate = t.Object(
  {
    reward_redemptions: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const email_resend_logsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      reward_redemptions: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const email_resend_logsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          redemption_id: t.String(),
          user_id: t.String(),
          action_taken: t.String(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "email_resend_logs" },
  ),
);

export const email_resend_logsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
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
              id: t.String(),
              redemption_id: t.String(),
              user_id: t.String(),
              action_taken: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "email_resend_logs" },
);

export const email_resend_logsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      redemption_id: t.Boolean(),
      user_id: t.Boolean(),
      action_taken: t.Boolean(),
      created_at: t.Boolean(),
      reward_redemptions: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const email_resend_logsInclude = t.Partial(
  t.Object(
    { reward_redemptions: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const email_resend_logsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redemption_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action_taken: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const email_resend_logs = t.Composite(
  [email_resend_logsPlain, email_resend_logsRelations],
  { additionalProperties: false },
);

export const email_resend_logsInputCreate = t.Composite(
  [email_resend_logsPlainInputCreate, email_resend_logsRelationsInputCreate],
  { additionalProperties: false },
);

export const email_resend_logsInputUpdate = t.Composite(
  [email_resend_logsPlainInputUpdate, email_resend_logsRelationsInputUpdate],
  { additionalProperties: false },
);
