import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const producttype_level2Plain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    type: __nullable__(t.String()),
    active: __nullable__(t.Boolean()),
    producttype: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const producttype_level2Relations = t.Object(
  {
    Productdata: t.Array(
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
      { additionalProperties: false },
    ),
    producttype_producttype_level2_producttypeToproducttype: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          type: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
        },
        { additionalProperties: false },
      ),
    ),
    producttype_level3_producttype_level3_producttype_level2Toproducttype_level2:
      t.Array(
        t.Object(
          {
            id: t.Integer(),
            created_at: t.Date(),
            type: __nullable__(t.String()),
            active: __nullable__(t.Boolean()),
            producttype_level2: __nullable__(t.Integer()),
          },
          {
            additionalProperties: false,
            description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
          },
        ),
        { additionalProperties: false },
      ),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const producttype_level2PlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    type: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    producttype: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const producttype_level2PlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    type: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    producttype: t.Optional(__nullable__(t.Integer())),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const producttype_level2RelationsInputCreate = t.Object(
  {
    Productdata: t.Optional(
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
    producttype_producttype_level2_producttypeToproducttype: t.Optional(
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
    producttype_level3_producttype_level3_producttype_level2Toproducttype_level2:
      t.Optional(
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
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const producttype_level2RelationsInputUpdate = t.Partial(
  t.Object(
    {
      Productdata: t.Partial(
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
      producttype_producttype_level2_producttypeToproducttype: t.Partial(
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
      producttype_level3_producttype_level3_producttype_level2Toproducttype_level2:
        t.Partial(
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
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const producttype_level2Where = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          type: t.String(),
          active: t.Boolean(),
          producttype: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
    { $id: "producttype_level2" },
  ),
);

export const producttype_level2WhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
            },
          ),
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
              type: t.String(),
              active: t.Boolean(),
              producttype: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "producttype_level2" },
);

export const producttype_level2Select = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      type: t.Boolean(),
      active: t.Boolean(),
      producttype: t.Boolean(),
      Productdata: t.Boolean(),
      producttype_producttype_level2_producttypeToproducttype: t.Boolean(),
      producttype_level3_producttype_level3_producttype_level2Toproducttype_level2:
        t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const producttype_level2Include = t.Partial(
  t.Object(
    {
      Productdata: t.Boolean(),
      producttype_producttype_level2_producttypeToproducttype: t.Boolean(),
      producttype_level3_producttype_level3_producttype_level2Toproducttype_level2:
        t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const producttype_level2OrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      producttype: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const producttype_level2 = t.Composite(
  [producttype_level2Plain, producttype_level2Relations],
  { additionalProperties: false },
);

export const producttype_level2InputCreate = t.Composite(
  [producttype_level2PlainInputCreate, producttype_level2RelationsInputCreate],
  { additionalProperties: false },
);

export const producttype_level2InputUpdate = t.Composite(
  [producttype_level2PlainInputUpdate, producttype_level2RelationsInputUpdate],
  { additionalProperties: false },
);
