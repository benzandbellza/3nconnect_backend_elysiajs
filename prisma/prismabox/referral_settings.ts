import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const referral_settingsPlain = t.Object(
  {
    id: t.Integer(),
    points_reward: t.Integer(),
    is_active: t.Boolean(),
    name: __nullable__(t.String()),
    start_date: __nullable__(t.Date()),
    end_date: __nullable__(t.Date()),
    banner: __nullable__(t.String()),
    newuser_points_reward: __nullable__(t.Integer()),
    product_milestones: __nullable__(t.Any()),
  },
  { additionalProperties: false },
);

export const referral_settingsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const referral_settingsPlainInputCreate = t.Object(
  {
    points_reward: t.Optional(t.Integer()),
    is_active: t.Optional(t.Boolean()),
    name: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    banner: t.Optional(__nullable__(t.String())),
    newuser_points_reward: t.Optional(__nullable__(t.Integer())),
    product_milestones: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const referral_settingsPlainInputUpdate = t.Object(
  {
    points_reward: t.Optional(t.Integer()),
    is_active: t.Optional(t.Boolean()),
    name: t.Optional(__nullable__(t.String())),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    banner: t.Optional(__nullable__(t.String())),
    newuser_points_reward: t.Optional(__nullable__(t.Integer())),
    product_milestones: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const referral_settingsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const referral_settingsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const referral_settingsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          points_reward: t.Integer(),
          is_active: t.Boolean(),
          name: t.String(),
          start_date: t.Date(),
          end_date: t.Date(),
          banner: t.String(),
          newuser_points_reward: t.Integer(),
          product_milestones: t.Any(),
        },
        { additionalProperties: false },
      ),
    { $id: "referral_settings" },
  ),
);

export const referral_settingsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
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
              points_reward: t.Integer(),
              is_active: t.Boolean(),
              name: t.String(),
              start_date: t.Date(),
              end_date: t.Date(),
              banner: t.String(),
              newuser_points_reward: t.Integer(),
              product_milestones: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "referral_settings" },
);

export const referral_settingsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      points_reward: t.Boolean(),
      is_active: t.Boolean(),
      name: t.Boolean(),
      start_date: t.Boolean(),
      end_date: t.Boolean(),
      banner: t.Boolean(),
      newuser_points_reward: t.Boolean(),
      product_milestones: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const referral_settingsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const referral_settingsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_reward: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banner: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      newuser_points_reward: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_milestones: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const referral_settings = t.Composite(
  [referral_settingsPlain, referral_settingsRelations],
  { additionalProperties: false },
);

export const referral_settingsInputCreate = t.Composite(
  [referral_settingsPlainInputCreate, referral_settingsRelationsInputCreate],
  { additionalProperties: false },
);

export const referral_settingsInputUpdate = t.Composite(
  [referral_settingsPlainInputUpdate, referral_settingsRelationsInputUpdate],
  { additionalProperties: false },
);
