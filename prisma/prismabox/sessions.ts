import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sessionsPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    factor_id: __nullable__(t.String()),
    aal: __nullable__(
      t.Union([t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")], {
        additionalProperties: false,
      }),
    ),
    not_after: __nullable__(t.Date()),
    refreshed_at: __nullable__(t.Date()),
    user_agent: __nullable__(t.String()),
    ip: __nullable__(t.String()),
    tag: __nullable__(t.String()),
    oauth_client_id: __nullable__(t.String()),
    refresh_token_hmac_key: __nullable__(t.String()),
    refresh_token_counter: __nullable__(t.Integer()),
    scopes: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sessionsRelations = t.Object(
  {
    mfa_amr_claims: t.Array(
      t.Object(
        {
          session_id: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          authentication_method: t.String(),
          id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    refresh_tokens: t.Array(
      t.Object(
        {
          instance_id: __nullable__(t.String()),
          id: t.Integer(),
          token: __nullable__(t.String()),
          user_id: __nullable__(t.String()),
          revoked: __nullable__(t.Boolean()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          parent: __nullable__(t.String()),
          session_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    oauth_clients: __nullable__(
      t.Object(
        {
          id: t.String(),
          client_secret_hash: __nullable__(t.String()),
          registration_type: t.Union(
            [t.Literal("dynamic"), t.Literal("manual")],
            { additionalProperties: false },
          ),
          redirect_uris: t.String(),
          grant_types: t.String(),
          client_name: __nullable__(t.String()),
          client_uri: __nullable__(t.String()),
          logo_uri: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: t.Date(),
          deleted_at: __nullable__(t.Date()),
          client_type: t.Union(
            [t.Literal("public"), t.Literal("confidential")],
            { additionalProperties: false },
          ),
          token_endpoint_auth_method: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sessionsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    aal: t.Optional(
      __nullable__(
        t.Union([t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")], {
          additionalProperties: false,
        }),
      ),
    ),
    not_after: t.Optional(__nullable__(t.Date())),
    refreshed_at: t.Optional(__nullable__(t.Date())),
    user_agent: t.Optional(__nullable__(t.String())),
    ip: t.Optional(__nullable__(t.String())),
    tag: t.Optional(__nullable__(t.String())),
    refresh_token_hmac_key: t.Optional(__nullable__(t.String())),
    refresh_token_counter: t.Optional(__nullable__(t.Integer())),
    scopes: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sessionsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    aal: t.Optional(
      __nullable__(
        t.Union([t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")], {
          additionalProperties: false,
        }),
      ),
    ),
    not_after: t.Optional(__nullable__(t.Date())),
    refreshed_at: t.Optional(__nullable__(t.Date())),
    user_agent: t.Optional(__nullable__(t.String())),
    ip: t.Optional(__nullable__(t.String())),
    tag: t.Optional(__nullable__(t.String())),
    refresh_token_hmac_key: t.Optional(__nullable__(t.String())),
    refresh_token_counter: t.Optional(__nullable__(t.Integer())),
    scopes: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sessionsRelationsInputCreate = t.Object(
  {
    mfa_amr_claims: t.Optional(
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
    refresh_tokens: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    oauth_clients: t.Optional(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const sessionsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      mfa_amr_claims: t.Partial(
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
      refresh_tokens: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      oauth_clients: t.Partial(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sessionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          factor_id: t.String(),
          aal: t.Union(
            [t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")],
            { additionalProperties: false },
          ),
          not_after: t.Date(),
          refreshed_at: t.Date(),
          user_agent: t.String(),
          ip: t.String(),
          tag: t.String(),
          oauth_client_id: t.String(),
          refresh_token_hmac_key: t.String(),
          refresh_token_counter: t.Integer(),
          scopes: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "sessions" },
  ),
);

export const sessionsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
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
              user_id: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              factor_id: t.String(),
              aal: t.Union(
                [t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")],
                { additionalProperties: false },
              ),
              not_after: t.Date(),
              refreshed_at: t.Date(),
              user_agent: t.String(),
              ip: t.String(),
              tag: t.String(),
              oauth_client_id: t.String(),
              refresh_token_hmac_key: t.String(),
              refresh_token_counter: t.Integer(),
              scopes: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sessions" },
);

export const sessionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      factor_id: t.Boolean(),
      aal: t.Boolean(),
      not_after: t.Boolean(),
      refreshed_at: t.Boolean(),
      user_agent: t.Boolean(),
      ip: t.Boolean(),
      tag: t.Boolean(),
      oauth_client_id: t.Boolean(),
      refresh_token_hmac_key: t.Boolean(),
      refresh_token_counter: t.Boolean(),
      scopes: t.Boolean(),
      mfa_amr_claims: t.Boolean(),
      refresh_tokens: t.Boolean(),
      oauth_clients: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sessionsInclude = t.Partial(
  t.Object(
    {
      aal: t.Boolean(),
      mfa_amr_claims: t.Boolean(),
      refresh_tokens: t.Boolean(),
      oauth_clients: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sessionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      factor_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      not_after: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refreshed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_agent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ip: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tag: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      oauth_client_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refresh_token_hmac_key: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      refresh_token_counter: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      scopes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const sessions = t.Composite([sessionsPlain, sessionsRelations], {
  additionalProperties: false,
});

export const sessionsInputCreate = t.Composite(
  [sessionsPlainInputCreate, sessionsRelationsInputCreate],
  { additionalProperties: false },
);

export const sessionsInputUpdate = t.Composite(
  [sessionsPlainInputUpdate, sessionsRelationsInputUpdate],
  { additionalProperties: false },
);
