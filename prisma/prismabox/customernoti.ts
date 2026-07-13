import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customernotiPlain = t.Object(
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
);

export const customernotiRelations = t.Object(
  {
    customer_segment: __nullable__(
      t.Object(
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
      ),
    ),
    customer_group: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          description: __nullable__(t.String()),
          color: t.String(),
          member_count: t.Integer(),
          created_at: t.Date(),
          updated_at: t.Date(),
          created_by: __nullable__(t.String()),
          group_type: t.String(),
          filter_criteria: __nullable__(t.Any()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
    noti_read_log: t.Array(
      t.Object(
        {
          id: t.Integer(),
          noti_id: t.Integer(),
          user_id: __nullable__(t.String()),
          platform: t.String(),
          event_type: t.String(),
          created_at: t.Date(),
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const customernotiPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    title: t.String(),
    message: t.Optional(__nullable__(t.String())),
    senddate: t.Date(),
    tier: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    sent_at: t.Optional(__nullable__(t.Date())),
    navigation: t.Optional(__nullable__(t.String())),
    age_range: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    specific_name: t.Optional(__nullable__(t.String())),
    send_on_birthday: t.Optional(__nullable__(t.Boolean())),
    weblink: t.Optional(__nullable__(t.String())),
    image: t.Optional(__nullable__(t.String())),
    target_type: t.Optional(__nullable__(t.String())),
    target_auth_ids: t.Array(t.String(), { additionalProperties: false }),
    sent_count: t.Optional(__nullable__(t.Integer())),
    target_seminar_company: t.Optional(__nullable__(t.String())),
    send_channels: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    targeting_logic: t.Optional(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const customernotiPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    title: t.Optional(t.String()),
    message: t.Optional(__nullable__(t.String())),
    senddate: t.Optional(t.Date()),
    tier: t.Optional(__nullable__(t.String())),
    status: t.Optional(__nullable__(t.String())),
    sent_at: t.Optional(__nullable__(t.Date())),
    navigation: t.Optional(__nullable__(t.String())),
    age_range: t.Optional(__nullable__(t.String())),
    province: t.Optional(__nullable__(t.String())),
    specific_name: t.Optional(__nullable__(t.String())),
    send_on_birthday: t.Optional(__nullable__(t.Boolean())),
    weblink: t.Optional(__nullable__(t.String())),
    image: t.Optional(__nullable__(t.String())),
    target_type: t.Optional(__nullable__(t.String())),
    target_auth_ids: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    sent_count: t.Optional(__nullable__(t.Integer())),
    target_seminar_company: t.Optional(__nullable__(t.String())),
    send_channels: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    targeting_logic: t.Optional(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const customernotiRelationsInputCreate = t.Object(
  {
    customer_segment: t.Optional(
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
    customer_group: t.Optional(
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
    noti_read_log: t.Optional(
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
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
  },
);

export const customernotiRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customer_segment: t.Partial(
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
      customer_group: t.Partial(
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
      noti_read_log: t.Partial(
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
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const customernotiWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          title: t.String(),
          message: t.String(),
          senddate: t.Date(),
          tier: t.String(),
          status: t.String(),
          sent_at: t.Date(),
          navigation: t.String(),
          age_range: t.String(),
          province: t.String(),
          specific_name: t.String(),
          send_on_birthday: t.Boolean(),
          weblink: t.String(),
          image: t.String(),
          voucher_id: t.Integer(),
          target_type: t.String(),
          target_auth_ids: t.Array(t.String(), { additionalProperties: false }),
          sent_count: t.Integer(),
          target_promotion_id: t.Integer(),
          target_event_id: t.String(),
          target_seminar_dwid: t.String(),
          target_seminar_company: t.String(),
          send_channels: t.Array(t.String(), { additionalProperties: false }),
          segment_id: t.String(),
          target_customer_group_id: t.String(),
          targeting_logic: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
        },
      ),
    { $id: "customernoti" },
  ),
);

export const customernotiWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
            },
          ),
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
              created_at: t.Date(),
              title: t.String(),
              message: t.String(),
              senddate: t.Date(),
              tier: t.String(),
              status: t.String(),
              sent_at: t.Date(),
              navigation: t.String(),
              age_range: t.String(),
              province: t.String(),
              specific_name: t.String(),
              send_on_birthday: t.Boolean(),
              weblink: t.String(),
              image: t.String(),
              voucher_id: t.Integer(),
              target_type: t.String(),
              target_auth_ids: t.Array(t.String(), {
                additionalProperties: false,
              }),
              sent_count: t.Integer(),
              target_promotion_id: t.Integer(),
              target_event_id: t.String(),
              target_seminar_dwid: t.String(),
              target_seminar_company: t.String(),
              send_channels: t.Array(t.String(), {
                additionalProperties: false,
              }),
              segment_id: t.String(),
              target_customer_group_id: t.String(),
              targeting_logic: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customernoti" },
);

export const customernotiSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      title: t.Boolean(),
      message: t.Boolean(),
      senddate: t.Boolean(),
      tier: t.Boolean(),
      status: t.Boolean(),
      sent_at: t.Boolean(),
      navigation: t.Boolean(),
      age_range: t.Boolean(),
      province: t.Boolean(),
      specific_name: t.Boolean(),
      send_on_birthday: t.Boolean(),
      weblink: t.Boolean(),
      image: t.Boolean(),
      voucher_id: t.Boolean(),
      target_type: t.Boolean(),
      target_auth_ids: t.Boolean(),
      sent_count: t.Boolean(),
      target_promotion_id: t.Boolean(),
      target_event_id: t.Boolean(),
      target_seminar_dwid: t.Boolean(),
      target_seminar_company: t.Boolean(),
      send_channels: t.Boolean(),
      segment_id: t.Boolean(),
      target_customer_group_id: t.Boolean(),
      targeting_logic: t.Boolean(),
      customer_segment: t.Boolean(),
      customer_group: t.Boolean(),
      voucher: t.Boolean(),
      noti_read_log: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const customernotiInclude = t.Partial(
  t.Object(
    {
      customer_segment: t.Boolean(),
      customer_group: t.Boolean(),
      voucher: t.Boolean(),
      noti_read_log: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const customernotiOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      senddate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sent_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      navigation: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      age_range: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      specific_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      send_on_birthday: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      weblink: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_auth_ids: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sent_count: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_event_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_seminar_dwid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_seminar_company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      send_channels: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      segment_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      target_customer_group_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      targeting_logic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.`,
    },
  ),
);

export const customernoti = t.Composite(
  [customernotiPlain, customernotiRelations],
  { additionalProperties: false },
);

export const customernotiInputCreate = t.Composite(
  [customernotiPlainInputCreate, customernotiRelationsInputCreate],
  { additionalProperties: false },
);

export const customernotiInputUpdate = t.Composite(
  [customernotiPlainInputUpdate, customernotiRelationsInputUpdate],
  { additionalProperties: false },
);
