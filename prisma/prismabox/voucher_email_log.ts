import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const voucher_email_logPlain = t.Object(
  {
    id: t.Integer(),
    created_at: __nullable__(t.Date()),
    action: t.String(),
    email: t.String(),
    voucher_name: t.String(),
    customervoucher_id: __nullable__(t.Integer()),
  },
  { additionalProperties: false },
);

export const voucher_email_logRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const voucher_email_logPlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    action: t.String(),
    email: t.String(),
    voucher_name: t.String(),
  },
  { additionalProperties: false },
);

export const voucher_email_logPlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    action: t.Optional(t.String()),
    email: t.Optional(t.String()),
    voucher_name: t.Optional(t.String()),
  },
  { additionalProperties: false },
);

export const voucher_email_logRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const voucher_email_logRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const voucher_email_logWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          action: t.String(),
          email: t.String(),
          voucher_name: t.String(),
          customervoucher_id: t.Integer(),
        },
        { additionalProperties: false },
      ),
    { $id: "voucher_email_log" },
  ),
);

export const voucher_email_logWhereUnique = t.Recursive(
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
              action: t.String(),
              email: t.String(),
              voucher_name: t.String(),
              customervoucher_id: t.Integer(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "voucher_email_log" },
);

export const voucher_email_logSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      action: t.Boolean(),
      email: t.Boolean(),
      voucher_name: t.Boolean(),
      customervoucher_id: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const voucher_email_logInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const voucher_email_logOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      action: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      voucher_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customervoucher_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const voucher_email_log = t.Composite(
  [voucher_email_logPlain, voucher_email_logRelations],
  { additionalProperties: false },
);

export const voucher_email_logInputCreate = t.Composite(
  [voucher_email_logPlainInputCreate, voucher_email_logRelationsInputCreate],
  { additionalProperties: false },
);

export const voucher_email_logInputUpdate = t.Composite(
  [voucher_email_logPlainInputUpdate, voucher_email_logRelationsInputUpdate],
  { additionalProperties: false },
);
