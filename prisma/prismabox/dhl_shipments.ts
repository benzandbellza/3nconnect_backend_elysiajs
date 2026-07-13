import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const dhl_shipmentsPlain = t.Object(
  {
    id: t.String(),
    created_at: t.Date(),
    created_by: __nullable__(t.String()),
    sx_no: t.String(),
    tracking_number: t.String(),
    consignee_name: t.String(),
    consignee_company: __nullable__(t.String()),
    consignee_address: __nullable__(t.String()),
    consignee_district: __nullable__(t.String()),
    consignee_city: __nullable__(t.String()),
    consignee_state: __nullable__(t.String()),
    consignee_postcode: __nullable__(t.String()),
    consignee_phone: __nullable__(t.String()),
    weight_kg: __nullable__(t.Number()),
    cod_amount: __nullable__(t.Number()),
    packing_items: t.Any(),
    pickup_account_id: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const dhl_shipmentsRelations = t.Object(
  {
    users: __nullable__(
      t.Object(
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
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const dhl_shipmentsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    created_by: t.Optional(__nullable__(t.String())),
    sx_no: t.String(),
    tracking_number: t.String(),
    consignee_name: t.String(),
    consignee_company: t.Optional(__nullable__(t.String())),
    consignee_address: t.Optional(__nullable__(t.String())),
    consignee_district: t.Optional(__nullable__(t.String())),
    consignee_city: t.Optional(__nullable__(t.String())),
    consignee_state: t.Optional(__nullable__(t.String())),
    consignee_postcode: t.Optional(__nullable__(t.String())),
    consignee_phone: t.Optional(__nullable__(t.String())),
    weight_kg: t.Optional(__nullable__(t.Number())),
    cod_amount: t.Optional(__nullable__(t.Number())),
    packing_items: t.Optional(t.Any()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const dhl_shipmentsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    created_by: t.Optional(__nullable__(t.String())),
    sx_no: t.Optional(t.String()),
    tracking_number: t.Optional(t.String()),
    consignee_name: t.Optional(t.String()),
    consignee_company: t.Optional(__nullable__(t.String())),
    consignee_address: t.Optional(__nullable__(t.String())),
    consignee_district: t.Optional(__nullable__(t.String())),
    consignee_city: t.Optional(__nullable__(t.String())),
    consignee_state: t.Optional(__nullable__(t.String())),
    consignee_postcode: t.Optional(__nullable__(t.String())),
    consignee_phone: t.Optional(__nullable__(t.String())),
    weight_kg: t.Optional(__nullable__(t.Number())),
    cod_amount: t.Optional(__nullable__(t.Number())),
    packing_items: t.Optional(t.Any()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const dhl_shipmentsRelationsInputCreate = t.Object(
  {
    users: t.Optional(
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const dhl_shipmentsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      users: t.Partial(
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const dhl_shipmentsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          created_at: t.Date(),
          created_by: t.String(),
          sx_no: t.String(),
          tracking_number: t.String(),
          consignee_name: t.String(),
          consignee_company: t.String(),
          consignee_address: t.String(),
          consignee_district: t.String(),
          consignee_city: t.String(),
          consignee_state: t.String(),
          consignee_postcode: t.String(),
          consignee_phone: t.String(),
          weight_kg: t.Number(),
          cod_amount: t.Number(),
          packing_items: t.Any(),
          pickup_account_id: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "dhl_shipments" },
  ),
);

export const dhl_shipmentsWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              created_by: t.String(),
              sx_no: t.String(),
              tracking_number: t.String(),
              consignee_name: t.String(),
              consignee_company: t.String(),
              consignee_address: t.String(),
              consignee_district: t.String(),
              consignee_city: t.String(),
              consignee_state: t.String(),
              consignee_postcode: t.String(),
              consignee_phone: t.String(),
              weight_kg: t.Number(),
              cod_amount: t.Number(),
              packing_items: t.Any(),
              pickup_account_id: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "dhl_shipments" },
);

export const dhl_shipmentsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      created_by: t.Boolean(),
      sx_no: t.Boolean(),
      tracking_number: t.Boolean(),
      consignee_name: t.Boolean(),
      consignee_company: t.Boolean(),
      consignee_address: t.Boolean(),
      consignee_district: t.Boolean(),
      consignee_city: t.Boolean(),
      consignee_state: t.Boolean(),
      consignee_postcode: t.Boolean(),
      consignee_phone: t.Boolean(),
      weight_kg: t.Boolean(),
      cod_amount: t.Boolean(),
      packing_items: t.Boolean(),
      pickup_account_id: t.Boolean(),
      users: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const dhl_shipmentsInclude = t.Partial(
  t.Object(
    { users: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const dhl_shipmentsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sx_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tracking_number: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_district: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_city: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_state: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_postcode: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      consignee_phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      weight_kg: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cod_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      packing_items: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pickup_account_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const dhl_shipments = t.Composite(
  [dhl_shipmentsPlain, dhl_shipmentsRelations],
  { additionalProperties: false },
);

export const dhl_shipmentsInputCreate = t.Composite(
  [dhl_shipmentsPlainInputCreate, dhl_shipmentsRelationsInputCreate],
  { additionalProperties: false },
);

export const dhl_shipmentsInputUpdate = t.Composite(
  [dhl_shipmentsPlainInputUpdate, dhl_shipmentsRelationsInputUpdate],
  { additionalProperties: false },
);
