import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const product_salePlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    cat: __nullable__(t.String()),
    mat: __nullable__(t.String()),
    min_price: __nullable__(t.Number()),
    productdata_id: __nullable__(t.Integer()),
    attributes_hierarchy: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const product_saleRelations = t.Object(
  {
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const product_salePlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    cat: t.Optional(__nullable__(t.String())),
    mat: t.Optional(__nullable__(t.String())),
    min_price: t.Optional(__nullable__(t.Number())),
    attributes_hierarchy: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const product_salePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    cat: t.Optional(__nullable__(t.String())),
    mat: t.Optional(__nullable__(t.String())),
    min_price: t.Optional(__nullable__(t.Number())),
    attributes_hierarchy: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const product_saleRelationsInputCreate = t.Object(
  {
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const product_saleRelationsInputUpdate = t.Partial(
  t.Object(
    {
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
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const product_saleWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          cat: t.String(),
          mat: t.String(),
          min_price: t.Number(),
          productdata_id: t.Integer(),
          attributes_hierarchy: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
    { $id: "product_sale" },
  ),
);

export const product_saleWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              cat: t.String(),
              cat_mat: t.Object(
                { cat: t.String(), mat: t.String() },
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
            t.Object({ cat: t.String() }),
            t.Object({
              cat_mat: t.Object(
                { cat: t.String(), mat: t.String() },
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
              cat: t.String(),
              mat: t.String(),
              min_price: t.Number(),
              productdata_id: t.Integer(),
              attributes_hierarchy: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "product_sale" },
);

export const product_saleSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      cat: t.Boolean(),
      mat: t.Boolean(),
      min_price: t.Boolean(),
      productdata_id: t.Boolean(),
      attributes_hierarchy: t.Boolean(),
      Productdata: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const product_saleInclude = t.Partial(
  t.Object(
    { Productdata: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const product_saleOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mat: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      min_price: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productdata_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attributes_hierarchy: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const product_sale = t.Composite(
  [product_salePlain, product_saleRelations],
  { additionalProperties: false },
);

export const product_saleInputCreate = t.Composite(
  [product_salePlainInputCreate, product_saleRelationsInputCreate],
  { additionalProperties: false },
);

export const product_saleInputUpdate = t.Composite(
  [product_salePlainInputUpdate, product_saleRelationsInputUpdate],
  { additionalProperties: false },
);
