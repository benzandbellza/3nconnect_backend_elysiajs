import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const attribute_groupsPlain = t.Object(
  {
    id: t.Integer(),
    attr_group_name: __nullable__(t.String()),
    attr_group_description: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const attribute_groupsRelations = t.Object(
  {
    attributes: t.Array(
      t.Object(
        {
          id: t.Integer(),
          attr_group_id: __nullable__(t.Integer()),
          attr_name: __nullable__(t.String()),
          attr_description: __nullable__(t.String()),
          is_active: __nullable__(t.Boolean()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const attribute_groupsPlainInputCreate = t.Object(
  {
    attr_group_name: t.Optional(__nullable__(t.String())),
    attr_group_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const attribute_groupsPlainInputUpdate = t.Object(
  {
    attr_group_name: t.Optional(__nullable__(t.String())),
    attr_group_description: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const attribute_groupsRelationsInputCreate = t.Object(
  {
    attributes: t.Optional(
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
  { additionalProperties: false },
);

export const attribute_groupsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      attributes: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const attribute_groupsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          attr_group_name: t.String(),
          attr_group_description: t.String(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "attribute_groups" },
  ),
);

export const attribute_groupsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
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
              attr_group_name: t.String(),
              attr_group_description: t.String(),
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
  { $id: "attribute_groups" },
);

export const attribute_groupsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      attr_group_name: t.Boolean(),
      attr_group_description: t.Boolean(),
      is_active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      attributes: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const attribute_groupsInclude = t.Partial(
  t.Object(
    { attributes: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const attribute_groupsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attr_group_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attr_group_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
    { additionalProperties: false },
  ),
);

export const attribute_groups = t.Composite(
  [attribute_groupsPlain, attribute_groupsRelations],
  { additionalProperties: false },
);

export const attribute_groupsInputCreate = t.Composite(
  [attribute_groupsPlainInputCreate, attribute_groupsRelationsInputCreate],
  { additionalProperties: false },
);

export const attribute_groupsInputUpdate = t.Composite(
  [attribute_groupsPlainInputUpdate, attribute_groupsRelationsInputUpdate],
  { additionalProperties: false },
);
