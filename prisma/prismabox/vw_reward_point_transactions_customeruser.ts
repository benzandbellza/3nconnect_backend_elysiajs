import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_reward_point_transactions_customeruserPlain = t.Object(
  {
    user_id: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    expired_at: __nullable__(t.Date()),
    points: __nullable__(t.Integer()),
    redeem_point: __nullable__(t.Number()),
    redeem_exp: __nullable__(t.Date()),
    reason: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const vw_reward_point_transactions_customeruserRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_reward_point_transactions_customeruserPlainInputCreate =
  t.Object(
    {
      created_at: t.Optional(__nullable__(t.Date())),
      expired_at: t.Optional(__nullable__(t.Date())),
      points: t.Optional(__nullable__(t.Integer())),
      redeem_point: t.Optional(__nullable__(t.Number())),
      redeem_exp: t.Optional(__nullable__(t.Date())),
      reason: t.Optional(__nullable__(t.String())),
    },
    { additionalProperties: false },
  );

export const vw_reward_point_transactions_customeruserPlainInputUpdate =
  t.Object(
    {
      created_at: t.Optional(__nullable__(t.Date())),
      expired_at: t.Optional(__nullable__(t.Date())),
      points: t.Optional(__nullable__(t.Integer())),
      redeem_point: t.Optional(__nullable__(t.Number())),
      redeem_exp: t.Optional(__nullable__(t.Date())),
      reason: t.Optional(__nullable__(t.String())),
    },
    { additionalProperties: false },
  );

export const vw_reward_point_transactions_customeruserRelationsInputCreate =
  t.Object({}, { additionalProperties: false });

export const vw_reward_point_transactions_customeruserRelationsInputUpdate =
  t.Partial(t.Object({}, { additionalProperties: false }));

export const vw_reward_point_transactions_customeruserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          user_id: t.String(),
          created_at: t.Date(),
          expired_at: t.Date(),
          points: t.Integer(),
          redeem_point: t.Number(),
          redeem_exp: t.Date(),
          reason: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_reward_point_transactions_customeruser" },
  ),
);

export const vw_reward_point_transactions_customeruserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(t.Object({}, { additionalProperties: false }), {
          additionalProperties: false,
        }),
        t.Union([], { additionalProperties: false }),
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
              user_id: t.String(),
              created_at: t.Date(),
              expired_at: t.Date(),
              points: t.Integer(),
              redeem_point: t.Number(),
              redeem_exp: t.Date(),
              reason: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_reward_point_transactions_customeruser" },
);

export const vw_reward_point_transactions_customeruserSelect = t.Partial(
  t.Object(
    {
      user_id: t.Boolean(),
      created_at: t.Boolean(),
      expired_at: t.Boolean(),
      points: t.Boolean(),
      redeem_point: t.Boolean(),
      redeem_exp: t.Boolean(),
      reason: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_reward_point_transactions_customeruserInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_reward_point_transactions_customeruserOrderBy = t.Partial(
  t.Object(
    {
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expired_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redeem_point: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redeem_exp: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_reward_point_transactions_customeruser = t.Composite(
  [
    vw_reward_point_transactions_customeruserPlain,
    vw_reward_point_transactions_customeruserRelations,
  ],
  { additionalProperties: false },
);

export const vw_reward_point_transactions_customeruserInputCreate = t.Composite(
  [
    vw_reward_point_transactions_customeruserPlainInputCreate,
    vw_reward_point_transactions_customeruserRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_reward_point_transactions_customeruserInputUpdate = t.Composite(
  [
    vw_reward_point_transactions_customeruserPlainInputUpdate,
    vw_reward_point_transactions_customeruserRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
