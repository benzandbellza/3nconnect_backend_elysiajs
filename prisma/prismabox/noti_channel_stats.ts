import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const noti_channel_statsPlain = t.Object(
  {
    noti_id: t.Integer(),
    platform: t.String(),
    ok: __nullable__(t.Boolean()),
    sent_count: __nullable__(t.Integer()),
    view_count: t.Integer(),
    click_count: t.Integer(),
    error_msg: __nullable__(t.String()),
    last_sent_at: __nullable__(t.Date()),
    updated_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const noti_channel_statsRelations = t.Object(
  {
    customernoti: t.Object(
      {
        id: t.Integer(),
        created_at: t.Date(),
        title: t.String(),
        message: __nullable__(t.String()),
        senddate: t.Date(),
        tier: __nullable__(t.String()),
        status: __nullable__(t.String()),
        sent_at: __nullable__(t.Date()),
        navigation: __nullable__(t.String()),
        age_range: __nullable__(t.String()),
        province: __nullable__(t.String()),
        specific_name: __nullable__(t.String()),
        send_on_birthday: __nullable__(t.Boolean()),
        weblink: __nullable__(t.String()),
        image: __nullable__(t.String()),
        voucher_id: __nullable__(t.Integer()),
        target_type: __nullable__(t.String()),
        target_auth_ids: t.Array(t.String(), { additionalProperties: false }),
        sent_count: __nullable__(t.Integer()),
        target_promotion_id: __nullable__(t.Integer()),
        target_event_id: __nullable__(t.String()),
        target_seminar_dwid: __nullable__(t.String()),
        target_seminar_company: __nullable__(t.String()),
        send_channels: t.Array(t.String(), { additionalProperties: false }),
        segment_id: __nullable__(t.String()),
        target_customer_group_id: __nullable__(t.String()),
        targeting_logic: t.String(),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
      },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const noti_channel_statsPlainInputCreate = t.Object(
  {
    platform: t.String(),
    ok: t.Optional(__nullable__(t.Boolean())),
    sent_count: t.Optional(__nullable__(t.Integer())),
    view_count: t.Optional(t.Integer()),
    click_count: t.Optional(t.Integer()),
    error_msg: t.Optional(__nullable__(t.String())),
    last_sent_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const noti_channel_statsPlainInputUpdate = t.Object(
  {
    platform: t.Optional(t.String()),
    ok: t.Optional(__nullable__(t.Boolean())),
    sent_count: t.Optional(__nullable__(t.Integer())),
    view_count: t.Optional(t.Integer()),
    click_count: t.Optional(t.Integer()),
    error_msg: t.Optional(__nullable__(t.String())),
    last_sent_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const noti_channel_statsRelationsInputCreate = t.Object(
  {
    customernoti: t.Object(
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

export const noti_channel_statsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customernoti: t.Object(
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

export const noti_channel_statsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          noti_id: t.Integer(),
          platform: t.String(),
          ok: t.Boolean(),
          sent_count: t.Integer(),
          view_count: t.Integer(),
          click_count: t.Integer(),
          error_msg: t.String(),
          last_sent_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "noti_channel_stats" },
  ),
);

export const noti_channel_statsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {},
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
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
              noti_id: t.Integer(),
              platform: t.String(),
              ok: t.Boolean(),
              sent_count: t.Integer(),
              view_count: t.Integer(),
              click_count: t.Integer(),
              error_msg: t.String(),
              last_sent_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "noti_channel_stats" },
);

export const noti_channel_statsSelect = t.Partial(
  t.Object(
    {
      noti_id: t.Boolean(),
      platform: t.Boolean(),
      ok: t.Boolean(),
      sent_count: t.Boolean(),
      view_count: t.Boolean(),
      click_count: t.Boolean(),
      error_msg: t.Boolean(),
      last_sent_at: t.Boolean(),
      updated_at: t.Boolean(),
      customernoti: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const noti_channel_statsInclude = t.Partial(
  t.Object(
    { customernoti: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const noti_channel_statsOrderBy = t.Partial(
  t.Object(
    {
      noti_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      platform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ok: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sent_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      view_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      click_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      error_msg: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const noti_channel_stats = t.Composite(
  [noti_channel_statsPlain, noti_channel_statsRelations],
  { additionalProperties: false },
);

export const noti_channel_statsInputCreate = t.Composite(
  [noti_channel_statsPlainInputCreate, noti_channel_statsRelationsInputCreate],
  { additionalProperties: false },
);

export const noti_channel_statsInputUpdate = t.Composite(
  [noti_channel_statsPlainInputUpdate, noti_channel_statsRelationsInputUpdate],
  { additionalProperties: false },
);
