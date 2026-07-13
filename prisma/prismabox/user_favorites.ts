import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const user_favoritesPlain = t.Object(
  {
    id: t.Integer(),
    user_id: t.String(),
    product_id: t.Integer(),
    created_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_favoritesRelations = t.Object(
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
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_favoritesPlainInputCreate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_favoritesPlainInputUpdate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_favoritesRelationsInputCreate = t.Object(
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
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_favoritesRelationsInputUpdate = t.Partial(
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
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_favoritesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          user_id: t.String(),
          product_id: t.Integer(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "user_favorites" },
  ),
);

export const user_favoritesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              user_id_product_id: t.Object(
                { user_id: t.String(), product_id: t.Integer() },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              user_id_product_id: t.Object(
                { user_id: t.String(), product_id: t.Integer() },
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
              id: t.Integer(),
              user_id: t.String(),
              product_id: t.Integer(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "user_favorites" },
);

export const user_favoritesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      product_id: t.Boolean(),
      created_at: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_favoritesInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_favoritesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_favorites = t.Composite(
  [user_favoritesPlain, user_favoritesRelations],
  { additionalProperties: false },
);

export const user_favoritesInputCreate = t.Composite(
  [user_favoritesPlainInputCreate, user_favoritesRelationsInputCreate],
  { additionalProperties: false },
);

export const user_favoritesInputUpdate = t.Composite(
  [user_favoritesPlainInputUpdate, user_favoritesRelationsInputUpdate],
  { additionalProperties: false },
);
