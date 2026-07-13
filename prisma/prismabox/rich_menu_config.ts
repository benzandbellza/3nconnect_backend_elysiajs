import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const rich_menu_configPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    role: __nullable__(t.String()),
    rich_menu_id: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    description: __nullable__(t.String()),
    start_date: __nullable__(t.Date()),
    end_date: __nullable__(t.Date()),
    priority: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rich_menu_configRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rich_menu_configPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    role: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    description: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    priority: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rich_menu_configPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    role: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    description: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    priority: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rich_menu_configRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rich_menu_configRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rich_menu_configWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          role: t.String(),
          rich_menu_id: t.String(),
          is_active: t.Boolean(),
          description: t.String(),
          start_date: t.Date(),
          end_date: t.Date(),
          priority: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "rich_menu_config" },
  ),
);

export const rich_menu_configWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              role: t.String(),
              rich_menu_id: t.String(),
              is_active: t.Boolean(),
              description: t.String(),
              start_date: t.Date(),
              end_date: t.Date(),
              priority: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "rich_menu_config" },
);

export const rich_menu_configSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      role: t.Boolean(),
      rich_menu_id: t.Boolean(),
      is_active: t.Boolean(),
      description: t.Boolean(),
      start_date: t.Boolean(),
      end_date: t.Boolean(),
      priority: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rich_menu_configInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rich_menu_configOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      role: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      rich_menu_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priority: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rich_menu_config = t.Composite(
  [rich_menu_configPlain, rich_menu_configRelations],
  { additionalProperties: false },
);

export const rich_menu_configInputCreate = t.Composite(
  [rich_menu_configPlainInputCreate, rich_menu_configRelationsInputCreate],
  { additionalProperties: false },
);

export const rich_menu_configInputUpdate = t.Composite(
  [rich_menu_configPlainInputUpdate, rich_menu_configRelationsInputUpdate],
  { additionalProperties: false },
);
