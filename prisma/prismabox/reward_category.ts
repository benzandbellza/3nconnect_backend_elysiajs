import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const reward_categoryPlain = t.Object(
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
);

export const reward_categoryRelations = t.Object(
  {
    rewards_rewards_reward_categoryToreward_category: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reward_categoryPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    category: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    icon: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reward_categoryPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    category: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    icon: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reward_categoryRelationsInputCreate = t.Object(
  {
    rewards_rewards_reward_categoryToreward_category: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reward_categoryRelationsInputUpdate = t.Partial(
  t.Object(
    {
      rewards_rewards_reward_categoryToreward_category: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reward_categoryWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          category: t.String(),
          active: t.Boolean(),
          icon: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "reward_category" },
  ),
);

export const reward_categoryWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              category: t.String(),
              active: t.Boolean(),
              icon: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "reward_category" },
);

export const reward_categorySelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      category: t.Boolean(),
      active: t.Boolean(),
      icon: t.Boolean(),
      rewards_rewards_reward_categoryToreward_category: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reward_categoryInclude = t.Partial(
  t.Object(
    {
      rewards_rewards_reward_categoryToreward_category: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reward_categoryOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      icon: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reward_category = t.Composite(
  [reward_categoryPlain, reward_categoryRelations],
  { additionalProperties: false },
);

export const reward_categoryInputCreate = t.Composite(
  [reward_categoryPlainInputCreate, reward_categoryRelationsInputCreate],
  { additionalProperties: false },
);

export const reward_categoryInputUpdate = t.Composite(
  [reward_categoryPlainInputUpdate, reward_categoryRelationsInputUpdate],
  { additionalProperties: false },
);
