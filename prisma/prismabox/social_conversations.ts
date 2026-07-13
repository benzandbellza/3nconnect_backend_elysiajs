import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const social_conversationsPlain = t.Object(
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
);

export const social_conversationsRelations = t.Object(
  {
    social_channel_configs: __nullable__(
      t.Object(
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
      ),
    ),
    social_messages: t.Array(
      t.Object(
        {
          id: t.String(),
          conversation_id: __nullable__(t.String()),
          direction: t.String(),
          content: __nullable__(t.String()),
          message_type: __nullable__(t.String()),
          media_url: __nullable__(t.String()),
          external_msg_id: __nullable__(t.String()),
          sender_name: __nullable__(t.String()),
          created_at: __nullable__(t.Date()),
          read_at: __nullable__(t.Date()),
          reply_token: __nullable__(t.String()),
          source_type: __nullable__(t.String()),
          comment_id: __nullable__(t.String()),
          post_id: __nullable__(t.String()),
          post_snippet: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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

export const social_conversationsPlainInputCreate = t.Object(
  {
    platform: t.String(),
    contact_name: t.Optional(__nullable__(t.String())),
    contact_avatar: t.Optional(__nullable__(t.String())),
    last_message: t.Optional(__nullable__(t.String())),
    last_message_at: t.Optional(__nullable__(t.Date())),
    unread_count: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
    tags: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    note: t.Optional(__nullable__(t.String())),
    crm_status: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_conversationsPlainInputUpdate = t.Object(
  {
    platform: t.Optional(t.String()),
    contact_name: t.Optional(__nullable__(t.String())),
    contact_avatar: t.Optional(__nullable__(t.String())),
    last_message: t.Optional(__nullable__(t.String())),
    last_message_at: t.Optional(__nullable__(t.Date())),
    unread_count: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
    tags: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    note: t.Optional(__nullable__(t.String())),
    crm_status: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_conversationsRelationsInputCreate = t.Object(
  {
    social_channel_configs: t.Optional(
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
    social_messages: t.Optional(
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

export const social_conversationsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      social_channel_configs: t.Partial(
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
      social_messages: t.Partial(
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

export const social_conversationsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          channel_config_id: t.String(),
          platform: t.String(),
          external_id: t.String(),
          contact_name: t.String(),
          contact_avatar: t.String(),
          last_message: t.String(),
          last_message_at: t.Date(),
          unread_count: t.Integer(),
          created_at: t.Date(),
          tags: t.Array(t.String(), { additionalProperties: false }),
          note: t.String(),
          crm_status: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "social_conversations" },
  ),
);

export const social_conversationsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              channel_config_id_external_id: t.Object(
                { channel_config_id: t.String(), external_id: t.String() },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({
              channel_config_id_external_id: t.Object(
                { channel_config_id: t.String(), external_id: t.String() },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
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
              channel_config_id: t.String(),
              platform: t.String(),
              external_id: t.String(),
              contact_name: t.String(),
              contact_avatar: t.String(),
              last_message: t.String(),
              last_message_at: t.Date(),
              unread_count: t.Integer(),
              created_at: t.Date(),
              tags: t.Array(t.String(), { additionalProperties: false }),
              note: t.String(),
              crm_status: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "social_conversations" },
);

export const social_conversationsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      channel_config_id: t.Boolean(),
      platform: t.Boolean(),
      external_id: t.Boolean(),
      contact_name: t.Boolean(),
      contact_avatar: t.Boolean(),
      last_message: t.Boolean(),
      last_message_at: t.Boolean(),
      unread_count: t.Boolean(),
      created_at: t.Boolean(),
      tags: t.Boolean(),
      note: t.Boolean(),
      crm_status: t.Boolean(),
      social_channel_configs: t.Boolean(),
      social_messages: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_conversationsInclude = t.Partial(
  t.Object(
    {
      social_channel_configs: t.Boolean(),
      social_messages: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_conversationsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      channel_config_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      platform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      external_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_avatar: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_message_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unread_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tags: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      crm_status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_conversations = t.Composite(
  [social_conversationsPlain, social_conversationsRelations],
  { additionalProperties: false },
);

export const social_conversationsInputCreate = t.Composite(
  [
    social_conversationsPlainInputCreate,
    social_conversationsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const social_conversationsInputUpdate = t.Composite(
  [
    social_conversationsPlainInputUpdate,
    social_conversationsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
