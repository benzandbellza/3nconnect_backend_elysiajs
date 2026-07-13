import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_authorizationsPlain = t.Object(
  {
    id: t.String(),
    authorization_id: t.String(),
    client_id: t.String(),
    user_id: __nullable__(t.String()),
    redirect_uri: t.String(),
    scope: t.String(),
    state: __nullable__(t.String()),
    resource: __nullable__(t.String()),
    code_challenge: __nullable__(t.String()),
    code_challenge_method: __nullable__(
      t.Union([t.Literal("s256"), t.Literal("plain")], {
        additionalProperties: false,
      }),
    ),
    response_type: t.Union([t.Literal("code")], {
      additionalProperties: false,
    }),
    status: t.Union(
      [
        t.Literal("pending"),
        t.Literal("approved"),
        t.Literal("denied"),
        t.Literal("expired"),
      ],
      { additionalProperties: false },
    ),
    authorization_code: __nullable__(t.String()),
    created_at: t.Date(),
    expires_at: t.Date(),
    approved_at: __nullable__(t.Date()),
    nonce: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_authorizationsRelations = t.Object(
  {
    oauth_clients: t.Object(
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
        client_type: t.Union([t.Literal("public"), t.Literal("confidential")], {
          additionalProperties: false,
        }),
        token_endpoint_auth_method: t.String(),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
      },
    ),
    users: __nullable__(
      t.Object(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_authorizationsPlainInputCreate = t.Object(
  {
    redirect_uri: t.String(),
    scope: t.String(),
    state: t.Optional(__nullable__(t.String())),
    resource: t.Optional(__nullable__(t.String())),
    code_challenge: t.Optional(__nullable__(t.String())),
    code_challenge_method: t.Optional(
      __nullable__(
        t.Union([t.Literal("s256"), t.Literal("plain")], {
          additionalProperties: false,
        }),
      ),
    ),
    response_type: t.Optional(
      t.Union([t.Literal("code")], { additionalProperties: false }),
    ),
    status: t.Optional(
      t.Union(
        [
          t.Literal("pending"),
          t.Literal("approved"),
          t.Literal("denied"),
          t.Literal("expired"),
        ],
        { additionalProperties: false },
      ),
    ),
    authorization_code: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    expires_at: t.Optional(t.Date()),
    approved_at: t.Optional(__nullable__(t.Date())),
    nonce: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_authorizationsPlainInputUpdate = t.Object(
  {
    redirect_uri: t.Optional(t.String()),
    scope: t.Optional(t.String()),
    state: t.Optional(__nullable__(t.String())),
    resource: t.Optional(__nullable__(t.String())),
    code_challenge: t.Optional(__nullable__(t.String())),
    code_challenge_method: t.Optional(
      __nullable__(
        t.Union([t.Literal("s256"), t.Literal("plain")], {
          additionalProperties: false,
        }),
      ),
    ),
    response_type: t.Optional(
      t.Union([t.Literal("code")], { additionalProperties: false }),
    ),
    status: t.Optional(
      t.Union(
        [
          t.Literal("pending"),
          t.Literal("approved"),
          t.Literal("denied"),
          t.Literal("expired"),
        ],
        { additionalProperties: false },
      ),
    ),
    authorization_code: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    expires_at: t.Optional(t.Date()),
    approved_at: t.Optional(__nullable__(t.Date())),
    nonce: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_authorizationsRelationsInputCreate = t.Object(
  {
    oauth_clients: t.Object(
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
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_authorizationsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      oauth_clients: t.Object(
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
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_authorizationsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          authorization_id: t.String(),
          client_id: t.String(),
          user_id: t.String(),
          redirect_uri: t.String(),
          scope: t.String(),
          state: t.String(),
          resource: t.String(),
          code_challenge: t.String(),
          code_challenge_method: t.Union(
            [t.Literal("s256"), t.Literal("plain")],
            { additionalProperties: false },
          ),
          response_type: t.Union([t.Literal("code")], {
            additionalProperties: false,
          }),
          status: t.Union(
            [
              t.Literal("pending"),
              t.Literal("approved"),
              t.Literal("denied"),
              t.Literal("expired"),
            ],
            { additionalProperties: false },
          ),
          authorization_code: t.String(),
          created_at: t.Date(),
          expires_at: t.Date(),
          approved_at: t.Date(),
          nonce: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
    { $id: "oauth_authorizations" },
  ),
);

export const oauth_authorizationsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              authorization_id: t.String(),
              authorization_code: t.String(),
            },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ authorization_id: t.String() }),
            t.Object({ authorization_code: t.String() }),
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
              authorization_id: t.String(),
              client_id: t.String(),
              user_id: t.String(),
              redirect_uri: t.String(),
              scope: t.String(),
              state: t.String(),
              resource: t.String(),
              code_challenge: t.String(),
              code_challenge_method: t.Union(
                [t.Literal("s256"), t.Literal("plain")],
                { additionalProperties: false },
              ),
              response_type: t.Union([t.Literal("code")], {
                additionalProperties: false,
              }),
              status: t.Union(
                [
                  t.Literal("pending"),
                  t.Literal("approved"),
                  t.Literal("denied"),
                  t.Literal("expired"),
                ],
                { additionalProperties: false },
              ),
              authorization_code: t.String(),
              created_at: t.Date(),
              expires_at: t.Date(),
              approved_at: t.Date(),
              nonce: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "oauth_authorizations" },
);

export const oauth_authorizationsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      authorization_id: t.Boolean(),
      client_id: t.Boolean(),
      user_id: t.Boolean(),
      redirect_uri: t.Boolean(),
      scope: t.Boolean(),
      state: t.Boolean(),
      resource: t.Boolean(),
      code_challenge: t.Boolean(),
      code_challenge_method: t.Boolean(),
      response_type: t.Boolean(),
      status: t.Boolean(),
      authorization_code: t.Boolean(),
      created_at: t.Boolean(),
      expires_at: t.Boolean(),
      approved_at: t.Boolean(),
      nonce: t.Boolean(),
      oauth_clients: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_authorizationsInclude = t.Partial(
  t.Object(
    {
      code_challenge_method: t.Boolean(),
      response_type: t.Boolean(),
      status: t.Boolean(),
      oauth_clients: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_authorizationsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authorization_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redirect_uri: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      scope: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      state: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      resource: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      code_challenge: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authorization_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expires_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      approved_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      nonce: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_authorizations = t.Composite(
  [oauth_authorizationsPlain, oauth_authorizationsRelations],
  { additionalProperties: false },
);

export const oauth_authorizationsInputCreate = t.Composite(
  [
    oauth_authorizationsPlainInputCreate,
    oauth_authorizationsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const oauth_authorizationsInputUpdate = t.Composite(
  [
    oauth_authorizationsPlainInputUpdate,
    oauth_authorizationsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
