import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const contactPlain = t.Object(
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
);

export const contactRelations = t.Object(
  {
    IM: t.Array(
      t.Object(
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
      { additionalProperties: false },
    ),
    assett: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          install: __nullable__(t.String()),
          install_place: __nullable__(t.String()),
          installer: __nullable__(t.String()),
          recorded_by: __nullable__(t.String()),
          sale_person_id: __nullable__(t.String()),
          ref_doc: __nullable__(t.String()),
          note: __nullable__(t.String()),
          doc_id: __nullable__(t.String()),
          companies_id: __nullable__(t.Integer()),
          status: __nullable__(t.String()),
          log: __nullable__(t.String()),
          action_date: __nullable__(t.Date()),
          type: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
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
    customer_delivery: t.Array(
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
      { additionalProperties: false },
    ),
    customer_invoice: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          invoice_id: __nullable__(t.Integer()),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    sopt_head: t.Array(
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
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const contactPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    namesurname: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    addresssubdestrict: t.Optional(__nullable__(t.String())),
    addressdestrict: t.Optional(__nullable__(t.String())),
    addressprovince: t.Optional(__nullable__(t.String())),
    addresspostel: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    division: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const contactPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    namesurname: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    addresssubdestrict: t.Optional(__nullable__(t.String())),
    addressdestrict: t.Optional(__nullable__(t.String())),
    addressprovince: t.Optional(__nullable__(t.String())),
    addresspostel: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    division: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const contactRelationsInputCreate = t.Object(
  {
    IM: t.Optional(
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
    assett: t.Optional(
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
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    customer_invoice: t.Optional(
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
    sopt_head: t.Optional(
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

export const contactRelationsInputUpdate = t.Partial(
  t.Object(
    {
      IM: t.Partial(
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
      assett: t.Partial(
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
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      customer_invoice: t.Partial(
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
      sopt_head: t.Partial(
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

export const contactWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          namesurname: t.String(),
          company: t.String(),
          tel: t.String(),
          note: t.String(),
          address1: t.String(),
          address2: t.String(),
          addresssubdestrict: t.String(),
          addressdestrict: t.String(),
          addressprovince: t.String(),
          addresspostel: t.String(),
          create_by: t.String(),
          prefix: t.String(),
          email: t.String(),
          division: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "contact" },
  ),
);

export const contactWhereUnique = t.Recursive(
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
              namesurname: t.String(),
              company: t.String(),
              tel: t.String(),
              note: t.String(),
              address1: t.String(),
              address2: t.String(),
              addresssubdestrict: t.String(),
              addressdestrict: t.String(),
              addressprovince: t.String(),
              addresspostel: t.String(),
              create_by: t.String(),
              prefix: t.String(),
              email: t.String(),
              division: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "contact" },
);

export const contactSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      namesurname: t.Boolean(),
      company: t.Boolean(),
      tel: t.Boolean(),
      note: t.Boolean(),
      address1: t.Boolean(),
      address2: t.Boolean(),
      addresssubdestrict: t.Boolean(),
      addressdestrict: t.Boolean(),
      addressprovince: t.Boolean(),
      addresspostel: t.Boolean(),
      create_by: t.Boolean(),
      prefix: t.Boolean(),
      email: t.Boolean(),
      division: t.Boolean(),
      IM: t.Boolean(),
      assett: t.Boolean(),
      users: t.Boolean(),
      customer_delivery: t.Boolean(),
      customer_invoice: t.Boolean(),
      sopt_head: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const contactInclude = t.Partial(
  t.Object(
    {
      IM: t.Boolean(),
      assett: t.Boolean(),
      users: t.Boolean(),
      customer_delivery: t.Boolean(),
      customer_invoice: t.Boolean(),
      sopt_head: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const contactOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      namesurname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addresssubdestrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addressdestrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addressprovince: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addresspostel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      create_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prefix: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      division: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const contact = t.Composite([contactPlain, contactRelations], {
  additionalProperties: false,
});

export const contactInputCreate = t.Composite(
  [contactPlainInputCreate, contactRelationsInputCreate],
  { additionalProperties: false },
);

export const contactInputUpdate = t.Composite(
  [contactPlainInputUpdate, contactRelationsInputUpdate],
  { additionalProperties: false },
);
