import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const user_reading_progressPlain = t.Object(
  {
    id: t.String(),
    user_id: t.String(),
    content_type: t.String(),
    content_id: t.String(),
    content_title: __nullable__(t.String()),
    read_at: __nullable__(t.Date()),
    campaign_id: __nullable__(t.String()),
    create_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    last_read_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_reading_progressRelations = t.Object(
  {
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_reading_progressPlainInputCreate = t.Object(
  {
    content_type: t.String(),
    content_title: t.Optional(__nullable__(t.String())),
    read_at: t.Optional(__nullable__(t.Date())),
    create_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    last_read_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_reading_progressPlainInputUpdate = t.Object(
  {
    content_type: t.Optional(t.String()),
    content_title: t.Optional(__nullable__(t.String())),
    read_at: t.Optional(__nullable__(t.Date())),
    create_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    last_read_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_reading_progressRelationsInputCreate = t.Object(
  {
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
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const user_reading_progressRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_reading_progressWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          user_id: t.String(),
          content_type: t.String(),
          content_id: t.String(),
          content_title: t.String(),
          read_at: t.Date(),
          campaign_id: t.String(),
          create_at: t.Date(),
          updated_at: t.Date(),
          last_read_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "user_reading_progress" },
  ),
);

export const user_reading_progressWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              user_id_content_type_content_id: t.Object(
                {
                  user_id: t.String(),
                  content_type: t.String(),
                  content_id: t.String(),
                },
                { additionalProperties: false },
              ),
              user_id_content_type_content_id_campaign_id: t.Object(
                {
                  user_id: t.String(),
                  content_type: t.String(),
                  content_id: t.String(),
                  campaign_id: t.String(),
                },
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
            t.Object({ id: t.String() }),
            t.Object({
              user_id_content_type_content_id: t.Object(
                {
                  user_id: t.String(),
                  content_type: t.String(),
                  content_id: t.String(),
                },
                { additionalProperties: false },
              ),
            }),
            t.Object({
              user_id_content_type_content_id_campaign_id: t.Object(
                {
                  user_id: t.String(),
                  content_type: t.String(),
                  content_id: t.String(),
                  campaign_id: t.String(),
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
              content_type: t.String(),
              content_id: t.String(),
              content_title: t.String(),
              read_at: t.Date(),
              campaign_id: t.String(),
              create_at: t.Date(),
              updated_at: t.Date(),
              last_read_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "user_reading_progress" },
);

export const user_reading_progressSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      user_id: t.Boolean(),
      content_type: t.Boolean(),
      content_id: t.Boolean(),
      content_title: t.Boolean(),
      read_at: t.Boolean(),
      campaign_id: t.Boolean(),
      create_at: t.Boolean(),
      updated_at: t.Boolean(),
      last_read_at: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_reading_progressInclude = t.Partial(
  t.Object(
    { customeruser: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_reading_progressOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      content_title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      read_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      campaign_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      create_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      last_read_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const user_reading_progress = t.Composite(
  [user_reading_progressPlain, user_reading_progressRelations],
  { additionalProperties: false },
);

export const user_reading_progressInputCreate = t.Composite(
  [
    user_reading_progressPlainInputCreate,
    user_reading_progressRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const user_reading_progressInputUpdate = t.Composite(
  [
    user_reading_progressPlainInputUpdate,
    user_reading_progressRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
