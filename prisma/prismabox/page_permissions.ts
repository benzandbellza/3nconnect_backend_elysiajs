import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const page_permissionsPlain = t.Object(
  {
    page_key: t.String(),
    page_label: t.String(),
    allowed_users: t.Array(t.String(), { additionalProperties: false }),
  },
  { additionalProperties: false },
);

export const page_permissionsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const page_permissionsPlainInputCreate = t.Object(
  {
    page_label: t.String(),
    allowed_users: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  { additionalProperties: false },
);

export const page_permissionsPlainInputUpdate = t.Object(
  {
    page_label: t.Optional(t.String()),
    allowed_users: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  { additionalProperties: false },
);

export const page_permissionsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const page_permissionsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const page_permissionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          page_key: t.String(),
          page_label: t.String(),
          allowed_users: t.Array(t.String(), { additionalProperties: false }),
        },
        { additionalProperties: false },
      ),
    { $id: "page_permissions" },
  ),
);

export const page_permissionsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ page_key: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ page_key: t.String() })], {
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
              page_key: t.String(),
              page_label: t.String(),
              allowed_users: t.Array(t.String(), {
                additionalProperties: false,
              }),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "page_permissions" },
);

export const page_permissionsSelect = t.Partial(
  t.Object(
    {
      page_key: t.Boolean(),
      page_label: t.Boolean(),
      allowed_users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const page_permissionsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const page_permissionsOrderBy = t.Partial(
  t.Object(
    {
      page_key: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      page_label: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      allowed_users: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const page_permissions = t.Composite(
  [page_permissionsPlain, page_permissionsRelations],
  { additionalProperties: false },
);

export const page_permissionsInputCreate = t.Composite(
  [page_permissionsPlainInputCreate, page_permissionsRelationsInputCreate],
  { additionalProperties: false },
);

export const page_permissionsInputUpdate = t.Composite(
  [page_permissionsPlainInputUpdate, page_permissionsRelationsInputUpdate],
  { additionalProperties: false },
);
