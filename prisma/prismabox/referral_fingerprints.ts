import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const referral_fingerprintsPlain = t.Object(
  {
    id: t.String(),
    ref_code: t.String(),
    ip_address: t.String(),
    created_at: __nullable__(t.Date()),
    expires_at: __nullable__(t.Date()),
    is_claimed: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const referral_fingerprintsRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const referral_fingerprintsPlainInputCreate = t.Object(
  {
    ref_code: t.String(),
    ip_address: t.String(),
    created_at: t.Optional(__nullable__(t.Date())),
    expires_at: t.Optional(__nullable__(t.Date())),
    is_claimed: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const referral_fingerprintsPlainInputUpdate = t.Object(
  {
    ref_code: t.Optional(t.String()),
    ip_address: t.Optional(t.String()),
    created_at: t.Optional(__nullable__(t.Date())),
    expires_at: t.Optional(__nullable__(t.Date())),
    is_claimed: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const referral_fingerprintsRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const referral_fingerprintsRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const referral_fingerprintsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          ref_code: t.String(),
          ip_address: t.String(),
          created_at: t.Date(),
          expires_at: t.Date(),
          is_claimed: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "referral_fingerprints" },
  ),
);

export const referral_fingerprintsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
              ref_code: t.String(),
              ip_address: t.String(),
              created_at: t.Date(),
              expires_at: t.Date(),
              is_claimed: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "referral_fingerprints" },
);

export const referral_fingerprintsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      ref_code: t.Boolean(),
      ip_address: t.Boolean(),
      created_at: t.Boolean(),
      expires_at: t.Boolean(),
      is_claimed: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const referral_fingerprintsInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const referral_fingerprintsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ref_code: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ip_address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expires_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_claimed: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const referral_fingerprints = t.Composite(
  [referral_fingerprintsPlain, referral_fingerprintsRelations],
  { additionalProperties: false },
);

export const referral_fingerprintsInputCreate = t.Composite(
  [
    referral_fingerprintsPlainInputCreate,
    referral_fingerprintsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const referral_fingerprintsInputUpdate = t.Composite(
  [
    referral_fingerprintsPlainInputUpdate,
    referral_fingerprintsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
