import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const attributesPlain = t.Object(
  {
    id: t.Integer(),
    attr_group_id: __nullable__(t.Integer()),
    attr_name: __nullable__(t.String()),
    attr_description: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const attributesRelations = t.Object(
  {
    attribute_groups: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          attr_group_name: __nullable__(t.String()),
          attr_group_description: __nullable__(t.String()),
          is_active: __nullable__(t.Boolean()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const attributesPlainInputCreate = t.Object(
  {
    attr_name: t.Optional(__nullable__(t.String())),
    attr_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const attributesPlainInputUpdate = t.Object(
  {
    attr_name: t.Optional(__nullable__(t.String())),
    attr_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const attributesRelationsInputCreate = t.Object(
  {
    attribute_groups: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
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

export const attributesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      attribute_groups: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
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

export const attributesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          attr_group_id: t.Integer(),
          attr_name: t.String(),
          attr_description: t.String(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "attributes" },
  ),
);

export const attributesWhereUnique = t.Recursive(
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
              attr_group_id: t.Integer(),
              attr_name: t.String(),
              attr_description: t.String(),
              is_active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "attributes" },
);

export const attributesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      attr_group_id: t.Boolean(),
      attr_name: t.Boolean(),
      attr_description: t.Boolean(),
      is_active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      attribute_groups: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const attributesInclude = t.Partial(
  t.Object(
    { attribute_groups: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const attributesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attr_group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attr_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attr_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const attributes = t.Composite([attributesPlain, attributesRelations], {
  additionalProperties: false,
});

export const attributesInputCreate = t.Composite(
  [attributesPlainInputCreate, attributesRelationsInputCreate],
  { additionalProperties: false },
);

export const attributesInputUpdate = t.Composite(
  [attributesPlainInputUpdate, attributesRelationsInputUpdate],
  { additionalProperties: false },
);
