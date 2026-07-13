import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sopt_goodsPlain = t.Object(
  {
    id: t.Integer(),
    sopt_head_id: t.Integer(),
    product_code: __nullable__(t.String()),
    product_name: __nullable__(t.String()),
    qty: __nullable__(t.Integer()),
    price: __nullable__(t.Number()),
    created_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_goodsRelations = t.Object(
  {
    sopt_head: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_goodsPlainInputCreate = t.Object(
  {
    product_code: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    qty: t.Optional(__nullable__(t.Integer())),
    price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_goodsPlainInputUpdate = t.Object(
  {
    product_code: t.Optional(__nullable__(t.String())),
    product_name: t.Optional(__nullable__(t.String())),
    qty: t.Optional(__nullable__(t.Integer())),
    price: t.Optional(__nullable__(t.Number())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sopt_goodsRelationsInputCreate = t.Object(
  {
    sopt_head: t.Object(
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

export const sopt_goodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sopt_head: t.Object(
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

export const sopt_goodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          sopt_head_id: t.Integer(),
          product_code: t.String(),
          product_name: t.String(),
          qty: t.Integer(),
          price: t.Number(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "sopt_goods" },
  ),
);

export const sopt_goodsWhereUnique = t.Recursive(
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
              sopt_head_id: t.Integer(),
              product_code: t.String(),
              product_name: t.String(),
              qty: t.Integer(),
              price: t.Number(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sopt_goods" },
);

export const sopt_goodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      sopt_head_id: t.Boolean(),
      product_code: t.Boolean(),
      product_name: t.Boolean(),
      qty: t.Boolean(),
      price: t.Boolean(),
      created_at: t.Boolean(),
      sopt_head: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_goodsInclude = t.Partial(
  t.Object(
    { sopt_head: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sopt_goodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sopt_head_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const sopt_goods = t.Composite([sopt_goodsPlain, sopt_goodsRelations], {
  additionalProperties: false,
});

export const sopt_goodsInputCreate = t.Composite(
  [sopt_goodsPlainInputCreate, sopt_goodsRelationsInputCreate],
  { additionalProperties: false },
);

export const sopt_goodsInputUpdate = t.Composite(
  [sopt_goodsPlainInputUpdate, sopt_goodsRelationsInputUpdate],
  { additionalProperties: false },
);
