import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const rpa_queuePlain = t.Object(
  {
    id: t.Integer(),
    job_type: t.String(),
    payload: __nullable__(t.Any()),
    status: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    started_at: __nullable__(t.Date()),
    finished_at: __nullable__(t.Date()),
    error_message: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const rpa_queueRelations = t.Object({}, { additionalProperties: false });

export const rpa_queuePlainInputCreate = t.Object(
  {
    job_type: t.String(),
    payload: t.Optional(__nullable__(t.Any())),
    status: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    started_at: t.Optional(__nullable__(t.Date())),
    finished_at: t.Optional(__nullable__(t.Date())),
    error_message: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const rpa_queuePlainInputUpdate = t.Object(
  {
    job_type: t.Optional(t.String()),
    payload: t.Optional(__nullable__(t.Any())),
    status: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    started_at: t.Optional(__nullable__(t.Date())),
    finished_at: t.Optional(__nullable__(t.Date())),
    error_message: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const rpa_queueRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const rpa_queueRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const rpa_queueWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          job_type: t.String(),
          payload: t.Any(),
          status: t.String(),
          created_at: t.Date(),
          started_at: t.Date(),
          finished_at: t.Date(),
          error_message: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "rpa_queue" },
  ),
);

export const rpa_queueWhereUnique = t.Recursive(
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
              job_type: t.String(),
              payload: t.Any(),
              status: t.String(),
              created_at: t.Date(),
              started_at: t.Date(),
              finished_at: t.Date(),
              error_message: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "rpa_queue" },
);

export const rpa_queueSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      job_type: t.Boolean(),
      payload: t.Boolean(),
      status: t.Boolean(),
      created_at: t.Boolean(),
      started_at: t.Boolean(),
      finished_at: t.Boolean(),
      error_message: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const rpa_queueInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const rpa_queueOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      job_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payload: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      started_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      finished_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      error_message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const rpa_queue = t.Composite([rpa_queuePlain, rpa_queueRelations], {
  additionalProperties: false,
});

export const rpa_queueInputCreate = t.Composite(
  [rpa_queuePlainInputCreate, rpa_queueRelationsInputCreate],
  { additionalProperties: false },
);

export const rpa_queueInputUpdate = t.Composite(
  [rpa_queuePlainInputUpdate, rpa_queueRelationsInputUpdate],
  { additionalProperties: false },
);
