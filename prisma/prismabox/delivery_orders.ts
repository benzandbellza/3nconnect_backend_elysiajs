import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const delivery_ordersPlain = t.Object(
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
);

export const delivery_ordersRelations = t.Object(
  {
    deliveries: t.Object(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_ordersPlainInputCreate = t.Object(
  {
    customer_name: t.Optional(__nullable__(t.String())),
    product: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_ordersPlainInputUpdate = t.Object(
  {
    customer_name: t.Optional(__nullable__(t.String())),
    product: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_ordersRelationsInputCreate = t.Object(
  {
    deliveries: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_ordersRelationsInputUpdate = t.Partial(
  t.Object(
    {
      deliveries: t.Object(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const delivery_ordersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          delivery_id: t.Integer(),
          order_id: t.String(),
          customer_name: t.String(),
          product: t.String(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "delivery_orders" },
  ),
);

export const delivery_ordersWhereUnique = t.Recursive(
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
              delivery_id: t.Integer(),
              order_id: t.String(),
              customer_name: t.String(),
              product: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "delivery_orders" },
);

export const delivery_ordersSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      delivery_id: t.Boolean(),
      order_id: t.Boolean(),
      customer_name: t.Boolean(),
      product: t.Boolean(),
      created_at: t.Boolean(),
      deliveries: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const delivery_ordersInclude = t.Partial(
  t.Object(
    { deliveries: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const delivery_ordersOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivery_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const delivery_orders = t.Composite(
  [delivery_ordersPlain, delivery_ordersRelations],
  { additionalProperties: false },
);

export const delivery_ordersInputCreate = t.Composite(
  [delivery_ordersPlainInputCreate, delivery_ordersRelationsInputCreate],
  { additionalProperties: false },
);

export const delivery_ordersInputUpdate = t.Composite(
  [delivery_ordersPlainInputUpdate, delivery_ordersRelationsInputUpdate],
  { additionalProperties: false },
);
