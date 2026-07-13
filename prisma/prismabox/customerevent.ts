import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customereventPlain = t.Object(
  {
    id: t.String(),
    created_at: t.Date(),
    event_id: __nullable__(t.String()),
    customeruser_id: __nullable__(t.String()),
    registerdate: __nullable__(t.Date()),
    attendevent: __nullable__(t.Date()),
    type: __nullable__(t.String()),
    checked_in: __nullable__(t.Boolean()),
    checkin_at: __nullable__(t.Date()),
    qr_token: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const customereventRelations = t.Object(
  {
    customeruser: __nullable__(
      t.Object(
        {
          id: t.String(),
          authid: __nullable__(t.String()),
          member_id: __nullable__(t.String()),
          created_at: t.Date(),
          prefix: __nullable__(t.String()),
          namesurname: __nullable__(t.String()),
          email: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          gender: __nullable__(t.String()),
          birthday: __nullable__(t.Date()),
          home_address_line1: __nullable__(t.String()),
          home_address_line2: __nullable__(t.String()),
          home_sub_district: __nullable__(t.String()),
          home_district: __nullable__(t.String()),
          home_province: __nullable__(t.String()),
          home_postal_code: __nullable__(t.String()),
          w1_address_line1: __nullable__(t.String()),
          w1_address_line2: __nullable__(t.String()),
          w1_sub_district: __nullable__(t.String()),
          w1_district: __nullable__(t.String()),
          w1_province: __nullable__(t.String()),
          w1_postal_code: __nullable__(t.String()),
          position: __nullable__(t.String()),
          w1_name: __nullable__(t.String()),
          status: __nullable__(t.String()),
          note: __nullable__(t.String()),
          Preferred_Contact_Channel: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          avatar_url: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          last_online: __nullable__(t.String()),
          picprofile: __nullable__(t.String()),
          wtel: __nullable__(t.String()),
          gibthailink: __nullable__(t.Any()),
          biodesignlink: __nullable__(t.Any()),
          lableaderlink: __nullable__(t.Any()),
          aeclink: __nullable__(t.Any()),
          doctorcallink: __nullable__(t.Any()),
          miclink: __nullable__(t.Any()),
          log: __nullable__(t.String()),
          department: __nullable__(t.String()),
          knowform: __nullable__(t.String()),
          referred_by: __nullable__(t.String()),
          uninstalled_at: __nullable__(t.Date()),
          line_user_id: __nullable__(t.String()),
          facebook_psid: __nullable__(t.String()),
          source: __nullable__(t.String()),
          tel2: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    email_logs: t.Array(
      t.Object(
        {
          id: t.String(),
          customeruser_id: __nullable__(t.String()),
          customerevent_id: __nullable__(t.String()),
          email_type: t.String(),
          recipient_email: t.String(),
          subject: __nullable__(t.String()),
          status: __nullable__(t.String()),
          message_id: __nullable__(t.String()),
          error_message: __nullable__(t.String()),
          sent_at: __nullable__(t.Date()),
          metadata: __nullable__(t.Any()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const customereventPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    registerdate: t.Optional(__nullable__(t.Date())),
    attendevent: t.Optional(__nullable__(t.Date())),
    type: t.Optional(__nullable__(t.String())),
    checked_in: t.Optional(__nullable__(t.Boolean())),
    checkin_at: t.Optional(__nullable__(t.Date())),
    qr_token: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customereventPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    registerdate: t.Optional(__nullable__(t.Date())),
    attendevent: t.Optional(__nullable__(t.Date())),
    type: t.Optional(__nullable__(t.String())),
    checked_in: t.Optional(__nullable__(t.Boolean())),
    checkin_at: t.Optional(__nullable__(t.Date())),
    qr_token: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customereventRelationsInputCreate = t.Object(
  {
    customeruser: t.Optional(
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
    email_logs: t.Optional(
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

export const customereventRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customeruser: t.Partial(
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
      email_logs: t.Partial(
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

export const customereventWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          created_at: t.Date(),
          event_id: t.String(),
          customeruser_id: t.String(),
          registerdate: t.Date(),
          attendevent: t.Date(),
          type: t.String(),
          checked_in: t.Boolean(),
          checkin_at: t.Date(),
          qr_token: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "customerevent" },
  ),
);

export const customereventWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), qr_token: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ qr_token: t.String() })],
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
              created_at: t.Date(),
              event_id: t.String(),
              customeruser_id: t.String(),
              registerdate: t.Date(),
              attendevent: t.Date(),
              type: t.String(),
              checked_in: t.Boolean(),
              checkin_at: t.Date(),
              qr_token: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customerevent" },
);

export const customereventSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      event_id: t.Boolean(),
      customeruser_id: t.Boolean(),
      registerdate: t.Boolean(),
      attendevent: t.Boolean(),
      type: t.Boolean(),
      checked_in: t.Boolean(),
      checkin_at: t.Boolean(),
      qr_token: t.Boolean(),
      customeruser: t.Boolean(),
      email_logs: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customereventInclude = t.Partial(
  t.Object(
    { customeruser: t.Boolean(), email_logs: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const customereventOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      registerdate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attendevent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      checked_in: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      checkin_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qr_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customerevent = t.Composite(
  [customereventPlain, customereventRelations],
  { additionalProperties: false },
);

export const customereventInputCreate = t.Composite(
  [customereventPlainInputCreate, customereventRelationsInputCreate],
  { additionalProperties: false },
);

export const customereventInputUpdate = t.Composite(
  [customereventPlainInputUpdate, customereventRelationsInputUpdate],
  { additionalProperties: false },
);
