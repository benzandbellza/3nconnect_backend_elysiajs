import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const assett_warantyPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    asset_goods_id: __nullable__(t.Integer()),
    type: __nullable__(t.String()),
    start_date: __nullable__(t.Date()),
    end_date: __nullable__(t.Date()),
    pm_count: __nullable__(t.Integer()),
    note: __nullable__(t.String()),
    price: __nullable__(t.Number()),
    recorded_by: __nullable__(t.String()),
    status: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_warantyRelations = t.Object(
  {
    assett_goods: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          sn_no: __nullable__(t.String()),
          catalog_no: __nullable__(t.String()),
          name: __nullable__(t.String()),
          type: __nullable__(t.String()),
          cost: __nullable__(t.Number()),
          product_gr: __nullable__(t.String()),
          brand: __nullable__(t.String()),
          depreciation: __nullable__(t.Integer()),
          size: __nullable__(t.String()),
          aseet_id: __nullable__(t.Integer()),
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

export const assett_warantyPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    type: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    pm_count: t.Optional(__nullable__(t.Integer())),
    note: t.Optional(__nullable__(t.String())),
    price: t.Optional(__nullable__(t.Number())),
    recorded_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_warantyPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    type: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    pm_count: t.Optional(__nullable__(t.Integer())),
    note: t.Optional(__nullable__(t.String())),
    price: t.Optional(__nullable__(t.Number())),
    recorded_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_warantyRelationsInputCreate = t.Object(
  {
    assett_goods: t.Optional(
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

export const assett_warantyRelationsInputUpdate = t.Partial(
  t.Object(
    {
      assett_goods: t.Partial(
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

export const assett_warantyWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          asset_goods_id: t.Integer(),
          type: t.String(),
          start_date: t.Date(),
          end_date: t.Date(),
          pm_count: t.Integer(),
          note: t.String(),
          price: t.Number(),
          recorded_by: t.String(),
          status: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "assett_waranty" },
  ),
);

export const assett_warantyWhereUnique = t.Recursive(
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
              asset_goods_id: t.Integer(),
              type: t.String(),
              start_date: t.Date(),
              end_date: t.Date(),
              pm_count: t.Integer(),
              note: t.String(),
              price: t.Number(),
              recorded_by: t.String(),
              status: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "assett_waranty" },
);

export const assett_warantySelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      asset_goods_id: t.Boolean(),
      type: t.Boolean(),
      start_date: t.Boolean(),
      end_date: t.Boolean(),
      pm_count: t.Boolean(),
      note: t.Boolean(),
      price: t.Boolean(),
      recorded_by: t.Boolean(),
      status: t.Boolean(),
      assett_goods: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_warantyInclude = t.Partial(
  t.Object(
    { assett_goods: t.Boolean(), users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_warantyOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      asset_goods_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pm_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recorded_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const assett_waranty = t.Composite(
  [assett_warantyPlain, assett_warantyRelations],
  { additionalProperties: false },
);

export const assett_warantyInputCreate = t.Composite(
  [assett_warantyPlainInputCreate, assett_warantyRelationsInputCreate],
  { additionalProperties: false },
);

export const assett_warantyInputUpdate = t.Composite(
  [assett_warantyPlainInputUpdate, assett_warantyRelationsInputUpdate],
  { additionalProperties: false },
);
