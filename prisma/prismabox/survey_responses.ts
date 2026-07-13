import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const survey_responsesPlain = t.Object(
  {
    id: t.Integer(),
    survey_id: __nullable__(t.Integer()),
    customer_id: __nullable__(t.String()),
    submitted_at: __nullable__(t.Date()),
    points_awarded: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_responsesRelations = t.Object(
  {
    survey_answers: t.Array(
      t.Object(
        {
          id: t.Integer(),
          response_id: __nullable__(t.Integer()),
          question_id: __nullable__(t.Integer()),
          answer_text: __nullable__(t.String()),
          answer_value: __nullable__(t.Any()),
          created_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
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
    surveys: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          title: t.String(),
          description: __nullable__(t.String()),
          banner: __nullable__(t.String()),
          points_reward: t.Integer(),
          start_date: t.Date(),
          end_date: t.Date(),
          allowed_tiers: t.Array(t.String(), { additionalProperties: false }),
          max_responses: __nullable__(t.Integer()),
          current_responses: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          created_at: __nullable__(t.Date()),
          updated_at: __nullable__(t.Date()),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_responsesPlainInputCreate = t.Object(
  {
    submitted_at: t.Optional(__nullable__(t.Date())),
    points_awarded: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_responsesPlainInputUpdate = t.Object(
  {
    submitted_at: t.Optional(__nullable__(t.Date())),
    points_awarded: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_responsesRelationsInputCreate = t.Object(
  {
    survey_answers: t.Optional(
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
    surveys: t.Optional(
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

export const survey_responsesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      survey_answers: t.Partial(
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
      surveys: t.Partial(
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

export const survey_responsesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          survey_id: t.Integer(),
          customer_id: t.String(),
          submitted_at: t.Date(),
          points_awarded: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "survey_responses" },
  ),
);

export const survey_responsesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              survey_id_customer_id: t.Object(
                { survey_id: t.Integer(), customer_id: t.String() },
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
              survey_id_customer_id: t.Object(
                { survey_id: t.Integer(), customer_id: t.String() },
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
              survey_id: t.Integer(),
              customer_id: t.String(),
              submitted_at: t.Date(),
              points_awarded: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "survey_responses" },
);

export const survey_responsesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      survey_id: t.Boolean(),
      customer_id: t.Boolean(),
      submitted_at: t.Boolean(),
      points_awarded: t.Boolean(),
      survey_answers: t.Boolean(),
      customeruser: t.Boolean(),
      surveys: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_responsesInclude = t.Partial(
  t.Object(
    {
      survey_answers: t.Boolean(),
      customeruser: t.Boolean(),
      surveys: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_responsesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      survey_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      submitted_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_awarded: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_responses = t.Composite(
  [survey_responsesPlain, survey_responsesRelations],
  { additionalProperties: false },
);

export const survey_responsesInputCreate = t.Composite(
  [survey_responsesPlainInputCreate, survey_responsesRelationsInputCreate],
  { additionalProperties: false },
);

export const survey_responsesInputUpdate = t.Composite(
  [survey_responsesPlainInputUpdate, survey_responsesRelationsInputUpdate],
  { additionalProperties: false },
);
