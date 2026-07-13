import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const delivery_itemsPlain = t.Object(
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
);

export const delivery_itemsRelations = t.Object(
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

export const delivery_itemsPlainInputCreate = t.Object(
  {
    product_code: t.String(),
    product_name: t.Optional(__nullable__(t.String())),
    mr: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    quantity: t.Optional(__nullable__(t.Number())),
    unit: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_itemsPlainInputUpdate = t.Object(
  {
    product_code: t.Optional(t.String()),
    product_name: t.Optional(__nullable__(t.String())),
    mr: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    quantity: t.Optional(__nullable__(t.Number())),
    unit: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const delivery_itemsRelationsInputCreate = t.Object(
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

export const delivery_itemsRelationsInputUpdate = t.Partial(
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

export const delivery_itemsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          delivery_id: t.Integer(),
          product_code: t.String(),
          product_name: t.String(),
          mr: t.String(),
          location: t.String(),
          quantity: t.Number(),
          unit: t.String(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "delivery_items" },
  ),
);

export const delivery_itemsWhereUnique = t.Recursive(
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
              product_code: t.String(),
              product_name: t.String(),
              mr: t.String(),
              location: t.String(),
              quantity: t.Number(),
              unit: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "delivery_items" },
);

export const delivery_itemsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      delivery_id: t.Boolean(),
      product_code: t.Boolean(),
      product_name: t.Boolean(),
      mr: t.Boolean(),
      location: t.Boolean(),
      quantity: t.Boolean(),
      unit: t.Boolean(),
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

export const delivery_itemsInclude = t.Partial(
  t.Object(
    { deliveries: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const delivery_itemsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      delivery_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mr: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const delivery_items = t.Composite(
  [delivery_itemsPlain, delivery_itemsRelations],
  { additionalProperties: false },
);

export const delivery_itemsInputCreate = t.Composite(
  [delivery_itemsPlainInputCreate, delivery_itemsRelationsInputCreate],
  { additionalProperties: false },
);

export const delivery_itemsInputUpdate = t.Composite(
  [delivery_itemsPlainInputUpdate, delivery_itemsRelationsInputUpdate],
  { additionalProperties: false },
);
