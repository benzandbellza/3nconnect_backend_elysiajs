import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_customer_informationPlain = t.Object(
  {
    user_id: __nullable__(t.String()),
    auth_id: __nullable__(t.String()),
    member_no: __nullable__(t.String()),
    gender: __nullable__(t.String()),
    prefix_th: __nullable__(t.String()),
    fullname_th: __nullable__(t.String()),
    email: __nullable__(t.String()),
    phone_no: __nullable__(t.String()),
    birthday: __nullable__(t.Date()),
    pdpa_accepted: __nullable__(t.Boolean()),
    pdpa_version: __nullable__(t.String()),
    tier: __nullable__(t.String()),
    tier_start_at: __nullable__(t.Date()),
    tier_expired_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const vw_customer_informationRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_customer_informationPlainInputCreate = t.Object(
  {
    member_no: t.Optional(__nullable__(t.String())),
    gender: t.Optional(__nullable__(t.String())),
    prefix_th: t.Optional(__nullable__(t.String())),
    fullname_th: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    phone_no: t.Optional(__nullable__(t.String())),
    birthday: t.Optional(__nullable__(t.Date())),
    pdpa_accepted: t.Optional(__nullable__(t.Boolean())),
    pdpa_version: t.Optional(__nullable__(t.String())),
    tier: t.Optional(__nullable__(t.String())),
    tier_start_at: t.Optional(__nullable__(t.Date())),
    tier_expired_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_customer_informationPlainInputUpdate = t.Object(
  {
    member_no: t.Optional(__nullable__(t.String())),
    gender: t.Optional(__nullable__(t.String())),
    prefix_th: t.Optional(__nullable__(t.String())),
    fullname_th: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    phone_no: t.Optional(__nullable__(t.String())),
    birthday: t.Optional(__nullable__(t.Date())),
    pdpa_accepted: t.Optional(__nullable__(t.Boolean())),
    pdpa_version: t.Optional(__nullable__(t.String())),
    tier: t.Optional(__nullable__(t.String())),
    tier_start_at: t.Optional(__nullable__(t.Date())),
    tier_expired_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const vw_customer_informationRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_customer_informationRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_customer_informationWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          user_id: t.String(),
          auth_id: t.String(),
          member_no: t.String(),
          gender: t.String(),
          prefix_th: t.String(),
          fullname_th: t.String(),
          email: t.String(),
          phone_no: t.String(),
          birthday: t.Date(),
          pdpa_accepted: t.Boolean(),
          pdpa_version: t.String(),
          tier: t.String(),
          tier_start_at: t.Date(),
          tier_expired_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_customer_information" },
  ),
);

export const vw_customer_informationWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(t.Object({}, { additionalProperties: false }), {
          additionalProperties: false,
        }),
        t.Union([], { additionalProperties: false }),
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
              user_id: t.String(),
              auth_id: t.String(),
              member_no: t.String(),
              gender: t.String(),
              prefix_th: t.String(),
              fullname_th: t.String(),
              email: t.String(),
              phone_no: t.String(),
              birthday: t.Date(),
              pdpa_accepted: t.Boolean(),
              pdpa_version: t.String(),
              tier: t.String(),
              tier_start_at: t.Date(),
              tier_expired_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_customer_information" },
);

export const vw_customer_informationSelect = t.Partial(
  t.Object(
    {
      user_id: t.Boolean(),
      auth_id: t.Boolean(),
      member_no: t.Boolean(),
      gender: t.Boolean(),
      prefix_th: t.Boolean(),
      fullname_th: t.Boolean(),
      email: t.Boolean(),
      phone_no: t.Boolean(),
      birthday: t.Boolean(),
      pdpa_accepted: t.Boolean(),
      pdpa_version: t.Boolean(),
      tier: t.Boolean(),
      tier_start_at: t.Boolean(),
      tier_expired_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_customer_informationInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_customer_informationOrderBy = t.Partial(
  t.Object(
    {
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      auth_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      member_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gender: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prefix_th: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      fullname_th: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      birthday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdpa_accepted: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pdpa_version: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier_start_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier_expired_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_customer_information = t.Composite(
  [vw_customer_informationPlain, vw_customer_informationRelations],
  { additionalProperties: false },
);

export const vw_customer_informationInputCreate = t.Composite(
  [
    vw_customer_informationPlainInputCreate,
    vw_customer_informationRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_customer_informationInputUpdate = t.Composite(
  [
    vw_customer_informationPlainInputUpdate,
    vw_customer_informationRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
