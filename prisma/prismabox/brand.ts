import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const brandPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    brand: __nullable__(t.String()),
    active: __nullable__(t.Boolean()),
    country: __nullable__(t.String()),
    pic: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const brandRelations = t.Object(
  {
    Productdata_Productdata_brandTobrand: t.Array(
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
    addgoods_addgoods_brandTobrand: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          brand: __nullable__(t.Integer()),
          matcatrequest: __nullable__(t.String()),
          matnamerequest: __nullable__(t.String()),
          matcat: __nullable__(t.String()),
          matname: __nullable__(t.String()),
          request_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
          add_id: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    matcat_matcat_brandTobrand: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          matcat: __nullable__(t.String()),
          brand: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const brandPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    brand: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    country: t.Optional(__nullable__(t.String())),
    pic: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const brandPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    brand: t.Optional(__nullable__(t.String())),
    active: t.Optional(__nullable__(t.Boolean())),
    country: t.Optional(__nullable__(t.String())),
    pic: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const brandRelationsInputCreate = t.Object(
  {
    Productdata_Productdata_brandTobrand: t.Optional(
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
    addgoods_addgoods_brandTobrand: t.Optional(
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
    matcat_matcat_brandTobrand: t.Optional(
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

export const brandRelationsInputUpdate = t.Partial(
  t.Object(
    {
      Productdata_Productdata_brandTobrand: t.Partial(
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
      addgoods_addgoods_brandTobrand: t.Partial(
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
      matcat_matcat_brandTobrand: t.Partial(
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

export const brandWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          brand: t.String(),
          active: t.Boolean(),
          country: t.String(),
          pic: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "brand" },
  ),
);

export const brandWhereUnique = t.Recursive(
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
              brand: t.String(),
              active: t.Boolean(),
              country: t.String(),
              pic: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "brand" },
);

export const brandSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      brand: t.Boolean(),
      active: t.Boolean(),
      country: t.Boolean(),
      pic: t.Boolean(),
      Productdata_Productdata_brandTobrand: t.Boolean(),
      addgoods_addgoods_brandTobrand: t.Boolean(),
      matcat_matcat_brandTobrand: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const brandInclude = t.Partial(
  t.Object(
    {
      Productdata_Productdata_brandTobrand: t.Boolean(),
      addgoods_addgoods_brandTobrand: t.Boolean(),
      matcat_matcat_brandTobrand: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const brandOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      country: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      pic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const brand = t.Composite([brandPlain, brandRelations], {
  additionalProperties: false,
});

export const brandInputCreate = t.Composite(
  [brandPlainInputCreate, brandRelationsInputCreate],
  { additionalProperties: false },
);

export const brandInputUpdate = t.Composite(
  [brandPlainInputUpdate, brandRelationsInputUpdate],
  { additionalProperties: false },
);
