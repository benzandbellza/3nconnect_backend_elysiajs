import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const chat_roomsPlain = t.Object(
  {
    id: t.String(),
    name: __nullable__(t.String()),
    is_group: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const chat_roomsRelations = t.Object(
  {
    chat_participants: t.Array(
      t.Object(
        {
          id: t.String(),
          chat_room_id: __nullable__(t.String()),
          user_id: __nullable__(t.String()),
          joined_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    hidden_chats: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: __nullable__(t.String()),
          chat_room_id: __nullable__(t.String()),
          hidden_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    messages: t.Array(
      t.Object(
        {
          id: t.String(),
          chat_room_id: __nullable__(t.String()),
          sender_id: __nullable__(t.String()),
          content: __nullable__(t.String()),
          created_at: __nullable__(t.Date()),
          type: __nullable__(t.String()),
          status: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const chat_roomsPlainInputCreate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    is_group: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const chat_roomsPlainInputUpdate = t.Object(
  {
    name: t.Optional(__nullable__(t.String())),
    is_group: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const chat_roomsRelationsInputCreate = t.Object(
  {
    chat_participants: t.Optional(
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
    hidden_chats: t.Optional(
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
    messages: t.Optional(
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
  { additionalProperties: false },
);

export const chat_roomsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      chat_participants: t.Partial(
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
      hidden_chats: t.Partial(
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
      messages: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const chat_roomsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          is_group: t.Boolean(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "chat_rooms" },
  ),
);

export const chat_roomsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
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
              name: t.String(),
              is_group: t.Boolean(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "chat_rooms" },
);

export const chat_roomsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      is_group: t.Boolean(),
      created_at: t.Boolean(),
      chat_participants: t.Boolean(),
      hidden_chats: t.Boolean(),
      messages: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const chat_roomsInclude = t.Partial(
  t.Object(
    {
      chat_participants: t.Boolean(),
      hidden_chats: t.Boolean(),
      messages: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const chat_roomsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_group: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const chat_rooms = t.Composite([chat_roomsPlain, chat_roomsRelations], {
  additionalProperties: false,
});

export const chat_roomsInputCreate = t.Composite(
  [chat_roomsPlainInputCreate, chat_roomsRelationsInputCreate],
  { additionalProperties: false },
);

export const chat_roomsInputUpdate = t.Composite(
  [chat_roomsPlainInputUpdate, chat_roomsRelationsInputUpdate],
  { additionalProperties: false },
);
