import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const po_goodsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    docid: t.Integer(),
    mat_cat: __nullable__(t.String()),
    mat_name: __nullable__(t.String()),
    qty: t.Integer(),
    price: t.Number(),
    brand: __nullable__(t.String()),
    int_matcat: __nullable__(t.String()),
    minprice: __nullable__(t.Number()),
    productdata_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const po_goodsRelations = t.Object(
  {
    PO: t.Object(
      {
        id: t.Integer(),
        created_at: t.Date(),
        docid: t.String(),
        customer: __nullable__(t.String()),
        note: __nullable__(t.String()),
        create_by: __nullable__(t.String()),
        status: __nullable__(t.String()),
        PQ: __nullable__(t.String()),
        PGT: __nullable__(t.String()),
        history: __nullable__(t.Any()),
        customer_name: __nullable__(t.String()),
        tel: __nullable__(t.String()),
        updated_at: __nullable__(t.Date()),
        update_by: __nullable__(t.String()),
        delivery_address_id: __nullable__(t.String()),
        invoice_id: __nullable__(t.Integer()),
        shipping_address: __nullable__(t.String()),
      },
      { additionalProperties: false },
    ),
    Productdata: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          MM_RPTMAT_MATUnit_ID: __nullable__(t.String()),
          MM_RPTMAT_MAT_ID: __nullable__(t.String()),
          MM_RPTMAT_MAT_Name: __nullable__(t.String()),
          MM_RPTMAT_Displayed_Unit_Category: __nullable__(t.String()),
          MM_RPTMAT_MAT_Category: __nullable__(t.String()),
          MM_RPTMAT_Status: __nullable__(t.String()),
          MM_RPTMAT_Default_Unit_Size: __nullable__(t.String()),
          MM_RPTMAT_Qty_Unit: __nullable__(t.String()),
          MM_RPTMAT_AGQty_Unit: __nullable__(t.String()),
          MM_RPTMAT_Description: __nullable__(t.String()),
          priceonline: __nullable__(t.Number()),
          detail: __nullable__(t.String()),
          tag: __nullable__(t.String()),
          productpic: __nullable__(t.String()),
          company_id: __nullable__(t.Integer()),
          rich_description: __nullable__(t.String()),
          brand: __nullable__(t.Integer()),
          MM_RPTMAT_MAT_Type: __nullable__(t.Integer()),
          onlinestatus: __nullable__(t.Boolean()),
          product_manager: __nullable__(t.String()),
          type_l2_id: __nullable__(t.Integer()),
          type_l3_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const po_goodsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Integer(),
    price: t.Number(),
    brand: t.Optional(__nullable__(t.String())),
    int_matcat: t.Optional(__nullable__(t.String())),
    minprice: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const po_goodsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    mat_cat: t.Optional(__nullable__(t.String())),
    mat_name: t.Optional(__nullable__(t.String())),
    qty: t.Optional(t.Integer()),
    price: t.Optional(t.Number()),
    brand: t.Optional(__nullable__(t.String())),
    int_matcat: t.Optional(__nullable__(t.String())),
    minprice: t.Optional(__nullable__(t.Number())),
  },
  { additionalProperties: false },
);

export const po_goodsRelationsInputCreate = t.Object(
  {
    PO: t.Object(
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
    Productdata: t.Optional(
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

export const po_goodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      PO: t.Object(
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
      Productdata: t.Partial(
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

export const po_goodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.Integer(),
          mat_cat: t.String(),
          mat_name: t.String(),
          qty: t.Integer(),
          price: t.Number(),
          brand: t.String(),
          int_matcat: t.String(),
          minprice: t.Number(),
          productdata_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "po_goods" },
  ),
);

export const po_goodsWhereUnique = t.Recursive(
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
              docid: t.Integer(),
              mat_cat: t.String(),
              mat_name: t.String(),
              qty: t.Integer(),
              price: t.Number(),
              brand: t.String(),
              int_matcat: t.String(),
              minprice: t.Number(),
              productdata_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "po_goods" },
);

export const po_goodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      docid: t.Boolean(),
      mat_cat: t.Boolean(),
      mat_name: t.Boolean(),
      qty: t.Boolean(),
      price: t.Boolean(),
      brand: t.Boolean(),
      int_matcat: t.Boolean(),
      minprice: t.Boolean(),
      productdata_id: t.Boolean(),
      PO: t.Boolean(),
      Productdata: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const po_goodsInclude = t.Partial(
  t.Object(
    { PO: t.Boolean(), Productdata: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const po_goodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      docid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_cat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      int_matcat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      minprice: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productdata_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const po_goods = t.Composite([po_goodsPlain, po_goodsRelations], {
  additionalProperties: false,
});

export const po_goodsInputCreate = t.Composite(
  [po_goodsPlainInputCreate, po_goodsRelationsInputCreate],
  { additionalProperties: false },
);

export const po_goodsInputUpdate = t.Composite(
  [po_goodsPlainInputUpdate, po_goodsRelationsInputUpdate],
  { additionalProperties: false },
);
