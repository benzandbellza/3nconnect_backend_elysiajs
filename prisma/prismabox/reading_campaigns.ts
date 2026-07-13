import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const reading_campaignsPlain = t.Object(
  {
    id: t.String(),
    title: t.String(),
    description: __nullable__(t.String()),
    required_reads: t.Integer(),
    points_reward: t.Integer(),
    start_date: __nullable__(t.Date()),
    end_date: __nullable__(t.Date()),
    max_redemptions: __nullable__(t.Integer()),
    current_redemptions: __nullable__(t.Integer()),
    active: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    banner: __nullable__(t.String()),
    pdf: __nullable__(t.String()),
    reset_after_minutes: __nullable__(t.Integer()),
    content_types: t.Array(t.String(), { additionalProperties: false }),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reading_campaignsRelations = t.Object(
  {
    popup_image: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          image_url: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          start: __nullable__(t.Date()),
          end: __nullable__(t.Date()),
          tier: __nullable__(t.String()),
          promotion_id: __nullable__(t.Integer()),
          target_event_id: __nullable__(t.String()),
          target_seminar_dwid: __nullable__(t.String()),
          target_seminar_company: __nullable__(t.String()),
          weblink: __nullable__(t.String()),
          navigation: __nullable__(t.String()),
          target_reading_campaign_id: __nullable__(t.String()),
          segment_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    reward_points: t.Array(
      t.Object(
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
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reading_campaignsPlainInputCreate = t.Object(
  {
    title: t.String(),
    description: t.Optional(__nullable__(t.String())),
    required_reads: t.Optional(t.Integer()),
    points_reward: t.Integer(),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    max_redemptions: t.Optional(__nullable__(t.Integer())),
    current_redemptions: t.Optional(__nullable__(t.Integer())),
    active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    banner: t.Optional(__nullable__(t.String())),
    pdf: t.Optional(__nullable__(t.String())),
    reset_after_minutes: t.Optional(__nullable__(t.Integer())),
    content_types: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reading_campaignsPlainInputUpdate = t.Object(
  {
    title: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
    required_reads: t.Optional(t.Integer()),
    points_reward: t.Optional(t.Integer()),
    start_date: t.Optional(__nullable__(t.Date())),
    end_date: t.Optional(__nullable__(t.Date())),
    max_redemptions: t.Optional(__nullable__(t.Integer())),
    current_redemptions: t.Optional(__nullable__(t.Integer())),
    active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    banner: t.Optional(__nullable__(t.String())),
    pdf: t.Optional(__nullable__(t.String())),
    reset_after_minutes: t.Optional(__nullable__(t.Integer())),
    content_types: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const reading_campaignsRelationsInputCreate = t.Object(
  {
    popup_image: t.Optional(
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
    reward_points: t.Optional(
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

export const reading_campaignsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      popup_image: t.Partial(
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
      reward_points: t.Partial(
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

export const reading_campaignsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          title: t.String(),
          description: t.String(),
          required_reads: t.Integer(),
          points_reward: t.Integer(),
          start_date: t.Date(),
          end_date: t.Date(),
          max_redemptions: t.Integer(),
          current_redemptions: t.Integer(),
          active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
          banner: t.String(),
          pdf: t.String(),
          reset_after_minutes: t.Integer(),
          content_types: t.Array(t.String(), { additionalProperties: false }),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "reading_campaigns" },
  ),
);

export const reading_campaignsWhereUnique = t.Recursive(
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
              title: t.String(),
              description: t.String(),
              required_reads: t.Integer(),
              points_reward: t.Integer(),
              start_date: t.Date(),
              end_date: t.Date(),
              max_redemptions: t.Integer(),
              current_redemptions: t.Integer(),
              active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
              banner: t.String(),
              pdf: t.String(),
              reset_after_minutes: t.Integer(),
              content_types: t.Array(t.String(), {
                additionalProperties: false,
              }),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "reading_campaigns" },
);

export const reading_campaignsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      description: t.Boolean(),
      required_reads: t.Boolean(),
      points_reward: t.Boolean(),
      start_date: t.Boolean(),
      end_date: t.Boolean(),
      max_redemptions: t.Boolean(),
      current_redemptions: t.Boolean(),
      active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      banner: t.Boolean(),
      pdf: t.Boolean(),
      reset_after_minutes: t.Boolean(),
      content_types: t.Boolean(),
      popup_image: t.Boolean(),
      reward_points: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reading_campaignsInclude = t.Partial(
  t.Object(
    {
      popup_image: t.Boolean(),
      reward_points: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reading_campaignsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      required_reads: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_reward: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      max_redemptions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      current_redemptions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banner: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdf: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reset_after_minutes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content_types: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const reading_campaigns = t.Composite(
  [reading_campaignsPlain, reading_campaignsRelations],
  { additionalProperties: false },
);

export const reading_campaignsInputCreate = t.Composite(
  [reading_campaignsPlainInputCreate, reading_campaignsRelationsInputCreate],
  { additionalProperties: false },
);

export const reading_campaignsInputUpdate = t.Composite(
  [reading_campaignsPlainInputUpdate, reading_campaignsRelationsInputUpdate],
  { additionalProperties: false },
);
