import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const survey_answersPlain = t.Object(
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
);

export const survey_answersRelations = t.Object(
  {
    survey_questions: __nullable__(
      t.Object(
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
      ),
    ),
    survey_responses: __nullable__(
      t.Object(
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
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_answersPlainInputCreate = t.Object(
  {
    answer_text: t.Optional(__nullable__(t.String())),
    answer_value: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_answersPlainInputUpdate = t.Object(
  {
    answer_text: t.Optional(__nullable__(t.String())),
    answer_value: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(__nullable__(t.Date())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const survey_answersRelationsInputCreate = t.Object(
  {
    survey_questions: t.Optional(
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
    survey_responses: t.Optional(
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

export const survey_answersRelationsInputUpdate = t.Partial(
  t.Object(
    {
      survey_questions: t.Partial(
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
      survey_responses: t.Partial(
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

export const survey_answersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          response_id: t.Integer(),
          question_id: t.Integer(),
          answer_text: t.String(),
          answer_value: t.Any(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "survey_answers" },
  ),
);

export const survey_answersWhereUnique = t.Recursive(
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
              response_id: t.Integer(),
              question_id: t.Integer(),
              answer_text: t.String(),
              answer_value: t.Any(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "survey_answers" },
);

export const survey_answersSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      response_id: t.Boolean(),
      question_id: t.Boolean(),
      answer_text: t.Boolean(),
      answer_value: t.Boolean(),
      created_at: t.Boolean(),
      survey_questions: t.Boolean(),
      survey_responses: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_answersInclude = t.Partial(
  t.Object(
    {
      survey_questions: t.Boolean(),
      survey_responses: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const survey_answersOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      response_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      question_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      answer_text: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      answer_value: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const survey_answers = t.Composite(
  [survey_answersPlain, survey_answersRelations],
  { additionalProperties: false },
);

export const survey_answersInputCreate = t.Composite(
  [survey_answersPlainInputCreate, survey_answersRelationsInputCreate],
  { additionalProperties: false },
);

export const survey_answersInputUpdate = t.Composite(
  [survey_answersPlainInputUpdate, survey_answersRelationsInputUpdate],
  { additionalProperties: false },
);
