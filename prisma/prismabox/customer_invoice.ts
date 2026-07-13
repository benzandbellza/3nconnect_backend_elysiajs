import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_invoicePlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    invoice_id: __nullable__(t.Integer()),
    customeruser_id: __nullable__(t.String()),
    contact_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const customer_invoiceRelations = t.Object(
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
  },
  { additionalProperties: false },
);

export const customer_invoicePlainInputCreate = t.Object(
  { created_at: t.Optional(t.Date()) },
  { additionalProperties: false },
);

export const customer_invoicePlainInputUpdate = t.Object(
  { created_at: t.Optional(t.Date()) },
  { additionalProperties: false },
);

export const customer_invoiceRelationsInputCreate = t.Object(
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
  },
  { additionalProperties: false },
);

export const customer_invoiceRelationsInputUpdate = t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const customer_invoiceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          invoice_id: t.Integer(),
          customeruser_id: t.String(),
          contact_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "customer_invoice" },
  ),
);

export const customer_invoiceWhereUnique = t.Recursive(
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
              invoice_id: t.Integer(),
              customeruser_id: t.String(),
              contact_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_invoice" },
);

export const customer_invoiceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      invoice_id: t.Boolean(),
      customeruser_id: t.Boolean(),
      contact_id: t.Boolean(),
      contact: t.Boolean(),
      customeruser: t.Boolean(),
      invoicehead: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customer_invoiceInclude = t.Partial(
  t.Object(
    {
      contact: t.Boolean(),
      customeruser: t.Boolean(),
      invoicehead: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customer_invoiceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customer_invoice = t.Composite(
  [customer_invoicePlain, customer_invoiceRelations],
  { additionalProperties: false },
);

export const customer_invoiceInputCreate = t.Composite(
  [customer_invoicePlainInputCreate, customer_invoiceRelationsInputCreate],
  { additionalProperties: false },
);

export const customer_invoiceInputUpdate = t.Composite(
  [customer_invoicePlainInputUpdate, customer_invoiceRelationsInputUpdate],
  { additionalProperties: false },
);
