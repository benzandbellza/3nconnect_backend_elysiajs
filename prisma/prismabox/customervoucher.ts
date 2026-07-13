import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customervoucherPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    customer_id: __nullable__(t.String()),
    voucher_id: __nullable__(t.Integer()),
    used: __nullable__(t.Boolean()),
    exp: __nullable__(t.Date()),
    use_detail: __nullable__(t.String()),
    used_at: __nullable__(t.Date()),
    voucherid: t.String(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customervoucherRelations = t.Object(
  {
    customeruser: __nullable__(
      t.Object(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customervoucherPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    used: t.Optional(__nullable__(t.Boolean())),
    exp: t.Optional(__nullable__(t.Date())),
    use_detail: t.Optional(__nullable__(t.String())),
    used_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customervoucherPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    used: t.Optional(__nullable__(t.Boolean())),
    exp: t.Optional(__nullable__(t.Date())),
    use_detail: t.Optional(__nullable__(t.String())),
    used_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customervoucherRelationsInputCreate = t.Object(
  {
    customeruser: t.Optional(
      t.Object(
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
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customervoucherRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customeruser: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
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
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customervoucherWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          customer_id: t.String(),
          voucher_id: t.Integer(),
          used: t.Boolean(),
          exp: t.Date(),
          use_detail: t.String(),
          used_at: t.Date(),
          voucherid: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customervoucher" },
  ),
);

export const customervoucherWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { voucherid: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ voucherid: t.String() })], {
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
              id: t.Integer(),
              created_at: t.Date(),
              customer_id: t.String(),
              voucher_id: t.Integer(),
              used: t.Boolean(),
              exp: t.Date(),
              use_detail: t.String(),
              used_at: t.Date(),
              voucherid: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customervoucher" },
);

export const customervoucherSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      customer_id: t.Boolean(),
      voucher_id: t.Boolean(),
      used: t.Boolean(),
      exp: t.Boolean(),
      use_detail: t.Boolean(),
      used_at: t.Boolean(),
      voucherid: t.Boolean(),
      customeruser: t.Boolean(),
      voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customervoucherInclude = t.Partial(
  t.Object(
    { customeruser: t.Boolean(), voucher: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customervoucherOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      used: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      exp: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      use_detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      used_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucherid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customervoucher = t.Composite(
  [customervoucherPlain, customervoucherRelations],
  { additionalProperties: false },
);

export const customervoucherInputCreate = t.Composite(
  [customervoucherPlainInputCreate, customervoucherRelationsInputCreate],
  { additionalProperties: false },
);

export const customervoucherInputUpdate = t.Composite(
  [customervoucherPlainInputUpdate, customervoucherRelationsInputUpdate],
  { additionalProperties: false },
);
