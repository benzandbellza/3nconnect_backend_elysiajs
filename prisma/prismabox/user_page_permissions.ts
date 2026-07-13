import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const user_page_permissionsPlain = t.Object(
  {
    id: t.Integer(),
    user_id: t.String(),
    route: t.String(),
    can_view: t.Boolean(),
    can_add: t.Boolean(),
    can_edit: t.Boolean(),
    updated_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_page_permissionsRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_page_permissionsPlainInputCreate = t.Object(
  {
    route: t.String(),
    can_view: t.Optional(t.Boolean()),
    can_add: t.Optional(t.Boolean()),
    can_edit: t.Optional(t.Boolean()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_page_permissionsPlainInputUpdate = t.Object(
  {
    route: t.Optional(t.String()),
    can_view: t.Optional(t.Boolean()),
    can_add: t.Optional(t.Boolean()),
    can_edit: t.Optional(t.Boolean()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_page_permissionsRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_page_permissionsRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_page_permissionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          user_id: t.String(),
          route: t.String(),
          can_view: t.Boolean(),
          can_add: t.Boolean(),
          can_edit: t.Boolean(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "user_page_permissions" },
  ),
);

export const user_page_permissionsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              user_id_route: t.Object(
                { user_id: t.String(), route: t.String() },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              user_id_route: t.Object(
                { user_id: t.String(), route: t.String() },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
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
              user_id: t.String(),
              route: t.String(),
              can_view: t.Boolean(),
              can_add: t.Boolean(),
              can_edit: t.Boolean(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "user_page_permissions" },
);

export const user_page_permissionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      route: t.Boolean(),
      can_view: t.Boolean(),
      can_add: t.Boolean(),
      can_edit: t.Boolean(),
      updated_at: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_page_permissionsInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_page_permissionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      route: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      can_view: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      can_add: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      can_edit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_page_permissions = t.Composite(
  [user_page_permissionsPlain, user_page_permissionsRelations],
  { additionalProperties: false },
);

export const user_page_permissionsInputCreate = t.Composite(
  [
    user_page_permissionsPlainInputCreate,
    user_page_permissionsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const user_page_permissionsInputUpdate = t.Composite(
  [
    user_page_permissionsPlainInputUpdate,
    user_page_permissionsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
