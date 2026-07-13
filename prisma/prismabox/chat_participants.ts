import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const chat_participantsPlain = t.Object(
  {
    id: t.String(),
    chat_room_id: __nullable__(t.String()),
    user_id: __nullable__(t.String()),
    joined_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const chat_participantsRelations = t.Object(
  {
    chat_rooms: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: __nullable__(t.String()),
          is_group: __nullable__(t.Boolean()),
          created_at: __nullable__(t.Date()),
        },
        { additionalProperties: false },
      ),
    ),
    users: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          avatar_url: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          sharepoint_id: __nullable__(t.Integer()),
          person_id: __nullable__(t.String()),
          email: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          planetone_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          position: __nullable__(t.String()),
          manager: __nullable__(t.String()),
          manager2: __nullable__(t.String()),
          address: __nullable__(t.String()),
          authid: __nullable__(t.String()),
          last_online: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          salesupport: __nullable__(t.String()),
          role: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          department: __nullable__(t.Integer()),
          company: __nullable__(t.Integer()),
          team: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          extra_pages: t.Array(t.String(), { additionalProperties: false }),
          lineid_3nholdingapp: __nullable__(t.String()),
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

export const chat_participantsPlainInputCreate = t.Object(
  { joined_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const chat_participantsPlainInputUpdate = t.Object(
  { joined_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const chat_participantsRelationsInputCreate = t.Object(
  {
    chat_rooms: t.Optional(
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
    users: t.Optional(
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
  { additionalProperties: false },
);

export const chat_participantsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      chat_rooms: t.Partial(
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
      users: t.Partial(
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
    { additionalProperties: false },
  ),
);

export const chat_participantsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          chat_room_id: t.String(),
          user_id: t.String(),
          joined_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "chat_participants" },
  ),
);

export const chat_participantsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              chat_room_id_user_id: t.Object(
                { chat_room_id: t.String(), user_id: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({
              chat_room_id_user_id: t.Object(
                { chat_room_id: t.String(), user_id: t.String() },
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
              chat_room_id: t.String(),
              user_id: t.String(),
              joined_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "chat_participants" },
);

export const chat_participantsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      chat_room_id: t.Boolean(),
      user_id: t.Boolean(),
      joined_at: t.Boolean(),
      chat_rooms: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const chat_participantsInclude = t.Partial(
  t.Object(
    { chat_rooms: t.Boolean(), users: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const chat_participantsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      chat_room_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      joined_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const chat_participants = t.Composite(
  [chat_participantsPlain, chat_participantsRelations],
  { additionalProperties: false },
);

export const chat_participantsInputCreate = t.Composite(
  [chat_participantsPlainInputCreate, chat_participantsRelationsInputCreate],
  { additionalProperties: false },
);

export const chat_participantsInputUpdate = t.Composite(
  [chat_participantsPlainInputUpdate, chat_participantsRelationsInputUpdate],
  { additionalProperties: false },
);
