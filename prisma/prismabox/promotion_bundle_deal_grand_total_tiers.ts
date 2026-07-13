import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const promotion_bundle_deal_grand_total_tiersPlain = t.Object(
  {
    id: t.Integer(),
    promotion_id: __nullable__(t.Integer()),
    level_no: __nullable__(t.Integer()),
    minimum_grand_total: __nullable__(t.Number()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_grand_total_tiersRelations = t.Object(
  {
    promotion_bundle_deal_grand_total_free_products: t.Array(
      t.Object(
        {
          id: t.Integer(),
          bundle_deal_grand_total_tiers_id: __nullable__(t.Integer()),
          product_option_id: __nullable__(t.Integer()),
          free_quantity: __nullable__(t.Integer()),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
      { additionalProperties: false },
    ),
    promotions: __nullable__(
      t.Object(
        {
          id: t.Integer(),
          url_image: __nullable__(t.String()),
          promotion_image: __nullable__(t.String()),
          promotion_name: __nullable__(t.String()),
          promotion_type: __nullable__(t.String()),
          promotion_start: __nullable__(t.Date()),
          promotion_end: __nullable__(t.Date()),
          created_at: t.Date(),
          updated_at: __nullable__(t.Date()),
          is_active: __nullable__(t.Boolean()),
          is_accept_overlapse_promotion: __nullable__(t.Boolean()),
          promotion_description: __nullable__(t.String()),
          customer_tiers: t.Array(t.String(), { additionalProperties: false }),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    ),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_grand_total_tiersPlainInputCreate = t.Object(
  {
    level_no: t.Optional(__nullable__(t.Integer())),
    minimum_grand_total: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_grand_total_tiersPlainInputUpdate = t.Object(
  {
    level_no: t.Optional(__nullable__(t.Integer())),
    minimum_grand_total: t.Optional(__nullable__(t.Number())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const promotion_bundle_deal_grand_total_tiersRelationsInputCreate =
  t.Object(
    {
      promotion_bundle_deal_grand_total_free_products: t.Optional(
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
      promotions: t.Optional(
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
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  );

export const promotion_bundle_deal_grand_total_tiersRelationsInputUpdate =
  t.Partial(
    t.Object(
      {
        promotion_bundle_deal_grand_total_free_products: t.Partial(
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
        promotions: t.Partial(
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
        description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
      },
    ),
  );

export const promotion_bundle_deal_grand_total_tiersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          promotion_id: t.Integer(),
          level_no: t.Integer(),
          minimum_grand_total: t.Number(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "promotion_bundle_deal_grand_total_tiers" },
  ),
);

export const promotion_bundle_deal_grand_total_tiersWhereUnique = t.Recursive(
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
              promotion_id: t.Integer(),
              level_no: t.Integer(),
              minimum_grand_total: t.Number(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "promotion_bundle_deal_grand_total_tiers" },
);

export const promotion_bundle_deal_grand_total_tiersSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      promotion_id: t.Boolean(),
      level_no: t.Boolean(),
      minimum_grand_total: t.Boolean(),
      promotion_bundle_deal_grand_total_free_products: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_grand_total_tiersInclude = t.Partial(
  t.Object(
    {
      promotion_bundle_deal_grand_total_free_products: t.Boolean(),
      promotions: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_grand_total_tiersOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      promotion_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      level_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      minimum_grand_total: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const promotion_bundle_deal_grand_total_tiers = t.Composite(
  [
    promotion_bundle_deal_grand_total_tiersPlain,
    promotion_bundle_deal_grand_total_tiersRelations,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_grand_total_tiersInputCreate = t.Composite(
  [
    promotion_bundle_deal_grand_total_tiersPlainInputCreate,
    promotion_bundle_deal_grand_total_tiersRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const promotion_bundle_deal_grand_total_tiersInputUpdate = t.Composite(
  [
    promotion_bundle_deal_grand_total_tiersPlainInputUpdate,
    promotion_bundle_deal_grand_total_tiersRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
