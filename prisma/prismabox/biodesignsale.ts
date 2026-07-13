import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const biodesignsalePlain = t.Object(
  {
    ID: t.Integer(),
    DATE: __nullable__(t.String()),
    DOC_ID: t.String(),
    C__REF: __nullable__(t.String()),
    CUSTOMER: __nullable__(t.String()),
    C__BUYER: __nullable__(t.String()),
    C__PAYMENT: __nullable__(t.String()),
    SO_TYPE: __nullable__(t.String()),
    MAT_CAT: __nullable__(t.String()),
    MAT_ID: t.String(),
    MAT: __nullable__(t.String()),
    UNIT: __nullable__(t.String()),
    Printing_Note: __nullable__(t.String()),
    STXI_Printing_Note: __nullable__(t.String()),
    PERSONNEL: __nullable__(t.String()),
    UNIT_PRICE: __nullable__(t.Number()),
    R_QTY: __nullable__(t.Number()),
    AG_QTY: __nullable__(t.Number()),
    AMOUNT: t.Number(),
    COST: t.Number(),
    PROFIT_LOSS: __nullable__(t.Number()),
    P_L: __nullable__(t.Number()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const biodesignsaleRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const biodesignsalePlainInputCreate = t.Object(
  {
    DATE: t.Optional(__nullable__(t.String())),
    C__REF: t.Optional(__nullable__(t.String())),
    CUSTOMER: t.Optional(__nullable__(t.String())),
    C__BUYER: t.Optional(__nullable__(t.String())),
    C__PAYMENT: t.Optional(__nullable__(t.String())),
    SO_TYPE: t.Optional(__nullable__(t.String())),
    MAT_CAT: t.Optional(__nullable__(t.String())),
    MAT: t.Optional(__nullable__(t.String())),
    UNIT: t.Optional(__nullable__(t.String())),
    Printing_Note: t.Optional(__nullable__(t.String())),
    STXI_Printing_Note: t.Optional(__nullable__(t.String())),
    PERSONNEL: t.Optional(__nullable__(t.String())),
    UNIT_PRICE: t.Optional(__nullable__(t.Number())),
    R_QTY: t.Optional(__nullable__(t.Number())),
    AG_QTY: t.Optional(__nullable__(t.Number())),
    AMOUNT: t.Number(),
    COST: t.Number(),
    PROFIT_LOSS: t.Optional(__nullable__(t.Number())),
    P_L: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const biodesignsalePlainInputUpdate = t.Object(
  {
    DATE: t.Optional(__nullable__(t.String())),
    C__REF: t.Optional(__nullable__(t.String())),
    CUSTOMER: t.Optional(__nullable__(t.String())),
    C__BUYER: t.Optional(__nullable__(t.String())),
    C__PAYMENT: t.Optional(__nullable__(t.String())),
    SO_TYPE: t.Optional(__nullable__(t.String())),
    MAT_CAT: t.Optional(__nullable__(t.String())),
    MAT: t.Optional(__nullable__(t.String())),
    UNIT: t.Optional(__nullable__(t.String())),
    Printing_Note: t.Optional(__nullable__(t.String())),
    STXI_Printing_Note: t.Optional(__nullable__(t.String())),
    PERSONNEL: t.Optional(__nullable__(t.String())),
    UNIT_PRICE: t.Optional(__nullable__(t.Number())),
    R_QTY: t.Optional(__nullable__(t.Number())),
    AG_QTY: t.Optional(__nullable__(t.Number())),
    AMOUNT: t.Optional(t.Number()),
    COST: t.Optional(t.Number()),
    PROFIT_LOSS: t.Optional(__nullable__(t.Number())),
    P_L: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const biodesignsaleRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const biodesignsaleRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const biodesignsaleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          ID: t.Integer(),
          DATE: t.String(),
          DOC_ID: t.String(),
          C__REF: t.String(),
          CUSTOMER: t.String(),
          C__BUYER: t.String(),
          C__PAYMENT: t.String(),
          SO_TYPE: t.String(),
          MAT_CAT: t.String(),
          MAT_ID: t.String(),
          MAT: t.String(),
          UNIT: t.String(),
          Printing_Note: t.String(),
          STXI_Printing_Note: t.String(),
          PERSONNEL: t.String(),
          UNIT_PRICE: t.Number(),
          R_QTY: t.Number(),
          AG_QTY: t.Number(),
          AMOUNT: t.Number(),
          COST: t.Number(),
          PROFIT_LOSS: t.Number(),
          P_L: t.Number(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "biodesignsale" },
  ),
);

export const biodesignsaleWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {},
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
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
              ID: t.Integer(),
              DATE: t.String(),
              DOC_ID: t.String(),
              C__REF: t.String(),
              CUSTOMER: t.String(),
              C__BUYER: t.String(),
              C__PAYMENT: t.String(),
              SO_TYPE: t.String(),
              MAT_CAT: t.String(),
              MAT_ID: t.String(),
              MAT: t.String(),
              UNIT: t.String(),
              Printing_Note: t.String(),
              STXI_Printing_Note: t.String(),
              PERSONNEL: t.String(),
              UNIT_PRICE: t.Number(),
              R_QTY: t.Number(),
              AG_QTY: t.Number(),
              AMOUNT: t.Number(),
              COST: t.Number(),
              PROFIT_LOSS: t.Number(),
              P_L: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "biodesignsale" },
);

export const biodesignsaleSelect = t.Partial(
  t.Object(
    {
      ID: t.Boolean(),
      DATE: t.Boolean(),
      DOC_ID: t.Boolean(),
      C__REF: t.Boolean(),
      CUSTOMER: t.Boolean(),
      C__BUYER: t.Boolean(),
      C__PAYMENT: t.Boolean(),
      SO_TYPE: t.Boolean(),
      MAT_CAT: t.Boolean(),
      MAT_ID: t.Boolean(),
      MAT: t.Boolean(),
      UNIT: t.Boolean(),
      Printing_Note: t.Boolean(),
      STXI_Printing_Note: t.Boolean(),
      PERSONNEL: t.Boolean(),
      UNIT_PRICE: t.Boolean(),
      R_QTY: t.Boolean(),
      AG_QTY: t.Boolean(),
      AMOUNT: t.Boolean(),
      COST: t.Boolean(),
      PROFIT_LOSS: t.Boolean(),
      P_L: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const biodesignsaleInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const biodesignsaleOrderBy = t.Partial(
  t.Object(
    {
      ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      DATE: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      DOC_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      C__REF: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      CUSTOMER: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      C__BUYER: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      C__PAYMENT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      SO_TYPE: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MAT_CAT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MAT_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MAT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      UNIT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Printing_Note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      STXI_Printing_Note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PERSONNEL: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      UNIT_PRICE: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      R_QTY: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      AG_QTY: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      AMOUNT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      COST: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PROFIT_LOSS: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      P_L: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const biodesignsale = t.Composite(
  [biodesignsalePlain, biodesignsaleRelations],
  { additionalProperties: false },
);

export const biodesignsaleInputCreate = t.Composite(
  [biodesignsalePlainInputCreate, biodesignsaleRelationsInputCreate],
  { additionalProperties: false },
);

export const biodesignsaleInputUpdate = t.Composite(
  [biodesignsalePlainInputUpdate, biodesignsaleRelationsInputUpdate],
  { additionalProperties: false },
);
