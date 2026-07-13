import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const social_channel_configsPlain = t.Object(
  {
    id: t.String(),
    platform: t.String(),
    name: t.String(),
    access_token: __nullable__(t.String()),
    channel_secret: __nullable__(t.String()),
    page_id: __nullable__(t.String()),
    verify_token: __nullable__(t.String()),
    webhook_verified: __nullable__(t.Boolean()),
    active: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    app_id: __nullable__(t.String()),
    refresh_token: __nullable__(t.String()),
    token_expires_at: __nullable__(t.Date()),
    oauth_type: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_channel_configsRelations = t.Object(
  {
    social_conversations: t.Array(
      t.Object(
        {
          id: t.String(),
          channel_config_id: __nullable__(t.String()),
          platform: t.String(),
          external_id: t.String(),
          contact_name: __nullable__(t.String()),
          contact_avatar: __nullable__(t.String()),
          last_message: __nullable__(t.String()),
          last_message_at: __nullable__(t.Date()),
          unread_count: __nullable__(t.Integer()),
          created_at: __nullable__(t.Date()),
          tags: t.Array(t.String(), { additionalProperties: false }),
          note: __nullable__(t.String()),
          crm_status: __nullable__(t.String()),
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_channel_configsPlainInputCreate = t.Object(
  {
    platform: t.String(),
    name: t.String(),
    access_token: t.Optional(__nullable__(t.String())),
    channel_secret: t.Optional(__nullable__(t.String())),
    verify_token: t.Optional(__nullable__(t.String())),
    webhook_verified: t.Optional(__nullable__(t.Boolean())),
    active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    refresh_token: t.Optional(__nullable__(t.String())),
    token_expires_at: t.Optional(__nullable__(t.Date())),
    oauth_type: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_channel_configsPlainInputUpdate = t.Object(
  {
    platform: t.Optional(t.String()),
    name: t.Optional(t.String()),
    access_token: t.Optional(__nullable__(t.String())),
    channel_secret: t.Optional(__nullable__(t.String())),
    verify_token: t.Optional(__nullable__(t.String())),
    webhook_verified: t.Optional(__nullable__(t.Boolean())),
    active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    refresh_token: t.Optional(__nullable__(t.String())),
    token_expires_at: t.Optional(__nullable__(t.Date())),
    oauth_type: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_channel_configsRelationsInputCreate = t.Object(
  {
    social_conversations: t.Optional(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_channel_configsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      social_conversations: t.Partial(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_channel_configsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          platform: t.String(),
          name: t.String(),
          access_token: t.String(),
          channel_secret: t.String(),
          page_id: t.String(),
          verify_token: t.String(),
          webhook_verified: t.Boolean(),
          active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
          app_id: t.String(),
          refresh_token: t.String(),
          token_expires_at: t.Date(),
          oauth_type: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "social_channel_configs" },
  ),
);

export const social_channel_configsWhereUnique = t.Recursive(
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
              platform: t.String(),
              name: t.String(),
              access_token: t.String(),
              channel_secret: t.String(),
              page_id: t.String(),
              verify_token: t.String(),
              webhook_verified: t.Boolean(),
              active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
              app_id: t.String(),
              refresh_token: t.String(),
              token_expires_at: t.Date(),
              oauth_type: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "social_channel_configs" },
);

export const social_channel_configsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      platform: t.Boolean(),
      name: t.Boolean(),
      access_token: t.Boolean(),
      channel_secret: t.Boolean(),
      page_id: t.Boolean(),
      verify_token: t.Boolean(),
      webhook_verified: t.Boolean(),
      active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      app_id: t.Boolean(),
      refresh_token: t.Boolean(),
      token_expires_at: t.Boolean(),
      oauth_type: t.Boolean(),
      social_conversations: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_channel_configsInclude = t.Partial(
  t.Object(
    { social_conversations: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_channel_configsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      platform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      access_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      channel_secret: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      page_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      verify_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      webhook_verified: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      app_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refresh_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token_expires_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      oauth_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const social_channel_configs = t.Composite(
  [social_channel_configsPlain, social_channel_configsRelations],
  { additionalProperties: false },
);

export const social_channel_configsInputCreate = t.Composite(
  [
    social_channel_configsPlainInputCreate,
    social_channel_configsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const social_channel_configsInputUpdate = t.Composite(
  [
    social_channel_configsPlainInputUpdate,
    social_channel_configsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
