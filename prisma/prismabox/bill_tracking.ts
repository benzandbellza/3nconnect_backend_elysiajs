import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const bill_trackingPlain = t.Object(
  {
    Person_ID: __nullable__(t.String()),
    Name_Surname: __nullable__(t.String()),
    dateprocess: __nullable__(t.String()),
    Sx_No_: __nullable__(t.String()),
    Process: __nullable__(t.String()),
    note: __nullable__(
      t.String({
        description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
      }),
    ),
    shipby: __nullable__(
      t.String({
        description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
      }),
    ),
    outsource_no: __nullable__(t.String()),
    ID: t.Integer(),
    CUSTOMEREMAIL: __nullable__(t.String()),
    company: __nullable__(t.String()),
    C: __nullable__(t.String()),
    email: __nullable__(t.String()),
    enroll_date: __nullable__(t.String()),
    REFDOC: __nullable__(
      t.String({
        description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
      }),
    ),
    TEL: __nullable__(t.String()),
    SR: __nullable__(t.String()),
    ID_____________________: __nullable__(t.String()),
    load: __nullable__(t.String()),
    document_images: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const bill_trackingRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const bill_trackingPlainInputCreate = t.Object(
  {
    Name_Surname: t.Optional(__nullable__(t.String())),
    dateprocess: t.Optional(__nullable__(t.String())),
    Sx_No_: t.Optional(__nullable__(t.String())),
    Process: t.Optional(__nullable__(t.String())),
    note: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    shipby: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    outsource_no: t.Optional(__nullable__(t.String())),
    CUSTOMEREMAIL: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    C: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    enroll_date: t.Optional(__nullable__(t.String())),
    REFDOC: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    TEL: t.Optional(__nullable__(t.String())),
    SR: t.Optional(__nullable__(t.String())),
    ID_____________________: t.Optional(__nullable__(t.String())),
    load: t.Optional(__nullable__(t.String())),
    document_images: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const bill_trackingPlainInputUpdate = t.Object(
  {
    Name_Surname: t.Optional(__nullable__(t.String())),
    dateprocess: t.Optional(__nullable__(t.String())),
    Sx_No_: t.Optional(__nullable__(t.String())),
    Process: t.Optional(__nullable__(t.String())),
    note: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    shipby: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    outsource_no: t.Optional(__nullable__(t.String())),
    CUSTOMEREMAIL: t.Optional(__nullable__(t.String())),
    company: t.Optional(__nullable__(t.String())),
    C: t.Optional(__nullable__(t.String())),
    email: t.Optional(__nullable__(t.String())),
    enroll_date: t.Optional(__nullable__(t.String())),
    REFDOC: t.Optional(
      __nullable__(
        t.String({
          description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
        }),
      ),
    ),
    TEL: t.Optional(__nullable__(t.String())),
    SR: t.Optional(__nullable__(t.String())),
    ID_____________________: t.Optional(__nullable__(t.String())),
    load: t.Optional(__nullable__(t.String())),
    document_images: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const bill_trackingRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const bill_trackingRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const bill_trackingWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          Person_ID: t.String(),
          Name_Surname: t.String(),
          dateprocess: t.String(),
          Sx_No_: t.String(),
          Process: t.String(),
          note: t.String({
            description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
          }),
          shipby: t.String({
            description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
          }),
          outsource_no: t.String(),
          ID: t.Integer(),
          CUSTOMEREMAIL: t.String(),
          company: t.String(),
          C: t.String(),
          email: t.String(),
          enroll_date: t.String(),
          REFDOC: t.String({
            description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
          }),
          TEL: t.String(),
          SR: t.String(),
          ID_____________________: t.String(),
          load: t.String(),
          document_images: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "bill_tracking" },
  ),
);

export const bill_trackingWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ ID: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ ID: t.Integer() })], {
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
              Person_ID: t.String(),
              Name_Surname: t.String(),
              dateprocess: t.String(),
              Sx_No_: t.String(),
              Process: t.String(),
              note: t.String({
                description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
              }),
              shipby: t.String({
                description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
              }),
              outsource_no: t.String(),
              ID: t.Integer(),
              CUSTOMEREMAIL: t.String(),
              company: t.String(),
              C: t.String(),
              email: t.String(),
              enroll_date: t.String(),
              REFDOC: t.String({
                description: `This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*`,
              }),
              TEL: t.String(),
              SR: t.String(),
              ID_____________________: t.String(),
              load: t.String(),
              document_images: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "bill_tracking" },
);

export const bill_trackingSelect = t.Partial(
  t.Object(
    {
      Person_ID: t.Boolean(),
      Name_Surname: t.Boolean(),
      dateprocess: t.Boolean(),
      Sx_No_: t.Boolean(),
      Process: t.Boolean(),
      note: t.Boolean(),
      shipby: t.Boolean(),
      outsource_no: t.Boolean(),
      ID: t.Boolean(),
      CUSTOMEREMAIL: t.Boolean(),
      company: t.Boolean(),
      C: t.Boolean(),
      email: t.Boolean(),
      enroll_date: t.Boolean(),
      REFDOC: t.Boolean(),
      TEL: t.Boolean(),
      SR: t.Boolean(),
      ID_____________________: t.Boolean(),
      load: t.Boolean(),
      document_images: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const bill_trackingInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const bill_trackingOrderBy = t.Partial(
  t.Object(
    {
      Person_ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Name_Surname: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dateprocess: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Sx_No_: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      Process: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      note: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shipby: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      outsource_no: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ID: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      CUSTOMEREMAIL: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      company: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      C: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      enroll_date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      REFDOC: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      TEL: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      SR: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ID_____________________: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      load: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      document_images: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const bill_tracking = t.Composite(
  [bill_trackingPlain, bill_trackingRelations],
  { additionalProperties: false },
);

export const bill_trackingInputCreate = t.Composite(
  [bill_trackingPlainInputCreate, bill_trackingRelationsInputCreate],
  { additionalProperties: false },
);

export const bill_trackingInputUpdate = t.Composite(
  [bill_trackingPlainInputUpdate, bill_trackingRelationsInputUpdate],
  { additionalProperties: false },
);
