import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const event_categoriesPlain = t.Object(
  {
    id: t.Integer(),
    event_cate_name: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    is_active: __nullable__(t.Boolean()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const event_categoriesRelations = t.Object(
  {
    events: t.Array(
      t.Object(
        {
          id: t.Integer(),
          event_name: __nullable__(t.String()),
          event_detail: __nullable__(t.String()),
          register_date: __nullable__(t.Date()),
          preregister_date: __nullable__(t.Date()),
          event_startdate: __nullable__(t.Date()),
          event_enddate: __nullable__(t.Date()),
          event_image: __nullable__(t.String()),
          location_name: __nullable__(t.String()),
          event_category_id: __nullable__(t.Integer()),
          tier_register: t.Array(t.String(), { additionalProperties: false }),
          tier_preregister: t.Array(t.String(), {
            additionalProperties: false,
          }),
          ref_url: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
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

export const event_categoriesPlainInputCreate = t.Object(
  {
    event_cate_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const event_categoriesPlainInputUpdate = t.Object(
  {
    event_cate_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const event_categoriesRelationsInputCreate = t.Object(
  {
    events: t.Optional(
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

export const event_categoriesRelationsInputUpdate = t.Partial(
  t.Object(
    {
      events: t.Partial(
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

export const event_categoriesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          event_cate_name: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          is_active: t.Boolean(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "event_categories" },
  ),
);

export const event_categoriesWhereUnique = t.Recursive(
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
              event_cate_name: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
              is_active: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "event_categories" },
);

export const event_categoriesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      event_cate_name: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      events: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const event_categoriesInclude = t.Partial(
  t.Object(
    { events: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const event_categoriesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_cate_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const event_categories = t.Composite(
  [event_categoriesPlain, event_categoriesRelations],
  { additionalProperties: false },
);

export const event_categoriesInputCreate = t.Composite(
  [event_categoriesPlainInputCreate, event_categoriesRelationsInputCreate],
  { additionalProperties: false },
);

export const event_categoriesInputUpdate = t.Composite(
  [event_categoriesPlainInputUpdate, event_categoriesRelationsInputUpdate],
  { additionalProperties: false },
);
