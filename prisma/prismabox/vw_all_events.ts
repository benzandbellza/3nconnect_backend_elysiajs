import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_all_eventsPlain = t.Object(
  {
    event_id: __nullable__(t.String()),
    event_image: __nullable__(t.String()),
    event_cate_name: __nullable__(t.String()),
    event_name: __nullable__(t.String()),
    event_detail: __nullable__(t.String()),
    register_date: __nullable__(t.String()),
    preregister_date: __nullable__(t.String()),
    event_startdate: __nullable__(t.String()),
    event_enddate: __nullable__(t.String()),
    location_name: __nullable__(t.String()),
    tier_register: t.Array(t.String(), { additionalProperties: false }),
    tier_preregister: t.Array(t.String(), { additionalProperties: false }),
    ref_url: __nullable__(t.String()),
    is_active: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const vw_all_eventsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_all_eventsPlainInputCreate = t.Object(
  {
    event_image: t.Optional(__nullable__(t.String())),
    event_cate_name: t.Optional(__nullable__(t.String())),
    event_name: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    register_date: t.Optional(__nullable__(t.String())),
    preregister_date: t.Optional(__nullable__(t.String())),
    event_startdate: t.Optional(__nullable__(t.String())),
    event_enddate: t.Optional(__nullable__(t.String())),
    location_name: t.Optional(__nullable__(t.String())),
    tier_register: t.Array(t.String(), { additionalProperties: false }),
    tier_preregister: t.Array(t.String(), { additionalProperties: false }),
    ref_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_all_eventsPlainInputUpdate = t.Object(
  {
    event_image: t.Optional(__nullable__(t.String())),
    event_cate_name: t.Optional(__nullable__(t.String())),
    event_name: t.Optional(__nullable__(t.String())),
    event_detail: t.Optional(__nullable__(t.String())),
    register_date: t.Optional(__nullable__(t.String())),
    preregister_date: t.Optional(__nullable__(t.String())),
    event_startdate: t.Optional(__nullable__(t.String())),
    event_enddate: t.Optional(__nullable__(t.String())),
    location_name: t.Optional(__nullable__(t.String())),
    tier_register: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    tier_preregister: t.Optional(
      t.Array(t.String(), { additionalProperties: false }),
    ),
    ref_url: t.Optional(__nullable__(t.String())),
    is_active: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_all_eventsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_all_eventsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_all_eventsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          event_id: t.String(),
          event_image: t.String(),
          event_cate_name: t.String(),
          event_name: t.String(),
          event_detail: t.String(),
          register_date: t.String(),
          preregister_date: t.String(),
          event_startdate: t.String(),
          event_enddate: t.String(),
          location_name: t.String(),
          tier_register: t.Array(t.String(), { additionalProperties: false }),
          tier_preregister: t.Array(t.String(), {
            additionalProperties: false,
          }),
          ref_url: t.String(),
          is_active: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_all_events" },
  ),
);

export const vw_all_eventsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(t.Object({}, { additionalProperties: false }), {
          additionalProperties: false,
        }),
        t.Union([], { additionalProperties: false }),
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
              event_id: t.String(),
              event_image: t.String(),
              event_cate_name: t.String(),
              event_name: t.String(),
              event_detail: t.String(),
              register_date: t.String(),
              preregister_date: t.String(),
              event_startdate: t.String(),
              event_enddate: t.String(),
              location_name: t.String(),
              tier_register: t.Array(t.String(), {
                additionalProperties: false,
              }),
              tier_preregister: t.Array(t.String(), {
                additionalProperties: false,
              }),
              ref_url: t.String(),
              is_active: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_all_events" },
);

export const vw_all_eventsSelect = t.Partial(
  t.Object(
    {
      event_id: t.Boolean(),
      event_image: t.Boolean(),
      event_cate_name: t.Boolean(),
      event_name: t.Boolean(),
      event_detail: t.Boolean(),
      register_date: t.Boolean(),
      preregister_date: t.Boolean(),
      event_startdate: t.Boolean(),
      event_enddate: t.Boolean(),
      location_name: t.Boolean(),
      tier_register: t.Boolean(),
      tier_preregister: t.Boolean(),
      ref_url: t.Boolean(),
      is_active: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_all_eventsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_all_eventsOrderBy = t.Partial(
  t.Object(
    {
      event_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event_cate_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      location_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_all_events = t.Composite(
  [vw_all_eventsPlain, vw_all_eventsRelations],
  { additionalProperties: false },
);

export const vw_all_eventsInputCreate = t.Composite(
  [vw_all_eventsPlainInputCreate, vw_all_eventsRelationsInputCreate],
  { additionalProperties: false },
);

export const vw_all_eventsInputUpdate = t.Composite(
  [vw_all_eventsPlainInputUpdate, vw_all_eventsRelationsInputUpdate],
  { additionalProperties: false },
);
