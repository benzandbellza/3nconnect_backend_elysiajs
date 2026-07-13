import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const deletion_requestsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    user_id: __nullable__(t.String()),
    email: __nullable__(t.String()),
    status: __nullable__(t.String()),
    reason: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const deletion_requestsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const deletion_requestsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    email: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const deletion_requestsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    email: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const deletion_requestsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const deletion_requestsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const deletion_requestsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          user_id: t.String(),
          email: t.String(),
          status: t.String(),
          reason: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "deletion_requests" },
  ),
);

export const deletion_requestsWhereUnique = t.Recursive(
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
              user_id: t.String(),
              email: t.String(),
              status: t.String(),
              reason: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "deletion_requests" },
);

export const deletion_requestsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      user_id: t.Boolean(),
      email: t.Boolean(),
      status: t.Boolean(),
      reason: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const deletion_requestsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const deletion_requestsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const deletion_requests = t.Composite(
  [deletion_requestsPlain, deletion_requestsRelations],
  { additionalProperties: false },
);

export const deletion_requestsInputCreate = t.Composite(
  [deletion_requestsPlainInputCreate, deletion_requestsRelationsInputCreate],
  { additionalProperties: false },
);

export const deletion_requestsInputUpdate = t.Composite(
  [deletion_requestsPlainInputUpdate, deletion_requestsRelationsInputUpdate],
  { additionalProperties: false },
);
