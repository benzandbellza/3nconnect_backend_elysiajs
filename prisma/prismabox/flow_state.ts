import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const flow_statePlain = t.Object(
  {
    id: t.String(),
    user_id: __nullable__(t.String()),
    auth_code: __nullable__(t.String()),
    code_challenge_method: __nullable__(
      t.Union([t.Literal("s256"), t.Literal("plain")], {
        additionalProperties: false,
      }),
    ),
    code_challenge: __nullable__(t.String()),
    provider_type: t.String(),
    provider_access_token: __nullable__(t.String()),
    provider_refresh_token: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    authentication_method: t.String(),
    auth_code_issued_at: __nullable__(t.Date()),
    invite_token: __nullable__(t.String()),
    referrer: __nullable__(t.String()),
    oauth_client_state_id: __nullable__(t.String()),
    linking_target_id: __nullable__(t.String()),
    email_optional: t.Boolean(),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const flow_stateRelations = t.Object(
  {
    saml_relay_states: t.Array(
      t.Object(
        {
          id: t.String(),
          sso_provider_id: t.String(),
          request_id: t.String(),
          for_email: __nullable__(t.String()),
          redirect_to: __nullable__(t.String()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
          flow_state_id: __nullable__(t.String()),
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
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const flow_statePlainInputCreate = t.Object(
  {
    auth_code: t.Optional(__nullable__(t.String())),
    code_challenge_method: t.Optional(
      __nullable__(
        t.Union([t.Literal("s256"), t.Literal("plain")], {
          additionalProperties: false,
        }),
      ),
    ),
    code_challenge: t.Optional(__nullable__(t.String())),
    provider_type: t.String(),
    provider_access_token: t.Optional(__nullable__(t.String())),
    provider_refresh_token: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    authentication_method: t.String(),
    auth_code_issued_at: t.Optional(__nullable__(t.Date())),
    invite_token: t.Optional(__nullable__(t.String())),
    referrer: t.Optional(__nullable__(t.String())),
    email_optional: t.Optional(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const flow_statePlainInputUpdate = t.Object(
  {
    auth_code: t.Optional(__nullable__(t.String())),
    code_challenge_method: t.Optional(
      __nullable__(
        t.Union([t.Literal("s256"), t.Literal("plain")], {
          additionalProperties: false,
        }),
      ),
    ),
    code_challenge: t.Optional(__nullable__(t.String())),
    provider_type: t.Optional(t.String()),
    provider_access_token: t.Optional(__nullable__(t.String())),
    provider_refresh_token: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    authentication_method: t.Optional(t.String()),
    auth_code_issued_at: t.Optional(__nullable__(t.Date())),
    invite_token: t.Optional(__nullable__(t.String())),
    referrer: t.Optional(__nullable__(t.String())),
    email_optional: t.Optional(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const flow_stateRelationsInputCreate = t.Object(
  {
    saml_relay_states: t.Optional(
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
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const flow_stateRelationsInputUpdate = t.Partial(
  t.Object(
    {
      saml_relay_states: t.Partial(
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
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const flow_stateWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          auth_code: t.String(),
          code_challenge_method: t.Union(
            [t.Literal("s256"), t.Literal("plain")],
            { additionalProperties: false },
          ),
          code_challenge: t.String(),
          provider_type: t.String(),
          provider_access_token: t.String(),
          provider_refresh_token: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          authentication_method: t.String(),
          auth_code_issued_at: t.Date(),
          invite_token: t.String(),
          referrer: t.String(),
          oauth_client_state_id: t.String(),
          linking_target_id: t.String(),
          email_optional: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "flow_state" },
  ),
);

export const flow_stateWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
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
              auth_code: t.String(),
              code_challenge_method: t.Union(
                [t.Literal("s256"), t.Literal("plain")],
                { additionalProperties: false },
              ),
              code_challenge: t.String(),
              provider_type: t.String(),
              provider_access_token: t.String(),
              provider_refresh_token: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              authentication_method: t.String(),
              auth_code_issued_at: t.Date(),
              invite_token: t.String(),
              referrer: t.String(),
              oauth_client_state_id: t.String(),
              linking_target_id: t.String(),
              email_optional: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "flow_state" },
);

export const flow_stateSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      auth_code: t.Boolean(),
      code_challenge_method: t.Boolean(),
      code_challenge: t.Boolean(),
      provider_type: t.Boolean(),
      provider_access_token: t.Boolean(),
      provider_refresh_token: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      authentication_method: t.Boolean(),
      auth_code_issued_at: t.Boolean(),
      invite_token: t.Boolean(),
      referrer: t.Boolean(),
      oauth_client_state_id: t.Boolean(),
      linking_target_id: t.Boolean(),
      email_optional: t.Boolean(),
      saml_relay_states: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const flow_stateInclude = t.Partial(
  t.Object(
    {
      code_challenge_method: t.Boolean(),
      saml_relay_states: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const flow_stateOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      auth_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      code_challenge: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider_access_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider_refresh_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      authentication_method: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      auth_code_issued_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invite_token: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      referrer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      oauth_client_state_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      linking_target_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email_optional: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const flow_state = t.Composite([flow_statePlain, flow_stateRelations], {
  additionalProperties: false,
});

export const flow_stateInputCreate = t.Composite(
  [flow_statePlainInputCreate, flow_stateRelationsInputCreate],
  { additionalProperties: false },
);

export const flow_stateInputUpdate = t.Composite(
  [flow_statePlainInputUpdate, flow_stateRelationsInputUpdate],
  { additionalProperties: false },
);
