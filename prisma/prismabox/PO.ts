import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const POPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    docid: t.String(),
    customer: __nullable__(t.String()),
    note: __nullable__(t.String()),
    create_by: __nullable__(t.String()),
    status: __nullable__(t.String()),
    PQ: __nullable__(t.String()),
    PGT: __nullable__(t.String()),
    history: __nullable__(t.Any()),
    customer_name: __nullable__(t.String()),
    tel: __nullable__(t.String()),
    updated_at: __nullable__(t.Date()),
    update_by: __nullable__(t.String()),
    delivery_address_id: __nullable__(t.String()),
    invoice_id: __nullable__(t.Integer()),
    shipping_address: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const PORelations = t.Object(
  {
    users_PO_create_byTousers: __nullable__(
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
    invoicehead: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          company_name: __nullable__(t.String()),
          Entity_ID: t.String(),
          Entity_Name: __nullable__(t.String()),
          Address1: __nullable__(t.String()),
          Address2: __nullable__(t.String()),
          Province: __nullable__(t.String()),
          Country: __nullable__(t.String()),
          PostCode: __nullable__(t.String()),
          Tax_Number: __nullable__(t.String()),
          Branch_Tax_Name: __nullable__(t.String()),
          Branch_Tax_ID: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    users_PO_update_byTousers: __nullable__(
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
    po_goods: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.Integer(),
          mat_cat: __nullable__(t.String()),
          mat_name: __nullable__(t.String()),
          qty: t.Integer(),
          price: t.Number(),
          brand: __nullable__(t.String()),
          int_matcat: __nullable__(t.String()),
          minprice: __nullable__(t.Number()),
          productdata_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const POPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    PQ: t.Optional(__nullable__(t.String())),
    PGT: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    shipping_address: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const POPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    PQ: t.Optional(__nullable__(t.String())),
    PGT: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    shipping_address: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const PORelationsInputCreate = t.Object(
  {
    users_PO_create_byTousers: t.Optional(
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
    invoicehead: t.Optional(
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
    users_PO_update_byTousers: t.Optional(
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
    po_goods: t.Optional(
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
  },
  { additionalProperties: false },
);

export const PORelationsInputUpdate = t.Partial(
  t.Object(
    {
      users_PO_create_byTousers: t.Partial(
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
      invoicehead: t.Partial(
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
      users_PO_update_byTousers: t.Partial(
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
      po_goods: t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const POWhere = t.Partial(
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
          PQ: t.String(),
          PGT: t.String(),
          history: t.Any(),
          customer_name: t.String(),
          tel: t.String(),
          updated_at: t.Date(),
          update_by: t.String(),
          delivery_address_id: t.String(),
          invoice_id: t.Integer(),
          shipping_address: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "PO" },
  ),
);

export const POWhereUnique = t.Recursive(
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
              PQ: t.String(),
              PGT: t.String(),
              history: t.Any(),
              customer_name: t.String(),
              tel: t.String(),
              updated_at: t.Date(),
              update_by: t.String(),
              delivery_address_id: t.String(),
              invoice_id: t.Integer(),
              shipping_address: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "PO" },
);

export const POSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      customer: t.Boolean(),
      note: t.Boolean(),
      create_by: t.Boolean(),
      status: t.Boolean(),
      PQ: t.Boolean(),
      PGT: t.Boolean(),
      history: t.Boolean(),
      customer_name: t.Boolean(),
      tel: t.Boolean(),
      updated_at: t.Boolean(),
      update_by: t.Boolean(),
      delivery_address_id: t.Boolean(),
      invoice_id: t.Boolean(),
      shipping_address: t.Boolean(),
      users_PO_create_byTousers: t.Boolean(),
      customer_delivery: t.Boolean(),
      invoicehead: t.Boolean(),
      users_PO_update_byTousers: t.Boolean(),
      po_goods: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const POInclude = t.Partial(
  t.Object(
    {
      users_PO_create_byTousers: t.Boolean(),
      customer_delivery: t.Boolean(),
      invoicehead: t.Boolean(),
      users_PO_update_byTousers: t.Boolean(),
      po_goods: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const POOrderBy = t.Partial(
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
      PQ: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PGT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      history: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      delivery_address_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shipping_address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const PO = t.Composite([POPlain, PORelations], {
  additionalProperties: false,
});

export const POInputCreate = t.Composite(
  [POPlainInputCreate, PORelationsInputCreate],
  { additionalProperties: false },
);

export const POInputUpdate = t.Composite(
  [POPlainInputUpdate, PORelationsInputUpdate],
  { additionalProperties: false },
);
