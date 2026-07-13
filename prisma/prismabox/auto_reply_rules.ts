import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const auto_reply_rulesPlain = t.Object(
  {
    id: t.String(),
    platform: t.String(),
    match_type: t.String(),
    keyword: t.String(),
    reply: t.String(),
    active: t.Boolean(),
    priority: t.Integer(),
    created_at: __nullable__(t.Date()),
    days_of_week: t.Array(t.Integer(), { additionalProperties: false }),
    time_start: __nullable__(t.Date()),
    time_end: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const auto_reply_rulesRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const auto_reply_rulesPlainInputCreate = t.Object(
  {
    platform: t.Optional(t.String()),
    match_type: t.Optional(t.String()),
    keyword: t.String(),
    reply: t.String(),
    active: t.Optional(t.Boolean()),
    priority: t.Optional(t.Integer()),
    created_at: t.Optional(__nullable__(t.Date())),
    days_of_week: t.Array(t.Integer(), { additionalProperties: false }),
    time_start: t.Optional(__nullable__(t.Date())),
    time_end: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const auto_reply_rulesPlainInputUpdate = t.Object(
  {
    platform: t.Optional(t.String()),
    match_type: t.Optional(t.String()),
    keyword: t.Optional(t.String()),
    reply: t.Optional(t.String()),
    active: t.Optional(t.Boolean()),
    priority: t.Optional(t.Integer()),
    created_at: t.Optional(__nullable__(t.Date())),
    days_of_week: t.Optional(
      t.Array(t.Integer(), { additionalProperties: false }),
    ),
    time_start: t.Optional(__nullable__(t.Date())),
    time_end: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const auto_reply_rulesRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const auto_reply_rulesRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const auto_reply_rulesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          platform: t.String(),
          match_type: t.String(),
          keyword: t.String(),
          reply: t.String(),
          active: t.Boolean(),
          priority: t.Integer(),
          created_at: t.Date(),
          days_of_week: t.Array(t.Integer(), { additionalProperties: false }),
          time_start: t.Date(),
          time_end: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "auto_reply_rules" },
  ),
);

export const auto_reply_rulesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
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
              platform: t.String(),
              match_type: t.String(),
              keyword: t.String(),
              reply: t.String(),
              active: t.Boolean(),
              priority: t.Integer(),
              created_at: t.Date(),
              days_of_week: t.Array(t.Integer(), {
                additionalProperties: false,
              }),
              time_start: t.Date(),
              time_end: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "auto_reply_rules" },
);

export const auto_reply_rulesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      platform: t.Boolean(),
      match_type: t.Boolean(),
      keyword: t.Boolean(),
      reply: t.Boolean(),
      active: t.Boolean(),
      priority: t.Boolean(),
      created_at: t.Boolean(),
      days_of_week: t.Boolean(),
      time_start: t.Boolean(),
      time_end: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const auto_reply_rulesInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const auto_reply_rulesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      platform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      match_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      keyword: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reply: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priority: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      days_of_week: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      time_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      time_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const auto_reply_rules = t.Composite(
  [auto_reply_rulesPlain, auto_reply_rulesRelations],
  { additionalProperties: false },
);

export const auto_reply_rulesInputCreate = t.Composite(
  [auto_reply_rulesPlainInputCreate, auto_reply_rulesRelationsInputCreate],
  { additionalProperties: false },
);

export const auto_reply_rulesInputUpdate = t.Composite(
  [auto_reply_rulesPlainInputUpdate, auto_reply_rulesRelationsInputUpdate],
  { additionalProperties: false },
);
