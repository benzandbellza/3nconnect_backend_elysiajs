import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_segmentPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    description: __nullable__(t.String()),
    conditions: t.Any(),
    member_count: t.Integer(),
    created_by: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_segmentRelations = t.Object(
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
    customernoti: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          title: t.String(),
          message: __nullable__(t.String()),
          senddate: t.Date(),
          tier: __nullable__(t.String()),
          status: __nullable__(t.String()),
          sent_at: __nullable__(t.Date()),
          navigation: __nullable__(t.String()),
          age_range: __nullable__(t.String()),
          province: __nullable__(t.String()),
          specific_name: __nullable__(t.String()),
          send_on_birthday: __nullable__(t.Boolean()),
          weblink: __nullable__(t.String()),
          image: __nullable__(t.String()),
          voucher_id: __nullable__(t.Integer()),
          target_type: __nullable__(t.String()),
          target_auth_ids: t.Array(t.String(), { additionalProperties: false }),
          sent_count: __nullable__(t.Integer()),
          target_promotion_id: __nullable__(t.Integer()),
          target_event_id: __nullable__(t.String()),
          target_seminar_dwid: __nullable__(t.String()),
          target_seminar_company: __nullable__(t.String()),
          send_channels: t.Array(t.String(), { additionalProperties: false }),
          segment_id: __nullable__(t.String()),
          target_customer_group_id: __nullable__(t.String()),
          targeting_logic: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    popup_image: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          image_url: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          start: __nullable__(t.Date()),
          end: __nullable__(t.Date()),
          tier: __nullable__(t.String()),
          promotion_id: __nullable__(t.Integer()),
          target_event_id: __nullable__(t.String()),
          target_seminar_dwid: __nullable__(t.String()),
          target_seminar_company: __nullable__(t.String()),
          weblink: __nullable__(t.String()),
          navigation: __nullable__(t.String()),
          target_reading_campaign_id: __nullable__(t.String()),
          segment_id: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_segmentPlainInputCreate = t.Object(
  {
    name: t.String(),
    description: t.Optional(__nullable__(t.String())),
    conditions: t.Optional(t.Any()),
    member_count: t.Optional(t.Integer()),
    created_by: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_segmentPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
    conditions: t.Optional(t.Any()),
    member_count: t.Optional(t.Integer()),
    created_by: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_segmentRelationsInputCreate = t.Object(
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
    customernoti: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    popup_image: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
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

export const customer_segmentRelationsInputUpdate = t.Partial(
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
      customernoti: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      popup_image: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
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
  ),
);

export const customer_segmentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          description: t.String(),
          conditions: t.Any(),
          member_count: t.Integer(),
          created_by: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customer_segment" },
  ),
);

export const customer_segmentWhereUnique = t.Recursive(
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
              name: t.String(),
              description: t.String(),
              conditions: t.Any(),
              member_count: t.Integer(),
              created_by: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_segment" },
);

export const customer_segmentSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      description: t.Boolean(),
      conditions: t.Boolean(),
      member_count: t.Boolean(),
      created_by: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      users: t.Boolean(),
      customernoti: t.Boolean(),
      popup_image: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_segmentInclude = t.Partial(
  t.Object(
    {
      users: t.Boolean(),
      customernoti: t.Boolean(),
      popup_image: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_segmentOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      conditions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      member_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_segment = t.Composite(
  [customer_segmentPlain, customer_segmentRelations],
  { additionalProperties: false },
);

export const customer_segmentInputCreate = t.Composite(
  [customer_segmentPlainInputCreate, customer_segmentRelationsInputCreate],
  { additionalProperties: false },
);

export const customer_segmentInputUpdate = t.Composite(
  [customer_segmentPlainInputUpdate, customer_segmentRelationsInputUpdate],
  { additionalProperties: false },
);
