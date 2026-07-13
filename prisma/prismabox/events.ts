import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const eventsPlain = t.Object(
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
    tier_preregister: t.Array(t.String(), { additionalProperties: false }),
    ref_url: __nullable__(t.String()),
    created_at: t.Date(),
    updated_at: __nullable__(t.Date()),
    is_active: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const eventsRelations = t.Object(
  {
    event_categories: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          event_cate_name: __nullable__(t.String()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const eventsPlainInputCreate = t.Object(
  {
    event_name: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    register_date: t.Optional(__nullable__(t.Date())),
    preregister_date: t.Optional(__nullable__(t.Date())),
    event_startdate: t.Optional(__nullable__(t.Date())),
    event_enddate: t.Optional(__nullable__(t.Date())),
    event_image: t.Optional(__nullable__(t.String())),
    location_name: t.Optional(__nullable__(t.String())),
    tier_register: t.Array(t.String(), { additionalProperties: false }),
    tier_preregister: t.Array(t.String(), { additionalProperties: false }),
    ref_url: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const eventsPlainInputUpdate = t.Object(
  {
    event_name: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    register_date: t.Optional(__nullable__(t.Date())),
    preregister_date: t.Optional(__nullable__(t.Date())),
    event_startdate: t.Optional(__nullable__(t.Date())),
    event_enddate: t.Optional(__nullable__(t.Date())),
    event_image: t.Optional(__nullable__(t.String())),
    location_name: t.Optional(__nullable__(t.String())),
    tier_register: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    tier_preregister: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    ref_url: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
    updated_at: t.Optional(__nullable__(t.Date())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const eventsRelationsInputCreate = t.Object(
  {
    event_categories: t.Optional(
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

export const eventsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      event_categories: t.Partial(
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

export const eventsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          event_name: t.String(),
          event_detail: t.String(),
          register_date: t.Date(),
          preregister_date: t.Date(),
          event_startdate: t.Date(),
          event_enddate: t.Date(),
          event_image: t.String(),
          location_name: t.String(),
          event_category_id: t.Integer(),
          tier_register: t.Array(t.String(), { additionalProperties: false }),
          tier_preregister: t.Array(t.String(), {
            additionalProperties: false,
          }),
          ref_url: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
          is_active: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "events" },
  ),
);

export const eventsWhereUnique = t.Recursive(
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
              event_name: t.String(),
              event_detail: t.String(),
              register_date: t.Date(),
              preregister_date: t.Date(),
              event_startdate: t.Date(),
              event_enddate: t.Date(),
              event_image: t.String(),
              location_name: t.String(),
              event_category_id: t.Integer(),
              tier_register: t.Array(t.String(), {
                additionalProperties: false,
              }),
              tier_preregister: t.Array(t.String(), {
                additionalProperties: false,
              }),
              ref_url: t.String(),
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
  { $id: "events" },
);

export const eventsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      event_name: t.Boolean(),
      event_detail: t.Boolean(),
      register_date: t.Boolean(),
      preregister_date: t.Boolean(),
      event_startdate: t.Boolean(),
      event_enddate: t.Boolean(),
      event_image: t.Boolean(),
      location_name: t.Boolean(),
      event_category_id: t.Boolean(),
      tier_register: t.Boolean(),
      tier_preregister: t.Boolean(),
      ref_url: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      is_active: t.Boolean(),
      event_categories: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const eventsInclude = t.Partial(
  t.Object(
    { event_categories: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const eventsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      register_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      preregister_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_startdate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_enddate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_category_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier_register: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tier_preregister: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ref_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
    { additionalProperties: false },
  ),
);

export const events = t.Composite([eventsPlain, eventsRelations], {
  additionalProperties: false,
});

export const eventsInputCreate = t.Composite(
  [eventsPlainInputCreate, eventsRelationsInputCreate],
  { additionalProperties: false },
);

export const eventsInputUpdate = t.Composite(
  [eventsPlainInputUpdate, eventsRelationsInputUpdate],
  { additionalProperties: false },
);
