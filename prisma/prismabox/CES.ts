import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const CESPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    process: __nullable__(t.String()),
    job_id: __nullable__(t.String()),
    job_type: __nullable__(t.String()),
    job_create: __nullable__(t.String()),
    job_status: __nullable__(t.String()),
    note: __nullable__(t.String()),
    packing_note: __nullable__(t.String()),
    goods: __nullable__(t.String()),
    doc_no: __nullable__(t.String()),
    status_time: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const CESRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const CESPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    process: t.Optional(__nullable__(t.String())),
    job_type: t.Optional(__nullable__(t.String())),
    job_create: t.Optional(__nullable__(t.String())),
    job_status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    packing_note: t.Optional(__nullable__(t.String())),
    goods: t.Optional(__nullable__(t.String())),
    doc_no: t.Optional(__nullable__(t.String())),
    status_time: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const CESPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    process: t.Optional(__nullable__(t.String())),
    job_type: t.Optional(__nullable__(t.String())),
    job_create: t.Optional(__nullable__(t.String())),
    job_status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    packing_note: t.Optional(__nullable__(t.String())),
    goods: t.Optional(__nullable__(t.String())),
    doc_no: t.Optional(__nullable__(t.String())),
    status_time: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const CESRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const CESRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const CESWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          process: t.String(),
          job_id: t.String(),
          job_type: t.String(),
          job_create: t.String(),
          job_status: t.String(),
          note: t.String(),
          packing_note: t.String(),
          goods: t.String(),
          doc_no: t.String(),
          status_time: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "CES" },
  ),
);

export const CESWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              process: t.String(),
              job_id: t.String(),
              job_type: t.String(),
              job_create: t.String(),
              job_status: t.String(),
              note: t.String(),
              packing_note: t.String(),
              goods: t.String(),
              doc_no: t.String(),
              status_time: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "CES" },
);

export const CESSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      process: t.Boolean(),
      job_id: t.Boolean(),
      job_type: t.Boolean(),
      job_create: t.Boolean(),
      job_status: t.Boolean(),
      note: t.Boolean(),
      packing_note: t.Boolean(),
      goods: t.Boolean(),
      doc_no: t.Boolean(),
      status_time: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const CESInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const CESOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      process: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      job_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      job_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      job_create: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      job_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      packing_note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      goods: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      doc_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status_time: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const CES = t.Composite([CESPlain, CESRelations], {
  additionalProperties: false,
});

export const CESInputCreate = t.Composite(
  [CESPlainInputCreate, CESRelationsInputCreate],
  { additionalProperties: false },
);

export const CESInputUpdate = t.Composite(
  [CESPlainInputUpdate, CESRelationsInputUpdate],
  { additionalProperties: false },
);
