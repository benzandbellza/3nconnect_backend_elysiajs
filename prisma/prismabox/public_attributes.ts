import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_attributesPlain = t.Object(
  {
    id: t.Integer(),
    attr_group_id: t.Integer(),
    attr_name: __nullable__(t.String()),
    attr_description: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_attributesRelations = t.Object(
  {
    attribute_groups: t.Object(
      {
        id: t.Integer(),
        attr_group_name: __nullable__(t.String()),
        attr_group_description: __nullable__(t.String()),
        is_active: __nullable__(t.Boolean()),
        created_at: __nullable__(t.Date()),
        updated_at: __nullable__(t.String()),
        companies_id: __nullable__(t.Integer()),
        division_id: __nullable__(t.Integer()),
      },
      {
        additionalProperties: false,
        description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
    sale_target_attr: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: __nullable__(t.Date()),
          user_id: __nullable__(t.String()),
          target_date: __nullable__(t.Date()),
          attr_id: __nullable__(t.Integer()),
          target: __nullable__(t.Number()),
          status: __nullable__(t.Boolean()),
          companies_id: __nullable__(t.Integer()),
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

export const public_attributesPlainInputCreate = t.Object(
  {
    attr_name: t.Optional(__nullable__(t.String())),
    attr_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_attributesPlainInputUpdate = t.Object(
  {
    attr_name: t.Optional(__nullable__(t.String())),
    attr_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const public_attributesRelationsInputCreate = t.Object(
  {
    attribute_groups: t.Object(
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
    sale_target_attr: t.Optional(
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

export const public_attributesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      attribute_groups: t.Object(
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
      sale_target_attr: t.Partial(
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

export const public_attributesWhere = t.Partial(
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
          updated_at: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "public_attributes" },
  ),
);

export const public_attributesWhereUnique = t.Recursive(
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
              updated_at: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_attributes" },
);

export const public_attributesSelect = t.Partial(
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
      sale_target_attr: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_attributesInclude = t.Partial(
  t.Object(
    {
      attribute_groups: t.Boolean(),
      sale_target_attr: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const public_attributesOrderBy = t.Partial(
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

export const public_attributes = t.Composite(
  [public_attributesPlain, public_attributesRelations],
  { additionalProperties: false },
);

export const public_attributesInputCreate = t.Composite(
  [public_attributesPlainInputCreate, public_attributesRelationsInputCreate],
  { additionalProperties: false },
);

export const public_attributesInputUpdate = t.Composite(
  [public_attributesPlainInputUpdate, public_attributesRelationsInputUpdate],
  { additionalProperties: false },
);
