import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sopt_status_dataPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    status_name: __nullable__(t.String()),
    deivsion_id: __nullable__(t.Integer()),
    percent: __nullable__(t.Integer()),
    is_process: __nullable__(t.Boolean()),
    is_active: __nullable__(t.Boolean()),
    sort_order: __nullable__(t.Integer()),
    stage_name: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_status_dataRelations = t.Object(
  {
    sopt_status: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          status_id: __nullable__(t.Integer()),
          update_by: __nullable__(t.String()),
          detail: __nullable__(t.String()),
          sopt_head_id: __nullable__(t.Integer()),
          note: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_status_dataPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    status_name: t.Optional(__nullable__(t.String())),
    percent: t.Optional(__nullable__(t.Integer())),
    is_process: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    stage_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_status_dataPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    status_name: t.Optional(__nullable__(t.String())),
    percent: t.Optional(__nullable__(t.Integer())),
    is_process: t.Optional(__nullable__(t.Boolean())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    sort_order: t.Optional(__nullable__(t.Integer())),
    stage_name: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_status_dataRelationsInputCreate = t.Object(
  {
    sopt_status: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_status_dataRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sopt_status: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_status_dataWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          status_name: t.String(),
          deivsion_id: t.Integer(),
          percent: t.Integer(),
          is_process: t.Boolean(),
          is_active: t.Boolean(),
          sort_order: t.Integer(),
          stage_name: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "sopt_status_data" },
  ),
);

export const sopt_status_dataWhereUnique = t.Recursive(
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
              status_name: t.String(),
              deivsion_id: t.Integer(),
              percent: t.Integer(),
              is_process: t.Boolean(),
              is_active: t.Boolean(),
              sort_order: t.Integer(),
              stage_name: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sopt_status_data" },
);

export const sopt_status_dataSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      status_name: t.Boolean(),
      deivsion_id: t.Boolean(),
      percent: t.Boolean(),
      is_process: t.Boolean(),
      is_active: t.Boolean(),
      sort_order: t.Boolean(),
      stage_name: t.Boolean(),
      sopt_status: t.Boolean(),
      departments: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_status_dataInclude = t.Partial(
  t.Object(
    { sopt_status: t.Boolean(), departments: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_status_dataOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      deivsion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      percent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_process: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sort_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      stage_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_status_data = t.Composite(
  [sopt_status_dataPlain, sopt_status_dataRelations],
  { additionalProperties: false },
);

export const sopt_status_dataInputCreate = t.Composite(
  [sopt_status_dataPlainInputCreate, sopt_status_dataRelationsInputCreate],
  { additionalProperties: false },
);

export const sopt_status_dataInputUpdate = t.Composite(
  [sopt_status_dataPlainInputUpdate, sopt_status_dataRelationsInputUpdate],
  { additionalProperties: false },
);
