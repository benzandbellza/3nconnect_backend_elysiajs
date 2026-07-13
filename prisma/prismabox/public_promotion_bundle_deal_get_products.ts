import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const public_promotion_bundle_deal_get_productsPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    get_quantity: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const public_promotion_bundle_deal_get_productsRelations = t.Object(
  {
    promotion_bundle_deal_free_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          bundle_deal_get_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          free_quantity: __nullable__(t.Integer()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    promotion: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          created_at: t.Date(),
          proname: __nullable__(t.String()),
          startdate: __nullable__(t.Date()),
          enddate: __nullable__(t.Date()),
          filelink: __nullable__(t.String()),
          banner: __nullable__(t.String()),
          description: __nullable__(t.String()),
          type: __nullable__(t.String()),
          points_reward: __nullable__(t.Number()),
          max_claims: __nullable__(t.Integer()),
          current_claims: __nullable__(t.Integer()),
          voucher_id: __nullable__(t.Integer()),
          location_lat: __nullable__(t.Number()),
          location_lng: __nullable__(t.Number()),
          location_radius_m: __nullable__(t.Integer()),
          location_name: __nullable__(t.String()),
          conditions: __nullable__(t.String()),
          per_person_limit: __nullable__(t.Integer()),
          subtype: __nullable__(t.String()),
          status: __nullable__(t.Boolean()),
          sort_order: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  { additionalProperties: false },
);

export const public_promotion_bundle_deal_get_productsPlainInputCreate =
  t.Object(
    { get_quantity: t.Optional(__nullable__(t.Integer())) },
    { additionalProperties: false },
  );

export const public_promotion_bundle_deal_get_productsPlainInputUpdate =
  t.Object(
    { get_quantity: t.Optional(__nullable__(t.Integer())) },
    { additionalProperties: false },
  );

export const public_promotion_bundle_deal_get_productsRelationsInputCreate =
  t.Object(
    {
      promotion_bundle_deal_free_products: t.Optional(
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
      promotion: t.Optional(
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

export const public_promotion_bundle_deal_get_productsRelationsInputUpdate =
  t.Partial(
    t.Object(
      {
        promotion_bundle_deal_free_products: t.Partial(
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
        promotion: t.Partial(
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

export const public_promotion_bundle_deal_get_productsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          product_option_id: t.Integer(),
          get_quantity: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "public_promotion_bundle_deal_get_products" },
  ),
);

export const public_promotion_bundle_deal_get_productsWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              product_option_id: t.Integer(),
              get_quantity: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "public_promotion_bundle_deal_get_products" },
);

export const public_promotion_bundle_deal_get_productsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      product_option_id: t.Boolean(),
      get_quantity: t.Boolean(),
      promotion_bundle_deal_free_products: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_bundle_deal_get_productsInclude = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_free_products: t.Boolean(),
      promotion: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_bundle_deal_get_productsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      get_quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const public_promotion_bundle_deal_get_products = t.Composite(
  [
    public_promotion_bundle_deal_get_productsPlain,
    public_promotion_bundle_deal_get_productsRelations,
  ],
  { additionalProperties: false },
);

export const public_promotion_bundle_deal_get_productsInputCreate = t.Composite(
  [
    public_promotion_bundle_deal_get_productsPlainInputCreate,
    public_promotion_bundle_deal_get_productsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const public_promotion_bundle_deal_get_productsInputUpdate = t.Composite(
  [
    public_promotion_bundle_deal_get_productsPlainInputUpdate,
    public_promotion_bundle_deal_get_productsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
