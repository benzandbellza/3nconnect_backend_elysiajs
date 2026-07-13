import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const sales_leadsPlain = t.Object(
  {
    id: t.Integer(),
    conversation_id: __nullable__(t.String()),
    contact_name: __nullable__(t.String()),
    platform: __nullable__(t.String()),
    product_interest: __nullable__(t.String()),
    status: t.String(),
    note: __nullable__(t.String()),
    sale_amount: __nullable__(t.Number()),
    staff_name: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
  },
  { additionalProperties: false },
);

export const sales_leadsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const sales_leadsPlainInputCreate = t.Object(
  {
    contact_name: t.Optional(__nullable__(t.String())),
    platform: t.Optional(__nullable__(t.String())),
    product_interest: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    note: t.Optional(__nullable__(t.String())),
    sale_amount: t.Optional(__nullable__(t.Number())),
    staff_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const sales_leadsPlainInputUpdate = t.Object(
  {
    contact_name: t.Optional(__nullable__(t.String())),
    platform: t.Optional(__nullable__(t.String())),
    product_interest: t.Optional(__nullable__(t.String())),
    status: t.Optional(t.String()),
    note: t.Optional(__nullable__(t.String())),
    sale_amount: t.Optional(__nullable__(t.Number())),
    staff_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
  },
  { additionalProperties: false },
);

export const sales_leadsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const sales_leadsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const sales_leadsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          conversation_id: t.String(),
          contact_name: t.String(),
          platform: t.String(),
          product_interest: t.String(),
          status: t.String(),
          note: t.String(),
          sale_amount: t.Number(),
          staff_name: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "sales_leads" },
  ),
);

export const sales_leadsWhereUnique = t.Recursive(
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
              conversation_id: t.String(),
              contact_name: t.String(),
              platform: t.String(),
              product_interest: t.String(),
              status: t.String(),
              note: t.String(),
              sale_amount: t.Number(),
              staff_name: t.String(),
              created_at: t.Date(),
              updated_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "sales_leads" },
);

export const sales_leadsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      conversation_id: t.Boolean(),
      contact_name: t.Boolean(),
      platform: t.Boolean(),
      product_interest: t.Boolean(),
      status: t.Boolean(),
      note: t.Boolean(),
      sale_amount: t.Boolean(),
      staff_name: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const sales_leadsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const sales_leadsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      conversation_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contact_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      platform: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_interest: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sale_amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      staff_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const sales_leads = t.Composite(
  [sales_leadsPlain, sales_leadsRelations],
  { additionalProperties: false },
);

export const sales_leadsInputCreate = t.Composite(
  [sales_leadsPlainInputCreate, sales_leadsRelationsInputCreate],
  { additionalProperties: false },
);

export const sales_leadsInputUpdate = t.Composite(
  [sales_leadsPlainInputUpdate, sales_leadsRelationsInputUpdate],
  { additionalProperties: false },
);
