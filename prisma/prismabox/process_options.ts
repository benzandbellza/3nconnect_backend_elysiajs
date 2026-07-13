import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const process_optionsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    name: t.String(),
    department_id: __nullable__(t.Integer()),
    company_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const process_optionsRelations = t.Object(
  {
    companies: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          companypic: __nullable__(t.String()),
          short: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    departments: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          company: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const process_optionsPlainInputCreate = t.Object(
  { created_at: t.Optional(t.Date()), name: t.String() },
  { additionalProperties: false },
);

export const process_optionsPlainInputUpdate = t.Object(
  { created_at: t.Optional(t.Date()), name: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const process_optionsRelationsInputCreate = t.Object(
  {
    companies: t.Optional(
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
    departments: t.Optional(
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
  { additionalProperties: false },
);

export const process_optionsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      companies: t.Partial(
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
      departments: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const process_optionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          name: t.String(),
          department_id: t.Integer(),
          company_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "process_options" },
  ),
);

export const process_optionsWhereUnique = t.Recursive(
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
              name: t.String(),
              department_id: t.Integer(),
              company_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "process_options" },
);

export const process_optionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      name: t.Boolean(),
      department_id: t.Boolean(),
      company_id: t.Boolean(),
      companies: t.Boolean(),
      departments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const process_optionsInclude = t.Partial(
  t.Object(
    { companies: t.Boolean(), departments: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const process_optionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      department_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const process_options = t.Composite(
  [process_optionsPlain, process_optionsRelations],
  { additionalProperties: false },
);

export const process_optionsInputCreate = t.Composite(
  [process_optionsPlainInputCreate, process_optionsRelationsInputCreate],
  { additionalProperties: false },
);

export const process_optionsInputUpdate = t.Composite(
  [process_optionsPlainInputUpdate, process_optionsRelationsInputUpdate],
  { additionalProperties: false },
);
