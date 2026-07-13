import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_promotion_extra_points_tier_rulesPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    level_no: __nullable__(t.Integer()),
    min_amount: __nullable__(t.Integer()),
    points_multiplier: __nullable__(t.Number()),
  },
  { additionalProperties: false },
);

export const public_promotion_extra_points_tier_rulesRelations = t.Object(
  {
    promotion: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          proname: __nullable__(t.String()),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          filelink: __nullable__(t.String()),
          banner: __nullable__(t.String()),
          description: __nullable__(t.String()),
          type: __nullable__(t.String()),
          points_reward: __nullable__(t.Number()),
          max_claims: __nullable__(t.Integer()),
          current_claims: __nullable__(t.Integer()),
          voucher_id: __nullable__(t.Integer()),
          location_lat: __nullable__(t.Number()),
          location_lng: __nullable__(t.Number()),
          location_radius_m: __nullable__(t.Integer()),
          location_name: __nullable__(t.String()),
          conditions: __nullable__(t.String()),
          per_person_limit: __nullable__(t.Integer()),
          subtype: __nullable__(t.String()),
          status: __nullable__(t.Boolean()),
          sort_order: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  { additionalProperties: false },
);

export const public_promotion_extra_points_tier_rulesPlainInputCreate =
  t.Object(
    {
      level_no: t.Optional(__nullable__(t.Integer())),
      min_amount: t.Optional(__nullable__(t.Integer())),
      points_multiplier: t.Optional(__nullable__(t.Number())),
    },
    { additionalProperties: false },
  );

export const public_promotion_extra_points_tier_rulesPlainInputUpdate =
  t.Object(
    {
      level_no: t.Optional(__nullable__(t.Integer())),
      min_amount: t.Optional(__nullable__(t.Integer())),
      points_multiplier: t.Optional(__nullable__(t.Number())),
    },
    { additionalProperties: false },
  );

export const public_promotion_extra_points_tier_rulesRelationsInputCreate =
  t.Object(
    {
      promotion: t.Optional(
        t.Object(
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
      ),
    },
    { additionalProperties: false },
  );

export const public_promotion_extra_points_tier_rulesRelationsInputUpdate =
  t.Partial(
    t.Object(
      {
        promotion: t.Partial(
          t.Object(
            {
              connect: t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              disconnect: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      },
      { additionalProperties: false },
    ),
  );

export const public_promotion_extra_points_tier_rulesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          level_no: t.Integer(),
          min_amount: t.Integer(),
          points_multiplier: t.Number(),
        },
        { additionalProperties: false },
      ),
    { $id: "public_promotion_extra_points_tier_rules" },
  ),
);

export const public_promotion_extra_points_tier_rulesWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              level_no: t.Integer(),
              min_amount: t.Integer(),
              points_multiplier: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_promotion_extra_points_tier_rules" },
);

export const public_promotion_extra_points_tier_rulesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      level_no: t.Boolean(),
      min_amount: t.Boolean(),
      points_multiplier: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_extra_points_tier_rulesInclude = t.Partial(
  t.Object(
    { promotion: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const public_promotion_extra_points_tier_rulesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      level_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_multiplier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_extra_points_tier_rules = t.Composite(
  [
    public_promotion_extra_points_tier_rulesPlain,
    public_promotion_extra_points_tier_rulesRelations,
  ],
  { additionalProperties: false },
);

export const public_promotion_extra_points_tier_rulesInputCreate = t.Composite(
  [
    public_promotion_extra_points_tier_rulesPlainInputCreate,
    public_promotion_extra_points_tier_rulesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_promotion_extra_points_tier_rulesInputUpdate = t.Composite(
  [
    public_promotion_extra_points_tier_rulesPlainInputUpdate,
    public_promotion_extra_points_tier_rulesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
