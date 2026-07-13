import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_tax_invoicesPlain = t.Object(
  {
    id: t.String(),
    customer_id: t.String(),
    type: t.String(),
    name: t.String(),
    tax_id: t.String(),
    email: t.String(),
    phone: __nullable__(t.String()),
    address: t.String(),
    postal_code: __nullable__(t.String()),
    is_head_office: __nullable__(t.Boolean()),
    is_default: t.Boolean(),
    created_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_tax_invoicesRelations = t.Object(
  {
    customeruser: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_tax_invoicesPlainInputCreate = t.Object(
  {
    type: t.String(),
    name: t.String(),
    email: t.String(),
    phone: t.Optional(__nullable__(t.String())),
    address: t.String(),
    postal_code: t.Optional(__nullable__(t.String())),
    is_head_office: t.Optional(__nullable__(t.Boolean())),
    is_default: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_tax_invoicesPlainInputUpdate = t.Object(
  {
    type: t.Optional(t.String()),
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    phone: t.Optional(__nullable__(t.String())),
    address: t.Optional(t.String()),
    postal_code: t.Optional(__nullable__(t.String())),
    is_head_office: t.Optional(__nullable__(t.Boolean())),
    is_default: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_tax_invoicesRelationsInputCreate = t.Object(
  {
    customeruser: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_tax_invoicesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customeruser: t.Object(
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
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_tax_invoicesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          customer_id: t.String(),
          type: t.String(),
          name: t.String(),
          tax_id: t.String(),
          email: t.String(),
          phone: t.String(),
          address: t.String(),
          postal_code: t.String(),
          is_head_office: t.Boolean(),
          is_default: t.Boolean(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customer_tax_invoices" },
  ),
);

export const customer_tax_invoicesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
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
              id: t.String(),
              customer_id: t.String(),
              type: t.String(),
              name: t.String(),
              tax_id: t.String(),
              email: t.String(),
              phone: t.String(),
              address: t.String(),
              postal_code: t.String(),
              is_head_office: t.Boolean(),
              is_default: t.Boolean(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_tax_invoices" },
);

export const customer_tax_invoicesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customer_id: t.Boolean(),
      type: t.Boolean(),
      name: t.Boolean(),
      tax_id: t.Boolean(),
      email: t.Boolean(),
      phone: t.Boolean(),
      address: t.Boolean(),
      postal_code: t.Boolean(),
      is_head_office: t.Boolean(),
      is_default: t.Boolean(),
      created_at: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_tax_invoicesInclude = t.Partial(
  t.Object(
    { customeruser: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_tax_invoicesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tax_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      postal_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_head_office: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_default: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_tax_invoices = t.Composite(
  [customer_tax_invoicesPlain, customer_tax_invoicesRelations],
  { additionalProperties: false },
);

export const customer_tax_invoicesInputCreate = t.Composite(
  [
    customer_tax_invoicesPlainInputCreate,
    customer_tax_invoicesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const customer_tax_invoicesInputUpdate = t.Composite(
  [
    customer_tax_invoicesPlainInputUpdate,
    customer_tax_invoicesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
