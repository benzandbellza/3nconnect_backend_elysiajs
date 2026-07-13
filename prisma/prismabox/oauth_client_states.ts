import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_client_statesPlain = t.Object(
  {
    id: t.String(),
    provider_type: t.String(),
    code_verifier: __nullable__(t.String()),
    created_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const oauth_client_statesRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const oauth_client_statesPlainInputCreate = t.Object(
  {
    provider_type: t.String(),
    code_verifier: t.Optional(__nullable__(t.String())),
    created_at: t.Date(),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const oauth_client_statesPlainInputUpdate = t.Object(
  {
    provider_type: t.Optional(t.String()),
    code_verifier: t.Optional(__nullable__(t.String())),
    created_at: t.Optional(t.Date()),
  },
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const oauth_client_statesRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  },
);

export const oauth_client_statesRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const oauth_client_statesWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          provider_type: t.String(),
          code_verifier: t.String(),
          created_at: t.Date(),
        },
        {
          additionalProperties: false,
          description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
        },
      ),
    { $id: "oauth_client_states" },
  ),
);

export const oauth_client_statesWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String() },
            {
              additionalProperties: false,
              description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
            },
          ),
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
              provider_type: t.String(),
              code_verifier: t.String(),
              created_at: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "oauth_client_states" },
);

export const oauth_client_statesSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      provider_type: t.Boolean(),
      code_verifier: t.Boolean(),
      created_at: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const oauth_client_statesInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const oauth_client_statesOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      provider_type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      code_verifier: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
    },
  ),
);

export const oauth_client_states = t.Composite(
  [oauth_client_statesPlain, oauth_client_statesRelations],
  { additionalProperties: false },
);

export const oauth_client_statesInputCreate = t.Composite(
  [
    oauth_client_statesPlainInputCreate,
    oauth_client_statesRelationsInputCreate,
  ],
  { additionalProperties: false },
);

export const oauth_client_statesInputUpdate = t.Composite(
  [
    oauth_client_statesPlainInputUpdate,
    oauth_client_statesRelationsInputUpdate,
  ],
  { additionalProperties: false },
);
