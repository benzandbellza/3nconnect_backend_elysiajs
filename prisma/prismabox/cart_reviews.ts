import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const cart_reviewsPlain = t.Object(
  {
    id: t.Integer(),
    review_token: __nullable__(t.String()),
    expires_at: __nullable__(t.Date()),
    requires_sign_in_for_voucher: __nullable__(t.Boolean()),
    requires_sign_in_for_payment: __nullable__(t.Boolean()),
    created_at: t.Date(),
    customeruser_id: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const cart_reviewsRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const cart_reviewsPlainInputCreate = t.Object(
  {
    review_token: t.Optional(__nullable__(t.String())),
    expires_at: t.Optional(__nullable__(t.Date())),
    requires_sign_in_for_voucher: t.Optional(__nullable__(t.Boolean())),
    requires_sign_in_for_payment: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const cart_reviewsPlainInputUpdate = t.Object(
  {
    review_token: t.Optional(__nullable__(t.String())),
    expires_at: t.Optional(__nullable__(t.Date())),
    requires_sign_in_for_voucher: t.Optional(__nullable__(t.Boolean())),
    requires_sign_in_for_payment: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const cart_reviewsRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const cart_reviewsRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const cart_reviewsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          review_token: t.String(),
          expires_at: t.Date(),
          requires_sign_in_for_voucher: t.Boolean(),
          requires_sign_in_for_payment: t.Boolean(),
          created_at: t.Date(),
          customeruser_id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "cart_reviews" },
  ),
);

export const cart_reviewsWhereUnique = t.Recursive(
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
              review_token: t.String(),
              expires_at: t.Date(),
              requires_sign_in_for_voucher: t.Boolean(),
              requires_sign_in_for_payment: t.Boolean(),
              created_at: t.Date(),
              customeruser_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "cart_reviews" },
);

export const cart_reviewsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      review_token: t.Boolean(),
      expires_at: t.Boolean(),
      requires_sign_in_for_voucher: t.Boolean(),
      requires_sign_in_for_payment: t.Boolean(),
      created_at: t.Boolean(),
      customeruser_id: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const cart_reviewsInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const cart_reviewsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      review_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expires_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requires_sign_in_for_voucher: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      requires_sign_in_for_payment: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const cart_reviews = t.Composite(
  [cart_reviewsPlain, cart_reviewsRelations],
  { additionalProperties: false },
);

export const cart_reviewsInputCreate = t.Composite(
  [cart_reviewsPlainInputCreate, cart_reviewsRelationsInputCreate],
  { additionalProperties: false },
);

export const cart_reviewsInputUpdate = t.Composite(
  [cart_reviewsPlainInputUpdate, cart_reviewsRelationsInputUpdate],
  { additionalProperties: false },
);
