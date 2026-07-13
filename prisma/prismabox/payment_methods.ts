import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const payment_methodsPlain = t.Object(
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
);

export const payment_methodsRelations = t.Object(
  {
    order: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    product_payment_method: t.Array(
      t.Object(
        {
          id: t.Integer(),
          product_id: __nullable__(t.Integer()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          payment_method_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const payment_methodsPlainInputCreate = t.Object(
  {
    name: t.String(),
    icon: t.Optional(t.String()),
    icon_color: t.Optional(t.String()),
    is_active: t.Optional(t.Boolean()),
    sort_order: t.Optional(t.Integer()),
    created_at: t.Optional(t.Date()),
    image_url: t.Optional(__nullable__(t.String())),
    category: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const payment_methodsPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    icon: t.Optional(t.String()),
    icon_color: t.Optional(t.String()),
    is_active: t.Optional(t.Boolean()),
    sort_order: t.Optional(t.Integer()),
    created_at: t.Optional(t.Date()),
    image_url: t.Optional(__nullable__(t.String())),
    category: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const payment_methodsRelationsInputCreate = t.Object(
  {
    order: t.Optional(
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
    product_payment_method: t.Optional(
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

export const payment_methodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      order: t.Partial(
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
      product_payment_method: t.Partial(
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

export const payment_methodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          name: t.String(),
          icon: t.String(),
          icon_color: t.String(),
          is_active: t.Boolean(),
          sort_order: t.Integer(),
          created_at: t.Date(),
          image_url: t.String(),
          category: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "payment_methods" },
  ),
);

export const payment_methodsWhereUnique = t.Recursive(
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
              name: t.String(),
              icon: t.String(),
              icon_color: t.String(),
              is_active: t.Boolean(),
              sort_order: t.Integer(),
              created_at: t.Date(),
              image_url: t.String(),
              category: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "payment_methods" },
);

export const payment_methodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      icon: t.Boolean(),
      icon_color: t.Boolean(),
      is_active: t.Boolean(),
      sort_order: t.Boolean(),
      created_at: t.Boolean(),
      image_url: t.Boolean(),
      category: t.Boolean(),
      order: t.Boolean(),
      product_payment_method: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const payment_methodsInclude = t.Partial(
  t.Object(
    {
      order: t.Boolean(),
      product_payment_method: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const payment_methodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      icon: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      icon_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sort_order: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const payment_methods = t.Composite(
  [payment_methodsPlain, payment_methodsRelations],
  { additionalProperties: false },
);

export const payment_methodsInputCreate = t.Composite(
  [payment_methodsPlainInputCreate, payment_methodsRelationsInputCreate],
  { additionalProperties: false },
);

export const payment_methodsInputUpdate = t.Composite(
  [payment_methodsPlainInputUpdate, payment_methodsRelationsInputUpdate],
  { additionalProperties: false },
);
