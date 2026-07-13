import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_likesPlain = t.Object(
  {
    id: t.Integer(),
    product_id: t.Integer(),
    user_id: t.String(),
    created_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const product_likesRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const product_likesPlainInputCreate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const product_likesPlainInputUpdate = t.Object(
  { created_at: t.Optional(__nullable__(t.Date())) },
  { additionalProperties: false },
);

export const product_likesRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const product_likesRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const product_likesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          product_id: t.Integer(),
          user_id: t.String(),
          created_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "product_likes" },
  ),
);

export const product_likesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              product_id_user_id: t.Object(
                { product_id: t.Integer(), user_id: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              product_id_user_id: t.Object(
                { product_id: t.Integer(), user_id: t.String() },
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
              product_id: t.Integer(),
              user_id: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "product_likes" },
);

export const product_likesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      product_id: t.Boolean(),
      user_id: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const product_likesInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const product_likesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const product_likes = t.Composite(
  [product_likesPlain, product_likesRelations],
  { additionalProperties: false },
);

export const product_likesInputCreate = t.Composite(
  [product_likesPlainInputCreate, product_likesRelationsInputCreate],
  { additionalProperties: false },
);

export const product_likesInputUpdate = t.Composite(
  [product_likesPlainInputUpdate, product_likesRelationsInputUpdate],
  { additionalProperties: false },
);
