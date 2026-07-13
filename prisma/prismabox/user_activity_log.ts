import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const user_activity_logPlain = t.Object(
  {
    id: t.Integer(),
    auth_id: __nullable__(t.String()),
    action: __nullable__(t.String()),
    target_type: __nullable__(t.String()),
    target_id: __nullable__(t.String()),
    target_title: __nullable__(t.String()),
    logged_at: __nullable__(t.Date()),
    referral_source: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_activity_logRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_activity_logPlainInputCreate = t.Object(
  {
    action: t.Optional(__nullable__(t.String())),
    target_type: t.Optional(__nullable__(t.String())),
    target_title: t.Optional(__nullable__(t.String())),
    logged_at: t.Optional(__nullable__(t.Date())),
    referral_source: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_activity_logPlainInputUpdate = t.Object(
  {
    action: t.Optional(__nullable__(t.String())),
    target_type: t.Optional(__nullable__(t.String())),
    target_title: t.Optional(__nullable__(t.String())),
    logged_at: t.Optional(__nullable__(t.Date())),
    referral_source: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_activity_logRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_activity_logRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_activity_logWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          auth_id: t.String(),
          action: t.String(),
          target_type: t.String(),
          target_id: t.String(),
          target_title: t.String(),
          logged_at: t.Date(),
          referral_source: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "user_activity_log" },
  ),
);

export const user_activity_logWhereUnique = t.Recursive(
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
              auth_id: t.String(),
              action: t.String(),
              target_type: t.String(),
              target_id: t.String(),
              target_title: t.String(),
              logged_at: t.Date(),
              referral_source: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "user_activity_log" },
);

export const user_activity_logSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      auth_id: t.Boolean(),
      action: t.Boolean(),
      target_type: t.Boolean(),
      target_id: t.Boolean(),
      target_title: t.Boolean(),
      logged_at: t.Boolean(),
      referral_source: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_activity_logInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_activity_logOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      auth_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      logged_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      referral_source: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_activity_log = t.Composite(
  [user_activity_logPlain, user_activity_logRelations],
  { additionalProperties: false },
);

export const user_activity_logInputCreate = t.Composite(
  [user_activity_logPlainInputCreate, user_activity_logRelationsInputCreate],
  { additionalProperties: false },
);

export const user_activity_logInputUpdate = t.Composite(
  [user_activity_logPlainInputUpdate, user_activity_logRelationsInputUpdate],
  { additionalProperties: false },
);
