import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const tabular_document_rowsPlain = t.Object(
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
);

export const tabular_document_rowsRelations = t.Object(
  {
    record_manager: __nullable__(
      t.Object(
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
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const tabular_document_rowsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    row_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const tabular_document_rowsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    row_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const tabular_document_rowsRelationsInputCreate = t.Object(
  {
    record_manager: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
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

export const tabular_document_rowsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      record_manager: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
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

export const tabular_document_rowsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          record_manager_id: t.Integer(),
          row_data: t.Any(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "tabular_document_rows" },
  ),
);

export const tabular_document_rowsWhereUnique = t.Recursive(
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
              record_manager_id: t.Integer(),
              row_data: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "tabular_document_rows" },
);

export const tabular_document_rowsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      record_manager_id: t.Boolean(),
      row_data: t.Boolean(),
      record_manager: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const tabular_document_rowsInclude = t.Partial(
  t.Object(
    { record_manager: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const tabular_document_rowsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      record_manager_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      row_data: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const tabular_document_rows = t.Composite(
  [tabular_document_rowsPlain, tabular_document_rowsRelations],
  { additionalProperties: false },
);

export const tabular_document_rowsInputCreate = t.Composite(
  [
    tabular_document_rowsPlainInputCreate,
    tabular_document_rowsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const tabular_document_rowsInputUpdate = t.Composite(
  [
    tabular_document_rowsPlainInputUpdate,
    tabular_document_rowsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
