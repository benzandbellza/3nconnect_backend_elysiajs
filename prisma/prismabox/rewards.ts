import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const rewardsPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    description: __nullable__(t.String()),
    points_required: t.Integer(),
    stock: __nullable__(t.Integer()),
    active: __nullable__(t.Boolean()),
    reward_category: t.Integer(),
    pic: __nullable__(t.String()),
    condition: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rewardsRelations = t.Object(
  {
    promotion_redeem: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          promotion_id: __nullable__(t.Integer()),
          promotion_price: __nullable__(t.Number()),
          qty: __nullable__(t.Number()),
          rewards_id: t.String(),
          per_person_limit: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
      { additionalProperties: false },
    ),
    reward_redemptions: t.Array(
      t.Object(
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
      { additionalProperties: false },
    ),
    reward_category_rewards_reward_categoryToreward_category: t.Object(
      {
        id: t.Integer(),
        created_at: t.Date(),
        category: __nullable__(t.String()),
        active: __nullable__(t.Boolean()),
        icon: __nullable__(t.String()),
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

export const rewardsPlainInputCreate = t.Object(
  {
    name: t.String(),
    description: t.Optional(__nullable__(t.String())),
    points_required: t.Integer(),
    stock: t.Optional(__nullable__(t.Integer())),
    active: t.Optional(__nullable__(t.Boolean())),
    reward_category: t.Integer(),
    pic: t.Optional(__nullable__(t.String())),
    condition: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rewardsPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
    points_required: t.Optional(t.Integer()),
    stock: t.Optional(__nullable__(t.Integer())),
    active: t.Optional(__nullable__(t.Boolean())),
    reward_category: t.Optional(t.Integer()),
    pic: t.Optional(__nullable__(t.String())),
    condition: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const rewardsRelationsInputCreate = t.Object(
  {
    promotion_redeem: t.Optional(
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
    reward_redemptions: t.Optional(
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
    reward_category_rewards_reward_categoryToreward_category: t.Object(
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

export const rewardsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion_redeem: t.Partial(
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
      reward_redemptions: t.Partial(
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
      reward_category_rewards_reward_categoryToreward_category: t.Object(
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

export const rewardsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          description: t.String(),
          points_required: t.Integer(),
          stock: t.Integer(),
          active: t.Boolean(),
          reward_category: t.Integer(),
          pic: t.String(),
          condition: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "rewards" },
  ),
);

export const rewardsWhereUnique = t.Recursive(
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
              id: t.String(),
              name: t.String(),
              description: t.String(),
              points_required: t.Integer(),
              stock: t.Integer(),
              active: t.Boolean(),
              reward_category: t.Integer(),
              pic: t.String(),
              condition: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "rewards" },
);

export const rewardsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      description: t.Boolean(),
      points_required: t.Boolean(),
      stock: t.Boolean(),
      active: t.Boolean(),
      reward_category: t.Boolean(),
      pic: t.Boolean(),
      condition: t.Boolean(),
      promotion_redeem: t.Boolean(),
      reward_redemptions: t.Boolean(),
      reward_category_rewards_reward_categoryToreward_category: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rewardsInclude = t.Partial(
  t.Object(
    {
      promotion_redeem: t.Boolean(),
      reward_redemptions: t.Boolean(),
      reward_category_rewards_reward_categoryToreward_category: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rewardsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_required: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      stock: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reward_category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      condition: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const rewards = t.Composite([rewardsPlain, rewardsRelations], {
  additionalProperties: false,
});

export const rewardsInputCreate = t.Composite(
  [rewardsPlainInputCreate, rewardsRelationsInputCreate],
  { additionalProperties: false },
);

export const rewardsInputUpdate = t.Composite(
  [rewardsPlainInputUpdate, rewardsRelationsInputUpdate],
  { additionalProperties: false },
);
