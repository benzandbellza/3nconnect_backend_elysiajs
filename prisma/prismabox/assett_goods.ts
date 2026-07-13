import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const assett_goodsPlain = t.Object(
  {
    id: t.Integer(),
    created_at: t.Date(),
    sn_no: __nullable__(t.String()),
    catalog_no: __nullable__(t.String()),
    name: __nullable__(t.String()),
    type: __nullable__(t.String()),
    cost: __nullable__(t.Number()),
    product_gr: __nullable__(t.String()),
    brand: __nullable__(t.String()),
    depreciation: __nullable__(t.Integer()),
    size: __nullable__(t.String()),
    aseet_id: __nullable__(t.Integer()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_goodsRelations = t.Object(
  {
    asset_check: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          assett_goods_id: __nullable__(t.Integer()),
          instrument_pic: __nullable__(t.String()),
          sn_pic: __nullable__(t.String()),
          latitude: __nullable__(t.String()),
          longtitude: __nullable__(t.String()),
          recorded_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
          note: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    assett: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          customeruser_id: __nullable__(t.String()),
          contact_id: __nullable__(t.Integer()),
          install: __nullable__(t.String()),
          install_place: __nullable__(t.String()),
          installer: __nullable__(t.String()),
          recorded_by: __nullable__(t.String()),
          sale_person_id: __nullable__(t.String()),
          ref_doc: __nullable__(t.String()),
          note: __nullable__(t.String()),
          doc_id: __nullable__(t.String()),
          companies_id: __nullable__(t.Integer()),
          status: __nullable__(t.String()),
          log: __nullable__(t.String()),
          action_date: __nullable__(t.Date()),
          type: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
    assett_waranty: t.Array(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          asset_goods_id: __nullable__(t.Integer()),
          type: __nullable__(t.String()),
          start_date: __nullable__(t.Date()),
          end_date: __nullable__(t.Date()),
          pm_count: __nullable__(t.Integer()),
          note: __nullable__(t.String()),
          price: __nullable__(t.Number()),
          recorded_by: __nullable__(t.String()),
          status: __nullable__(t.String()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_goodsPlainInputCreate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    sn_no: t.Optional(__nullable__(t.String())),
    catalog_no: t.Optional(__nullable__(t.String())),
    name: t.Optional(__nullable__(t.String())),
    type: t.Optional(__nullable__(t.String())),
    cost: t.Optional(__nullable__(t.Number())),
    product_gr: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.String())),
    depreciation: t.Optional(__nullable__(t.Integer())),
    size: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_goodsPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(t.Date()),
    sn_no: t.Optional(__nullable__(t.String())),
    catalog_no: t.Optional(__nullable__(t.String())),
    name: t.Optional(__nullable__(t.String())),
    type: t.Optional(__nullable__(t.String())),
    cost: t.Optional(__nullable__(t.Number())),
    product_gr: t.Optional(__nullable__(t.String())),
    brand: t.Optional(__nullable__(t.String())),
    depreciation: t.Optional(__nullable__(t.Integer())),
    size: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_goodsRelationsInputCreate = t.Object(
  {
    asset_check: t.Optional(
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
    assett: t.Optional(
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
    assett_waranty: t.Optional(
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
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const assett_goodsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      asset_check: t.Partial(
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
      assett: t.Partial(
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
      assett_waranty: t.Partial(
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
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_goodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          sn_no: t.String(),
          catalog_no: t.String(),
          name: t.String(),
          type: t.String(),
          cost: t.Number(),
          product_gr: t.String(),
          brand: t.String(),
          depreciation: t.Integer(),
          size: t.String(),
          aseet_id: t.Integer(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "assett_goods" },
  ),
);

export const assett_goodsWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.Integer() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
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
              sn_no: t.String(),
              catalog_no: t.String(),
              name: t.String(),
              type: t.String(),
              cost: t.Number(),
              product_gr: t.String(),
              brand: t.String(),
              depreciation: t.Integer(),
              size: t.String(),
              aseet_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "assett_goods" },
);

export const assett_goodsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      sn_no: t.Boolean(),
      catalog_no: t.Boolean(),
      name: t.Boolean(),
      type: t.Boolean(),
      cost: t.Boolean(),
      product_gr: t.Boolean(),
      brand: t.Boolean(),
      depreciation: t.Boolean(),
      size: t.Boolean(),
      aseet_id: t.Boolean(),
      asset_check: t.Boolean(),
      assett: t.Boolean(),
      assett_waranty: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_goodsInclude = t.Partial(
  t.Object(
    {
      asset_check: t.Boolean(),
      assett: t.Boolean(),
      assett_waranty: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_goodsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sn_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      catalog_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cost: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_gr: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      brand: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      depreciation: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      size: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      aseet_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const assett_goods = t.Composite(
  [assett_goodsPlain, assett_goodsRelations],
  { additionalProperties: false },
);

export const assett_goodsInputCreate = t.Composite(
  [assett_goodsPlainInputCreate, assett_goodsRelationsInputCreate],
  { additionalProperties: false },
);

export const assett_goodsInputUpdate = t.Composite(
  [assett_goodsPlainInputUpdate, assett_goodsRelationsInputUpdate],
  { additionalProperties: false },
);
