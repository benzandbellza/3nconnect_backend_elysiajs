import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const n8n_chat_historiesPlain = t.Object(
  { id: t.Integer(), session_id: t.String(), message: t.Any() },
  { additionalProperties: false },
);

export const n8n_chat_historiesRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const n8n_chat_historiesPlainInputCreate = t.Object(
  { message: t.Any() },
  { additionalProperties: false },
);

export const n8n_chat_historiesPlainInputUpdate = t.Object(
  { message: t.Optional(t.Any()) },
  { additionalProperties: false },
);

export const n8n_chat_historiesRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const n8n_chat_historiesRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const n8n_chat_historiesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          session_id: t.String(),
          message: t.Any(),
        },
        { additionalProperties: false },
      ),
    { $id: "n8n_chat_histories" },
  ),
);

export const n8n_chat_historiesWhereUnique = t.Recursive(
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
            { id: t.Integer(), session_id: t.String(), message: t.Any() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "n8n_chat_histories" },
);

export const n8n_chat_historiesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      session_id: t.Boolean(),
      message: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const n8n_chat_historiesInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const n8n_chat_historiesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      session_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const n8n_chat_histories = t.Composite(
  [n8n_chat_historiesPlain, n8n_chat_historiesRelations],
  { additionalProperties: false },
);

export const n8n_chat_historiesInputCreate = t.Composite(
  [n8n_chat_historiesPlainInputCreate, n8n_chat_historiesRelationsInputCreate],
  { additionalProperties: false },
);

export const n8n_chat_historiesInputUpdate = t.Composite(
  [n8n_chat_historiesPlainInputUpdate, n8n_chat_historiesRelationsInputUpdate],
  { additionalProperties: false },
);
