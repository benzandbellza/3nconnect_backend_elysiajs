import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const one_time_tokensPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    token_type: t.Union(
      [
        t.Literal("confirmation_token"),
        t.Literal("reauthentication_token"),
        t.Literal("recovery_token"),
        t.Literal("email_change_token_new"),
        t.Literal("email_change_token_current"),
        t.Literal("phone_change_token"),
      ],
      { additionalProperties: false },
    ),
    token_hash: t.String(),
    relates_to: t.String(),
    created_at: t.Date(),
    updated_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const one_time_tokensRelations = t.Object(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const one_time_tokensPlainInputCreate = t.Object(
  {
    token_type: t.Union(
      [
        t.Literal("confirmation_token"),
        t.Literal("reauthentication_token"),
        t.Literal("recovery_token"),
        t.Literal("email_change_token_new"),
        t.Literal("email_change_token_current"),
        t.Literal("phone_change_token"),
      ],
      { additionalProperties: false },
    ),
    token_hash: t.String(),
    relates_to: t.String(),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const one_time_tokensPlainInputUpdate = t.Object(
  {
    token_type: t.Optional(
      t.Union(
        [
          t.Literal("confirmation_token"),
          t.Literal("reauthentication_token"),
          t.Literal("recovery_token"),
          t.Literal("email_change_token_new"),
          t.Literal("email_change_token_current"),
          t.Literal("phone_change_token"),
        ],
        { additionalProperties: false },
      ),
    ),
    token_hash: t.Optional(t.String()),
    relates_to: t.Optional(t.String()),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const one_time_tokensRelationsInputCreate = t.Object(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const one_time_tokensRelationsInputUpdate = t.Partial(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const one_time_tokensWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          token_type: t.Union(
            [
              t.Literal("confirmation_token"),
              t.Literal("reauthentication_token"),
              t.Literal("recovery_token"),
              t.Literal("email_change_token_new"),
              t.Literal("email_change_token_current"),
              t.Literal("phone_change_token"),
            ],
            { additionalProperties: false },
          ),
          token_hash: t.String(),
          relates_to: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "one_time_tokens" },
  ),
);

export const one_time_tokensWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              user_id_token_type: t.Object(
                {
                  user_id: t.String(),
                  token_type: t.Union(
                    [
                      t.Literal("confirmation_token"),
                      t.Literal("reauthentication_token"),
                      t.Literal("recovery_token"),
                      t.Literal("email_change_token_new"),
                      t.Literal("email_change_token_current"),
                      t.Literal("phone_change_token"),
                    ],
                    { additionalProperties: false },
                  ),
                },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({
              user_id_token_type: t.Object(
                {
                  user_id: t.String(),
                  token_type: t.Union(
                    [
                      t.Literal("confirmation_token"),
                      t.Literal("reauthentication_token"),
                      t.Literal("recovery_token"),
                      t.Literal("email_change_token_new"),
                      t.Literal("email_change_token_current"),
                      t.Literal("phone_change_token"),
                    ],
                    { additionalProperties: false },
                  ),
                },
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
              token_type: t.Union(
                [
                  t.Literal("confirmation_token"),
                  t.Literal("reauthentication_token"),
                  t.Literal("recovery_token"),
                  t.Literal("email_change_token_new"),
                  t.Literal("email_change_token_current"),
                  t.Literal("phone_change_token"),
                ],
                { additionalProperties: false },
              ),
              token_hash: t.String(),
              relates_to: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "one_time_tokens" },
);

export const one_time_tokensSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      token_type: t.Boolean(),
      token_hash: t.Boolean(),
      relates_to: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const one_time_tokensInclude = t.Partial(
  t.Object(
    { token_type: t.Boolean(), users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const one_time_tokensOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      token_hash: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      relates_to: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const one_time_tokens = t.Composite(
  [one_time_tokensPlain, one_time_tokensRelations],
  { additionalProperties: false },
);

export const one_time_tokensInputCreate = t.Composite(
  [one_time_tokensPlainInputCreate, one_time_tokensRelationsInputCreate],
  { additionalProperties: false },
);

export const one_time_tokensInputUpdate = t.Composite(
  [one_time_tokensPlainInputUpdate, one_time_tokensRelationsInputUpdate],
  { additionalProperties: false },
);
