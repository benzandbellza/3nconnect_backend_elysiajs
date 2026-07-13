import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sopt_statusPlain = t.Object(
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
);

export const sopt_statusRelations = t.Object(
  {
    sopt_head: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          doc_id: __nullable__(t.String()),
          users_id: __nullable__(t.String()),
          budget_year: __nullable__(t.String()),
          end_date: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    sopt_status_data: __nullable__(
      t.Object(
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
      ),
    ),
    users: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          avatar_url: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          sharepoint_id: __nullable__(t.Integer()),
          person_id: __nullable__(t.String()),
          email: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          planetone_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          position: __nullable__(t.String()),
          manager: __nullable__(t.String()),
          manager2: __nullable__(t.String()),
          address: __nullable__(t.String()),
          authid: __nullable__(t.String()),
          last_online: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          salesupport: __nullable__(t.String()),
          role: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          department: __nullable__(t.Integer()),
          company: __nullable__(t.Integer()),
          team: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          extra_pages: t.Array(t.String(), { additionalProperties: false }),
          lineid_3nholdingapp: __nullable__(t.String()),
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

export const sopt_statusPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    update_by: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_statusPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    update_by: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_statusRelationsInputCreate = t.Object(
  {
    sopt_head: t.Optional(
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
    sopt_status_data: t.Optional(
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
    users: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
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

export const sopt_statusRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sopt_head: t.Partial(
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
      sopt_status_data: t.Partial(
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
      users: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
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

export const sopt_statusWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          status_id: t.Integer(),
          update_by: t.String(),
          detail: t.String(),
          sopt_head_id: t.Integer(),
          note: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "sopt_status" },
  ),
);

export const sopt_statusWhereUnique = t.Recursive(
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
              status_id: t.Integer(),
              update_by: t.String(),
              detail: t.String(),
              sopt_head_id: t.Integer(),
              note: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sopt_status" },
);

export const sopt_statusSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      status_id: t.Boolean(),
      update_by: t.Boolean(),
      detail: t.Boolean(),
      sopt_head_id: t.Boolean(),
      note: t.Boolean(),
      sopt_head: t.Boolean(),
      sopt_status_data: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_statusInclude = t.Partial(
  t.Object(
    {
      sopt_head: t.Boolean(),
      sopt_status_data: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_statusOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      update_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sopt_head_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_status = t.Composite(
  [sopt_statusPlain, sopt_statusRelations],
  { additionalProperties: false },
);

export const sopt_statusInputCreate = t.Composite(
  [sopt_statusPlainInputCreate, sopt_statusRelationsInputCreate],
  { additionalProperties: false },
);

export const sopt_statusInputUpdate = t.Composite(
  [sopt_statusPlainInputUpdate, sopt_statusRelationsInputUpdate],
  { additionalProperties: false },
);
