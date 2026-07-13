import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_total_points_customeruserPlain = t.Object(
  { total_points: __nullable__(t.Number()), user_id: __nullable__(t.String()) },
  { additionalProperties: false },
);

export const vw_total_points_customeruserRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_total_points_customeruserPlainInputCreate = t.Object(
  { total_points: t.Optional(__nullable__(t.Number())) },
  { additionalProperties: false },
);

export const vw_total_points_customeruserPlainInputUpdate = t.Object(
  { total_points: t.Optional(__nullable__(t.Number())) },
  { additionalProperties: false },
);

export const vw_total_points_customeruserRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_total_points_customeruserRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_total_points_customeruserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          total_points: t.Number(),
          user_id: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_total_points_customeruser" },
  ),
);

export const vw_total_points_customeruserWhereUnique = t.Recursive(
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
            { total_points: t.Number(), user_id: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_total_points_customeruser" },
);

export const vw_total_points_customeruserSelect = t.Partial(
  t.Object(
    { total_points: t.Boolean(), user_id: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const vw_total_points_customeruserInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_total_points_customeruserOrderBy = t.Partial(
  t.Object(
    {
      total_points: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_total_points_customeruser = t.Composite(
  [vw_total_points_customeruserPlain, vw_total_points_customeruserRelations],
  { additionalProperties: false },
);

export const vw_total_points_customeruserInputCreate = t.Composite(
  [
    vw_total_points_customeruserPlainInputCreate,
    vw_total_points_customeruserRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_total_points_customeruserInputUpdate = t.Composite(
  [
    vw_total_points_customeruserPlainInputUpdate,
    vw_total_points_customeruserRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
