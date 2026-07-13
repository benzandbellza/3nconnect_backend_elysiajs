import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const email_logsPlain = t.Object(
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
);

export const email_logsRelations = t.Object(
  {
    customerevent: __nullable__(
      t.Object(
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
      ),
    ),
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
  },
  { additionalProperties: false },
);

export const email_logsPlainInputCreate = t.Object(
  {
    email_type: t.String(),
    recipient_email: t.String(),
    subject: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    error_message: t.Optional(__nullable__(t.String())),
    sent_at: t.Optional(__nullable__(t.Date())),
    metadata: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const email_logsPlainInputUpdate = t.Object(
  {
    email_type: t.Optional(t.String()),
    recipient_email: t.Optional(t.String()),
    subject: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    error_message: t.Optional(__nullable__(t.String())),
    sent_at: t.Optional(__nullable__(t.Date())),
    metadata: t.Optional(__nullable__(t.Any())),
  },
  { additionalProperties: false },
);

export const email_logsRelationsInputCreate = t.Object(
  {
    customerevent: t.Optional(
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
  },
  { additionalProperties: false },
);

export const email_logsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customerevent: t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const email_logsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          customeruser_id: t.String(),
          customerevent_id: t.String(),
          email_type: t.String(),
          recipient_email: t.String(),
          subject: t.String(),
          status: t.String(),
          message_id: t.String(),
          error_message: t.String(),
          sent_at: t.Date(),
          metadata: t.Any(),
        },
        { additionalProperties: false },
      ),
    { $id: "email_logs" },
  ),
);

export const email_logsWhereUnique = t.Recursive(
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
              customeruser_id: t.String(),
              customerevent_id: t.String(),
              email_type: t.String(),
              recipient_email: t.String(),
              subject: t.String(),
              status: t.String(),
              message_id: t.String(),
              error_message: t.String(),
              sent_at: t.Date(),
              metadata: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "email_logs" },
);

export const email_logsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customeruser_id: t.Boolean(),
      customerevent_id: t.Boolean(),
      email_type: t.Boolean(),
      recipient_email: t.Boolean(),
      subject: t.Boolean(),
      status: t.Boolean(),
      message_id: t.Boolean(),
      error_message: t.Boolean(),
      sent_at: t.Boolean(),
      metadata: t.Boolean(),
      customerevent: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const email_logsInclude = t.Partial(
  t.Object(
    {
      customerevent: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const email_logsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerevent_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipient_email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subject: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      message_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      error_message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const email_logs = t.Composite([email_logsPlain, email_logsRelations], {
  additionalProperties: false,
});

export const email_logsInputCreate = t.Composite(
  [email_logsPlainInputCreate, email_logsRelationsInputCreate],
  { additionalProperties: false },
);

export const email_logsInputUpdate = t.Composite(
  [email_logsPlainInputUpdate, email_logsRelationsInputUpdate],
  { additionalProperties: false },
);
