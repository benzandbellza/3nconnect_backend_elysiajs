import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const webauthn_credentialsPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    credential_id: t.Uint8Array(),
    public_key: t.Uint8Array(),
    attestation_type: t.String(),
    aaguid: __nullable__(t.String()),
    sign_count: t.Integer(),
    transports: t.Any(),
    backup_eligible: t.Boolean(),
    backed_up: t.Boolean(),
    friendly_name: t.String(),
    created_at: t.Date(),
    updated_at: t.Date(),
    last_used_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const webauthn_credentialsRelations = t.Object(
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
  },
  { additionalProperties: false },
);

export const webauthn_credentialsPlainInputCreate = t.Object(
  {
    public_key: t.Uint8Array(),
    attestation_type: t.Optional(t.String()),
    sign_count: t.Optional(t.Integer()),
    transports: t.Optional(t.Any()),
    backup_eligible: t.Optional(t.Boolean()),
    backed_up: t.Optional(t.Boolean()),
    friendly_name: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    last_used_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const webauthn_credentialsPlainInputUpdate = t.Object(
  {
    public_key: t.Optional(t.Uint8Array()),
    attestation_type: t.Optional(t.String()),
    sign_count: t.Optional(t.Integer()),
    transports: t.Optional(t.Any()),
    backup_eligible: t.Optional(t.Boolean()),
    backed_up: t.Optional(t.Boolean()),
    friendly_name: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    last_used_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const webauthn_credentialsRelationsInputCreate = t.Object(
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
  },
  { additionalProperties: false },
);

export const webauthn_credentialsRelationsInputUpdate = t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const webauthn_credentialsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          credential_id: t.Uint8Array(),
          public_key: t.Uint8Array(),
          attestation_type: t.String(),
          aaguid: t.String(),
          sign_count: t.Integer(),
          transports: t.Any(),
          backup_eligible: t.Boolean(),
          backed_up: t.Boolean(),
          friendly_name: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          last_used_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "webauthn_credentials" },
  ),
);

export const webauthn_credentialsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), credential_id: t.Uint8Array() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ credential_id: t.Uint8Array() }),
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
              user_id: t.String(),
              credential_id: t.Uint8Array(),
              public_key: t.Uint8Array(),
              attestation_type: t.String(),
              aaguid: t.String(),
              sign_count: t.Integer(),
              transports: t.Any(),
              backup_eligible: t.Boolean(),
              backed_up: t.Boolean(),
              friendly_name: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              last_used_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "webauthn_credentials" },
);

export const webauthn_credentialsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      credential_id: t.Boolean(),
      public_key: t.Boolean(),
      attestation_type: t.Boolean(),
      aaguid: t.Boolean(),
      sign_count: t.Boolean(),
      transports: t.Boolean(),
      backup_eligible: t.Boolean(),
      backed_up: t.Boolean(),
      friendly_name: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      last_used_at: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const webauthn_credentialsInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const webauthn_credentialsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      credential_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      public_key: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attestation_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      aaguid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sign_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      transports: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      backup_eligible: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      backed_up: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      friendly_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_used_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const webauthn_credentials = t.Composite(
  [webauthn_credentialsPlain, webauthn_credentialsRelations],
  { additionalProperties: false },
);

export const webauthn_credentialsInputCreate = t.Composite(
  [
    webauthn_credentialsPlainInputCreate,
    webauthn_credentialsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const webauthn_credentialsInputUpdate = t.Composite(
  [
    webauthn_credentialsPlainInputUpdate,
    webauthn_credentialsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
