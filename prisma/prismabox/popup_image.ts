import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const popup_imagePlain = t.Object(
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
);

export const popup_imageRelations = t.Object(
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
    customer_segment: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          description: __nullable__(t.String()),
          conditions: t.Any(),
          member_count: t.Integer(),
          created_by: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    events: __nullable__(
      t.Object(
        {
          id: t.String(),
          created_at: t.Date(),
          eventname: __nullable__(t.String()),
          event_detail: __nullable__(t.String()),
          event_registerdate: __nullable__(t.String()),
          event_preregister: __nullable__(t.String()),
          eventStartDate: __nullable__(t.String()),
          event_pic: __nullable__(t.String()),
          location: __nullable__(t.String()),
          category: __nullable__(t.String()),
          tierregister: __nullable__(t.String()),
          tierpreregister: __nullable__(t.String()),
          attendee: __nullable__(t.Number()),
          eventEndDate: __nullable__(t.String()),
          link: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
    ),
    reading_campaigns: __nullable__(
      t.Object(
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
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const popup_imagePlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    image_url: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    start: t.Optional(__nullable__(t.Date())),
    end: t.Optional(__nullable__(t.Date())),
    tier: t.Optional(__nullable__(t.String())),
    target_seminar_company: t.Optional(__nullable__(t.String())),
    weblink: t.Optional(__nullable__(t.String())),
    navigation: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const popup_imagePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    image_url: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    start: t.Optional(__nullable__(t.Date())),
    end: t.Optional(__nullable__(t.Date())),
    tier: t.Optional(__nullable__(t.String())),
    target_seminar_company: t.Optional(__nullable__(t.String())),
    weblink: t.Optional(__nullable__(t.String())),
    navigation: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const popup_imageRelationsInputCreate = t.Object(
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
    customer_segment: t.Optional(
      t.Object(
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
    ),
    events: t.Optional(
      t.Object(
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
    ),
    reading_campaigns: t.Optional(
      t.Object(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const popup_imageRelationsInputUpdate = t.Partial(
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
      customer_segment: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      events: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      reading_campaigns: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
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

export const popup_imageWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          image_url: t.String(),
          active: t.Boolean(),
          start: t.Date(),
          end: t.Date(),
          tier: t.String(),
          promotion_id: t.Integer(),
          target_event_id: t.String(),
          target_seminar_dwid: t.String(),
          target_seminar_company: t.String(),
          weblink: t.String(),
          navigation: t.String(),
          target_reading_campaign_id: t.String(),
          segment_id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "popup_image" },
  ),
);

export const popup_imageWhereUnique = t.Recursive(
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
              image_url: t.String(),
              active: t.Boolean(),
              start: t.Date(),
              end: t.Date(),
              tier: t.String(),
              promotion_id: t.Integer(),
              target_event_id: t.String(),
              target_seminar_dwid: t.String(),
              target_seminar_company: t.String(),
              weblink: t.String(),
              navigation: t.String(),
              target_reading_campaign_id: t.String(),
              segment_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "popup_image" },
);

export const popup_imageSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      image_url: t.Boolean(),
      active: t.Boolean(),
      start: t.Boolean(),
      end: t.Boolean(),
      tier: t.Boolean(),
      promotion_id: t.Boolean(),
      target_event_id: t.Boolean(),
      target_seminar_dwid: t.Boolean(),
      target_seminar_company: t.Boolean(),
      weblink: t.Boolean(),
      navigation: t.Boolean(),
      target_reading_campaign_id: t.Boolean(),
      segment_id: t.Boolean(),
      promotion: t.Boolean(),
      customer_segment: t.Boolean(),
      events: t.Boolean(),
      reading_campaigns: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const popup_imageInclude = t.Partial(
  t.Object(
    {
      promotion: t.Boolean(),
      customer_segment: t.Boolean(),
      events: t.Boolean(),
      reading_campaigns: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const popup_imageOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_event_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_seminar_dwid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_seminar_company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      weblink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      navigation: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_reading_campaign_id: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      segment_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const popup_image = t.Composite(
  [popup_imagePlain, popup_imageRelations],
  { additionalProperties: false },
);

export const popup_imageInputCreate = t.Composite(
  [popup_imagePlainInputCreate, popup_imageRelationsInputCreate],
  { additionalProperties: false },
);

export const popup_imageInputUpdate = t.Composite(
  [popup_imagePlainInputUpdate, popup_imageRelationsInputUpdate],
  { additionalProperties: false },
);
