import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const callsPlain = t.Object(
  {
    id: t.String(),
    caller_id: __nullable__(t.String()),
    receiver_id: __nullable__(t.String()),
    sdp_offer: __nullable__(t.String()),
    sdp_answer: __nullable__(t.String()),
    ice_candidates: __nullable__(t.Any()),
    status: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const callsRelations = t.Object({}, { additionalProperties: false });

export const callsPlainInputCreate = t.Object(
  {
    sdp_offer: t.Optional(__nullable__(t.String())),
    sdp_answer: t.Optional(__nullable__(t.String())),
    ice_candidates: t.Optional(__nullable__(t.Any())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const callsPlainInputUpdate = t.Object(
  {
    sdp_offer: t.Optional(__nullable__(t.String())),
    sdp_answer: t.Optional(__nullable__(t.String())),
    ice_candidates: t.Optional(__nullable__(t.Any())),
    status: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const callsRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const callsRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const callsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          caller_id: t.String(),
          receiver_id: t.String(),
          sdp_offer: t.String(),
          sdp_answer: t.String(),
          ice_candidates: t.Any(),
          status: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "calls" },
  ),
);

export const callsWhereUnique = t.Recursive(
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
              caller_id: t.String(),
              receiver_id: t.String(),
              sdp_offer: t.String(),
              sdp_answer: t.String(),
              ice_candidates: t.Any(),
              status: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "calls" },
);

export const callsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      caller_id: t.Boolean(),
      receiver_id: t.Boolean(),
      sdp_offer: t.Boolean(),
      sdp_answer: t.Boolean(),
      ice_candidates: t.Boolean(),
      status: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const callsInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const callsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      caller_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      receiver_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sdp_offer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sdp_answer: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ice_candidates: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const calls = t.Composite([callsPlain, callsRelations], {
  additionalProperties: false,
});

export const callsInputCreate = t.Composite(
  [callsPlainInputCreate, callsRelationsInputCreate],
  { additionalProperties: false },
);

export const callsInputUpdate = t.Composite(
  [callsPlainInputUpdate, callsRelationsInputUpdate],
  { additionalProperties: false },
);
