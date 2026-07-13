import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const mfa_factorsPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    friendly_name: __nullable__(t.String()),
    factor_type: t.Union(
      [t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")],
      { additionalProperties: false },
    ),
    status: t.Union([t.Literal("unverified"), t.Literal("verified")], {
      additionalProperties: false,
    }),
    created_at: t.Date(),
    updated_at: t.Date(),
    secret: __nullable__(t.String()),
    phone: __nullable__(t.String()),
    last_challenged_at: __nullable__(t.Date()),
    web_authn_credential: __nullable__(t.Any()),
    web_authn_aaguid: __nullable__(t.String()),
    last_webauthn_challenge_data: __nullable__(t.Any()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_factorsRelations = t.Object(
  {
    mfa_challenges: t.Array(
      t.Object(
        {
          id: t.String(),
          factor_id: t.String(),
          created_at: t.Date(),
          verified_at: __nullable__(t.Date()),
          ip_address: t.String(),
          otp_code: __nullable__(t.String()),
          web_authn_session_data: __nullable__(t.Any()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_factorsPlainInputCreate = t.Object(
  {
    friendly_name: t.Optional(__nullable__(t.String())),
    factor_type: t.Union(
      [t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")],
      { additionalProperties: false },
    ),
    status: t.Union([t.Literal("unverified"), t.Literal("verified")], {
      additionalProperties: false,
    }),
    created_at: t.Date(),
    updated_at: t.Date(),
    secret: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    last_challenged_at: t.Optional(__nullable__(t.Date())),
    web_authn_credential: t.Optional(__nullable__(t.Any())),
    last_webauthn_challenge_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_factorsPlainInputUpdate = t.Object(
  {
    friendly_name: t.Optional(__nullable__(t.String())),
    factor_type: t.Optional(
      t.Union([t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")], {
        additionalProperties: false,
      }),
    ),
    status: t.Optional(
      t.Union([t.Literal("unverified"), t.Literal("verified")], {
        additionalProperties: false,
      }),
    ),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    secret: t.Optional(__nullable__(t.String())),
    phone: t.Optional(__nullable__(t.String())),
    last_challenged_at: t.Optional(__nullable__(t.Date())),
    web_authn_credential: t.Optional(__nullable__(t.Any())),
    last_webauthn_challenge_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_factorsRelationsInputCreate = t.Object(
  {
    mfa_challenges: t.Optional(
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_factorsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      mfa_challenges: t.Partial(
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
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_factorsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          friendly_name: t.String(),
          factor_type: t.Union(
            [t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")],
            { additionalProperties: false },
          ),
          status: t.Union([t.Literal("unverified"), t.Literal("verified")], {
            additionalProperties: false,
          }),
          created_at: t.Date(),
          updated_at: t.Date(),
          secret: t.String(),
          phone: t.String(),
          last_challenged_at: t.Date(),
          web_authn_credential: t.Any(),
          web_authn_aaguid: t.String(),
          last_webauthn_challenge_data: t.Any(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "mfa_factors" },
  ),
);

export const mfa_factorsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              last_challenged_at: t.Date(),
              user_id_phone: t.Object(
                { user_id: t.String(), phone: t.String() },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ last_challenged_at: t.Date() }),
            t.Object({
              user_id_phone: t.Object(
                { user_id: t.String(), phone: t.String() },
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
              user_id: t.String(),
              friendly_name: t.String(),
              factor_type: t.Union(
                [t.Literal("totp"), t.Literal("webauthn"), t.Literal("phone")],
                { additionalProperties: false },
              ),
              status: t.Union(
                [t.Literal("unverified"), t.Literal("verified")],
                { additionalProperties: false },
              ),
              created_at: t.Date(),
              updated_at: t.Date(),
              secret: t.String(),
              phone: t.String(),
              last_challenged_at: t.Date(),
              web_authn_credential: t.Any(),
              web_authn_aaguid: t.String(),
              last_webauthn_challenge_data: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "mfa_factors" },
);

export const mfa_factorsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      friendly_name: t.Boolean(),
      factor_type: t.Boolean(),
      status: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      secret: t.Boolean(),
      phone: t.Boolean(),
      last_challenged_at: t.Boolean(),
      web_authn_credential: t.Boolean(),
      web_authn_aaguid: t.Boolean(),
      last_webauthn_challenge_data: t.Boolean(),
      mfa_challenges: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_factorsInclude = t.Partial(
  t.Object(
    {
      factor_type: t.Boolean(),
      status: t.Boolean(),
      mfa_challenges: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_factorsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      secret: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_challenged_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      web_authn_credential: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      web_authn_aaguid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_webauthn_challenge_data: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_factors = t.Composite(
  [mfa_factorsPlain, mfa_factorsRelations],
  { additionalProperties: false },
);

export const mfa_factorsInputCreate = t.Composite(
  [mfa_factorsPlainInputCreate, mfa_factorsRelationsInputCreate],
  { additionalProperties: false },
);

export const mfa_factorsInputUpdate = t.Composite(
  [mfa_factorsPlainInputUpdate, mfa_factorsRelationsInputUpdate],
  { additionalProperties: false },
);
