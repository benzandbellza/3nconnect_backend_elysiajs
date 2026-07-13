import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ioplanetPlain = t.Object(
  {
    Date: __nullable__(t.String()),
    INV_ID: __nullable__(t.String()),
    Source: __nullable__(t.String()),
    Ref_ID: __nullable__(t.String()),
    PSN_Sales: __nullable__(t.String()),
    Entity: __nullable__(t.String()),
    WH_IN: __nullable__(t.String()),
    WH_OUT: __nullable__(t.String()),
    MATUnitID: __nullable__(t.String()),
    MATUnit: __nullable__(t.String()),
    Lot: __nullable__(t.String()),
    Quantity: __nullable__(t.Integer()),
    Unit_Price_STX: __nullable__(t.String()),
    Amount_STX: __nullable__(t.String()),
    id: t.Integer(),
  },
  { additionalProperties: false },
);

export const ioplanetRelations = t.Object({}, { additionalProperties: false });

export const ioplanetPlainInputCreate = t.Object(
  {
    Date: t.Optional(__nullable__(t.String())),
    Source: t.Optional(__nullable__(t.String())),
    PSN_Sales: t.Optional(__nullable__(t.String())),
    Entity: t.Optional(__nullable__(t.String())),
    WH_IN: t.Optional(__nullable__(t.String())),
    WH_OUT: t.Optional(__nullable__(t.String())),
    MATUnit: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    Quantity: t.Optional(__nullable__(t.Integer())),
    Unit_Price_STX: t.Optional(__nullable__(t.String())),
    Amount_STX: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ioplanetPlainInputUpdate = t.Object(
  {
    Date: t.Optional(__nullable__(t.String())),
    Source: t.Optional(__nullable__(t.String())),
    PSN_Sales: t.Optional(__nullable__(t.String())),
    Entity: t.Optional(__nullable__(t.String())),
    WH_IN: t.Optional(__nullable__(t.String())),
    WH_OUT: t.Optional(__nullable__(t.String())),
    MATUnit: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    Quantity: t.Optional(__nullable__(t.Integer())),
    Unit_Price_STX: t.Optional(__nullable__(t.String())),
    Amount_STX: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ioplanetRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ioplanetRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ioplanetWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          Date: t.String(),
          INV_ID: t.String(),
          Source: t.String(),
          Ref_ID: t.String(),
          PSN_Sales: t.String(),
          Entity: t.String(),
          WH_IN: t.String(),
          WH_OUT: t.String(),
          MATUnitID: t.String(),
          MATUnit: t.String(),
          Lot: t.String(),
          Quantity: t.Integer(),
          Unit_Price_STX: t.String(),
          Amount_STX: t.String(),
          id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "ioplanet" },
  ),
);

export const ioplanetWhereUnique = t.Recursive(
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
              Date: t.String(),
              INV_ID: t.String(),
              Source: t.String(),
              Ref_ID: t.String(),
              PSN_Sales: t.String(),
              Entity: t.String(),
              WH_IN: t.String(),
              WH_OUT: t.String(),
              MATUnitID: t.String(),
              MATUnit: t.String(),
              Lot: t.String(),
              Quantity: t.Integer(),
              Unit_Price_STX: t.String(),
              Amount_STX: t.String(),
              id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ioplanet" },
);

export const ioplanetSelect = t.Partial(
  t.Object(
    {
      Date: t.Boolean(),
      INV_ID: t.Boolean(),
      Source: t.Boolean(),
      Ref_ID: t.Boolean(),
      PSN_Sales: t.Boolean(),
      Entity: t.Boolean(),
      WH_IN: t.Boolean(),
      WH_OUT: t.Boolean(),
      MATUnitID: t.Boolean(),
      MATUnit: t.Boolean(),
      Lot: t.Boolean(),
      Quantity: t.Boolean(),
      Unit_Price_STX: t.Boolean(),
      Amount_STX: t.Boolean(),
      id: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ioplanetInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const ioplanetOrderBy = t.Partial(
  t.Object(
    {
      Date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      INV_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Source: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Ref_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PSN_Sales: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Entity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      WH_IN: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      WH_OUT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MATUnitID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MATUnit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Lot: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Unit_Price_STX: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Amount_STX: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const ioplanet = t.Composite([ioplanetPlain, ioplanetRelations], {
  additionalProperties: false,
});

export const ioplanetInputCreate = t.Composite(
  [ioplanetPlainInputCreate, ioplanetRelationsInputCreate],
  { additionalProperties: false },
);

export const ioplanetInputUpdate = t.Composite(
  [ioplanetPlainInputUpdate, ioplanetRelationsInputUpdate],
  { additionalProperties: false },
);
