import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const deliveriesPlain = t.Object(
  {
    id: t.Integer(),
    event: t.String(),
    timestamp: t.Date(),
    source: __nullable__(t.String()),
    delivered_by: __nullable__(t.String()),
    note: __nullable__(t.String()),
    total_items: __nullable__(t.Integer()),
    total_quantity: __nullable__(t.Number()),
    order_count: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    customer_name: __nullable__(t.String()),
    customer_phone: __nullable__(t.String()),
    customer_address: __nullable__(t.String()),
    IO: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const deliveriesRelations = t.Object(
  {
    users: __nullable__(
      t.Object(
        {
          instance_id: __nullable__(t.String()),
          id: t.String(),
          aud: __nullable__(t.String()),
          role: __nullable__(t.String()),
          email: __nullable__(t.String()),
          encrypted_password: __nullable__(t.String()),
          email_confirmed_at: __nullable__(t.Date()),
          invited_at: __nullable__(t.Date()),
          confirmation_token: __nullable__(t.String()),
          confirmation_sent_at: __nullable__(t.Date()),
          recovery_token: __nullable__(t.String()),
          recovery_sent_at: __nullable__(t.Date()),
          email_change_token_new: __nullable__(t.String()),
          email_change: __nullable__(t.String()),
          email_change_sent_at: __nullable__(t.Date()),
          last_sign_in_at: __nullable__(t.Date()),
          raw_app_meta_data: __nullable__(t.Any()),
          raw_user_meta_data: __nullable__(t.Any()),
          is_super_admin: __nullable__(t.Boolean()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          phone: __nullable__(t.String()),
          phone_confirmed_at: __nullable__(t.Date()),
          phone_change: __nullable__(t.String()),
          phone_change_token: __nullable__(t.String()),
          phone_change_sent_at: __nullable__(t.Date()),
          confirmed_at: __nullable__(t.Date()),
          email_change_token_current: __nullable__(t.String()),
          email_change_confirm_status: __nullable__(t.Integer()),
          banned_until: __nullable__(t.Date()),
          reauthentication_token: __nullable__(t.String()),
          reauthentication_sent_at: __nullable__(t.Date()),
          is_sso_user: t.Boolean(),
          deleted_at: __nullable__(t.Date()),
          is_anonymous: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
        },
      ),
    ),
    delivery_items: t.Array(
      t.Object(
        {
          id: t.Integer(),
          delivery_id: t.Integer(),
          product_code: t.String(),
          product_name: __nullable__(t.String()),
          mr: __nullable__(t.String()),
          location: __nullable__(t.String()),
          quantity: __nullable__(t.Number()),
          unit: __nullable__(t.String()),
          created_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    delivery_orders: t.Array(
      t.Object(
        {
          id: t.Integer(),
          delivery_id: t.Integer(),
          order_id: t.String(),
          customer_name: __nullable__(t.String()),
          product: __nullable__(t.String()),
          created_at: __nullable__(t.Date()),
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

export const deliveriesPlainInputCreate = t.Object(
  {
    event: t.String(),
    timestamp: t.Date(),
    source: t.Optional(__nullable__(t.String())),
    delivered_by: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    total_items: t.Optional(__nullable__(t.Integer())),
    total_quantity: t.Optional(__nullable__(t.Number())),
    order_count: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    customer_name: t.Optional(__nullable__(t.String())),
    customer_phone: t.Optional(__nullable__(t.String())),
    customer_address: t.Optional(__nullable__(t.String())),
    IO: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const deliveriesPlainInputUpdate = t.Object(
  {
    event: t.Optional(t.String()),
    timestamp: t.Optional(t.Date()),
    source: t.Optional(__nullable__(t.String())),
    delivered_by: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    total_items: t.Optional(__nullable__(t.Integer())),
    total_quantity: t.Optional(__nullable__(t.Number())),
    order_count: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    customer_name: t.Optional(__nullable__(t.String())),
    customer_phone: t.Optional(__nullable__(t.String())),
    customer_address: t.Optional(__nullable__(t.String())),
    IO: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const deliveriesRelationsInputCreate = t.Object(
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
    delivery_items: t.Optional(
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
    delivery_orders: t.Optional(
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

export const deliveriesRelationsInputUpdate = t.Partial(
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
      delivery_items: t.Partial(
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
      delivery_orders: t.Partial(
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

export const deliveriesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          event: t.String(),
          timestamp: t.Date(),
          source: t.String(),
          delivered_by: t.String(),
          note: t.String(),
          total_items: t.Integer(),
          total_quantity: t.Number(),
          order_count: t.Integer(),
          created_at: t.Date(),
          updated_at: t.Date(),
          customer_name: t.String(),
          customer_phone: t.String(),
          customer_address: t.String(),
          IO: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "deliveries" },
  ),
);

export const deliveriesWhereUnique = t.Recursive(
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
              event: t.String(),
              timestamp: t.Date(),
              source: t.String(),
              delivered_by: t.String(),
              note: t.String(),
              total_items: t.Integer(),
              total_quantity: t.Number(),
              order_count: t.Integer(),
              created_at: t.Date(),
              updated_at: t.Date(),
              customer_name: t.String(),
              customer_phone: t.String(),
              customer_address: t.String(),
              IO: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "deliveries" },
);

export const deliveriesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      event: t.Boolean(),
      timestamp: t.Boolean(),
      source: t.Boolean(),
      delivered_by: t.Boolean(),
      note: t.Boolean(),
      total_items: t.Boolean(),
      total_quantity: t.Boolean(),
      order_count: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      customer_name: t.Boolean(),
      customer_phone: t.Boolean(),
      customer_address: t.Boolean(),
      IO: t.Boolean(),
      users: t.Boolean(),
      delivery_items: t.Boolean(),
      delivery_orders: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const deliveriesInclude = t.Partial(
  t.Object(
    {
      users: t.Boolean(),
      delivery_items: t.Boolean(),
      delivery_orders: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const deliveriesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      timestamp: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      source: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivered_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      total_items: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      total_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      IO: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const deliveries = t.Composite([deliveriesPlain, deliveriesRelations], {
  additionalProperties: false,
});

export const deliveriesInputCreate = t.Composite(
  [deliveriesPlainInputCreate, deliveriesRelationsInputCreate],
  { additionalProperties: false },
);

export const deliveriesInputUpdate = t.Composite(
  [deliveriesPlainInputUpdate, deliveriesRelationsInputUpdate],
  { additionalProperties: false },
);
