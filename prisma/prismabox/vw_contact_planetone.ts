import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const vw_contact_planetonePlain = t.Object(
  {
    id: __nullable__(t.Integer()),
    created_at: __nullable__(t.Date()),
    namesurname: __nullable__(t.String()),
    company: __nullable__(t.String()),
    tel: __nullable__(t.String()),
    note: __nullable__(t.String()),
    address1: __nullable__(t.String()),
    address2: __nullable__(t.String()),
    addresssubdestrict: __nullable__(t.String()),
    addressdestrict: __nullable__(t.String()),
    addressprovince: __nullable__(t.String()),
    addresspostel: __nullable__(t.String()),
    create_by: __nullable__(t.String()),
    prefix: __nullable__(t.String()),
    email: __nullable__(t.String()),
    division: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const vw_contact_planetoneRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_contact_planetonePlainInputCreate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    namesurname: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    addresssubdestrict: t.Optional(__nullable__(t.String())),
    addressdestrict: t.Optional(__nullable__(t.String())),
    addressprovince: t.Optional(__nullable__(t.String())),
    addresspostel: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    division: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_contact_planetonePlainInputUpdate = t.Object(
  {
    created_at: t.Optional(__nullable__(t.Date())),
    namesurname: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    tel: t.Optional(__nullable__(t.String())),
    note: t.Optional(__nullable__(t.String())),
    address1: t.Optional(__nullable__(t.String())),
    address2: t.Optional(__nullable__(t.String())),
    addresssubdestrict: t.Optional(__nullable__(t.String())),
    addressdestrict: t.Optional(__nullable__(t.String())),
    addressprovince: t.Optional(__nullable__(t.String())),
    addresspostel: t.Optional(__nullable__(t.String())),
    create_by: t.Optional(__nullable__(t.String())),
    prefix: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    division: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const vw_contact_planetoneRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const vw_contact_planetoneRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const vw_contact_planetoneWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          created_at: t.Date(),
          namesurname: t.String(),
          company: t.String(),
          tel: t.String(),
          note: t.String(),
          address1: t.String(),
          address2: t.String(),
          addresssubdestrict: t.String(),
          addressdestrict: t.String(),
          addressprovince: t.String(),
          addresspostel: t.String(),
          create_by: t.String(),
          prefix: t.String(),
          email: t.String(),
          division: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "vw_contact_planetone" },
  ),
);

export const vw_contact_planetoneWhereUnique = t.Recursive(
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
              id: t.Integer(),
              created_at: t.Date(),
              namesurname: t.String(),
              company: t.String(),
              tel: t.String(),
              note: t.String(),
              address1: t.String(),
              address2: t.String(),
              addresssubdestrict: t.String(),
              addressdestrict: t.String(),
              addressprovince: t.String(),
              addresspostel: t.String(),
              create_by: t.String(),
              prefix: t.String(),
              email: t.String(),
              division: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "vw_contact_planetone" },
);

export const vw_contact_planetoneSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      created_at: t.Boolean(),
      namesurname: t.Boolean(),
      company: t.Boolean(),
      tel: t.Boolean(),
      note: t.Boolean(),
      address1: t.Boolean(),
      address2: t.Boolean(),
      addresssubdestrict: t.Boolean(),
      addressdestrict: t.Boolean(),
      addressprovince: t.Boolean(),
      addresspostel: t.Boolean(),
      create_by: t.Boolean(),
      prefix: t.Boolean(),
      email: t.Boolean(),
      division: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const vw_contact_planetoneInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const vw_contact_planetoneOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      namesurname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      tel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address1: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address2: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addresssubdestrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addressdestrict: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addressprovince: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      addresspostel: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      create_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prefix: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      division: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const vw_contact_planetone = t.Composite(
  [vw_contact_planetonePlain, vw_contact_planetoneRelations],
  { additionalProperties: false },
);

export const vw_contact_planetoneInputCreate = t.Composite(
  [
    vw_contact_planetonePlainInputCreate,
    vw_contact_planetoneRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const vw_contact_planetoneInputUpdate = t.Composite(
  [
    vw_contact_planetonePlainInputUpdate,
    vw_contact_planetoneRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
