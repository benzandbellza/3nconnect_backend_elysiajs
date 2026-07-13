import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const IOPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    docid: t.String(),
    customer: __nullable__(t.String()),
    note: __nullable__(t.String()),
    create_by: __nullable__(t.String()),
    status: __nullable__(t.String()),
    SR: __nullable__(t.String()),
    SX: __nullable__(t.String()),
    customer_name: __nullable__(t.String()),
    tel: __nullable__(t.String()),
    updated_at: __nullable__(t.Date()),
    update_by: __nullable__(t.String()),
    history: __nullable__(t.Any()),
    delivery_address_id: __nullable__(t.String()),
    invoice_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const IORelations = t.Object(
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
    customer_delivery: __nullable__(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          customer_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          address1: __nullable__(t.String()),
          address2: __nullable__(t.String()),
          subdestrict: __nullable__(t.String()),
          destrict: __nullable__(t.String()),
          province: __nullable__(t.String()),
          postel: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          recerived_name: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    head: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          start: __nullable__(t.Date()),
          end: __nullable__(t.String()),
          pichead: __nullable__(t.String()),
          picfull: __nullable__(t.String()),
          detail: __nullable__(t.String()),
          page: __nullable__(t.String()),
          link: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const IOPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    SR: t.Optional(__nullable__(t.String())),
    SX: t.Optional(__nullable__(t.String())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const IOPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    SR: t.Optional(__nullable__(t.String())),
    SX: t.Optional(__nullable__(t.String())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const IORelationsInputCreate = t.Object(
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
    customer_delivery: t.Optional(
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
    head: t.Optional(
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

export const IORelationsInputUpdate = t.Partial(
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
      customer_delivery: t.Partial(
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
      head: t.Partial(
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

export const IOWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.String(),
          customer: t.String(),
          note: t.String(),
          create_by: t.String(),
          status: t.String(),
          SR: t.String(),
          SX: t.String(),
          customer_name: t.String(),
          tel: t.String(),
          updated_at: t.Date(),
          update_by: t.String(),
          history: t.Any(),
          delivery_address_id: t.String(),
          invoice_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "IO" },
  ),
);

export const IOWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), docid: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.Integer() }), t.Object({ docid: t.String() })],
          { additionalProperties: false },
        ),
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
              docid: t.String(),
              customer: t.String(),
              note: t.String(),
              create_by: t.String(),
              status: t.String(),
              SR: t.String(),
              SX: t.String(),
              customer_name: t.String(),
              tel: t.String(),
              updated_at: t.Date(),
              update_by: t.String(),
              history: t.Any(),
              delivery_address_id: t.String(),
              invoice_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "IO" },
);

export const IOSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      customer: t.Boolean(),
      note: t.Boolean(),
      create_by: t.Boolean(),
      status: t.Boolean(),
      SR: t.Boolean(),
      SX: t.Boolean(),
      customer_name: t.Boolean(),
      tel: t.Boolean(),
      updated_at: t.Boolean(),
      update_by: t.Boolean(),
      history: t.Boolean(),
      delivery_address_id: t.Boolean(),
      invoice_id: t.Boolean(),
      users: t.Boolean(),
      customer_delivery: t.Boolean(),
      head: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const IOInclude = t.Partial(
  t.Object(
    {
      users: t.Boolean(),
      customer_delivery: t.Boolean(),
      head: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const IOOrderBy = t.Partial(
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
      customer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      create_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      SR: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      SX: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      update_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      history: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivery_address_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const IO = t.Composite([IOPlain, IORelations], {
  additionalProperties: false,
});

export const IOInputCreate = t.Composite(
  [IOPlainInputCreate, IORelationsInputCreate],
  { additionalProperties: false },
);

export const IOInputUpdate = t.Composite(
  [IOPlainInputUpdate, IORelationsInputUpdate],
  { additionalProperties: false },
);
