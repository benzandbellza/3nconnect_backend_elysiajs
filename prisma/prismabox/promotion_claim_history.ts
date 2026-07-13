import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_claim_historyPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: t.Integer(),
    user_id: t.String(),
    claimed_at: __nullable__(t.Date()),
    points_awarded: t.Integer(),
    voucher_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const promotion_claim_historyRelations = t.Object(
  {
    promotion: t.Object(
      {
        id: t.Integer(),
        created_at: t.Date(),
        proname: __nullable__(t.String()),
        startdate: __nullable__(t.Date()),
        enddate: __nullable__(t.Date()),
        filelink: __nullable__(t.String()),
        banner: __nullable__(t.String()),
        description: __nullable__(t.String()),
        type: __nullable__(t.String()),
        points_reward: __nullable__(t.Number()),
        max_claims: __nullable__(t.Integer()),
        current_claims: __nullable__(t.Integer()),
        voucher_id: __nullable__(t.Integer()),
        location_lat: __nullable__(t.Number()),
        location_lng: __nullable__(t.Number()),
        location_radius_m: __nullable__(t.Integer()),
        location_name: __nullable__(t.String()),
        conditions: __nullable__(t.String()),
        per_person_limit: __nullable__(t.Integer()),
        subtype: __nullable__(t.String()),
        status: __nullable__(t.Boolean()),
        sort_order: __nullable__(t.Integer()),
      },
      {
        additionalProperties: false,
        description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
    customeruser: t.Object(
      {
        id: t.String(),
        authid: __nullable__(t.String()),
        member_id: __nullable__(t.String()),
        created_at: t.Date(),
        prefix: __nullable__(t.String()),
        namesurname: __nullable__(t.String()),
        email: __nullable__(t.String()),
        tel: __nullable__(t.String()),
        pdpa_accepted: __nullable__(t.Boolean()),
        pdpa_accepted_at: __nullable__(t.Date()),
        pdpa_version: __nullable__(t.String()),
        gender: __nullable__(t.String()),
        birthday: __nullable__(t.Date()),
        home_address_line1: __nullable__(t.String()),
        home_address_line2: __nullable__(t.String()),
        home_sub_district: __nullable__(t.String()),
        home_district: __nullable__(t.String()),
        home_province: __nullable__(t.String()),
        home_postal_code: __nullable__(t.String()),
        w1_address_line1: __nullable__(t.String()),
        w1_address_line2: __nullable__(t.String()),
        w1_sub_district: __nullable__(t.String()),
        w1_district: __nullable__(t.String()),
        w1_province: __nullable__(t.String()),
        w1_postal_code: __nullable__(t.String()),
        position: __nullable__(t.String()),
        w1_name: __nullable__(t.String()),
        status: __nullable__(t.String()),
        note: __nullable__(t.String()),
        Preferred_Contact_Channel: __nullable__(t.String()),
        fcm_token: __nullable__(t.String()),
        avatar_url: __nullable__(t.String()),
        line_id: __nullable__(t.String()),
        is_online: __nullable__(t.Boolean()),
        last_online: __nullable__(t.String()),
        picprofile: __nullable__(t.String()),
        wtel: __nullable__(t.String()),
        gibthailink: __nullable__(t.Any()),
        biodesignlink: __nullable__(t.Any()),
        lableaderlink: __nullable__(t.Any()),
        aeclink: __nullable__(t.Any()),
        doctorcallink: __nullable__(t.Any()),
        miclink: __nullable__(t.Any()),
        log: __nullable__(t.String()),
        department: __nullable__(t.String()),
        knowform: __nullable__(t.String()),
        referred_by: __nullable__(t.String()),
        uninstalled_at: __nullable__(t.Date()),
        line_user_id: __nullable__(t.String()),
        facebook_psid: __nullable__(t.String()),
        source: __nullable__(t.String()),
        tel2: __nullable__(t.String()),
      },
      { additionalProperties: false },
    ),
    voucher: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          detail: __nullable__(t.String()),
          pic: __nullable__(t.String()),
          condition: __nullable__(t.String()),
          tier: __nullable__(t.String()),
          voucherpic: __nullable__(t.String()),
          type: t.String(),
          discount_value: t.Number(),
          max_discount: __nullable__(t.Number()),
          min_order: __nullable__(t.Number()),
          combinable: t.Boolean(),
          status: t.Boolean(),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          discount_type: __nullable__(t.String()),
          usage_limit: __nullable__(t.String()),
          redemption_method: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  { additionalProperties: false },
);

export const promotion_claim_historyPlainInputCreate = t.Object(
  {
    claimed_at: t.Optional(__nullable__(t.Date())),
    points_awarded: t.Integer(),
  },
  { additionalProperties: false },
);

export const promotion_claim_historyPlainInputUpdate = t.Object(
  {
    claimed_at: t.Optional(__nullable__(t.Date())),
    points_awarded: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const promotion_claim_historyRelationsInputCreate = t.Object(
  {
    promotion: t.Object(
      {
        connect: t.Object(
          {
            id: t.Integer({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    customeruser: t.Object(
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
    voucher: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const promotion_claim_historyRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion: t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      customeruser: t.Object(
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
      voucher: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const promotion_claim_historyWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          user_id: t.String(),
          claimed_at: t.Date(),
          points_awarded: t.Integer(),
          voucher_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "promotion_claim_history" },
  ),
);

export const promotion_claim_historyWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              promotion_id_user_id: t.Object(
                { promotion_id: t.Integer(), user_id: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              promotion_id_user_id: t.Object(
                { promotion_id: t.Integer(), user_id: t.String() },
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
              promotion_id: t.Integer(),
              user_id: t.String(),
              claimed_at: t.Date(),
              points_awarded: t.Integer(),
              voucher_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_claim_history" },
);

export const promotion_claim_historySelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      user_id: t.Boolean(),
      claimed_at: t.Boolean(),
      points_awarded: t.Boolean(),
      voucher_id: t.Boolean(),
      promotion: t.Boolean(),
      customeruser: t.Boolean(),
      voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_claim_historyInclude = t.Partial(
  t.Object(
    {
      promotion: t.Boolean(),
      customeruser: t.Boolean(),
      voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_claim_historyOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      claimed_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_awarded: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const promotion_claim_history = t.Composite(
  [promotion_claim_historyPlain, promotion_claim_historyRelations],
  { additionalProperties: false },
);

export const promotion_claim_historyInputCreate = t.Composite(
  [
    promotion_claim_historyPlainInputCreate,
    promotion_claim_historyRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_claim_historyInputUpdate = t.Composite(
  [
    promotion_claim_historyPlainInputUpdate,
    promotion_claim_historyRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
