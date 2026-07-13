import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_promotion_extra_points_bill_indexPlain = t.Object(
  {
    url_promotion_image: __nullable__(t.String()),
    promotion_id: __nullable__(t.Integer()),
    promotion_name: __nullable__(t.String()),
    promotion_description: __nullable__(t.String()),
    promotion_start: __nullable__(t.Date()),
    promotion_end: __nullable__(t.Date()),
    is_accept_overlapse_promotion: __nullable__(t.Boolean()),
    level_no: __nullable__(t.Integer()),
    min_amount: __nullable__(t.Number()),
    points_multiplier: __nullable__(t.Number()),
  },
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexPlainInputCreate = t.Object(
  {
    url_promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_description: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    level_no: t.Optional(__nullable__(t.Integer())),
    min_amount: t.Optional(__nullable__(t.Number())),
    points_multiplier: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexPlainInputUpdate = t.Object(
  {
    url_promotion_image: t.Optional(__nullable__(t.String())),
    promotion_name: t.Optional(__nullable__(t.String())),
    promotion_description: t.Optional(__nullable__(t.String())),
    promotion_start: t.Optional(__nullable__(t.Date())),
    promotion_end: t.Optional(__nullable__(t.Date())),
    is_accept_overlapse_promotion: t.Optional(__nullable__(t.Boolean())),
    level_no: t.Optional(__nullable__(t.Integer())),
    min_amount: t.Optional(__nullable__(t.Number())),
    points_multiplier: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexRelationsInputCreate =
  t.Object({}, { additionalProperties: false });

export const vw_promotion_extra_points_bill_indexRelationsInputUpdate =
  t.Partial(t.Object({}, { additionalProperties: false }));

export const vw_promotion_extra_points_bill_indexWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          url_promotion_image: t.String(),
          promotion_id: t.Integer(),
          promotion_name: t.String(),
          promotion_description: t.String(),
          promotion_start: t.Date(),
          promotion_end: t.Date(),
          is_accept_overlapse_promotion: t.Boolean(),
          level_no: t.Integer(),
          min_amount: t.Number(),
          points_multiplier: t.Number(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_promotion_extra_points_bill_index" },
  ),
);

export const vw_promotion_extra_points_bill_indexWhereUnique = t.Recursive(
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
              url_promotion_image: t.String(),
              promotion_id: t.Integer(),
              promotion_name: t.String(),
              promotion_description: t.String(),
              promotion_start: t.Date(),
              promotion_end: t.Date(),
              is_accept_overlapse_promotion: t.Boolean(),
              level_no: t.Integer(),
              min_amount: t.Number(),
              points_multiplier: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_promotion_extra_points_bill_index" },
);

export const vw_promotion_extra_points_bill_indexSelect = t.Partial(
  t.Object(
    {
      url_promotion_image: t.Boolean(),
      promotion_id: t.Boolean(),
      promotion_name: t.Boolean(),
      promotion_description: t.Boolean(),
      promotion_start: t.Boolean(),
      promotion_end: t.Boolean(),
      is_accept_overlapse_promotion: t.Boolean(),
      level_no: t.Boolean(),
      min_amount: t.Boolean(),
      points_multiplier: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_extra_points_bill_indexInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_promotion_extra_points_bill_indexOrderBy = t.Partial(
  t.Object(
    {
      url_promotion_image: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_accept_overlapse_promotion: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      level_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      points_multiplier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_promotion_extra_points_bill_index = t.Composite(
  [
    vw_promotion_extra_points_bill_indexPlain,
    vw_promotion_extra_points_bill_indexRelations,
  ],
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexInputCreate = t.Composite(
  [
    vw_promotion_extra_points_bill_indexPlainInputCreate,
    vw_promotion_extra_points_bill_indexRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_promotion_extra_points_bill_indexInputUpdate = t.Composite(
  [
    vw_promotion_extra_points_bill_indexPlainInputUpdate,
    vw_promotion_extra_points_bill_indexRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
