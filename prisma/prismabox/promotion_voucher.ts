import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_voucherPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    voucher_id: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const promotion_voucherRelations = t.Object(
  {
    promotion: __nullable__(
      t.Object(
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

export const promotion_voucherPlainInputCreate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const promotion_voucherPlainInputUpdate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const promotion_voucherRelationsInputCreate = t.Object(
  {
    promotion: t.Optional(
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

export const promotion_voucherRelationsInputUpdate = t.Partial(
  t.Object(
    {
      promotion: t.Partial(
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

export const promotion_voucherWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          voucher_id: t.Integer(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "promotion_voucher" },
  ),
);

export const promotion_voucherWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
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
              promotion_id: t.Integer(),
              voucher_id: t.Integer(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_voucher" },
);

export const promotion_voucherSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      voucher_id: t.Boolean(),
      created_at: t.Boolean(),
      promotion: t.Boolean(),
      voucher: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const promotion_voucherInclude = t.Partial(
  t.Object(
    { promotion: t.Boolean(), voucher: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const promotion_voucherOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const promotion_voucher = t.Composite(
  [promotion_voucherPlain, promotion_voucherRelations],
  { additionalProperties: false },
);

export const promotion_voucherInputCreate = t.Composite(
  [promotion_voucherPlainInputCreate, promotion_voucherRelationsInputCreate],
  { additionalProperties: false },
);

export const promotion_voucherInputUpdate = t.Composite(
  [promotion_voucherPlainInputUpdate, promotion_voucherRelationsInputUpdate],
  { additionalProperties: false },
);
