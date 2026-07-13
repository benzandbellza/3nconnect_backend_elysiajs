import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const record_managerPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    file_id: __nullable__(t.String()),
    hash: __nullable__(t.String()),
    data_type: __nullable__(t.String()),
    schema: __nullable__(t.String()),
    document_title: __nullable__(t.String()),
    company: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const record_managerRelations = t.Object(
  {
    tabular_document_rows: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          record_manager_id: __nullable__(t.Integer()),
          row_data: __nullable__(t.Any()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const record_managerPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    hash: t.Optional(__nullable__(t.String())),
    data_type: t.Optional(__nullable__(t.String())),
    schema: t.Optional(__nullable__(t.String())),
    document_title: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const record_managerPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    hash: t.Optional(__nullable__(t.String())),
    data_type: t.Optional(__nullable__(t.String())),
    schema: t.Optional(__nullable__(t.String())),
    document_title: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const record_managerRelationsInputCreate = t.Object(
  {
    tabular_document_rows: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const record_managerRelationsInputUpdate = t.Partial(
  t.Object(
    {
      tabular_document_rows: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const record_managerWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          file_id: t.String(),
          hash: t.String(),
          data_type: t.String(),
          schema: t.String(),
          document_title: t.String(),
          company: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "record_manager" },
  ),
);

export const record_managerWhereUnique = t.Recursive(
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
              file_id: t.String(),
              hash: t.String(),
              data_type: t.String(),
              schema: t.String(),
              document_title: t.String(),
              company: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "record_manager" },
);

export const record_managerSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      file_id: t.Boolean(),
      hash: t.Boolean(),
      data_type: t.Boolean(),
      schema: t.Boolean(),
      document_title: t.Boolean(),
      company: t.Boolean(),
      tabular_document_rows: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const record_managerInclude = t.Partial(
  t.Object(
    { tabular_document_rows: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const record_managerOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      file_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      hash: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      data_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      schema: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      document_title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const record_manager = t.Composite(
  [record_managerPlain, record_managerRelations],
  { additionalProperties: false },
);

export const record_managerInputCreate = t.Composite(
  [record_managerPlainInputCreate, record_managerRelationsInputCreate],
  { additionalProperties: false },
);

export const record_managerInputUpdate = t.Composite(
  [record_managerPlainInputUpdate, record_managerRelationsInputUpdate],
  { additionalProperties: false },
);
