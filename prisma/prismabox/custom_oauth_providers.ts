import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const custom_oauth_providersPlain = t.Object(
  {
    id: t.String(),
    provider_type: t.String(),
    identifier: t.String(),
    name: t.String(),
    client_id: t.String(),
    client_secret: t.String(),
    acceptable_client_ids: t.Array(t.String(), { additionalProperties: false }),
    scopes: t.Array(t.String(), { additionalProperties: false }),
    pkce_enabled: t.Boolean(),
    attribute_mapping: t.Any(),
    authorization_params: t.Any(),
    enabled: t.Boolean(),
    email_optional: t.Boolean(),
    issuer: __nullable__(t.String()),
    discovery_url: __nullable__(t.String()),
    skip_nonce_check: t.Boolean(),
    cached_discovery: __nullable__(t.Any()),
    discovery_cached_at: __nullable__(t.Date()),
    authorization_url: __nullable__(t.String()),
    token_url: __nullable__(t.String()),
    userinfo_url: __nullable__(t.String()),
    jwks_uri: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: t.Date(),
    custom_claims_allowlist: t.Array(t.String(), {
      additionalProperties: false,
    }),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const custom_oauth_providersRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const custom_oauth_providersPlainInputCreate = t.Object(
  {
    provider_type: t.String(),
    identifier: t.String(),
    name: t.String(),
    client_secret: t.String(),
    acceptable_client_ids: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    scopes: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    pkce_enabled: t.Optional(t.Boolean()),
    attribute_mapping: t.Optional(t.Any()),
    authorization_params: t.Optional(t.Any()),
    enabled: t.Optional(t.Boolean()),
    email_optional: t.Optional(t.Boolean()),
    issuer: t.Optional(__nullable__(t.String())),
    discovery_url: t.Optional(__nullable__(t.String())),
    skip_nonce_check: t.Optional(t.Boolean()),
    cached_discovery: t.Optional(__nullable__(t.Any())),
    discovery_cached_at: t.Optional(__nullable__(t.Date())),
    authorization_url: t.Optional(__nullable__(t.String())),
    token_url: t.Optional(__nullable__(t.String())),
    userinfo_url: t.Optional(__nullable__(t.String())),
    jwks_uri: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    custom_claims_allowlist: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const custom_oauth_providersPlainInputUpdate = t.Object(
  {
    provider_type: t.Optional(t.String()),
    identifier: t.Optional(t.String()),
    name: t.Optional(t.String()),
    client_secret: t.Optional(t.String()),
    acceptable_client_ids: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    scopes: t.Optional(t.Array(t.String(), { additionalProperties: false })),
    pkce_enabled: t.Optional(t.Boolean()),
    attribute_mapping: t.Optional(t.Any()),
    authorization_params: t.Optional(t.Any()),
    enabled: t.Optional(t.Boolean()),
    email_optional: t.Optional(t.Boolean()),
    issuer: t.Optional(__nullable__(t.String())),
    discovery_url: t.Optional(__nullable__(t.String())),
    skip_nonce_check: t.Optional(t.Boolean()),
    cached_discovery: t.Optional(__nullable__(t.Any())),
    discovery_cached_at: t.Optional(__nullable__(t.Date())),
    authorization_url: t.Optional(__nullable__(t.String())),
    token_url: t.Optional(__nullable__(t.String())),
    userinfo_url: t.Optional(__nullable__(t.String())),
    jwks_uri: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    custom_claims_allowlist: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const custom_oauth_providersRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const custom_oauth_providersRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const custom_oauth_providersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          provider_type: t.String(),
          identifier: t.String(),
          name: t.String(),
          client_id: t.String(),
          client_secret: t.String(),
          acceptable_client_ids: t.Array(t.String(), {
            additionalProperties: false,
          }),
          scopes: t.Array(t.String(), { additionalProperties: false }),
          pkce_enabled: t.Boolean(),
          attribute_mapping: t.Any(),
          authorization_params: t.Any(),
          enabled: t.Boolean(),
          email_optional: t.Boolean(),
          issuer: t.String(),
          discovery_url: t.String(),
          skip_nonce_check: t.Boolean(),
          cached_discovery: t.Any(),
          discovery_cached_at: t.Date(),
          authorization_url: t.String(),
          token_url: t.String(),
          userinfo_url: t.String(),
          jwks_uri: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          custom_claims_allowlist: t.Array(t.String(), {
            additionalProperties: false,
          }),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
    { $id: "custom_oauth_providers" },
  ),
);

export const custom_oauth_providersWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), identifier: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ identifier: t.String() })],
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
              provider_type: t.String(),
              identifier: t.String(),
              name: t.String(),
              client_id: t.String(),
              client_secret: t.String(),
              acceptable_client_ids: t.Array(t.String(), {
                additionalProperties: false,
              }),
              scopes: t.Array(t.String(), { additionalProperties: false }),
              pkce_enabled: t.Boolean(),
              attribute_mapping: t.Any(),
              authorization_params: t.Any(),
              enabled: t.Boolean(),
              email_optional: t.Boolean(),
              issuer: t.String(),
              discovery_url: t.String(),
              skip_nonce_check: t.Boolean(),
              cached_discovery: t.Any(),
              discovery_cached_at: t.Date(),
              authorization_url: t.String(),
              token_url: t.String(),
              userinfo_url: t.String(),
              jwks_uri: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              custom_claims_allowlist: t.Array(t.String(), {
                additionalProperties: false,
              }),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "custom_oauth_providers" },
);

export const custom_oauth_providersSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      provider_type: t.Boolean(),
      identifier: t.Boolean(),
      name: t.Boolean(),
      client_id: t.Boolean(),
      client_secret: t.Boolean(),
      acceptable_client_ids: t.Boolean(),
      scopes: t.Boolean(),
      pkce_enabled: t.Boolean(),
      attribute_mapping: t.Boolean(),
      authorization_params: t.Boolean(),
      enabled: t.Boolean(),
      email_optional: t.Boolean(),
      issuer: t.Boolean(),
      discovery_url: t.Boolean(),
      skip_nonce_check: t.Boolean(),
      cached_discovery: t.Boolean(),
      discovery_cached_at: t.Boolean(),
      authorization_url: t.Boolean(),
      token_url: t.Boolean(),
      userinfo_url: t.Boolean(),
      jwks_uri: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      custom_claims_allowlist: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const custom_oauth_providersInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const custom_oauth_providersOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      identifier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      client_secret: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      acceptable_client_ids: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      scopes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pkce_enabled: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attribute_mapping: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authorization_params: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      enabled: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_optional: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      issuer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discovery_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      skip_nonce_check: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cached_discovery: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      discovery_cached_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authorization_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userinfo_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      jwks_uri: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      custom_claims_allowlist: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const custom_oauth_providers = t.Composite(
  [custom_oauth_providersPlain, custom_oauth_providersRelations],
  { additionalProperties: false },
);

export const custom_oauth_providersInputCreate = t.Composite(
  [
    custom_oauth_providersPlainInputCreate,
    custom_oauth_providersRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const custom_oauth_providersInputUpdate = t.Composite(
  [
    custom_oauth_providersPlainInputUpdate,
    custom_oauth_providersRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
