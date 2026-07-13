import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const gibthaisalePlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    DATE: __nullable__(t.String()),
    DOC_ID: __nullable__(t.String()),
    C__REF: __nullable__(t.String()),
    CUSTOMER: __nullable__(t.String()),
    C__BUYER: __nullable__(t.String()),
    SO_TYPE: __nullable__(t.String()),
    MAT_CAT: __nullable__(t.String()),
    MAT_ID: __nullable__(t.String()),
    MAT: __nullable__(t.String()),
    UNIT: __nullable__(t.String()),
    Printing_Note: __nullable__(t.String()),
    STXI_Printing_Note: __nullable__(t.String()),
    PERSONNEL: __nullable__(t.String()),
    UNIT_PRICE: __nullable__(t.Number()),
    R_QTY: __nullable__(t.Number()),
    AG_QTY: __nullable__(t.Number()),
    AMOUNT: __nullable__(t.Number()),
    COST: __nullable__(t.Number()),
    PROFIT_LOSS: __nullable__(t.Number()),
    P_L: __nullable__(t.Number()),
    C__PAYMENT: __nullable__(t.String()),
    link: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const gibthaisaleRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const gibthaisalePlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    DATE: t.Optional(__nullable__(t.String())),
    C__REF: t.Optional(__nullable__(t.String())),
    CUSTOMER: t.Optional(__nullable__(t.String())),
    C__BUYER: t.Optional(__nullable__(t.String())),
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
    AMOUNT: t.Optional(__nullable__(t.Number())),
    COST: t.Optional(__nullable__(t.Number())),
    PROFIT_LOSS: t.Optional(__nullable__(t.Number())),
    P_L: t.Optional(__nullable__(t.Number())),
    C__PAYMENT: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const gibthaisalePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    DATE: t.Optional(__nullable__(t.String())),
    C__REF: t.Optional(__nullable__(t.String())),
    CUSTOMER: t.Optional(__nullable__(t.String())),
    C__BUYER: t.Optional(__nullable__(t.String())),
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
    AMOUNT: t.Optional(__nullable__(t.Number())),
    COST: t.Optional(__nullable__(t.Number())),
    PROFIT_LOSS: t.Optional(__nullable__(t.Number())),
    P_L: t.Optional(__nullable__(t.Number())),
    C__PAYMENT: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const gibthaisaleRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const gibthaisaleRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const gibthaisaleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          DATE: t.String(),
          DOC_ID: t.String(),
          C__REF: t.String(),
          CUSTOMER: t.String(),
          C__BUYER: t.String(),
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
          C__PAYMENT: t.String(),
          link: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
    { $id: "gibthaisale" },
  ),
);

export const gibthaisaleWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              DOC_ID_MAT_ID_AMOUNT_COST: t.Object(
                {
                  DOC_ID: t.String(),
                  MAT_ID: t.String(),
                  AMOUNT: t.Number(),
                  COST: t.Number(),
                },
                { additionalProperties: false },
              ),
            },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              DOC_ID_MAT_ID_AMOUNT_COST: t.Object(
                {
                  DOC_ID: t.String(),
                  MAT_ID: t.String(),
                  AMOUNT: t.Number(),
                  COST: t.Number(),
                },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
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
              created_at: t.Date(),
              DATE: t.String(),
              DOC_ID: t.String(),
              C__REF: t.String(),
              CUSTOMER: t.String(),
              C__BUYER: t.String(),
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
              C__PAYMENT: t.String(),
              link: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "gibthaisale" },
);

export const gibthaisaleSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      DATE: t.Boolean(),
      DOC_ID: t.Boolean(),
      C__REF: t.Boolean(),
      CUSTOMER: t.Boolean(),
      C__BUYER: t.Boolean(),
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
      C__PAYMENT: t.Boolean(),
      link: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const gibthaisaleInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const gibthaisaleOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
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
      C__PAYMENT: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      link: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const gibthaisale = t.Composite(
  [gibthaisalePlain, gibthaisaleRelations],
  { additionalProperties: false },
);

export const gibthaisaleInputCreate = t.Composite(
  [gibthaisalePlainInputCreate, gibthaisaleRelationsInputCreate],
  { additionalProperties: false },
);

export const gibthaisaleInputUpdate = t.Composite(
  [gibthaisalePlainInputUpdate, gibthaisaleRelationsInputUpdate],
  { additionalProperties: false },
);
