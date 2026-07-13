import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_invoice_header_planetonePlain = t.Object(
  {
    id: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
    company_name: __nullable__(t.String()),
    Entity_ID: __nullable__(t.String()),
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

export const vw_invoice_header_planetoneRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_invoice_header_planetonePlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
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

export const vw_invoice_header_planetonePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
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

export const vw_invoice_header_planetoneRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_invoice_header_planetoneRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_invoice_header_planetoneWhere = t.Partial(
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
    { $id: "vw_invoice_header_planetone" },
  ),
);

export const vw_invoice_header_planetoneWhereUnique = t.Recursive(
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
  { $id: "vw_invoice_header_planetone" },
);

export const vw_invoice_header_planetoneSelect = t.Partial(
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
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_invoice_header_planetoneInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_invoice_header_planetoneOrderBy = t.Partial(
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

export const vw_invoice_header_planetone = t.Composite(
  [vw_invoice_header_planetonePlain, vw_invoice_header_planetoneRelations],
  { additionalProperties: false },
);

export const vw_invoice_header_planetoneInputCreate = t.Composite(
  [
    vw_invoice_header_planetonePlainInputCreate,
    vw_invoice_header_planetoneRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_invoice_header_planetoneInputUpdate = t.Composite(
  [
    vw_invoice_header_planetonePlainInputUpdate,
    vw_invoice_header_planetoneRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
