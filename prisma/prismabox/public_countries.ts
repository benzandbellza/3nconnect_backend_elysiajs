import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_countriesPlain = t.Object(
  {
    id: t.Integer(),
    country_name: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    short_name: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_countriesRelations = t.Object(
  {
    brands: t.Array(
      t.Object(
        {
          id: t.Integer(),
          brand_image: __nullable__(t.String()),
          url_image: __nullable__(t.String()),
          brand_name: __nullable__(t.String()),
          country_id: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_countriesPlainInputCreate = t.Object(
  {
    country_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    short_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_countriesPlainInputUpdate = t.Object(
  {
    country_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    short_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_countriesRelationsInputCreate = t.Object(
  {
    brands: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_countriesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      brands: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_countriesWhere = t.Partial(
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
          updated_at: t.String(),
          is_active: t.Boolean(),
          short_name: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "public_countries" },
  ),
);

export const public_countriesWhereUnique = t.Recursive(
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
              updated_at: t.String(),
              is_active: t.Boolean(),
              short_name: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_countries" },
);

export const public_countriesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      country_name: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      short_name: t.Boolean(),
      brands: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_countriesInclude = t.Partial(
  t.Object(
    { brands: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_countriesOrderBy = t.Partial(
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

export const public_countries = t.Composite(
  [public_countriesPlain, public_countriesRelations],
  { additionalProperties: false },
);

export const public_countriesInputCreate = t.Composite(
  [public_countriesPlainInputCreate, public_countriesRelationsInputCreate],
  { additionalProperties: false },
);

export const public_countriesInputUpdate = t.Composite(
  [public_countriesPlainInputUpdate, public_countriesRelationsInputUpdate],
  { additionalProperties: false },
);
