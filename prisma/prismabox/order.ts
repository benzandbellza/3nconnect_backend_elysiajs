import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const orderPlain = t.Object(
  {
    created_at: t.Date(),
    member_id: __nullable__(t.String()),
    invoicehead_id: __nullable__(t.Integer()),
    delivery: __nullable__(t.String()),
    payment_type: __nullable__(t.Integer()),
    payment_date: __nullable__(t.Date()),
    parmanet_referrence: __nullable__(t.String()),
    id: t.String(),
    status: t.String(),
    total_amount: __nullable__(t.Number()),
    subtotal: __nullable__(t.Number()),
    discount: __nullable__(t.Number()),
    shipping_fee: __nullable__(t.Number()),
    note: __nullable__(t.String()),
    invoice: __nullable__(t.String()),
    log: __nullable__(t.String()),
    voucher_id: __nullable__(t.Integer()),
    voucher_discount: __nullable__(t.Number()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const orderRelations = t.Object(
  {
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
    payment_methods: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          name: t.String(),
          icon: t.String(),
          icon_color: t.String(),
          is_active: t.Boolean(),
          sort_order: t.Integer(),
          created_at: t.Date(),
          image_url: __nullable__(t.String()),
          category: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    voucher: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          detail: __nullable__(t.String()),
          pic: __nullable__(t.String()),
          condition: __nullable__(t.String()),
          tier: __nullable__(t.String()),
          voucherpic: __nullable__(t.String()),
          type: t.String(),
          discount_value: t.Number(),
          max_discount: __nullable__(t.Number()),
          min_order: __nullable__(t.Number()),
          combinable: t.Boolean(),
          status: t.Boolean(),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          discount_type: __nullable__(t.String()),
          usage_limit: __nullable__(t.String()),
          redemption_method: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    order_product: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          order_id: __nullable__(t.String()),
          product_id: __nullable__(t.Integer()),
          quatity: __nullable__(t.Number()),
          price: __nullable__(t.Number()),
          total_price: __nullable__(t.Number()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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

export const orderPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    delivery: t.Optional(__nullable__(t.String())),
    payment_type: t.Optional(__nullable__(t.Integer())),
    payment_date: t.Optional(__nullable__(t.Date())),
    parmanet_referrence: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    total_amount: t.Optional(__nullable__(t.Number())),
    subtotal: t.Optional(__nullable__(t.Number())),
    discount: t.Optional(__nullable__(t.Number())),
    shipping_fee: t.Optional(__nullable__(t.Number())),
    note: t.Optional(__nullable__(t.String())),
    invoice: t.Optional(__nullable__(t.String())),
    log: t.Optional(__nullable__(t.String())),
    voucher_discount: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const orderPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    delivery: t.Optional(__nullable__(t.String())),
    payment_type: t.Optional(__nullable__(t.Integer())),
    payment_date: t.Optional(__nullable__(t.Date())),
    parmanet_referrence: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    total_amount: t.Optional(__nullable__(t.Number())),
    subtotal: t.Optional(__nullable__(t.Number())),
    discount: t.Optional(__nullable__(t.Number())),
    shipping_fee: t.Optional(__nullable__(t.Number())),
    note: t.Optional(__nullable__(t.String())),
    invoice: t.Optional(__nullable__(t.String())),
    log: t.Optional(__nullable__(t.String())),
    voucher_discount: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const orderRelationsInputCreate = t.Object(
  {
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
    payment_methods: t.Optional(
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
    voucher: t.Optional(
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
    order_product: t.Optional(
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

export const orderRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
      payment_methods: t.Partial(
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
      voucher: t.Partial(
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
      order_product: t.Partial(
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

export const orderWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          created_at: t.Date(),
          member_id: t.String(),
          invoicehead_id: t.Integer(),
          delivery: t.String(),
          payment_type: t.Integer(),
          payment_date: t.Date(),
          parmanet_referrence: t.String(),
          id: t.String(),
          status: t.String(),
          total_amount: t.Number(),
          subtotal: t.Number(),
          discount: t.Number(),
          shipping_fee: t.Number(),
          note: t.String(),
          invoice: t.String(),
          log: t.String(),
          voucher_id: t.Integer(),
          voucher_discount: t.Number(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "order" },
  ),
);

export const orderWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
              created_at: t.Date(),
              member_id: t.String(),
              invoicehead_id: t.Integer(),
              delivery: t.String(),
              payment_type: t.Integer(),
              payment_date: t.Date(),
              parmanet_referrence: t.String(),
              id: t.String(),
              status: t.String(),
              total_amount: t.Number(),
              subtotal: t.Number(),
              discount: t.Number(),
              shipping_fee: t.Number(),
              note: t.String(),
              invoice: t.String(),
              log: t.String(),
              voucher_id: t.Integer(),
              voucher_discount: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "order" },
);

export const orderSelect = t.Partial(
  t.Object(
    {
      created_at: t.Boolean(),
      member_id: t.Boolean(),
      invoicehead_id: t.Boolean(),
      delivery: t.Boolean(),
      payment_type: t.Boolean(),
      payment_date: t.Boolean(),
      parmanet_referrence: t.Boolean(),
      id: t.Boolean(),
      status: t.Boolean(),
      total_amount: t.Boolean(),
      subtotal: t.Boolean(),
      discount: t.Boolean(),
      shipping_fee: t.Boolean(),
      note: t.Boolean(),
      invoice: t.Boolean(),
      log: t.Boolean(),
      voucher_id: t.Boolean(),
      voucher_discount: t.Boolean(),
      customeruser: t.Boolean(),
      payment_methods: t.Boolean(),
      voucher: t.Boolean(),
      order_product: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const orderInclude = t.Partial(
  t.Object(
    {
      customeruser: t.Boolean(),
      payment_methods: t.Boolean(),
      voucher: t.Boolean(),
      order_product: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const orderOrderBy = t.Partial(
  t.Object(
    {
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      member_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoicehead_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivery: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      payment_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      parmanet_referrence: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      total_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subtotal: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shipping_fee: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      log: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_discount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const order = t.Composite([orderPlain, orderRelations], {
  additionalProperties: false,
});

export const orderInputCreate = t.Composite(
  [orderPlainInputCreate, orderRelationsInputCreate],
  { additionalProperties: false },
);

export const orderInputUpdate = t.Composite(
  [orderPlainInputUpdate, orderRelationsInputUpdate],
  { additionalProperties: false },
);
