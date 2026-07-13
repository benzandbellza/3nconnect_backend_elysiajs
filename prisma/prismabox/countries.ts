import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const countriesPlain = t.Object(
  {
    id: t.Integer(),
    country_name: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    is_active: __nullable__(t.Boolean()),
    short_name: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const countriesRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const countriesPlainInputCreate = t.Object(
  {
    country_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    short_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const countriesPlainInputUpdate = t.Object(
  {
    country_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    short_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const countriesRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const countriesRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const countriesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          country_name: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          is_active: t.Boolean(),
          short_name: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "countries" },
  ),
);

export const countriesWhereUnique = t.Recursive(
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
              country_name: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              is_active: t.Boolean(),
              short_name: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "countries" },
);

export const countriesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      country_name: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      short_name: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const countriesInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const countriesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      country_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      short_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const countries = t.Composite([countriesPlain, countriesRelations], {
  additionalProperties: false,
});

export const countriesInputCreate = t.Composite(
  [countriesPlainInputCreate, countriesRelationsInputCreate],
  { additionalProperties: false },
);

export const countriesInputUpdate = t.Composite(
  [countriesPlainInputUpdate, countriesRelationsInputUpdate],
  { additionalProperties: false },
);
