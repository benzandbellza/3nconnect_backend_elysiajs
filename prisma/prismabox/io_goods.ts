import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const io_goodsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    docid: t.Integer(),
    mat_cat: __nullable__(t.String()),
    mat_name: __nullable__(t.String()),
    qty: t.Integer(),
    price: t.Number(),
    brand: __nullable__(t.String()),
    reason: __nullable__(t.String()),
    io_qty: __nullable__(t.Number()),
    itemstatus: __nullable__(t.String()),
    users_id: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const io_goodsRelations = t.Object(
  {
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
  { additionalProperties: false },
);

export const io_goodsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Integer(),
    price: t.Number(),
    brand: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
    io_qty: t.Optional(__nullable__(t.Number())),
    itemstatus: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const io_goodsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Optional(t.Integer()),
    price: t.Optional(t.Number()),
    brand: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
    io_qty: t.Optional(__nullable__(t.Number())),
    itemstatus: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const io_goodsRelationsInputCreate = t.Object(
  {
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
  { additionalProperties: false },
);

export const io_goodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
    { additionalProperties: false },
  ),
);

export const io_goodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.Integer(),
          mat_cat: t.String(),
          mat_name: t.String(),
          qty: t.Integer(),
          price: t.Number(),
          brand: t.String(),
          reason: t.String(),
          io_qty: t.Number(),
          itemstatus: t.String(),
          users_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "io_goods" },
  ),
);

export const io_goodsWhereUnique = t.Recursive(
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
              docid: t.Integer(),
              mat_cat: t.String(),
              mat_name: t.String(),
              qty: t.Integer(),
              price: t.Number(),
              brand: t.String(),
              reason: t.String(),
              io_qty: t.Number(),
              itemstatus: t.String(),
              users_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "io_goods" },
);

export const io_goodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      mat_cat: t.Boolean(),
      mat_name: t.Boolean(),
      qty: t.Boolean(),
      price: t.Boolean(),
      brand: t.Boolean(),
      reason: t.Boolean(),
      io_qty: t.Boolean(),
      itemstatus: t.Boolean(),
      users_id: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const io_goodsInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const io_goodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      docid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_cat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      io_qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      itemstatus: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      users_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const io_goods = t.Composite([io_goodsPlain, io_goodsRelations], {
  additionalProperties: false,
});

export const io_goodsInputCreate = t.Composite(
  [io_goodsPlainInputCreate, io_goodsRelationsInputCreate],
  { additionalProperties: false },
);

export const io_goodsInputUpdate = t.Composite(
  [io_goodsPlainInputUpdate, io_goodsRelationsInputUpdate],
  { additionalProperties: false },
);
