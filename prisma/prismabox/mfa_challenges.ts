import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const mfa_challengesPlain = t.Object(
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
);

export const mfa_challengesRelations = t.Object(
  {
    mfa_factors: t.Object(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_challengesPlainInputCreate = t.Object(
  {
    created_at: t.Date(),
    verified_at: t.Optional(__nullable__(t.Date())),
    ip_address: t.String(),
    otp_code: t.Optional(__nullable__(t.String())),
    web_authn_session_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_challengesPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    verified_at: t.Optional(__nullable__(t.Date())),
    ip_address: t.Optional(t.String()),
    otp_code: t.Optional(__nullable__(t.String())),
    web_authn_session_data: t.Optional(__nullable__(t.Any())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const mfa_challengesRelationsInputCreate = t.Object(
  {
    mfa_factors: t.Object(
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

export const mfa_challengesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      mfa_factors: t.Object(
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

export const mfa_challengesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          factor_id: t.String(),
          created_at: t.Date(),
          verified_at: t.Date(),
          ip_address: t.String(),
          otp_code: t.String(),
          web_authn_session_data: t.Any(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "mfa_challenges" },
  ),
);

export const mfa_challengesWhereUnique = t.Recursive(
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
              factor_id: t.String(),
              created_at: t.Date(),
              verified_at: t.Date(),
              ip_address: t.String(),
              otp_code: t.String(),
              web_authn_session_data: t.Any(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "mfa_challenges" },
);

export const mfa_challengesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      factor_id: t.Boolean(),
      created_at: t.Boolean(),
      verified_at: t.Boolean(),
      ip_address: t.Boolean(),
      otp_code: t.Boolean(),
      web_authn_session_data: t.Boolean(),
      mfa_factors: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_challengesInclude = t.Partial(
  t.Object(
    { mfa_factors: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const mfa_challengesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      factor_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      verified_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ip_address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      otp_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      web_authn_session_data: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const mfa_challenges = t.Composite(
  [mfa_challengesPlain, mfa_challengesRelations],
  { additionalProperties: false },
);

export const mfa_challengesInputCreate = t.Composite(
  [mfa_challengesPlainInputCreate, mfa_challengesRelationsInputCreate],
  { additionalProperties: false },
);

export const mfa_challengesInputUpdate = t.Composite(
  [mfa_challengesPlainInputUpdate, mfa_challengesRelationsInputUpdate],
  { additionalProperties: false },
);
