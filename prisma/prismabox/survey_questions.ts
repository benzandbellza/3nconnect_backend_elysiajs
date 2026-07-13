import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const survey_questionsPlain = t.Object(
  {
    id: t.Integer(),
    survey_id: __nullable__(t.Integer()),
    question_text: t.String(),
    question_type: t.String(),
    options: __nullable__(t.Any()),
    is_required: __nullable__(t.Boolean()),
    order_index: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_questionsRelations = t.Object(
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

export const survey_questionsPlainInputCreate = t.Object(
  {
    question_text: t.String(),
    question_type: t.String(),
    options: t.Optional(__nullable__(t.Any())),
    is_required: t.Optional(__nullable__(t.Boolean())),
    order_index: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_questionsPlainInputUpdate = t.Object(
  {
    question_text: t.Optional(t.String()),
    question_type: t.Optional(t.String()),
    options: t.Optional(__nullable__(t.Any())),
    is_required: t.Optional(__nullable__(t.Boolean())),
    order_index: t.Optional(__nullable__(t.Integer())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_questionsRelationsInputCreate = t.Object(
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

export const survey_questionsRelationsInputUpdate = t.Partial(
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

export const survey_questionsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          survey_id: t.Integer(),
          question_text: t.String(),
          question_type: t.String(),
          options: t.Any(),
          is_required: t.Boolean(),
          order_index: t.Integer(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "survey_questions" },
  ),
);

export const survey_questionsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
              survey_id: t.Integer(),
              question_text: t.String(),
              question_type: t.String(),
              options: t.Any(),
              is_required: t.Boolean(),
              order_index: t.Integer(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "survey_questions" },
);

export const survey_questionsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      survey_id: t.Boolean(),
      question_text: t.Boolean(),
      question_type: t.Boolean(),
      options: t.Boolean(),
      is_required: t.Boolean(),
      order_index: t.Boolean(),
      created_at: t.Boolean(),
      survey_answers: t.Boolean(),
      surveys: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_questionsInclude = t.Partial(
  t.Object(
    { survey_answers: t.Boolean(), surveys: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_questionsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      survey_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      question_text: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      question_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      options: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_required: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      order_index: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_questions = t.Composite(
  [survey_questionsPlain, survey_questionsRelations],
  { additionalProperties: false },
);

export const survey_questionsInputCreate = t.Composite(
  [survey_questionsPlainInputCreate, survey_questionsRelationsInputCreate],
  { additionalProperties: false },
);

export const survey_questionsInputUpdate = t.Composite(
  [survey_questionsPlainInputUpdate, survey_questionsRelationsInputUpdate],
  { additionalProperties: false },
);
