import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const asset_checkPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    assett_goods_id: __nullable__(t.Integer()),
    instrument_pic: __nullable__(t.String()),
    sn_pic: __nullable__(t.String()),
    latitude: __nullable__(t.String()),
    longtitude: __nullable__(t.String()),
    recorded_by: __nullable__(t.String()),
    status: __nullable__(t.String()),
    note: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const asset_checkRelations = t.Object(
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

export const asset_checkPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    instrument_pic: t.Optional(__nullable__(t.String())),
    sn_pic: t.Optional(__nullable__(t.String())),
    latitude: t.Optional(__nullable__(t.String())),
    longtitude: t.Optional(__nullable__(t.String())),
    recorded_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const asset_checkPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    instrument_pic: t.Optional(__nullable__(t.String())),
    sn_pic: t.Optional(__nullable__(t.String())),
    latitude: t.Optional(__nullable__(t.String())),
    longtitude: t.Optional(__nullable__(t.String())),
    recorded_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const asset_checkRelationsInputCreate = t.Object(
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

export const asset_checkRelationsInputUpdate = t.Partial(
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

export const asset_checkWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          assett_goods_id: t.Integer(),
          instrument_pic: t.String(),
          sn_pic: t.String(),
          latitude: t.String(),
          longtitude: t.String(),
          recorded_by: t.String(),
          status: t.String(),
          note: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "asset_check" },
  ),
);

export const asset_checkWhereUnique = t.Recursive(
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
              assett_goods_id: t.Integer(),
              instrument_pic: t.String(),
              sn_pic: t.String(),
              latitude: t.String(),
              longtitude: t.String(),
              recorded_by: t.String(),
              status: t.String(),
              note: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "asset_check" },
);

export const asset_checkSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      assett_goods_id: t.Boolean(),
      instrument_pic: t.Boolean(),
      sn_pic: t.Boolean(),
      latitude: t.Boolean(),
      longtitude: t.Boolean(),
      recorded_by: t.Boolean(),
      status: t.Boolean(),
      note: t.Boolean(),
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

export const asset_checkInclude = t.Partial(
  t.Object(
    { assett_goods: t.Boolean(), users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const asset_checkOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      assett_goods_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      instrument_pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sn_pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      latitude: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      longtitude: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recorded_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const asset_check = t.Composite(
  [asset_checkPlain, asset_checkRelations],
  { additionalProperties: false },
);

export const asset_checkInputCreate = t.Composite(
  [asset_checkPlainInputCreate, asset_checkRelationsInputCreate],
  { additionalProperties: false },
);

export const asset_checkInputUpdate = t.Composite(
  [asset_checkPlainInputUpdate, asset_checkRelationsInputUpdate],
  { additionalProperties: false },
);
