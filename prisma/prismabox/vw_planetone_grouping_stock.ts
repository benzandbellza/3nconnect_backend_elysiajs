import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_planetone_grouping_stockPlain = t.Object(
  {
    MATUnit: __nullable__(t.String()),
    grandqty: __nullable__(t.Integer()),
    company: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockPlainInputCreate = t.Object(
  {
    MATUnit: t.Optional(__nullable__(t.String())),
    grandqty: t.Optional(__nullable__(t.Integer())),
    company: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockPlainInputUpdate = t.Object(
  {
    MATUnit: t.Optional(__nullable__(t.String())),
    grandqty: t.Optional(__nullable__(t.Integer())),
    company: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_planetone_grouping_stockWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          MATUnit: t.String(),
          grandqty: t.Integer(),
          company: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_planetone_grouping_stock" },
  ),
);

export const vw_planetone_grouping_stockWhereUnique = t.Recursive(
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
            { MATUnit: t.String(), grandqty: t.Integer(), company: t.String() },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_planetone_grouping_stock" },
);

export const vw_planetone_grouping_stockSelect = t.Partial(
  t.Object(
    {
      MATUnit: t.Boolean(),
      grandqty: t.Boolean(),
      company: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_planetone_grouping_stockInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_planetone_grouping_stockOrderBy = t.Partial(
  t.Object(
    {
      MATUnit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      grandqty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_planetone_grouping_stock = t.Composite(
  [vw_planetone_grouping_stockPlain, vw_planetone_grouping_stockRelations],
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockInputCreate = t.Composite(
  [
    vw_planetone_grouping_stockPlainInputCreate,
    vw_planetone_grouping_stockRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_planetone_grouping_stockInputUpdate = t.Composite(
  [
    vw_planetone_grouping_stockPlainInputUpdate,
    vw_planetone_grouping_stockRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
