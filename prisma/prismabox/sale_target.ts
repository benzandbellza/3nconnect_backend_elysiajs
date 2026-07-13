import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sale_targetPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    user_id: __nullable__(t.String()),
    target_date: __nullable__(t.Date()),
    companies_id: __nullable__(t.Integer()),
    matcat: __nullable__(t.String()),
    target: __nullable__(t.Number()),
    status: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sale_targetRelations = t.Object(
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

export const sale_targetPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    target_date: t.Optional(__nullable__(t.Date())),
    matcat: t.Optional(__nullable__(t.String())),
    target: t.Optional(__nullable__(t.Number())),
    status: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sale_targetPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    target_date: t.Optional(__nullable__(t.Date())),
    matcat: t.Optional(__nullable__(t.String())),
    target: t.Optional(__nullable__(t.Number())),
    status: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sale_targetRelationsInputCreate = t.Object(
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

export const sale_targetRelationsInputUpdate = t.Partial(
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

export const sale_targetWhere = t.Partial(
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
          target_date: t.Date(),
          companies_id: t.Integer(),
          matcat: t.String(),
          target: t.Number(),
          status: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "sale_target" },
  ),
);

export const sale_targetWhereUnique = t.Recursive(
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
              user_id: t.String(),
              target_date: t.Date(),
              companies_id: t.Integer(),
              matcat: t.String(),
              target: t.Number(),
              status: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sale_target" },
);

export const sale_targetSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      user_id: t.Boolean(),
      target_date: t.Boolean(),
      companies_id: t.Boolean(),
      matcat: t.Boolean(),
      target: t.Boolean(),
      status: t.Boolean(),
      companies: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sale_targetInclude = t.Partial(
  t.Object(
    { companies: t.Boolean(), users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sale_targetOrderBy = t.Partial(
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
      target_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      companies_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matcat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sale_target = t.Composite(
  [sale_targetPlain, sale_targetRelations],
  { additionalProperties: false },
);

export const sale_targetInputCreate = t.Composite(
  [sale_targetPlainInputCreate, sale_targetRelationsInputCreate],
  { additionalProperties: false },
);

export const sale_targetInputUpdate = t.Composite(
  [sale_targetPlainInputUpdate, sale_targetRelationsInputUpdate],
  { additionalProperties: false },
);
