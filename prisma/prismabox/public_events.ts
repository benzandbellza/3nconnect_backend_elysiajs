import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_eventsPlain = t.Object(
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
);

export const public_eventsRelations = t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const public_eventsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    eventname: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    event_registerdate: t.Optional(__nullable__(t.String())),
    event_preregister: t.Optional(__nullable__(t.String())),
    eventStartDate: t.Optional(__nullable__(t.String())),
    event_pic: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    category: t.Optional(__nullable__(t.String())),
    tierregister: t.Optional(__nullable__(t.String())),
    tierpreregister: t.Optional(__nullable__(t.String())),
    attendee: t.Optional(__nullable__(t.Number())),
    eventEndDate: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const public_eventsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    eventname: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    event_registerdate: t.Optional(__nullable__(t.String())),
    event_preregister: t.Optional(__nullable__(t.String())),
    eventStartDate: t.Optional(__nullable__(t.String())),
    event_pic: t.Optional(__nullable__(t.String())),
    location: t.Optional(__nullable__(t.String())),
    category: t.Optional(__nullable__(t.String())),
    tierregister: t.Optional(__nullable__(t.String())),
    tierpreregister: t.Optional(__nullable__(t.String())),
    attendee: t.Optional(__nullable__(t.Number())),
    eventEndDate: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const public_eventsRelationsInputCreate = t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const public_eventsRelationsInputUpdate = t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const public_eventsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          created_at: t.Date(),
          eventname: t.String(),
          event_detail: t.String(),
          event_registerdate: t.String(),
          event_preregister: t.String(),
          eventStartDate: t.String(),
          event_pic: t.String(),
          location: t.String(),
          category: t.String(),
          tierregister: t.String(),
          tierpreregister: t.String(),
          attendee: t.Number(),
          eventEndDate: t.String(),
          link: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
    { $id: "public_events" },
  ),
);

export const public_eventsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
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
              created_at: t.Date(),
              eventname: t.String(),
              event_detail: t.String(),
              event_registerdate: t.String(),
              event_preregister: t.String(),
              eventStartDate: t.String(),
              event_pic: t.String(),
              location: t.String(),
              category: t.String(),
              tierregister: t.String(),
              tierpreregister: t.String(),
              attendee: t.Number(),
              eventEndDate: t.String(),
              link: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_events" },
);

export const public_eventsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      eventname: t.Boolean(),
      event_detail: t.Boolean(),
      event_registerdate: t.Boolean(),
      event_preregister: t.Boolean(),
      eventStartDate: t.Boolean(),
      event_pic: t.Boolean(),
      location: t.Boolean(),
      category: t.Boolean(),
      tierregister: t.Boolean(),
      tierpreregister: t.Boolean(),
      attendee: t.Boolean(),
      eventEndDate: t.Boolean(),
      link: t.Boolean(),
      popup_image: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const public_eventsInclude = t.Partial(
  t.Object(
    { popup_image: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const public_eventsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      eventname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_registerdate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_preregister: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      eventStartDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tierregister: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tierpreregister: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attendee: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      eventEndDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      link: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const public_events = t.Composite(
  [public_eventsPlain, public_eventsRelations],
  { additionalProperties: false },
);

export const public_eventsInputCreate = t.Composite(
  [public_eventsPlainInputCreate, public_eventsRelationsInputCreate],
  { additionalProperties: false },
);

export const public_eventsInputUpdate = t.Composite(
  [public_eventsPlainInputUpdate, public_eventsRelationsInputUpdate],
  { additionalProperties: false },
);
