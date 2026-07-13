import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const im_goodsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    docid: t.Integer(),
    mat_cat: __nullable__(t.String()),
    mat_name: __nullable__(t.String()),
    qty: t.Integer(),
    brand: __nullable__(t.String()),
    reason: __nullable__(t.String()),
    im_qty: __nullable__(t.Number()),
    itemstatus: __nullable__(t.String()),
    MR: __nullable__(t.String()),
    location: __nullable__(t.String()),
    Owner: __nullable__(t.String()),
    exp: __nullable__(t.String()),
    lot: __nullable__(t.String()),
    needs_pm_approval: __nullable__(t.Boolean()),
    approved_by_pm: __nullable__(t.String()),
    pm_approved_at: __nullable__(t.Date()),
    pm_note: __nullable__(t.String()),
    price: __nullable__(t.Number()),
    category: __nullable__(t.String()),
    po_ref: __nullable__(t.String()),
    rsv_ref: __nullable__(t.String()),
    name_edit: __nullable__(t.String()),
    io_qty: __nullable__(t.Number()),
    need_smapprove: __nullable__(t.Boolean()),
    users_id: __nullable__(t.String()),
    sn: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const im_goodsRelations = t.Object(
  {
    users_im_goods_approved_by_pmTousers: __nullable__(
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
    IM: t.Object(
      {
        id: t.Integer(),
        created_at: t.Date(),
        docid: t.String(),
        customer: __nullable__(t.String()),
        note: __nullable__(t.String()),
        create_by: __nullable__(t.String()),
        status: __nullable__(t.String()),
        im: __nullable__(t.String()),
        customer_name: __nullable__(t.String()),
        tel: __nullable__(t.String()),
        updated_at: __nullable__(t.Date()),
        update_by: __nullable__(t.String()),
        history: __nullable__(t.Any()),
        type: __nullable__(t.String()),
        delivery_address_id: __nullable__(t.String()),
        invoice_id: __nullable__(t.Integer()),
        shipping_address: __nullable__(t.String()),
        has_fifo_violation: __nullable__(t.Boolean()),
        price_valid_days: __nullable__(t.String()),
        delivery_days: __nullable__(t.String()),
        payment_days: __nullable__(t.String()),
        customeruser_id: __nullable__(t.String()),
        contact_id: __nullable__(t.Integer()),
        prefix: __nullable__(t.String()),
        need_smapprove: __nullable__(t.Boolean()),
        sopt_id: __nullable__(t.Integer()),
      },
      {
        additionalProperties: false,
        description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
      },
    ),
    users_im_goods_users_idTousers: __nullable__(
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

export const im_goodsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Integer(),
    brand: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
    im_qty: t.Optional(__nullable__(t.Number())),
    itemstatus: t.Optional(__nullable__(t.String())),
    MR: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    Owner: t.Optional(__nullable__(t.String())),
    exp: t.Optional(__nullable__(t.String())),
    lot: t.Optional(__nullable__(t.String())),
    needs_pm_approval: t.Optional(__nullable__(t.Boolean())),
    approved_by_pm: t.Optional(__nullable__(t.String())),
    pm_approved_at: t.Optional(__nullable__(t.Date())),
    pm_note: t.Optional(__nullable__(t.String())),
    price: t.Optional(__nullable__(t.Number())),
    category: t.Optional(__nullable__(t.String())),
    po_ref: t.Optional(__nullable__(t.String())),
    rsv_ref: t.Optional(__nullable__(t.String())),
    name_edit: t.Optional(__nullable__(t.String())),
    io_qty: t.Optional(__nullable__(t.Number())),
    need_smapprove: t.Optional(__nullable__(t.Boolean())),
    sn: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const im_goodsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Optional(t.Integer()),
    brand: t.Optional(__nullable__(t.String())),
    reason: t.Optional(__nullable__(t.String())),
    im_qty: t.Optional(__nullable__(t.Number())),
    itemstatus: t.Optional(__nullable__(t.String())),
    MR: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    Owner: t.Optional(__nullable__(t.String())),
    exp: t.Optional(__nullable__(t.String())),
    lot: t.Optional(__nullable__(t.String())),
    needs_pm_approval: t.Optional(__nullable__(t.Boolean())),
    approved_by_pm: t.Optional(__nullable__(t.String())),
    pm_approved_at: t.Optional(__nullable__(t.Date())),
    pm_note: t.Optional(__nullable__(t.String())),
    price: t.Optional(__nullable__(t.Number())),
    category: t.Optional(__nullable__(t.String())),
    po_ref: t.Optional(__nullable__(t.String())),
    rsv_ref: t.Optional(__nullable__(t.String())),
    name_edit: t.Optional(__nullable__(t.String())),
    io_qty: t.Optional(__nullable__(t.Number())),
    need_smapprove: t.Optional(__nullable__(t.Boolean())),
    sn: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const im_goodsRelationsInputCreate = t.Object(
  {
    users_im_goods_approved_by_pmTousers: t.Optional(
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
    IM: t.Object(
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
    users_im_goods_users_idTousers: t.Optional(
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

export const im_goodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      users_im_goods_approved_by_pmTousers: t.Partial(
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
      IM: t.Object(
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
      users_im_goods_users_idTousers: t.Partial(
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

export const im_goodsWhere = t.Partial(
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
          brand: t.String(),
          reason: t.String(),
          im_qty: t.Number(),
          itemstatus: t.String(),
          MR: t.String(),
          location: t.String(),
          Owner: t.String(),
          exp: t.String(),
          lot: t.String(),
          needs_pm_approval: t.Boolean(),
          approved_by_pm: t.String(),
          pm_approved_at: t.Date(),
          pm_note: t.String(),
          price: t.Number(),
          category: t.String(),
          po_ref: t.String(),
          rsv_ref: t.String(),
          name_edit: t.String(),
          io_qty: t.Number(),
          need_smapprove: t.Boolean(),
          users_id: t.String(),
          sn: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "im_goods" },
  ),
);

export const im_goodsWhereUnique = t.Recursive(
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
              brand: t.String(),
              reason: t.String(),
              im_qty: t.Number(),
              itemstatus: t.String(),
              MR: t.String(),
              location: t.String(),
              Owner: t.String(),
              exp: t.String(),
              lot: t.String(),
              needs_pm_approval: t.Boolean(),
              approved_by_pm: t.String(),
              pm_approved_at: t.Date(),
              pm_note: t.String(),
              price: t.Number(),
              category: t.String(),
              po_ref: t.String(),
              rsv_ref: t.String(),
              name_edit: t.String(),
              io_qty: t.Number(),
              need_smapprove: t.Boolean(),
              users_id: t.String(),
              sn: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "im_goods" },
);

export const im_goodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      mat_cat: t.Boolean(),
      mat_name: t.Boolean(),
      qty: t.Boolean(),
      brand: t.Boolean(),
      reason: t.Boolean(),
      im_qty: t.Boolean(),
      itemstatus: t.Boolean(),
      MR: t.Boolean(),
      location: t.Boolean(),
      Owner: t.Boolean(),
      exp: t.Boolean(),
      lot: t.Boolean(),
      needs_pm_approval: t.Boolean(),
      approved_by_pm: t.Boolean(),
      pm_approved_at: t.Boolean(),
      pm_note: t.Boolean(),
      price: t.Boolean(),
      category: t.Boolean(),
      po_ref: t.Boolean(),
      rsv_ref: t.Boolean(),
      name_edit: t.Boolean(),
      io_qty: t.Boolean(),
      need_smapprove: t.Boolean(),
      users_id: t.Boolean(),
      sn: t.Boolean(),
      users_im_goods_approved_by_pmTousers: t.Boolean(),
      IM: t.Boolean(),
      users_im_goods_users_idTousers: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const im_goodsInclude = t.Partial(
  t.Object(
    {
      users_im_goods_approved_by_pmTousers: t.Boolean(),
      IM: t.Boolean(),
      users_im_goods_users_idTousers: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const im_goodsOrderBy = t.Partial(
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
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      im_qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      itemstatus: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MR: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Owner: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      exp: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lot: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      needs_pm_approval: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approved_by_pm: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pm_approved_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pm_note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      po_ref: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      rsv_ref: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name_edit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      io_qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      need_smapprove: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      users_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sn: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const im_goods = t.Composite([im_goodsPlain, im_goodsRelations], {
  additionalProperties: false,
});

export const im_goodsInputCreate = t.Composite(
  [im_goodsPlainInputCreate, im_goodsRelationsInputCreate],
  { additionalProperties: false },
);

export const im_goodsInputUpdate = t.Composite(
  [im_goodsPlainInputUpdate, im_goodsRelationsInputUpdate],
  { additionalProperties: false },
);
