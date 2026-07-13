import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_deliveryPlain = t.Object(
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
);

export const customer_deliveryRelations = t.Object(
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
    IO: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    PO: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
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
  },
  { additionalProperties: false },
);

export const customer_deliveryPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    tel: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    subdestrict: t.Optional(__nullable__(t.String())),
    destrict: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    postel: t.Optional(__nullable__(t.String())),
    recerived_name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customer_deliveryPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    tel: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    subdestrict: t.Optional(__nullable__(t.String())),
    destrict: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    postel: t.Optional(__nullable__(t.String())),
    recerived_name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customer_deliveryRelationsInputCreate = t.Object(
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
    IO: t.Optional(
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
    PO: t.Optional(
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
  },
  { additionalProperties: false },
);

export const customer_deliveryRelationsInputUpdate = t.Partial(
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
      IO: t.Partial(
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
      PO: t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const customer_deliveryWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          created_at: t.Date(),
          customer_id: t.String(),
          tel: t.String(),
          address1: t.String(),
          address2: t.String(),
          subdestrict: t.String(),
          destrict: t.String(),
          province: t.String(),
          postel: t.String(),
          contact_id: t.Integer(),
          recerived_name: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "customer_delivery" },
  ),
);

export const customer_deliveryWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
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
              created_at: t.Date(),
              customer_id: t.String(),
              tel: t.String(),
              address1: t.String(),
              address2: t.String(),
              subdestrict: t.String(),
              destrict: t.String(),
              province: t.String(),
              postel: t.String(),
              contact_id: t.Integer(),
              recerived_name: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_delivery" },
);

export const customer_deliverySelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      customer_id: t.Boolean(),
      tel: t.Boolean(),
      address1: t.Boolean(),
      address2: t.Boolean(),
      subdestrict: t.Boolean(),
      destrict: t.Boolean(),
      province: t.Boolean(),
      postel: t.Boolean(),
      contact_id: t.Boolean(),
      recerived_name: t.Boolean(),
      IM: t.Boolean(),
      IO: t.Boolean(),
      PO: t.Boolean(),
      contact: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customer_deliveryInclude = t.Partial(
  t.Object(
    {
      IM: t.Boolean(),
      IO: t.Boolean(),
      PO: t.Boolean(),
      contact: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customer_deliveryOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subdestrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      destrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      postel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recerived_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customer_delivery = t.Composite(
  [customer_deliveryPlain, customer_deliveryRelations],
  { additionalProperties: false },
);

export const customer_deliveryInputCreate = t.Composite(
  [customer_deliveryPlainInputCreate, customer_deliveryRelationsInputCreate],
  { additionalProperties: false },
);

export const customer_deliveryInputUpdate = t.Composite(
  [customer_deliveryPlainInputUpdate, customer_deliveryRelationsInputUpdate],
  { additionalProperties: false },
);
