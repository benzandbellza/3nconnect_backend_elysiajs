import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const mfa_amr_claimsPlain = t.Object(
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
);

export const mfa_amr_claimsRelations = t.Object(
  {
    sessions: t.Object(
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
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_amr_claimsPlainInputCreate = t.Object(
  {
    created_at: t.Date(),
    updated_at: t.Date(),
    authentication_method: t.String(),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_amr_claimsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
    authentication_method: t.Optional(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_amr_claimsRelationsInputCreate = t.Object(
  {
    sessions: t.Object(
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

export const mfa_amr_claimsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sessions: t.Object(
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

export const mfa_amr_claimsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
    { $id: "mfa_amr_claims" },
  ),
);

export const mfa_amr_claimsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              session_id_authentication_method: t.Object(
                { session_id: t.String(), authentication_method: t.String() },
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
            t.Object({
              session_id_authentication_method: t.Object(
                { session_id: t.String(), authentication_method: t.String() },
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
              session_id: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              authentication_method: t.String(),
              id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "mfa_amr_claims" },
);

export const mfa_amr_claimsSelect = t.Partial(
  t.Object(
    {
      session_id: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      authentication_method: t.Boolean(),
      id: t.Boolean(),
      sessions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_amr_claimsInclude = t.Partial(
  t.Object(
    { sessions: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_amr_claimsOrderBy = t.Partial(
  t.Object(
    {
      session_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const mfa_amr_claims = t.Composite(
  [mfa_amr_claimsPlain, mfa_amr_claimsRelations],
  { additionalProperties: false },
);

export const mfa_amr_claimsInputCreate = t.Composite(
  [mfa_amr_claimsPlainInputCreate, mfa_amr_claimsRelationsInputCreate],
  { additionalProperties: false },
);

export const mfa_amr_claimsInputUpdate = t.Composite(
  [mfa_amr_claimsPlainInputUpdate, mfa_amr_claimsRelationsInputUpdate],
  { additionalProperties: false },
);
