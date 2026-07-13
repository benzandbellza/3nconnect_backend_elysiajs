import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customer_support_messagesPlain = t.Object(
  {
    id: t.String(),
    customer_auth_id: t.String(),
    customer_id: __nullable__(t.String()),
    customer_name: __nullable__(t.String()),
    message: t.String(),
    sender: t.String(),
    admin_user_id: __nullable__(t.String()),
    admin_name: __nullable__(t.String()),
    created_at: __nullable__(t.Date()),
    read_by_admin: __nullable__(t.Boolean()),
    read_by_customer: __nullable__(t.Boolean()),
  },
  { additionalProperties: false },
);

export const customer_support_messagesRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const customer_support_messagesPlainInputCreate = t.Object(
  {
    customer_name: t.Optional(__nullable__(t.String())),
    message: t.String(),
    sender: t.Optional(t.String()),
    admin_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    read_by_admin: t.Optional(__nullable__(t.Boolean())),
    read_by_customer: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const customer_support_messagesPlainInputUpdate = t.Object(
  {
    customer_name: t.Optional(__nullable__(t.String())),
    message: t.Optional(t.String()),
    sender: t.Optional(t.String()),
    admin_name: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(__nullable__(t.Date())),
    read_by_admin: t.Optional(__nullable__(t.Boolean())),
    read_by_customer: t.Optional(__nullable__(t.Boolean())),
  },
  { additionalProperties: false },
);

export const customer_support_messagesRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const customer_support_messagesRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const customer_support_messagesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          customer_auth_id: t.String(),
          customer_id: t.String(),
          customer_name: t.String(),
          message: t.String(),
          sender: t.String(),
          admin_user_id: t.String(),
          admin_name: t.String(),
          created_at: t.Date(),
          read_by_admin: t.Boolean(),
          read_by_customer: t.Boolean(),
        },
        { additionalProperties: false },
      ),
    { $id: "customer_support_messages" },
  ),
);

export const customer_support_messagesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
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
              id: t.String(),
              customer_auth_id: t.String(),
              customer_id: t.String(),
              customer_name: t.String(),
              message: t.String(),
              sender: t.String(),
              admin_user_id: t.String(),
              admin_name: t.String(),
              created_at: t.Date(),
              read_by_admin: t.Boolean(),
              read_by_customer: t.Boolean(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customer_support_messages" },
);

export const customer_support_messagesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customer_auth_id: t.Boolean(),
      customer_id: t.Boolean(),
      customer_name: t.Boolean(),
      message: t.Boolean(),
      sender: t.Boolean(),
      admin_user_id: t.Boolean(),
      admin_name: t.Boolean(),
      created_at: t.Boolean(),
      read_by_admin: t.Boolean(),
      read_by_customer: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customer_support_messagesInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const customer_support_messagesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_auth_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customer_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      message: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sender: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_user_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      admin_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      read_by_admin: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      read_by_customer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customer_support_messages = t.Composite(
  [customer_support_messagesPlain, customer_support_messagesRelations],
  { additionalProperties: false },
);

export const customer_support_messagesInputCreate = t.Composite(
  [
    customer_support_messagesPlainInputCreate,
    customer_support_messagesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const customer_support_messagesInputUpdate = t.Composite(
  [
    customer_support_messagesPlainInputUpdate,
    customer_support_messagesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
