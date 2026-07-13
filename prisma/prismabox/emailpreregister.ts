import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const emailpreregisterPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    email: __nullable__(t.String()),
    upload: t.Boolean(),
  },
  { additionalProperties: false },
);

export const emailpreregisterRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const emailpreregisterPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    email: t.Optional(__nullable__(t.String())),
    upload: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const emailpreregisterPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    email: t.Optional(__nullable__(t.String())),
    upload: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const emailpreregisterRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const emailpreregisterRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const emailpreregisterWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          email: t.String(),
          upload: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "emailpreregister" },
  ),
);

export const emailpreregisterWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              email: t.String(),
              upload: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "emailpreregister" },
);

export const emailpreregisterSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      email: t.Boolean(),
      upload: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const emailpreregisterInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const emailpreregisterOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      upload: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const emailpreregister = t.Composite(
  [emailpreregisterPlain, emailpreregisterRelations],
  { additionalProperties: false },
);

export const emailpreregisterInputCreate = t.Composite(
  [emailpreregisterPlainInputCreate, emailpreregisterRelationsInputCreate],
  { additionalProperties: false },
);

export const emailpreregisterInputUpdate = t.Composite(
  [emailpreregisterPlainInputUpdate, emailpreregisterRelationsInputUpdate],
  { additionalProperties: false },
);
