import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const IMPlain = t.Object(
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
);

export const IMRelations = t.Object(
  {
    contact: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          namesurname: __nullable__(t.String()),
          company: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          note: __nullable__(t.String()),
          address1: __nullable__(t.String()),
          address2: __nullable__(t.String()),
          addresssubdestrict: __nullable__(t.String()),
          addressdestrict: __nullable__(t.String()),
          addressprovince: __nullable__(t.String()),
          addresspostel: __nullable__(t.String()),
          create_by: __nullable__(t.String()),
          prefix: __nullable__(t.String()),
          email: __nullable__(t.String()),
          division: __nullable__(t.String()),
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
    customeruser: __nullable__(
      t.Object(
        {
          id: t.String(),
          authid: __nullable__(t.String()),
          member_id: __nullable__(t.String()),
          created_at: t.Date(),
          prefix: __nullable__(t.String()),
          namesurname: __nullable__(t.String()),
          email: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          gender: __nullable__(t.String()),
          birthday: __nullable__(t.Date()),
          home_address_line1: __nullable__(t.String()),
          home_address_line2: __nullable__(t.String()),
          home_sub_district: __nullable__(t.String()),
          home_district: __nullable__(t.String()),
          home_province: __nullable__(t.String()),
          home_postal_code: __nullable__(t.String()),
          w1_address_line1: __nullable__(t.String()),
          w1_address_line2: __nullable__(t.String()),
          w1_sub_district: __nullable__(t.String()),
          w1_district: __nullable__(t.String()),
          w1_province: __nullable__(t.String()),
          w1_postal_code: __nullable__(t.String()),
          position: __nullable__(t.String()),
          w1_name: __nullable__(t.String()),
          status: __nullable__(t.String()),
          note: __nullable__(t.String()),
          Preferred_Contact_Channel: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          avatar_url: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          last_online: __nullable__(t.String()),
          picprofile: __nullable__(t.String()),
          wtel: __nullable__(t.String()),
          gibthailink: __nullable__(t.Any()),
          biodesignlink: __nullable__(t.Any()),
          lableaderlink: __nullable__(t.Any()),
          aeclink: __nullable__(t.Any()),
          doctorcallink: __nullable__(t.Any()),
          miclink: __nullable__(t.Any()),
          log: __nullable__(t.String()),
          department: __nullable__(t.String()),
          knowform: __nullable__(t.String()),
          referred_by: __nullable__(t.String()),
          uninstalled_at: __nullable__(t.Date()),
          line_user_id: __nullable__(t.String()),
          facebook_psid: __nullable__(t.String()),
          source: __nullable__(t.String()),
          tel2: __nullable__(t.String()),
        },
        { additionalProperties: false },
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
    im_goods: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const IMPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    im: t.Optional(__nullable__(t.String())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
    type: t.Optional(__nullable__(t.String())),
    shipping_address: t.Optional(__nullable__(t.String())),
    has_fifo_violation: t.Optional(__nullable__(t.Boolean())),
    price_valid_days: t.Optional(__nullable__(t.String())),
    delivery_days: t.Optional(__nullable__(t.String())),
    payment_days: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    need_smapprove: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const IMPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    customer: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    im: t.Optional(__nullable__(t.String())),
    customer_name: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    updated_at: t.Optional(__nullable__(t.Date())),
    update_by: t.Optional(__nullable__(t.String())),
    history: t.Optional(__nullable__(t.Any())),
    type: t.Optional(__nullable__(t.String())),
    shipping_address: t.Optional(__nullable__(t.String())),
    has_fifo_violation: t.Optional(__nullable__(t.Boolean())),
    price_valid_days: t.Optional(__nullable__(t.String())),
    delivery_days: t.Optional(__nullable__(t.String())),
    payment_days: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    need_smapprove: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const IMRelationsInputCreate = t.Object(
  {
    contact: t.Optional(
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
    customeruser: t.Optional(
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
    im_goods: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const IMRelationsInputUpdate = t.Partial(
  t.Object(
    {
      contact: t.Partial(
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
      customeruser: t.Partial(
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
      im_goods: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const IMWhere = t.Partial(
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
          im: t.String(),
          customer_name: t.String(),
          tel: t.String(),
          updated_at: t.Date(),
          update_by: t.String(),
          history: t.Any(),
          type: t.String(),
          delivery_address_id: t.String(),
          invoice_id: t.Integer(),
          shipping_address: t.String(),
          has_fifo_violation: t.Boolean(),
          price_valid_days: t.String(),
          delivery_days: t.String(),
          payment_days: t.String(),
          customeruser_id: t.String(),
          contact_id: t.Integer(),
          prefix: t.String(),
          need_smapprove: t.Boolean(),
          sopt_id: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
    { $id: "IM" },
  ),
);

export const IMWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer(), docid: t.String() },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
            },
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
              im: t.String(),
              customer_name: t.String(),
              tel: t.String(),
              updated_at: t.Date(),
              update_by: t.String(),
              history: t.Any(),
              type: t.String(),
              delivery_address_id: t.String(),
              invoice_id: t.Integer(),
              shipping_address: t.String(),
              has_fifo_violation: t.Boolean(),
              price_valid_days: t.String(),
              delivery_days: t.String(),
              payment_days: t.String(),
              customeruser_id: t.String(),
              contact_id: t.Integer(),
              prefix: t.String(),
              need_smapprove: t.Boolean(),
              sopt_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "IM" },
);

export const IMSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      customer: t.Boolean(),
      note: t.Boolean(),
      create_by: t.Boolean(),
      status: t.Boolean(),
      im: t.Boolean(),
      customer_name: t.Boolean(),
      tel: t.Boolean(),
      updated_at: t.Boolean(),
      update_by: t.Boolean(),
      history: t.Boolean(),
      type: t.Boolean(),
      delivery_address_id: t.Boolean(),
      invoice_id: t.Boolean(),
      shipping_address: t.Boolean(),
      has_fifo_violation: t.Boolean(),
      price_valid_days: t.Boolean(),
      delivery_days: t.Boolean(),
      payment_days: t.Boolean(),
      customeruser_id: t.Boolean(),
      contact_id: t.Boolean(),
      prefix: t.Boolean(),
      need_smapprove: t.Boolean(),
      sopt_id: t.Boolean(),
      contact: t.Boolean(),
      users: t.Boolean(),
      customeruser: t.Boolean(),
      customer_delivery: t.Boolean(),
      invoicehead: t.Boolean(),
      sopt_head: t.Boolean(),
      im_goods: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const IMInclude = t.Partial(
  t.Object(
    {
      contact: t.Boolean(),
      users: t.Boolean(),
      customeruser: t.Boolean(),
      customer_delivery: t.Boolean(),
      invoicehead: t.Boolean(),
      sopt_head: t.Boolean(),
      im_goods: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const IMOrderBy = t.Partial(
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
      im: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      has_fifo_violation: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price_valid_days: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivery_days: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_days: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prefix: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      need_smapprove: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sopt_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const IM = t.Composite([IMPlain, IMRelations], {
  additionalProperties: false,
});

export const IMInputCreate = t.Composite(
  [IMPlainInputCreate, IMRelationsInputCreate],
  { additionalProperties: false },
);

export const IMInputUpdate = t.Composite(
  [IMPlainInputUpdate, IMRelationsInputUpdate],
  { additionalProperties: false },
);
