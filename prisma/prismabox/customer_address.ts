import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_addressPlain = t.Object(
  {
    id: t.Integer(),
    customeruser_id: __nullable__(t.String()),
    tag_name: __nullable__(t.String()),
    receiver_name: __nullable__(t.String()),
    phone_no: __nullable__(t.String()),
    address_name: __nullable__(t.String()),
    address_line1: __nullable__(t.String()),
    address_line2: __nullable__(t.String()),
    sub_district: __nullable__(t.String()),
    district: __nullable__(t.String()),
    province: __nullable__(t.String()),
    post_code: __nullable__(t.String()),
    set_default: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_addressRelations = t.Object(
  {
    order_billing: t.Array(
      t.Object(
        {
          id: t.Integer(),
          order_no: __nullable__(t.String()),
          buyer_customeruser_id: t.String(),
          payment_method_type: __nullable__(t.String()),
          order_status: __nullable__(t.String()),
          im_no: __nullable__(t.String()),
          order_type: __nullable__(t.String()),
          invoice_id: __nullable__(t.Integer()),
          shipping_address_id: __nullable__(t.Integer()),
          payment_status: __nullable__(t.String()),
          log_payment: __nullable__(t.Date()),
          order_uuid: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          admin_updated_by: __nullable__(t.String()),
          admin_updated_at: __nullable__(t.Date()),
          order_created_by: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          company_id: __nullable__(t.Integer()),
          shipping_cost: __nullable__(t.Number()),
          admin_verify_status: __nullable__(t.String()),
          payment_invoice_no: __nullable__(t.String()),
          credit_terms_day: __nullable__(t.Integer()),
          is_admin_order_created: __nullable__(t.Boolean()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
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
          prefix: __nullable__(t.String()),
          need_smapprove: __nullable__(t.Boolean()),
          sopt_id: __nullable__(t.Integer()),
          payment_status: __nullable__(t.String()),
          log_payment: __nullable__(t.Date()),
          order_uuid: __nullable__(t.String()),
          company_id: __nullable__(t.Integer()),
          shipping_cost: __nullable__(t.Number()),
          admin_verify_status: __nullable__(t.String()),
          payment_invoice_no: __nullable__(t.String()),
          credit_terms_day: __nullable__(t.Integer()),
          is_admin_order_created: __nullable__(t.Boolean()),
          admin_updated_at: __nullable__(t.Date()),
          shipping_address_id: __nullable__(t.Integer()),
          order_created_by: __nullable__(t.String()),
          payment_method_type: __nullable__(t.String()),
          customer_invoice_address_id: __nullable__(t.Integer()),
          is_review_completed: __nullable__(t.Boolean()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_addressPlainInputCreate = t.Object(
  {
    tag_name: t.Optional(__nullable__(t.String())),
    receiver_name: t.Optional(__nullable__(t.String())),
    phone_no: t.Optional(__nullable__(t.String())),
    address_name: t.Optional(__nullable__(t.String())),
    address_line1: t.Optional(__nullable__(t.String())),
    address_line2: t.Optional(__nullable__(t.String())),
    sub_district: t.Optional(__nullable__(t.String())),
    district: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    post_code: t.Optional(__nullable__(t.String())),
    set_default: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_addressPlainInputUpdate = t.Object(
  {
    tag_name: t.Optional(__nullable__(t.String())),
    receiver_name: t.Optional(__nullable__(t.String())),
    phone_no: t.Optional(__nullable__(t.String())),
    address_name: t.Optional(__nullable__(t.String())),
    address_line1: t.Optional(__nullable__(t.String())),
    address_line2: t.Optional(__nullable__(t.String())),
    sub_district: t.Optional(__nullable__(t.String())),
    district: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    post_code: t.Optional(__nullable__(t.String())),
    set_default: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_addressRelationsInputCreate = t.Object(
  {
    order_billing: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_addressRelationsInputUpdate = t.Partial(
  t.Object(
    {
      order_billing: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_addressWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          customeruser_id: t.String(),
          tag_name: t.String(),
          receiver_name: t.String(),
          phone_no: t.String(),
          address_name: t.String(),
          address_line1: t.String(),
          address_line2: t.String(),
          sub_district: t.String(),
          district: t.String(),
          province: t.String(),
          post_code: t.String(),
          set_default: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customer_address" },
  ),
);

export const customer_addressWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
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
              customeruser_id: t.String(),
              tag_name: t.String(),
              receiver_name: t.String(),
              phone_no: t.String(),
              address_name: t.String(),
              address_line1: t.String(),
              address_line2: t.String(),
              sub_district: t.String(),
              district: t.String(),
              province: t.String(),
              post_code: t.String(),
              set_default: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_address" },
);

export const customer_addressSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customeruser_id: t.Boolean(),
      tag_name: t.Boolean(),
      receiver_name: t.Boolean(),
      phone_no: t.Boolean(),
      address_name: t.Boolean(),
      address_line1: t.Boolean(),
      address_line2: t.Boolean(),
      sub_district: t.Boolean(),
      district: t.Boolean(),
      province: t.Boolean(),
      post_code: t.Boolean(),
      set_default: t.Boolean(),
      order_billing: t.Boolean(),
      IM: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_addressInclude = t.Partial(
  t.Object(
    { order_billing: t.Boolean(), IM: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_addressOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tag_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      receiver_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address_line1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address_line2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sub_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      post_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      set_default: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_address = t.Composite(
  [customer_addressPlain, customer_addressRelations],
  { additionalProperties: false },
);

export const customer_addressInputCreate = t.Composite(
  [customer_addressPlainInputCreate, customer_addressRelationsInputCreate],
  { additionalProperties: false },
);

export const customer_addressInputUpdate = t.Composite(
  [customer_addressPlainInputUpdate, customer_addressRelationsInputUpdate],
  { additionalProperties: false },
);
