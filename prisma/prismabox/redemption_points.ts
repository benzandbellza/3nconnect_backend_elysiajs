import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const redemption_pointsPlain = t.Object(
  {
    id: t.String(),
    redemption_id: t.String(),
    reward_point_id: t.String(),
    points_consumed: t.Integer(),
  },
  { additionalProperties: false },
);

export const redemption_pointsRelations = t.Object(
  {
    reward_redemptions: t.Object(
      {
        id: t.String(),
        user_id: t.String(),
        reward_id: t.String(),
        points_used: t.Integer(),
        redeemed_at: __nullable__(t.Date()),
        status: __nullable__(t.String()),
        note: __nullable__(t.String()),
        redeemed_count: __nullable__(t.Number()),
        address: __nullable__(t.String()),
        address_type: __nullable__(t.String()),
        delivery_status: __nullable__(t.String()),
        updated_at: __nullable__(t.String()),
        log: __nullable__(t.String()),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
    reward_points: t.Object(
      {
        id: t.String(),
        user_id: __nullable__(t.String()),
        points: t.Integer(),
        created_at: __nullable__(t.Date()),
        expired_at: t.Date(),
        doc_id: __nullable__(t.String()),
        redeem_point: __nullable__(t.Number()),
        redeem_exp: __nullable__(t.Date()),
        reason: __nullable__(t.String()),
        log: __nullable__(t.String()),
        doc_date: __nullable__(t.String()),
        campaign_id: __nullable__(t.String()),
      },
      {
        additionalProperties: false,
        description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
  },
  { additionalProperties: false },
);

export const redemption_pointsPlainInputCreate = t.Object(
  { points_consumed: t.Optional(t.Integer()) },
  { additionalProperties: false },
);

export const redemption_pointsPlainInputUpdate = t.Object(
  { points_consumed: t.Optional(t.Integer()) },
  { additionalProperties: false },
);

export const redemption_pointsRelationsInputCreate = t.Object(
  {
    reward_redemptions: t.Object(
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
    reward_points: t.Object(
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
  },
  { additionalProperties: false },
);

export const redemption_pointsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      reward_redemptions: t.Object(
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
      reward_points: t.Object(
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
    },
    { additionalProperties: false },
  ),
);

export const redemption_pointsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          redemption_id: t.String(),
          reward_point_id: t.String(),
          points_consumed: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "redemption_points" },
  ),
);

export const redemption_pointsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              redemption_id_reward_point_id: t.Object(
                { redemption_id: t.String(), reward_point_id: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({
              redemption_id_reward_point_id: t.Object(
                { redemption_id: t.String(), reward_point_id: t.String() },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
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
              redemption_id: t.String(),
              reward_point_id: t.String(),
              points_consumed: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "redemption_points" },
);

export const redemption_pointsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      redemption_id: t.Boolean(),
      reward_point_id: t.Boolean(),
      points_consumed: t.Boolean(),
      reward_redemptions: t.Boolean(),
      reward_points: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const redemption_pointsInclude = t.Partial(
  t.Object(
    {
      reward_redemptions: t.Boolean(),
      reward_points: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const redemption_pointsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redemption_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reward_point_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_consumed: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const redemption_points = t.Composite(
  [redemption_pointsPlain, redemption_pointsRelations],
  { additionalProperties: false },
);

export const redemption_pointsInputCreate = t.Composite(
  [redemption_pointsPlainInputCreate, redemption_pointsRelationsInputCreate],
  { additionalProperties: false },
);

export const redemption_pointsInputUpdate = t.Composite(
  [redemption_pointsPlainInputUpdate, redemption_pointsRelationsInputUpdate],
  { additionalProperties: false },
);
