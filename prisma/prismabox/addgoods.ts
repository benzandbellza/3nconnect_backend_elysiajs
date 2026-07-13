import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const addgoodsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    brand: __nullable__(t.Integer()),
    matcatrequest: __nullable__(t.String()),
    matnamerequest: __nullable__(t.String()),
    matcat: __nullable__(t.String()),
    matname: __nullable__(t.String()),
    request_by: __nullable__(t.String()),
    status: __nullable__(t.String()),
    add_id: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const addgoodsRelations = t.Object(
  {
    brand_addgoods_brandTobrand: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          brand: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          country: __nullable__(t.String()),
          pic: __nullable__(t.String()),
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
  { additionalProperties: false },
);

export const addgoodsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    brand: t.Optional(__nullable__(t.Integer())),
    matcatrequest: t.Optional(__nullable__(t.String())),
    matnamerequest: t.Optional(__nullable__(t.String())),
    matcat: t.Optional(__nullable__(t.String())),
    matname: t.Optional(__nullable__(t.String())),
    request_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const addgoodsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    brand: t.Optional(__nullable__(t.Integer())),
    matcatrequest: t.Optional(__nullable__(t.String())),
    matnamerequest: t.Optional(__nullable__(t.String())),
    matcat: t.Optional(__nullable__(t.String())),
    matname: t.Optional(__nullable__(t.String())),
    request_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const addgoodsRelationsInputCreate = t.Object(
  {
    brand_addgoods_brandTobrand: t.Optional(
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
  { additionalProperties: false },
);

export const addgoodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      brand_addgoods_brandTobrand: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const addgoodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          brand: t.Integer(),
          matcatrequest: t.String(),
          matnamerequest: t.String(),
          matcat: t.String(),
          matname: t.String(),
          request_by: t.String(),
          status: t.String(),
          add_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "addgoods" },
  ),
);

export const addgoodsWhereUnique = t.Recursive(
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
              brand: t.Integer(),
              matcatrequest: t.String(),
              matnamerequest: t.String(),
              matcat: t.String(),
              matname: t.String(),
              request_by: t.String(),
              status: t.String(),
              add_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "addgoods" },
);

export const addgoodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      brand: t.Boolean(),
      matcatrequest: t.Boolean(),
      matnamerequest: t.Boolean(),
      matcat: t.Boolean(),
      matname: t.Boolean(),
      request_by: t.Boolean(),
      status: t.Boolean(),
      add_id: t.Boolean(),
      brand_addgoods_brandTobrand: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const addgoodsInclude = t.Partial(
  t.Object(
    {
      brand_addgoods_brandTobrand: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const addgoodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matcatrequest: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matnamerequest: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matcat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      request_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      add_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const addgoods = t.Composite([addgoodsPlain, addgoodsRelations], {
  additionalProperties: false,
});

export const addgoodsInputCreate = t.Composite(
  [addgoodsPlainInputCreate, addgoodsRelationsInputCreate],
  { additionalProperties: false },
);

export const addgoodsInputUpdate = t.Composite(
  [addgoodsPlainInputUpdate, addgoodsRelationsInputUpdate],
  { additionalProperties: false },
);
