import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_analyticsPlain = t.Object(
  {
    id: t.String(),
    promotion_id: t.Integer(),
    member_id: __nullable__(t.String()),
    event: t.String(),
    created_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_analyticsRelations = t.Object(
  {
    promotion: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_analyticsPlainInputCreate = t.Object(
  { event: t.String(), created_at: t.Optional(__nullable__(t.Date())) },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_analyticsPlainInputUpdate = t.Object(
  {
    event: t.Optional(t.String()),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_analyticsRelationsInputCreate = t.Object(
  {
    promotion: t.Object(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_analyticsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion: t.Object(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_analyticsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          promotion_id: t.Integer(),
          member_id: t.String(),
          event: t.String(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion_analytics" },
  ),
);

export const promotion_analyticsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
              promotion_id: t.Integer(),
              member_id: t.String(),
              event: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_analytics" },
);

export const promotion_analyticsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      member_id: t.Boolean(),
      event: t.Boolean(),
      created_at: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_analyticsInclude = t.Partial(
  t.Object(
    { promotion: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_analyticsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      member_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_analytics = t.Composite(
  [promotion_analyticsPlain, promotion_analyticsRelations],
  { additionalProperties: false },
);

export const promotion_analyticsInputCreate = t.Composite(
  [
    promotion_analyticsPlainInputCreate,
    promotion_analyticsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_analyticsInputUpdate = t.Composite(
  [
    promotion_analyticsPlainInputUpdate,
    promotion_analyticsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
