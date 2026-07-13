import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const matcatPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    matcat: __nullable__(t.String()),
    brand: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const matcatRelations = t.Object(
  {
    brand_matcat_brandTobrand: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          brand: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          country: __nullable__(t.String()),
          pic: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const matcatPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    matcat: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const matcatPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    matcat: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const matcatRelationsInputCreate = t.Object(
  {
    brand_matcat_brandTobrand: t.Optional(
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

export const matcatRelationsInputUpdate = t.Partial(
  t.Object(
    {
      brand_matcat_brandTobrand: t.Partial(
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

export const matcatWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          matcat: t.String(),
          brand: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "matcat" },
  ),
);

export const matcatWhereUnique = t.Recursive(
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
              created_at: t.Date(),
              matcat: t.String(),
              brand: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "matcat" },
);

export const matcatSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      matcat: t.Boolean(),
      brand: t.Boolean(),
      brand_matcat_brandTobrand: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const matcatInclude = t.Partial(
  t.Object(
    { brand_matcat_brandTobrand: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const matcatOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      matcat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const matcat = t.Composite([matcatPlain, matcatRelations], {
  additionalProperties: false,
});

export const matcatInputCreate = t.Composite(
  [matcatPlainInputCreate, matcatRelationsInputCreate],
  { additionalProperties: false },
);

export const matcatInputUpdate = t.Composite(
  [matcatPlainInputUpdate, matcatRelationsInputUpdate],
  { additionalProperties: false },
);
