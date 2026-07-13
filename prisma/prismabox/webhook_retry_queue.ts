import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const webhook_retry_queuePlain = t.Object(
  {
    id: t.String(),
    created_at: __nullable__(t.Date()),
    table_name: __nullable__(t.String()),
    payload: __nullable__(t.Any()),
    retry_count: __nullable__(t.Integer()),
    next_retry_at: __nullable__(t.Date()),
    status: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const webhook_retry_queueRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const webhook_retry_queuePlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    table_name: t.Optional(__nullable__(t.String())),
    payload: t.Optional(__nullable__(t.Any())),
    retry_count: t.Optional(__nullable__(t.Integer())),
    next_retry_at: t.Optional(__nullable__(t.Date())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const webhook_retry_queuePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    table_name: t.Optional(__nullable__(t.String())),
    payload: t.Optional(__nullable__(t.Any())),
    retry_count: t.Optional(__nullable__(t.Integer())),
    next_retry_at: t.Optional(__nullable__(t.Date())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const webhook_retry_queueRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const webhook_retry_queueRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const webhook_retry_queueWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          created_at: t.Date(),
          table_name: t.String(),
          payload: t.Any(),
          retry_count: t.Integer(),
          next_retry_at: t.Date(),
          status: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "webhook_retry_queue" },
  ),
);

export const webhook_retry_queueWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              table_name: t.String(),
              payload: t.Any(),
              retry_count: t.Integer(),
              next_retry_at: t.Date(),
              status: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "webhook_retry_queue" },
);

export const webhook_retry_queueSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      table_name: t.Boolean(),
      payload: t.Boolean(),
      retry_count: t.Boolean(),
      next_retry_at: t.Boolean(),
      status: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const webhook_retry_queueInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const webhook_retry_queueOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      table_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payload: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      retry_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      next_retry_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const webhook_retry_queue = t.Composite(
  [webhook_retry_queuePlain, webhook_retry_queueRelations],
  { additionalProperties: false },
);

export const webhook_retry_queueInputCreate = t.Composite(
  [
    webhook_retry_queuePlainInputCreate,
    webhook_retry_queueRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const webhook_retry_queueInputUpdate = t.Composite(
  [
    webhook_retry_queuePlainInputUpdate,
    webhook_retry_queueRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
