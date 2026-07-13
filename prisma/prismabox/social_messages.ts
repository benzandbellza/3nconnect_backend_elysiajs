import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const social_messagesPlain = t.Object(
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
);

export const social_messagesRelations = t.Object(
  {
    social_conversations: __nullable__(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_messagesPlainInputCreate = t.Object(
  {
    direction: t.String(),
    content: t.Optional(__nullable__(t.String())),
    message_type: t.Optional(__nullable__(t.String())),
    media_url: t.Optional(__nullable__(t.String())),
    sender_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    read_at: t.Optional(__nullable__(t.Date())),
    reply_token: t.Optional(__nullable__(t.String())),
    source_type: t.Optional(__nullable__(t.String())),
    post_snippet: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_messagesPlainInputUpdate = t.Object(
  {
    direction: t.Optional(t.String()),
    content: t.Optional(__nullable__(t.String())),
    message_type: t.Optional(__nullable__(t.String())),
    media_url: t.Optional(__nullable__(t.String())),
    sender_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    read_at: t.Optional(__nullable__(t.Date())),
    reply_token: t.Optional(__nullable__(t.String())),
    source_type: t.Optional(__nullable__(t.String())),
    post_snippet: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_messagesRelationsInputCreate = t.Object(
  {
    social_conversations: t.Optional(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const social_messagesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      social_conversations: t.Partial(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_messagesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          conversation_id: t.String(),
          direction: t.String(),
          content: t.String(),
          message_type: t.String(),
          media_url: t.String(),
          external_msg_id: t.String(),
          sender_name: t.String(),
          created_at: t.Date(),
          read_at: t.Date(),
          reply_token: t.String(),
          source_type: t.String(),
          comment_id: t.String(),
          post_id: t.String(),
          post_snippet: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "social_messages" },
  ),
);

export const social_messagesWhereUnique = t.Recursive(
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
              conversation_id: t.String(),
              direction: t.String(),
              content: t.String(),
              message_type: t.String(),
              media_url: t.String(),
              external_msg_id: t.String(),
              sender_name: t.String(),
              created_at: t.Date(),
              read_at: t.Date(),
              reply_token: t.String(),
              source_type: t.String(),
              comment_id: t.String(),
              post_id: t.String(),
              post_snippet: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "social_messages" },
);

export const social_messagesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      conversation_id: t.Boolean(),
      direction: t.Boolean(),
      content: t.Boolean(),
      message_type: t.Boolean(),
      media_url: t.Boolean(),
      external_msg_id: t.Boolean(),
      sender_name: t.Boolean(),
      created_at: t.Boolean(),
      read_at: t.Boolean(),
      reply_token: t.Boolean(),
      source_type: t.Boolean(),
      comment_id: t.Boolean(),
      post_id: t.Boolean(),
      post_snippet: t.Boolean(),
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

export const social_messagesInclude = t.Partial(
  t.Object(
    { social_conversations: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const social_messagesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      conversation_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      direction: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      message_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      media_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      external_msg_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sender_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      read_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reply_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      source_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      comment_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      post_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      post_snippet: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const social_messages = t.Composite(
  [social_messagesPlain, social_messagesRelations],
  { additionalProperties: false },
);

export const social_messagesInputCreate = t.Composite(
  [social_messagesPlainInputCreate, social_messagesRelationsInputCreate],
  { additionalProperties: false },
);

export const social_messagesInputUpdate = t.Composite(
  [social_messagesPlainInputUpdate, social_messagesRelationsInputUpdate],
  { additionalProperties: false },
);
