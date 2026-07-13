import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const invoiceheadPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    company_name: __nullable__(t.String()),
    Entity_ID: t.String(),
    Entity_Name: __nullable__(t.String()),
    Address1: __nullable__(t.String()),
    Address2: __nullable__(t.String()),
    Province: __nullable__(t.String()),
    Country: __nullable__(t.String()),
    PostCode: __nullable__(t.String()),
    Tax_Number: __nullable__(t.String()),
    Branch_Tax_Name: __nullable__(t.String()),
    Branch_Tax_ID: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const invoiceheadRelations = t.Object(
  {
    IM: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          docid: t.String(),
          customer: __nullable__(t.String()),
          note: __nullable__(t.String()),
          create_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
          im: __nullable__(t.String()),
          customer_name: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          updated_at: __nullable__(t.Date()),
          update_by: __nullable__(t.String()),
          history: __nullable__(t.Any()),
          type: __nullable__(t.String()),
          delivery_address_id: __nullable__(t.String()),
          invoice_id: __nullable__(t.Integer()),
          shipping_address: __nullable__(t.String()),
          has_fifo_violation: __nullable__(t.Boolean()),
          price_valid_days: __nullable__(t.String()),
          delivery_days: __nullable__(t.String()),
          payment_days: __nullable__(t.String()),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          prefix: __nullable__(t.String()),
          need_smapprove: __nullable__(t.Boolean()),
          sopt_id: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
      { additionalProperties: false },
    ),
    PO: t.Array(
      t.Object(
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
      { additionalProperties: false },
    ),
    customer_invoice: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          invoice_id: __nullable__(t.Integer()),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const invoiceheadPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    company_name: t.Optional(__nullable__(t.String())),
    Entity_Name: t.Optional(__nullable__(t.String())),
    Address1: t.Optional(__nullable__(t.String())),
    Address2: t.Optional(__nullable__(t.String())),
    Province: t.Optional(__nullable__(t.String())),
    Country: t.Optional(__nullable__(t.String())),
    PostCode: t.Optional(__nullable__(t.String())),
    Tax_Number: t.Optional(__nullable__(t.String())),
    Branch_Tax_Name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const invoiceheadPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    company_name: t.Optional(__nullable__(t.String())),
    Entity_Name: t.Optional(__nullable__(t.String())),
    Address1: t.Optional(__nullable__(t.String())),
    Address2: t.Optional(__nullable__(t.String())),
    Province: t.Optional(__nullable__(t.String())),
    Country: t.Optional(__nullable__(t.String())),
    PostCode: t.Optional(__nullable__(t.String())),
    Tax_Number: t.Optional(__nullable__(t.String())),
    Branch_Tax_Name: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const invoiceheadRelationsInputCreate = t.Object(
  {
    IM: t.Optional(
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
    PO: t.Optional(
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
    customer_invoice: t.Optional(
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

export const invoiceheadRelationsInputUpdate = t.Partial(
  t.Object(
    {
      IM: t.Partial(
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
      PO: t.Partial(
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
      customer_invoice: t.Partial(
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

export const invoiceheadWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          company_name: t.String(),
          Entity_ID: t.String(),
          Entity_Name: t.String(),
          Address1: t.String(),
          Address2: t.String(),
          Province: t.String(),
          Country: t.String(),
          PostCode: t.String(),
          Tax_Number: t.String(),
          Branch_Tax_Name: t.String(),
          Branch_Tax_ID: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "invoicehead" },
  ),
);

export const invoiceheadWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              company_name: t.String(),
              Entity_ID: t.String(),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({ company_name: t.String() }),
            t.Object({ Entity_ID: t.String() }),
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
              company_name: t.String(),
              Entity_ID: t.String(),
              Entity_Name: t.String(),
              Address1: t.String(),
              Address2: t.String(),
              Province: t.String(),
              Country: t.String(),
              PostCode: t.String(),
              Tax_Number: t.String(),
              Branch_Tax_Name: t.String(),
              Branch_Tax_ID: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "invoicehead" },
);

export const invoiceheadSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      company_name: t.Boolean(),
      Entity_ID: t.Boolean(),
      Entity_Name: t.Boolean(),
      Address1: t.Boolean(),
      Address2: t.Boolean(),
      Province: t.Boolean(),
      Country: t.Boolean(),
      PostCode: t.Boolean(),
      Tax_Number: t.Boolean(),
      Branch_Tax_Name: t.Boolean(),
      Branch_Tax_ID: t.Boolean(),
      IM: t.Boolean(),
      PO: t.Boolean(),
      customer_invoice: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const invoiceheadInclude = t.Partial(
  t.Object(
    {
      IM: t.Boolean(),
      PO: t.Boolean(),
      customer_invoice: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const invoiceheadOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Entity_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Entity_Name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Address1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Address2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Province: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Country: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      PostCode: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Tax_Number: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Branch_Tax_Name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Branch_Tax_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const invoicehead = t.Composite(
  [invoiceheadPlain, invoiceheadRelations],
  { additionalProperties: false },
);

export const invoiceheadInputCreate = t.Composite(
  [invoiceheadPlainInputCreate, invoiceheadRelationsInputCreate],
  { additionalProperties: false },
);

export const invoiceheadInputUpdate = t.Composite(
  [invoiceheadPlainInputUpdate, invoiceheadRelationsInputUpdate],
  { additionalProperties: false },
);
