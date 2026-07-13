import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const headPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    name: __nullable__(t.String()),
    start: __nullable__(t.Date()),
    end: __nullable__(t.String()),
    pichead: __nullable__(t.String()),
    picfull: __nullable__(t.String()),
    detail: __nullable__(t.String()),
    page: __nullable__(t.String()),
    link: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const headRelations = t.Object(
  {
    IO: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.String(),
          customer: __nullable__(t.String()),
          note: __nullable__(t.String()),
          create_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
          SR: __nullable__(t.String()),
          SX: __nullable__(t.String()),
          customer_name: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          updated_at: __nullable__(t.Date()),
          update_by: __nullable__(t.String()),
          history: __nullable__(t.Any()),
          delivery_address_id: __nullable__(t.String()),
          invoice_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const headPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    name: t.Optional(__nullable__(t.String())),
    start: t.Optional(__nullable__(t.Date())),
    end: t.Optional(__nullable__(t.String())),
    pichead: t.Optional(__nullable__(t.String())),
    picfull: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    page: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const headPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    name: t.Optional(__nullable__(t.String())),
    start: t.Optional(__nullable__(t.Date())),
    end: t.Optional(__nullable__(t.String())),
    pichead: t.Optional(__nullable__(t.String())),
    picfull: t.Optional(__nullable__(t.String())),
    detail: t.Optional(__nullable__(t.String())),
    page: t.Optional(__nullable__(t.String())),
    link: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const headRelationsInputCreate = t.Object(
  {
    IO: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const headRelationsInputUpdate = t.Partial(
  t.Object(
    {
      IO: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const headWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          name: t.String(),
          start: t.Date(),
          end: t.String(),
          pichead: t.String(),
          picfull: t.String(),
          detail: t.String(),
          page: t.String(),
          link: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "head" },
  ),
);

export const headWhereUnique = t.Recursive(
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
              name: t.String(),
              start: t.Date(),
              end: t.String(),
              pichead: t.String(),
              picfull: t.String(),
              detail: t.String(),
              page: t.String(),
              link: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "head" },
);

export const headSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      name: t.Boolean(),
      start: t.Boolean(),
      end: t.Boolean(),
      pichead: t.Boolean(),
      picfull: t.Boolean(),
      detail: t.Boolean(),
      page: t.Boolean(),
      link: t.Boolean(),
      IO: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const headInclude = t.Partial(
  t.Object(
    { IO: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const headOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      start: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      end: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pichead: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      picfull: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      page: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      link: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const head = t.Composite([headPlain, headRelations], {
  additionalProperties: false,
});

export const headInputCreate = t.Composite(
  [headPlainInputCreate, headRelationsInputCreate],
  { additionalProperties: false },
);

export const headInputUpdate = t.Composite(
  [headPlainInputUpdate, headRelationsInputUpdate],
  { additionalProperties: false },
);
