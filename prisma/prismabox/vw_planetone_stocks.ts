import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_planetone_stocksPlain = t.Object(
  {
    company_name: __nullable__(t.String()),
    MATUnit: __nullable__(t.String()),
    Lot: __nullable__(t.String()),
    location_id: __nullable__(t.String()),
    qty_balance: __nullable__(t.Integer()),
    qty_ready: __nullable__(t.Integer()),
    qty_pn_out: __nullable__(t.Integer()),
    qty_total: __nullable__(t.Integer()),
    unit: __nullable__(t.String()),
    expired: __nullable__(t.String()),
    available_life: __nullable__(t.Integer()),
    unitcost: __nullable__(t.Number()),
    costbalance: __nullable__(t.Number()),
    po_no: __nullable__(t.String()),
    po_date: __nullable__(t.String()),
    po_referrence: __nullable__(t.String()),
    purchaser_personnel: __nullable__(t.String()),
    pr_no: __nullable__(t.String()),
    mat_in: __nullable__(t.String()),
    mat_in_referrence: __nullable__(t.String()),
    invoice_id_mat_in: __nullable__(t.String()),
    received_datetime: __nullable__(t.String()),
    qty_in_p_ready: __nullable__(t.Integer()),
    qty_in_p_ready_m_pnout: __nullable__(t.Integer()),
    age: __nullable__(t.Integer()),
    product_life: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const vw_planetone_stocksRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_planetone_stocksPlainInputCreate = t.Object(
  {
    company_name: t.Optional(__nullable__(t.String())),
    MATUnit: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    qty_balance: t.Optional(__nullable__(t.Integer())),
    qty_ready: t.Optional(__nullable__(t.Integer())),
    qty_pn_out: t.Optional(__nullable__(t.Integer())),
    qty_total: t.Optional(__nullable__(t.Integer())),
    unit: t.Optional(__nullable__(t.String())),
    expired: t.Optional(__nullable__(t.String())),
    available_life: t.Optional(__nullable__(t.Integer())),
    unitcost: t.Optional(__nullable__(t.Number())),
    costbalance: t.Optional(__nullable__(t.Number())),
    po_no: t.Optional(__nullable__(t.String())),
    po_date: t.Optional(__nullable__(t.String())),
    po_referrence: t.Optional(__nullable__(t.String())),
    purchaser_personnel: t.Optional(__nullable__(t.String())),
    pr_no: t.Optional(__nullable__(t.String())),
    mat_in: t.Optional(__nullable__(t.String())),
    mat_in_referrence: t.Optional(__nullable__(t.String())),
    invoice_id_mat_in: t.Optional(__nullable__(t.String())),
    received_datetime: t.Optional(__nullable__(t.String())),
    qty_in_p_ready: t.Optional(__nullable__(t.Integer())),
    qty_in_p_ready_m_pnout: t.Optional(__nullable__(t.Integer())),
    age: t.Optional(__nullable__(t.Integer())),
    product_life: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_planetone_stocksPlainInputUpdate = t.Object(
  {
    company_name: t.Optional(__nullable__(t.String())),
    MATUnit: t.Optional(__nullable__(t.String())),
    Lot: t.Optional(__nullable__(t.String())),
    qty_balance: t.Optional(__nullable__(t.Integer())),
    qty_ready: t.Optional(__nullable__(t.Integer())),
    qty_pn_out: t.Optional(__nullable__(t.Integer())),
    qty_total: t.Optional(__nullable__(t.Integer())),
    unit: t.Optional(__nullable__(t.String())),
    expired: t.Optional(__nullable__(t.String())),
    available_life: t.Optional(__nullable__(t.Integer())),
    unitcost: t.Optional(__nullable__(t.Number())),
    costbalance: t.Optional(__nullable__(t.Number())),
    po_no: t.Optional(__nullable__(t.String())),
    po_date: t.Optional(__nullable__(t.String())),
    po_referrence: t.Optional(__nullable__(t.String())),
    purchaser_personnel: t.Optional(__nullable__(t.String())),
    pr_no: t.Optional(__nullable__(t.String())),
    mat_in: t.Optional(__nullable__(t.String())),
    mat_in_referrence: t.Optional(__nullable__(t.String())),
    invoice_id_mat_in: t.Optional(__nullable__(t.String())),
    received_datetime: t.Optional(__nullable__(t.String())),
    qty_in_p_ready: t.Optional(__nullable__(t.Integer())),
    qty_in_p_ready_m_pnout: t.Optional(__nullable__(t.Integer())),
    age: t.Optional(__nullable__(t.Integer())),
    product_life: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_planetone_stocksRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_planetone_stocksRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_planetone_stocksWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          company_name: t.String(),
          MATUnit: t.String(),
          Lot: t.String(),
          location_id: t.String(),
          qty_balance: t.Integer(),
          qty_ready: t.Integer(),
          qty_pn_out: t.Integer(),
          qty_total: t.Integer(),
          unit: t.String(),
          expired: t.String(),
          available_life: t.Integer(),
          unitcost: t.Number(),
          costbalance: t.Number(),
          po_no: t.String(),
          po_date: t.String(),
          po_referrence: t.String(),
          purchaser_personnel: t.String(),
          pr_no: t.String(),
          mat_in: t.String(),
          mat_in_referrence: t.String(),
          invoice_id_mat_in: t.String(),
          received_datetime: t.String(),
          qty_in_p_ready: t.Integer(),
          qty_in_p_ready_m_pnout: t.Integer(),
          age: t.Integer(),
          product_life: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_planetone_stocks" },
  ),
);

export const vw_planetone_stocksWhereUnique = t.Recursive(
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
              company_name: t.String(),
              MATUnit: t.String(),
              Lot: t.String(),
              location_id: t.String(),
              qty_balance: t.Integer(),
              qty_ready: t.Integer(),
              qty_pn_out: t.Integer(),
              qty_total: t.Integer(),
              unit: t.String(),
              expired: t.String(),
              available_life: t.Integer(),
              unitcost: t.Number(),
              costbalance: t.Number(),
              po_no: t.String(),
              po_date: t.String(),
              po_referrence: t.String(),
              purchaser_personnel: t.String(),
              pr_no: t.String(),
              mat_in: t.String(),
              mat_in_referrence: t.String(),
              invoice_id_mat_in: t.String(),
              received_datetime: t.String(),
              qty_in_p_ready: t.Integer(),
              qty_in_p_ready_m_pnout: t.Integer(),
              age: t.Integer(),
              product_life: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_planetone_stocks" },
);

export const vw_planetone_stocksSelect = t.Partial(
  t.Object(
    {
      company_name: t.Boolean(),
      MATUnit: t.Boolean(),
      Lot: t.Boolean(),
      location_id: t.Boolean(),
      qty_balance: t.Boolean(),
      qty_ready: t.Boolean(),
      qty_pn_out: t.Boolean(),
      qty_total: t.Boolean(),
      unit: t.Boolean(),
      expired: t.Boolean(),
      available_life: t.Boolean(),
      unitcost: t.Boolean(),
      costbalance: t.Boolean(),
      po_no: t.Boolean(),
      po_date: t.Boolean(),
      po_referrence: t.Boolean(),
      purchaser_personnel: t.Boolean(),
      pr_no: t.Boolean(),
      mat_in: t.Boolean(),
      mat_in_referrence: t.Boolean(),
      invoice_id_mat_in: t.Boolean(),
      received_datetime: t.Boolean(),
      qty_in_p_ready: t.Boolean(),
      qty_in_p_ready_m_pnout: t.Boolean(),
      age: t.Boolean(),
      product_life: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_planetone_stocksInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_planetone_stocksOrderBy = t.Partial(
  t.Object(
    {
      company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MATUnit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Lot: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_balance: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_ready: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_pn_out: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_total: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      expired: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      available_life: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unitcost: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      costbalance: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      po_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      po_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      po_referrence: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      purchaser_personnel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pr_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_in: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_in_referrence: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      invoice_id_mat_in: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      received_datetime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_in_p_ready: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty_in_p_ready_m_pnout: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      age: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_life: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_planetone_stocks = t.Composite(
  [vw_planetone_stocksPlain, vw_planetone_stocksRelations],
  { additionalProperties: false },
);

export const vw_planetone_stocksInputCreate = t.Composite(
  [
    vw_planetone_stocksPlainInputCreate,
    vw_planetone_stocksRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_planetone_stocksInputUpdate = t.Composite(
  [
    vw_planetone_stocksPlainInputUpdate,
    vw_planetone_stocksRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
