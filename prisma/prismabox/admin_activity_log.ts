import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const admin_activity_logPlain = t.Object(
  {
    id: t.Integer(),
    user_authid: __nullable__(t.String()),
    user_name: __nullable__(t.String()),
    action: t.String(),
    resource: t.String(),
    resource_id: __nullable__(t.String()),
    details: __nullable__(t.Any()),
    created_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const admin_activity_logRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const admin_activity_logPlainInputCreate = t.Object(
  {
    user_name: t.Optional(__nullable__(t.String())),
    action: t.String(),
    resource: t.String(),
    details: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const admin_activity_logPlainInputUpdate = t.Object(
  {
    user_name: t.Optional(__nullable__(t.String())),
    action: t.Optional(t.String()),
    resource: t.Optional(t.String()),
    details: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const admin_activity_logRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const admin_activity_logRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const admin_activity_logWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          user_authid: t.String(),
          user_name: t.String(),
          action: t.String(),
          resource: t.String(),
          resource_id: t.String(),
          details: t.Any(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "admin_activity_log" },
  ),
);

export const admin_activity_logWhereUnique = t.Recursive(
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
              user_authid: t.String(),
              user_name: t.String(),
              action: t.String(),
              resource: t.String(),
              resource_id: t.String(),
              details: t.Any(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "admin_activity_log" },
);

export const admin_activity_logSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_authid: t.Boolean(),
      user_name: t.Boolean(),
      action: t.Boolean(),
      resource: t.Boolean(),
      resource_id: t.Boolean(),
      details: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const admin_activity_logInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const admin_activity_logOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_authid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      resource: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      resource_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      details: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const admin_activity_log = t.Composite(
  [admin_activity_logPlain, admin_activity_logRelations],
  { additionalProperties: false },
);

export const admin_activity_logInputCreate = t.Composite(
  [admin_activity_logPlainInputCreate, admin_activity_logRelationsInputCreate],
  { additionalProperties: false },
);

export const admin_activity_logInputUpdate = t.Composite(
  [admin_activity_logPlainInputUpdate, admin_activity_logRelationsInputUpdate],
  { additionalProperties: false },
);
