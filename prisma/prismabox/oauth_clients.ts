import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_clientsPlain = t.Object(
  {
    id: t.String(),
    client_secret_hash: __nullable__(t.String()),
    registration_type: t.Union([t.Literal("dynamic"), t.Literal("manual")], {
      additionalProperties: false,
    }),
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
);

export const oauth_clientsRelations = t.Object(
  {
    oauth_authorizations: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    oauth_consents: t.Array(
      t.Object(
        {
          id: t.String(),
          user_id: t.String(),
          client_id: t.String(),
          scopes: t.String(),
          granted_at: t.Date(),
          revoked_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    sessions: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_clientsPlainInputCreate = t.Object(
  {
    client_secret_hash: t.Optional(__nullable__(t.String())),
    registration_type: t.Union([t.Literal("dynamic"), t.Literal("manual")], {
      additionalProperties: false,
    }),
    redirect_uris: t.String(),
    grant_types: t.String(),
    client_name: t.Optional(__nullable__(t.String())),
    client_uri: t.Optional(__nullable__(t.String())),
    logo_uri: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    deleted_at: t.Optional(__nullable__(t.Date())),
    client_type: t.Optional(
      t.Union([t.Literal("public"), t.Literal("confidential")], {
        additionalProperties: false,
      }),
    ),
    token_endpoint_auth_method: t.String(),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_clientsPlainInputUpdate = t.Object(
  {
    client_secret_hash: t.Optional(__nullable__(t.String())),
    registration_type: t.Optional(
      t.Union([t.Literal("dynamic"), t.Literal("manual")], {
        additionalProperties: false,
      }),
    ),
    redirect_uris: t.Optional(t.String()),
    grant_types: t.Optional(t.String()),
    client_name: t.Optional(__nullable__(t.String())),
    client_uri: t.Optional(__nullable__(t.String())),
    logo_uri: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    deleted_at: t.Optional(__nullable__(t.Date())),
    client_type: t.Optional(
      t.Union([t.Literal("public"), t.Literal("confidential")], {
        additionalProperties: false,
      }),
    ),
    token_endpoint_auth_method: t.Optional(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_clientsRelationsInputCreate = t.Object(
  {
    oauth_authorizations: t.Optional(
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
    oauth_consents: t.Optional(
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
    sessions: t.Optional(
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
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const oauth_clientsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      oauth_authorizations: t.Partial(
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
      oauth_consents: t.Partial(
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
      sessions: t.Partial(
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
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_clientsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          client_secret_hash: t.String(),
          registration_type: t.Union(
            [t.Literal("dynamic"), t.Literal("manual")],
            { additionalProperties: false },
          ),
          redirect_uris: t.String(),
          grant_types: t.String(),
          client_name: t.String(),
          client_uri: t.String(),
          logo_uri: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          deleted_at: t.Date(),
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
    { $id: "oauth_clients" },
  ),
);

export const oauth_clientsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
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
              client_secret_hash: t.String(),
              registration_type: t.Union(
                [t.Literal("dynamic"), t.Literal("manual")],
                { additionalProperties: false },
              ),
              redirect_uris: t.String(),
              grant_types: t.String(),
              client_name: t.String(),
              client_uri: t.String(),
              logo_uri: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              deleted_at: t.Date(),
              client_type: t.Union(
                [t.Literal("public"), t.Literal("confidential")],
                { additionalProperties: false },
              ),
              token_endpoint_auth_method: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "oauth_clients" },
);

export const oauth_clientsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      client_secret_hash: t.Boolean(),
      registration_type: t.Boolean(),
      redirect_uris: t.Boolean(),
      grant_types: t.Boolean(),
      client_name: t.Boolean(),
      client_uri: t.Boolean(),
      logo_uri: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      deleted_at: t.Boolean(),
      client_type: t.Boolean(),
      token_endpoint_auth_method: t.Boolean(),
      oauth_authorizations: t.Boolean(),
      oauth_consents: t.Boolean(),
      sessions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_clientsInclude = t.Partial(
  t.Object(
    {
      registration_type: t.Boolean(),
      client_type: t.Boolean(),
      oauth_authorizations: t.Boolean(),
      oauth_consents: t.Boolean(),
      sessions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_clientsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_secret_hash: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      redirect_uris: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      grant_types: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_uri: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      logo_uri: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      deleted_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token_endpoint_auth_method: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const oauth_clients = t.Composite(
  [oauth_clientsPlain, oauth_clientsRelations],
  { additionalProperties: false },
);

export const oauth_clientsInputCreate = t.Composite(
  [oauth_clientsPlainInputCreate, oauth_clientsRelationsInputCreate],
  { additionalProperties: false },
);

export const oauth_clientsInputUpdate = t.Composite(
  [oauth_clientsPlainInputUpdate, oauth_clientsRelationsInputUpdate],
  { additionalProperties: false },
);
