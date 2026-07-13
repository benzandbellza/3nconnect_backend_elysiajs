import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_eventsPlain = t.Object(
  {
    id: t.Integer(),
    name: t.String(),
    start_date: t.Date(),
    end_date: t.Date(),
    active: t.Boolean(),
    created_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_eventsRelations = t.Object(
  {
    customer_requests: t.Array(
      t.Object(
        {
          id: t.Integer(),
          customeruser_id: __nullable__(t.String()),
          name: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          company: __nullable__(t.String()),
          event_id: __nullable__(t.Integer()),
          request: __nullable__(t.String()),
          created_by: __nullable__(t.String()),
          created_at: t.Date(),
          assigned_users_id: __nullable__(t.String()),
          sopt_head_id: __nullable__(t.Integer()),
          assigned_users_ids: t.Array(t.String(), {
            additionalProperties: false,
          }),
          sopt_head_ids: t.Array(t.Integer(), { additionalProperties: false }),
          email: __nullable__(t.String()),
          has_data: __nullable__(t.Boolean()),
          is_active: t.Boolean(),
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

export const customer_eventsPlainInputCreate = t.Object(
  {
    name: t.String(),
    start_date: t.Date(),
    end_date: t.Date(),
    active: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_eventsPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    start_date: t.Optional(t.Date()),
    end_date: t.Optional(t.Date()),
    active: t.Optional(t.Boolean()),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const customer_eventsRelationsInputCreate = t.Object(
  {
    customer_requests: t.Optional(
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

export const customer_eventsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customer_requests: t.Partial(
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

export const customer_eventsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          name: t.String(),
          start_date: t.Date(),
          end_date: t.Date(),
          active: t.Boolean(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "customer_events" },
  ),
);

export const customer_eventsWhereUnique = t.Recursive(
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
              name: t.String(),
              start_date: t.Date(),
              end_date: t.Date(),
              active: t.Boolean(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_events" },
);

export const customer_eventsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      start_date: t.Boolean(),
      end_date: t.Boolean(),
      active: t.Boolean(),
      created_at: t.Boolean(),
      customer_requests: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_eventsInclude = t.Partial(
  t.Object(
    { customer_requests: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const customer_eventsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const customer_events = t.Composite(
  [customer_eventsPlain, customer_eventsRelations],
  { additionalProperties: false },
);

export const customer_eventsInputCreate = t.Composite(
  [customer_eventsPlainInputCreate, customer_eventsRelationsInputCreate],
  { additionalProperties: false },
);

export const customer_eventsInputUpdate = t.Composite(
  [customer_eventsPlainInputUpdate, customer_eventsRelationsInputUpdate],
  { additionalProperties: false },
);
