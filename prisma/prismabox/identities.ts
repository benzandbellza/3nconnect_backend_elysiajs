import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const identitiesPlain = t.Object(
  {
    provider_id: t.String(),
    user_id: t.String(),
    identity_data: t.Any(),
    provider: t.String(),
    last_sign_in_at: __nullable__(t.Date()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    email: __nullable__(t.String()),
    id: t.String(),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const identitiesRelations = t.Object(
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const identitiesPlainInputCreate = t.Object(
  {
    identity_data: t.Any(),
    provider: t.String(),
    last_sign_in_at: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    email: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const identitiesPlainInputUpdate = t.Object(
  {
    identity_data: t.Optional(t.Any()),
    provider: t.Optional(t.String()),
    last_sign_in_at: t.Optional(__nullable__(t.Date())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    email: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const identitiesRelationsInputCreate = t.Object(
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const identitiesRelationsInputUpdate = t.Partial(
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
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const identitiesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          provider_id: t.String(),
          user_id: t.String(),
          identity_data: t.Any(),
          provider: t.String(),
          last_sign_in_at: t.Date(),
          created_at: t.Date(),
          updated_at: t.Date(),
          email: t.String(),
          id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "identities" },
  ),
);

export const identitiesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              provider_id_provider: t.Object(
                { provider_id: t.String(), provider: t.String() },
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
              provider_id_provider: t.Object(
                { provider_id: t.String(), provider: t.String() },
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
              provider_id: t.String(),
              user_id: t.String(),
              identity_data: t.Any(),
              provider: t.String(),
              last_sign_in_at: t.Date(),
              created_at: t.Date(),
              updated_at: t.Date(),
              email: t.String(),
              id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "identities" },
);

export const identitiesSelect = t.Partial(
  t.Object(
    {
      provider_id: t.Boolean(),
      user_id: t.Boolean(),
      identity_data: t.Boolean(),
      provider: t.Boolean(),
      last_sign_in_at: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      email: t.Boolean(),
      id: t.Boolean(),
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

export const identitiesInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const identitiesOrderBy = t.Partial(
  t.Object(
    {
      provider_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      identity_data: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_sign_in_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const identities = t.Composite([identitiesPlain, identitiesRelations], {
  additionalProperties: false,
});

export const identitiesInputCreate = t.Composite(
  [identitiesPlainInputCreate, identitiesRelationsInputCreate],
  { additionalProperties: false },
);

export const identitiesInputUpdate = t.Composite(
  [identitiesPlainInputUpdate, identitiesRelationsInputUpdate],
  { additionalProperties: false },
);
