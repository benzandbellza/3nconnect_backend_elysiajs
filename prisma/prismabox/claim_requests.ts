import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const claim_requestsPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    invoice_no: t.String(),
    amount: t.Number(),
    invoice_date: __nullable__(t.Date()),
    note: __nullable__(t.String()),
    receipt_image_url: __nullable__(t.String()),
    status: t.String(),
    created_at: t.Date(),
    updated_at: t.Date(),
    log: __nullable__(t.Any()),
    updated_by: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const claim_requestsRelations = t.Object(
  {
    users: t.Object(
      {
        instance_id: __nullable__(t.String()),
        id: t.String(),
        aud: __nullable__(t.String()),
        role: __nullable__(t.String()),
        email: __nullable__(t.String()),
        encrypted_password: __nullable__(t.String()),
        email_confirmed_at: __nullable__(t.Date()),
        invited_at: __nullable__(t.Date()),
        confirmation_token: __nullable__(t.String()),
        confirmation_sent_at: __nullable__(t.Date()),
        recovery_token: __nullable__(t.String()),
        recovery_sent_at: __nullable__(t.Date()),
        email_change_token_new: __nullable__(t.String()),
        email_change: __nullable__(t.String()),
        email_change_sent_at: __nullable__(t.Date()),
        last_sign_in_at: __nullable__(t.Date()),
        raw_app_meta_data: __nullable__(t.Any()),
        raw_user_meta_data: __nullable__(t.Any()),
        is_super_admin: __nullable__(t.Boolean()),
        created_at: __nullable__(t.Date()),
        updated_at: __nullable__(t.Date()),
        phone: __nullable__(t.String()),
        phone_confirmed_at: __nullable__(t.Date()),
        phone_change: __nullable__(t.String()),
        phone_change_token: __nullable__(t.String()),
        phone_change_sent_at: __nullable__(t.Date()),
        confirmed_at: __nullable__(t.Date()),
        email_change_token_current: __nullable__(t.String()),
        email_change_confirm_status: __nullable__(t.Integer()),
        banned_until: __nullable__(t.Date()),
        reauthentication_token: __nullable__(t.String()),
        reauthentication_sent_at: __nullable__(t.Date()),
        is_sso_user: t.Boolean(),
        deleted_at: __nullable__(t.Date()),
        is_anonymous: t.Boolean(),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
      },
    ),
    customeruser: t.Object(
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
  },
  { additionalProperties: false },
);

export const claim_requestsPlainInputCreate = t.Object(
  {
    invoice_no: t.String(),
    amount: t.Number(),
    invoice_date: t.Optional(__nullable__(t.Date())),
    note: t.Optional(__nullable__(t.String())),
    receipt_image_url: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    log: t.Optional(__nullable__(t.Any())),
    updated_by: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const claim_requestsPlainInputUpdate = t.Object(
  {
    invoice_no: t.Optional(t.String()),
    amount: t.Optional(t.Number()),
    invoice_date: t.Optional(__nullable__(t.Date())),
    note: t.Optional(__nullable__(t.String())),
    receipt_image_url: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    log: t.Optional(__nullable__(t.Any())),
    updated_by: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const claim_requestsRelationsInputCreate = t.Object(
  {
    users: t.Object(
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
    customeruser: t.Object(
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
  },
  { additionalProperties: false },
);

export const claim_requestsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      users: t.Object(
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
      customeruser: t.Object(
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
    },
    { additionalProperties: false },
  ),
);

export const claim_requestsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          invoice_no: t.String(),
          amount: t.Number(),
          invoice_date: t.Date(),
          note: t.String(),
          receipt_image_url: t.String(),
          status: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          log: t.Any(),
          updated_by: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "claim_requests" },
  ),
);

export const claim_requestsWhereUnique = t.Recursive(
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
              user_id: t.String(),
              invoice_no: t.String(),
              amount: t.Number(),
              invoice_date: t.Date(),
              note: t.String(),
              receipt_image_url: t.String(),
              status: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              log: t.Any(),
              updated_by: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "claim_requests" },
);

export const claim_requestsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      invoice_no: t.Boolean(),
      amount: t.Boolean(),
      invoice_date: t.Boolean(),
      note: t.Boolean(),
      receipt_image_url: t.Boolean(),
      status: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      log: t.Boolean(),
      updated_by: t.Boolean(),
      users: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const claim_requestsInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), customeruser: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const claim_requestsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      receipt_image_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      log: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const claim_requests = t.Composite(
  [claim_requestsPlain, claim_requestsRelations],
  { additionalProperties: false },
);

export const claim_requestsInputCreate = t.Composite(
  [claim_requestsPlainInputCreate, claim_requestsRelationsInputCreate],
  { additionalProperties: false },
);

export const claim_requestsInputUpdate = t.Composite(
  [claim_requestsPlainInputUpdate, claim_requestsRelationsInputUpdate],
  { additionalProperties: false },
);
