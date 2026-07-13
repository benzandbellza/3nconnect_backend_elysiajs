import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const documentsPlain = t.Object(
  {
    id: t.Integer(),
    content: __nullable__(t.String()),
    metadata: __nullable__(t.Any()),
  },
  { additionalProperties: false },
);

export const documentsRelations = t.Object({}, { additionalProperties: false });

export const documentsPlainInputCreate = t.Object(
  {
    content: t.Optional(__nullable__(t.String())),
    metadata: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const documentsPlainInputUpdate = t.Object(
  {
    content: t.Optional(__nullable__(t.String())),
    metadata: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const documentsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const documentsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const documentsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          content: t.String(),
          metadata: t.Any(),
        },
        { additionalProperties: false },
      ),
    { $id: "documents" },
  ),
);

export const documentsWhereUnique = t.Recursive(
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
            { id: t.Integer(), content: t.String(), metadata: t.Any() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "documents" },
);

export const documentsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      content: t.Boolean(),
      metadata: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const documentsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const documentsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const documents = t.Composite([documentsPlain, documentsRelations], {
  additionalProperties: false,
});

export const documentsInputCreate = t.Composite(
  [documentsPlainInputCreate, documentsRelationsInputCreate],
  { additionalProperties: false },
);

export const documentsInputUpdate = t.Composite(
  [documentsPlainInputUpdate, documentsRelationsInputUpdate],
  { additionalProperties: false },
);
