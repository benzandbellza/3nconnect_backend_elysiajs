import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_product_payment_methodsPlain = t.Object(
  {
    product_id: __nullable__(t.Integer()),
    product_option_id: __nullable__(t.Integer()),
    product_name: __nullable__(t.String()),
    option_name: __nullable__(t.String()),
    credit_terms: __nullable__(t.Boolean()),
    mobile_banking: __nullable__(t.Boolean()),
    qr_code_promptpay: __nullable__(t.Boolean()),
    visa_card: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const vw_product_payment_methodsRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_product_payment_methodsPlainInputCreate = t.Object(
  {
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    credit_terms: t.Optional(__nullable__(t.Boolean())),
    mobile_banking: t.Optional(__nullable__(t.Boolean())),
    qr_code_promptpay: t.Optional(__nullable__(t.Boolean())),
    visa_card: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_product_payment_methodsPlainInputUpdate = t.Object(
  {
    product_name: t.Optional(__nullable__(t.String())),
    option_name: t.Optional(__nullable__(t.String())),
    credit_terms: t.Optional(__nullable__(t.Boolean())),
    mobile_banking: t.Optional(__nullable__(t.Boolean())),
    qr_code_promptpay: t.Optional(__nullable__(t.Boolean())),
    visa_card: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const vw_product_payment_methodsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_product_payment_methodsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_product_payment_methodsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          product_id: t.Integer(),
          product_option_id: t.Integer(),
          product_name: t.String(),
          option_name: t.String(),
          credit_terms: t.Boolean(),
          mobile_banking: t.Boolean(),
          qr_code_promptpay: t.Boolean(),
          visa_card: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_product_payment_methods" },
  ),
);

export const vw_product_payment_methodsWhereUnique = t.Recursive(
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
              product_id: t.Integer(),
              product_option_id: t.Integer(),
              product_name: t.String(),
              option_name: t.String(),
              credit_terms: t.Boolean(),
              mobile_banking: t.Boolean(),
              qr_code_promptpay: t.Boolean(),
              visa_card: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_product_payment_methods" },
);

export const vw_product_payment_methodsSelect = t.Partial(
  t.Object(
    {
      product_id: t.Boolean(),
      product_option_id: t.Boolean(),
      product_name: t.Boolean(),
      option_name: t.Boolean(),
      credit_terms: t.Boolean(),
      mobile_banking: t.Boolean(),
      qr_code_promptpay: t.Boolean(),
      visa_card: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_product_payment_methodsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_product_payment_methodsOrderBy = t.Partial(
  t.Object(
    {
      product_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_option_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      product_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      option_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      credit_terms: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mobile_banking: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qr_code_promptpay: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      visa_card: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_product_payment_methods = t.Composite(
  [vw_product_payment_methodsPlain, vw_product_payment_methodsRelations],
  { additionalProperties: false },
);

export const vw_product_payment_methodsInputCreate = t.Composite(
  [
    vw_product_payment_methodsPlainInputCreate,
    vw_product_payment_methodsRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_product_payment_methodsInputUpdate = t.Composite(
  [
    vw_product_payment_methodsPlainInputUpdate,
    vw_product_payment_methodsRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
