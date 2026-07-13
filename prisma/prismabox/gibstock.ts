import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const gibstockPlain = t.Object(
  {
    id: t.Integer(),
    MATUnit: __nullable__(t.String()),
    PO_: __nullable__(t.String()),
    PO_Date: __nullable__(t.String()),
    PO_REF: __nullable__(t.String()),
    Purchaser_Personnel: __nullable__(t.String()),
    PR_: __nullable__(t.String()),
    Lot: __nullable__(t.String()),
    MAT_IN: __nullable__(t.String()),
    MAT_IN_Ref: __nullable__(t.String()),
    INV_ID_MATIN_: __nullable__(t.String()),
    Received_Date_Time: __nullable__(t.String()),
    Location_ID: __nullable__(t.String()),
    Unit_Cost: __nullable__(t.Number()),
    Cost_BLN: __nullable__(t.Number()),
    QTY_BLN_1_: __nullable__(t.Integer()),
    QTY_Ready_2_: __nullable__(t.Integer()),
    QTY_PN_Out_3_: __nullable__(t.Integer()),
    QTY_1_2: __nullable__(t.Integer()),
    QTY_1_2_3: __nullable__(t.Integer()),
    QTY_1_3: __nullable__(t.Integer()),
    Unit: __nullable__(t.String()),
    Age: __nullable__(t.Integer()),
    Expired: __nullable__(t.String()),
    Avail__Life: __nullable__(t.Integer()),
    Product_Life: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gibstockRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gibstockPlainInputCreate = t.Object(
  {
    MATUnit: t.Optional(__nullable__(t.String())),
    PO_: t.Optional(__nullable__(t.String())),
    PO_Date: t.Optional(__nullable__(t.String())),
    PO_REF: t.Optional(__nullable__(t.String())),
    Purchaser_Personnel: t.Optional(__nullable__(t.String())),
    PR_: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    MAT_IN: t.Optional(__nullable__(t.String())),
    MAT_IN_Ref: t.Optional(__nullable__(t.String())),
    INV_ID_MATIN_: t.Optional(__nullable__(t.String())),
    Received_Date_Time: t.Optional(__nullable__(t.String())),
    Unit_Cost: t.Optional(__nullable__(t.Number())),
    Cost_BLN: t.Optional(__nullable__(t.Number())),
    QTY_BLN_1_: t.Optional(__nullable__(t.Integer())),
    QTY_Ready_2_: t.Optional(__nullable__(t.Integer())),
    QTY_PN_Out_3_: t.Optional(__nullable__(t.Integer())),
    QTY_1_2: t.Optional(__nullable__(t.Integer())),
    QTY_1_2_3: t.Optional(__nullable__(t.Integer())),
    QTY_1_3: t.Optional(__nullable__(t.Integer())),
    Unit: t.Optional(__nullable__(t.String())),
    Age: t.Optional(__nullable__(t.Integer())),
    Expired: t.Optional(__nullable__(t.String())),
    Avail__Life: t.Optional(__nullable__(t.Integer())),
    Product_Life: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gibstockPlainInputUpdate = t.Object(
  {
    MATUnit: t.Optional(__nullable__(t.String())),
    PO_: t.Optional(__nullable__(t.String())),
    PO_Date: t.Optional(__nullable__(t.String())),
    PO_REF: t.Optional(__nullable__(t.String())),
    Purchaser_Personnel: t.Optional(__nullable__(t.String())),
    PR_: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    MAT_IN: t.Optional(__nullable__(t.String())),
    MAT_IN_Ref: t.Optional(__nullable__(t.String())),
    INV_ID_MATIN_: t.Optional(__nullable__(t.String())),
    Received_Date_Time: t.Optional(__nullable__(t.String())),
    Unit_Cost: t.Optional(__nullable__(t.Number())),
    Cost_BLN: t.Optional(__nullable__(t.Number())),
    QTY_BLN_1_: t.Optional(__nullable__(t.Integer())),
    QTY_Ready_2_: t.Optional(__nullable__(t.Integer())),
    QTY_PN_Out_3_: t.Optional(__nullable__(t.Integer())),
    QTY_1_2: t.Optional(__nullable__(t.Integer())),
    QTY_1_2_3: t.Optional(__nullable__(t.Integer())),
    QTY_1_3: t.Optional(__nullable__(t.Integer())),
    Unit: t.Optional(__nullable__(t.String())),
    Age: t.Optional(__nullable__(t.Integer())),
    Expired: t.Optional(__nullable__(t.String())),
    Avail__Life: t.Optional(__nullable__(t.Integer())),
    Product_Life: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gibstockRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const gibstockRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gibstockWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          MATUnit: t.String(),
          PO_: t.String(),
          PO_Date: t.String(),
          PO_REF: t.String(),
          Purchaser_Personnel: t.String(),
          PR_: t.String(),
          Lot: t.String(),
          MAT_IN: t.String(),
          MAT_IN_Ref: t.String(),
          INV_ID_MATIN_: t.String(),
          Received_Date_Time: t.String(),
          Location_ID: t.String(),
          Unit_Cost: t.Number(),
          Cost_BLN: t.Number(),
          QTY_BLN_1_: t.Integer(),
          QTY_Ready_2_: t.Integer(),
          QTY_PN_Out_3_: t.Integer(),
          QTY_1_2: t.Integer(),
          QTY_1_2_3: t.Integer(),
          QTY_1_3: t.Integer(),
          Unit: t.String(),
          Age: t.Integer(),
          Expired: t.String(),
          Avail__Life: t.Integer(),
          Product_Life: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "gibstock" },
  ),
);

export const gibstockWhereUnique = t.Recursive(
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
              MATUnit: t.String(),
              PO_: t.String(),
              PO_Date: t.String(),
              PO_REF: t.String(),
              Purchaser_Personnel: t.String(),
              PR_: t.String(),
              Lot: t.String(),
              MAT_IN: t.String(),
              MAT_IN_Ref: t.String(),
              INV_ID_MATIN_: t.String(),
              Received_Date_Time: t.String(),
              Location_ID: t.String(),
              Unit_Cost: t.Number(),
              Cost_BLN: t.Number(),
              QTY_BLN_1_: t.Integer(),
              QTY_Ready_2_: t.Integer(),
              QTY_PN_Out_3_: t.Integer(),
              QTY_1_2: t.Integer(),
              QTY_1_2_3: t.Integer(),
              QTY_1_3: t.Integer(),
              Unit: t.String(),
              Age: t.Integer(),
              Expired: t.String(),
              Avail__Life: t.Integer(),
              Product_Life: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "gibstock" },
);

export const gibstockSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      MATUnit: t.Boolean(),
      PO_: t.Boolean(),
      PO_Date: t.Boolean(),
      PO_REF: t.Boolean(),
      Purchaser_Personnel: t.Boolean(),
      PR_: t.Boolean(),
      Lot: t.Boolean(),
      MAT_IN: t.Boolean(),
      MAT_IN_Ref: t.Boolean(),
      INV_ID_MATIN_: t.Boolean(),
      Received_Date_Time: t.Boolean(),
      Location_ID: t.Boolean(),
      Unit_Cost: t.Boolean(),
      Cost_BLN: t.Boolean(),
      QTY_BLN_1_: t.Boolean(),
      QTY_Ready_2_: t.Boolean(),
      QTY_PN_Out_3_: t.Boolean(),
      QTY_1_2: t.Boolean(),
      QTY_1_2_3: t.Boolean(),
      QTY_1_3: t.Boolean(),
      Unit: t.Boolean(),
      Age: t.Boolean(),
      Expired: t.Boolean(),
      Avail__Life: t.Boolean(),
      Product_Life: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gibstockInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gibstockOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MATUnit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PO_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PO_Date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PO_REF: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Purchaser_Personnel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PR_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Lot: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MAT_IN: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MAT_IN_Ref: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      INV_ID_MATIN_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Received_Date_Time: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Location_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Unit_Cost: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Cost_BLN: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_BLN_1_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_Ready_2_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_PN_Out_3_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_1_2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_1_2_3: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      QTY_1_3: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Age: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Expired: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Avail__Life: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Product_Life: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const gibstock = t.Composite([gibstockPlain, gibstockRelations], {
  additionalProperties: false,
});

export const gibstockInputCreate = t.Composite(
  [gibstockPlainInputCreate, gibstockRelationsInputCreate],
  { additionalProperties: false },
);

export const gibstockInputUpdate = t.Composite(
  [gibstockPlainInputUpdate, gibstockRelationsInputUpdate],
  { additionalProperties: false },
);
