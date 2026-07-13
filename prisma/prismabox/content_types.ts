import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const content_typesPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    display_name: t.String(),
    icon: __nullable__(t.String()),
    color: __nullable__(t.String()),
    description: __nullable__(t.String()),
    active: __nullable__(t.Boolean()),
    sort_order: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const content_typesRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const content_typesPlainInputCreate = t.Object(
  {
    name: t.String(),
    display_name: t.String(),
    icon: t.Optional(__nullable__(t.String())),
    color: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const content_typesPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    display_name: t.Optional(t.String()),
    icon: t.Optional(__nullable__(t.String())),
    color: t.Optional(__nullable__(t.String())),
    description: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const content_typesRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const content_typesRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const content_typesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          display_name: t.String(),
          icon: t.String(),
          color: t.String(),
          description: t.String(),
          active: t.Boolean(),
          sort_order: t.Integer(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "content_types" },
  ),
);

export const content_typesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
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
              name: t.String(),
              display_name: t.String(),
              icon: t.String(),
              color: t.String(),
              description: t.String(),
              active: t.Boolean(),
              sort_order: t.Integer(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "content_types" },
);

export const content_typesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      display_name: t.Boolean(),
      icon: t.Boolean(),
      color: t.Boolean(),
      description: t.Boolean(),
      active: t.Boolean(),
      sort_order: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const content_typesInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const content_typesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      display_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      icon: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sort_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const content_types = t.Composite(
  [content_typesPlain, content_typesRelations],
  { additionalProperties: false },
);

export const content_typesInputCreate = t.Composite(
  [content_typesPlainInputCreate, content_typesRelationsInputCreate],
  { additionalProperties: false },
);

export const content_typesInputUpdate = t.Composite(
  [content_typesPlainInputUpdate, content_typesRelationsInputUpdate],
  { additionalProperties: false },
);
