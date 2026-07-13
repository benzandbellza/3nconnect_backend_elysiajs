import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const customerseminarPlain = t.Object(
  {
    id: t.Integer(),
    customeruser_id: t.String(),
    seminar_uuid: t.String(),
    seminar_dwid: t.String(),
    registered_at: __nullable__(t.Date()),
    status: __nullable__(t.String()),
    company: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const customerseminarRelations = t.Object(
  {
    customeruser: t.Object(
      {
        id: t.String(),
        authid: __nullable__(t.String()),
        member_id: __nullable__(t.String()),
        created_at: t.Date(),
        prefix: __nullable__(t.String()),
        namesurname: __nullable__(t.String()),
        email: __nullable__(t.String()),
        tel: __nullable__(t.String()),
        pdpa_accepted: __nullable__(t.Boolean()),
        pdpa_accepted_at: __nullable__(t.Date()),
        pdpa_version: __nullable__(t.String()),
        gender: __nullable__(t.String()),
        birthday: __nullable__(t.Date()),
        home_address_line1: __nullable__(t.String()),
        home_address_line2: __nullable__(t.String()),
        home_sub_district: __nullable__(t.String()),
        home_district: __nullable__(t.String()),
        home_province: __nullable__(t.String()),
        home_postal_code: __nullable__(t.String()),
        w1_address_line1: __nullable__(t.String()),
        w1_address_line2: __nullable__(t.String()),
        w1_sub_district: __nullable__(t.String()),
        w1_district: __nullable__(t.String()),
        w1_province: __nullable__(t.String()),
        w1_postal_code: __nullable__(t.String()),
        position: __nullable__(t.String()),
        w1_name: __nullable__(t.String()),
        status: __nullable__(t.String()),
        note: __nullable__(t.String()),
        Preferred_Contact_Channel: __nullable__(t.String()),
        fcm_token: __nullable__(t.String()),
        avatar_url: __nullable__(t.String()),
        line_id: __nullable__(t.String()),
        is_online: __nullable__(t.Boolean()),
        last_online: __nullable__(t.String()),
        picprofile: __nullable__(t.String()),
        wtel: __nullable__(t.String()),
        gibthailink: __nullable__(t.Any()),
        biodesignlink: __nullable__(t.Any()),
        lableaderlink: __nullable__(t.Any()),
        aeclink: __nullable__(t.Any()),
        doctorcallink: __nullable__(t.Any()),
        miclink: __nullable__(t.Any()),
        log: __nullable__(t.String()),
        department: __nullable__(t.String()),
        knowform: __nullable__(t.String()),
        referred_by: __nullable__(t.String()),
        uninstalled_at: __nullable__(t.Date()),
        line_user_id: __nullable__(t.String()),
        facebook_psid: __nullable__(t.String()),
        source: __nullable__(t.String()),
        tel2: __nullable__(t.String()),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const customerseminarPlainInputCreate = t.Object(
  {
    registered_at: t.Optional(__nullable__(t.Date())),
    status: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customerseminarPlainInputUpdate = t.Object(
  {
    registered_at: t.Optional(__nullable__(t.Date())),
    status: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const customerseminarRelationsInputCreate = t.Object(
  {
    customeruser: t.Object(
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
  },
  { additionalProperties: false },
);

export const customerseminarRelationsInputUpdate = t.Partial(
  t.Object(
    {
      customeruser: t.Object(
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
    },
    { additionalProperties: false },
  ),
);

export const customerseminarWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          customeruser_id: t.String(),
          seminar_uuid: t.String(),
          seminar_dwid: t.String(),
          registered_at: t.Date(),
          status: t.String(),
          company: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "customerseminar" },
  ),
);

export const customerseminarWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              customeruser_id_seminar_dwid: t.Object(
                { customeruser_id: t.String(), seminar_dwid: t.String() },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.Integer() }),
            t.Object({
              customeruser_id_seminar_dwid: t.Object(
                { customeruser_id: t.String(), seminar_dwid: t.String() },
                { additionalProperties: false },
              ),
            }),
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
              customeruser_id: t.String(),
              seminar_uuid: t.String(),
              seminar_dwid: t.String(),
              registered_at: t.Date(),
              status: t.String(),
              company: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "customerseminar" },
);

export const customerseminarSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      customeruser_id: t.Boolean(),
      seminar_uuid: t.Boolean(),
      seminar_dwid: t.Boolean(),
      registered_at: t.Boolean(),
      status: t.Boolean(),
      company: t.Boolean(),
      customeruser: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const customerseminarInclude = t.Partial(
  t.Object(
    { customeruser: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const customerseminarOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customeruser_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      seminar_uuid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      seminar_dwid: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      registered_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const customerseminar = t.Composite(
  [customerseminarPlain, customerseminarRelations],
  { additionalProperties: false },
);

export const customerseminarInputCreate = t.Composite(
  [customerseminarPlainInputCreate, customerseminarRelationsInputCreate],
  { additionalProperties: false },
);

export const customerseminarInputUpdate = t.Composite(
  [customerseminarPlainInputUpdate, customerseminarRelationsInputUpdate],
  { additionalProperties: false },
);
