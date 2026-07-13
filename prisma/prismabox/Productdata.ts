import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProductdataPlain = t.Object(
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
);

export const ProductdataRelations = t.Object(
  {
    producttype: __nullable__(
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
    brand_Productdata_brandTobrand: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          brand: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          country: __nullable__(t.String()),
          pic: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    companies: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          name: __nullable__(t.String()),
          active: __nullable__(t.Boolean()),
          companypic: __nullable__(t.String()),
          short: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
    users: __nullable__(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          avatar_url: __nullable__(t.String()),
          is_online: __nullable__(t.Boolean()),
          sharepoint_id: __nullable__(t.Integer()),
          person_id: __nullable__(t.String()),
          email: __nullable__(t.String()),
          line_id: __nullable__(t.String()),
          planetone_id: __nullable__(t.String()),
          tel: __nullable__(t.String()),
          position: __nullable__(t.String()),
          manager: __nullable__(t.String()),
          manager2: __nullable__(t.String()),
          address: __nullable__(t.String()),
          authid: __nullable__(t.String()),
          last_online: __nullable__(t.String()),
          fcm_token: __nullable__(t.String()),
          salesupport: __nullable__(t.String()),
          role: __nullable__(t.String()),
          pdpa_accepted: __nullable__(t.Boolean()),
          pdpa_accepted_at: __nullable__(t.Date()),
          pdpa_version: __nullable__(t.String()),
          department: __nullable__(t.Integer()),
          company: __nullable__(t.Integer()),
          team: __nullable__(t.Integer()),
          is_active: __nullable__(t.Boolean()),
          extra_pages: t.Array(t.String(), { additionalProperties: false }),
          lineid_3nholdingapp: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    producttype_level2: __nullable__(
      t.Object(
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
      ),
    ),
    producttype_level3: __nullable__(
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
    ),
    liststock: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          product: __nullable__(t.Integer()),
          stock: __nullable__(t.Boolean()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    order_product: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          order_id: __nullable__(t.String()),
          product_id: __nullable__(t.Integer()),
          quatity: __nullable__(t.Number()),
          price: __nullable__(t.Number()),
          total_price: __nullable__(t.Number()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    po_goods: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    product_options: t.Array(
      t.Object(
        {
          id: t.Integer(),
          product_id: __nullable__(t.Integer()),
          mat_identity: __nullable__(t.String()),
          option_name: __nullable__(t.String()),
          online_price: __nullable__(t.Number()),
          min_price: __nullable__(t.Number()),
          created_at: __nullable__(t.Date()),
          row_no: __nullable__(t.Integer()),
          updated_at: __nullable__(t.Date()),
          attributes_hierarchy: __nullable__(t.Any()),
          productdata_id: __nullable__(t.Integer()),
          is_stock: __nullable__(t.Boolean()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    product_sale: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
    promotion_gift_promotion_gift_gift_product_idToProductdata: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: __nullable__(t.Date()),
          promotion_id: t.Integer(),
          trigger_product_id: __nullable__(t.Integer()),
          min_quantity: t.Integer(),
          min_amount: __nullable__(t.Number()),
          gift_product_id: t.Integer(),
          gift_quantity: t.Integer(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_gift_promotion_gift_trigger_product_idToProductdata: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: __nullable__(t.Date()),
          promotion_id: t.Integer(),
          trigger_product_id: __nullable__(t.Integer()),
          min_quantity: t.Integer(),
          min_amount: __nullable__(t.Number()),
          gift_product_id: t.Integer(),
          gift_quantity: t.Integer(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion_product: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          promotion_id: __nullable__(t.Integer()),
          product_id: __nullable__(t.Integer()),
          promotion_price: __nullable__(t.Number()),
          qty: __nullable__(t.Number()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ProductdataPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    MM_RPTMAT_MAT_Name: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Displayed_Unit_Category: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_MAT_Category: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Status: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Default_Unit_Size: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Qty_Unit: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_AGQty_Unit: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Description: t.Optional(__nullable__(t.String())),
    priceonline: t.Optional(__nullable__(t.Number())),
    detail: t.Optional(__nullable__(t.String())),
    tag: t.Optional(__nullable__(t.String())),
    productpic: t.Optional(__nullable__(t.String())),
    rich_description: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.Integer())),
    MM_RPTMAT_MAT_Type: t.Optional(__nullable__(t.Integer())),
    onlinestatus: t.Optional(__nullable__(t.Boolean())),
    product_manager: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ProductdataPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    MM_RPTMAT_MAT_Name: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Displayed_Unit_Category: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_MAT_Category: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Status: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Default_Unit_Size: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Qty_Unit: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_AGQty_Unit: t.Optional(__nullable__(t.String())),
    MM_RPTMAT_Description: t.Optional(__nullable__(t.String())),
    priceonline: t.Optional(__nullable__(t.Number())),
    detail: t.Optional(__nullable__(t.String())),
    tag: t.Optional(__nullable__(t.String())),
    productpic: t.Optional(__nullable__(t.String())),
    rich_description: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.Integer())),
    MM_RPTMAT_MAT_Type: t.Optional(__nullable__(t.Integer())),
    onlinestatus: t.Optional(__nullable__(t.Boolean())),
    product_manager: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const ProductdataRelationsInputCreate = t.Object(
  {
    producttype: t.Optional(
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
    brand_Productdata_brandTobrand: t.Optional(
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
    companies: t.Optional(
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
    users: t.Optional(
      t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    producttype_level2: t.Optional(
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
    producttype_level3: t.Optional(
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
    liststock: t.Optional(
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
    order_product: t.Optional(
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
    po_goods: t.Optional(
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
    product_options: t.Optional(
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
    product_sale: t.Optional(
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
    promotion_gift_promotion_gift_gift_product_idToProductdata: t.Optional(
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
    promotion_gift_promotion_gift_trigger_product_idToProductdata: t.Optional(
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
    promotion_product: t.Optional(
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

export const ProductdataRelationsInputUpdate = t.Partial(
  t.Object(
    {
      producttype: t.Partial(
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
      brand_Productdata_brandTobrand: t.Partial(
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
      companies: t.Partial(
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
      users: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
      producttype_level2: t.Partial(
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
      producttype_level3: t.Partial(
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
      liststock: t.Partial(
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
      order_product: t.Partial(
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
      po_goods: t.Partial(
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
      product_options: t.Partial(
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
      product_sale: t.Partial(
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
      promotion_gift_promotion_gift_gift_product_idToProductdata: t.Partial(
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
      promotion_gift_promotion_gift_trigger_product_idToProductdata: t.Partial(
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
      promotion_product: t.Partial(
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

export const ProductdataWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          MM_RPTMAT_MATUnit_ID: t.String(),
          MM_RPTMAT_MAT_ID: t.String(),
          MM_RPTMAT_MAT_Name: t.String(),
          MM_RPTMAT_Displayed_Unit_Category: t.String(),
          MM_RPTMAT_MAT_Category: t.String(),
          MM_RPTMAT_Status: t.String(),
          MM_RPTMAT_Default_Unit_Size: t.String(),
          MM_RPTMAT_Qty_Unit: t.String(),
          MM_RPTMAT_AGQty_Unit: t.String(),
          MM_RPTMAT_Description: t.String(),
          priceonline: t.Number(),
          detail: t.String(),
          tag: t.String(),
          productpic: t.String(),
          company_id: t.Integer(),
          rich_description: t.String(),
          brand: t.Integer(),
          MM_RPTMAT_MAT_Type: t.Integer(),
          onlinestatus: t.Boolean(),
          product_manager: t.String(),
          type_l2_id: t.Integer(),
          type_l3_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "Productdata" },
  ),
);

export const ProductdataWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              MM_RPTMAT_MATUnit_ID: t.String(),
              MM_RPTMAT_MAT_ID: t.String(),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({ MM_RPTMAT_MATUnit_ID: t.String() }),
            t.Object({ MM_RPTMAT_MAT_ID: t.String() }),
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
              MM_RPTMAT_MATUnit_ID: t.String(),
              MM_RPTMAT_MAT_ID: t.String(),
              MM_RPTMAT_MAT_Name: t.String(),
              MM_RPTMAT_Displayed_Unit_Category: t.String(),
              MM_RPTMAT_MAT_Category: t.String(),
              MM_RPTMAT_Status: t.String(),
              MM_RPTMAT_Default_Unit_Size: t.String(),
              MM_RPTMAT_Qty_Unit: t.String(),
              MM_RPTMAT_AGQty_Unit: t.String(),
              MM_RPTMAT_Description: t.String(),
              priceonline: t.Number(),
              detail: t.String(),
              tag: t.String(),
              productpic: t.String(),
              company_id: t.Integer(),
              rich_description: t.String(),
              brand: t.Integer(),
              MM_RPTMAT_MAT_Type: t.Integer(),
              onlinestatus: t.Boolean(),
              product_manager: t.String(),
              type_l2_id: t.Integer(),
              type_l3_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Productdata" },
);

export const ProductdataSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      MM_RPTMAT_MATUnit_ID: t.Boolean(),
      MM_RPTMAT_MAT_ID: t.Boolean(),
      MM_RPTMAT_MAT_Name: t.Boolean(),
      MM_RPTMAT_Displayed_Unit_Category: t.Boolean(),
      MM_RPTMAT_MAT_Category: t.Boolean(),
      MM_RPTMAT_Status: t.Boolean(),
      MM_RPTMAT_Default_Unit_Size: t.Boolean(),
      MM_RPTMAT_Qty_Unit: t.Boolean(),
      MM_RPTMAT_AGQty_Unit: t.Boolean(),
      MM_RPTMAT_Description: t.Boolean(),
      priceonline: t.Boolean(),
      detail: t.Boolean(),
      tag: t.Boolean(),
      productpic: t.Boolean(),
      company_id: t.Boolean(),
      rich_description: t.Boolean(),
      brand: t.Boolean(),
      MM_RPTMAT_MAT_Type: t.Boolean(),
      onlinestatus: t.Boolean(),
      product_manager: t.Boolean(),
      type_l2_id: t.Boolean(),
      type_l3_id: t.Boolean(),
      producttype: t.Boolean(),
      brand_Productdata_brandTobrand: t.Boolean(),
      companies: t.Boolean(),
      users: t.Boolean(),
      producttype_level2: t.Boolean(),
      producttype_level3: t.Boolean(),
      liststock: t.Boolean(),
      order_product: t.Boolean(),
      po_goods: t.Boolean(),
      product_options: t.Boolean(),
      product_sale: t.Boolean(),
      promotion_gift_promotion_gift_gift_product_idToProductdata: t.Boolean(),
      promotion_gift_promotion_gift_trigger_product_idToProductdata:
        t.Boolean(),
      promotion_product: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProductdataInclude = t.Partial(
  t.Object(
    {
      producttype: t.Boolean(),
      brand_Productdata_brandTobrand: t.Boolean(),
      companies: t.Boolean(),
      users: t.Boolean(),
      producttype_level2: t.Boolean(),
      producttype_level3: t.Boolean(),
      liststock: t.Boolean(),
      order_product: t.Boolean(),
      po_goods: t.Boolean(),
      product_options: t.Boolean(),
      product_sale: t.Boolean(),
      promotion_gift_promotion_gift_gift_product_idToProductdata: t.Boolean(),
      promotion_gift_promotion_gift_trigger_product_idToProductdata:
        t.Boolean(),
      promotion_product: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProductdataOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_MATUnit_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_MAT_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_MAT_Name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_Displayed_Unit_Category: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      MM_RPTMAT_MAT_Category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_Status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_Default_Unit_Size: t.Union(
        [t.Literal("asc"), t.Literal("desc")],
        { additionalProperties: false },
      ),
      MM_RPTMAT_Qty_Unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_AGQty_Unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_Description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priceonline: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      detail: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tag: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productpic: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      rich_description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      MM_RPTMAT_MAT_Type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      onlinestatus: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_manager: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type_l2_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type_l3_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Productdata = t.Composite(
  [ProductdataPlain, ProductdataRelations],
  { additionalProperties: false },
);

export const ProductdataInputCreate = t.Composite(
  [ProductdataPlainInputCreate, ProductdataRelationsInputCreate],
  { additionalProperties: false },
);

export const ProductdataInputUpdate = t.Composite(
  [ProductdataPlainInputUpdate, ProductdataRelationsInputUpdate],
  { additionalProperties: false },
);
