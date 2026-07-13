import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const saml_providersPlain = t.Object(
  {
    id: t.String(),
    sso_provider_id: t.String(),
    entity_id: t.String(),
    metadata_xml: t.String(),
    metadata_url: __nullable__(t.String()),
    attribute_mapping: __nullable__(t.Any()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    name_id_format: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const saml_providersRelations = t.Object(
  {
    sso_providers: t.Object(
      {
        id: t.String(),
        resource_id: __nullable__(t.String()),
        created_at: __nullable__(t.Date()),
        updated_at: __nullable__(t.Date()),
        disabled: __nullable__(t.Boolean()),
      },
      {
        additionalProperties: false,
        description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
      },
    ),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const saml_providersPlainInputCreate = t.Object(
  {
    metadata_xml: t.String(),
    metadata_url: t.Optional(__nullable__(t.String())),
    attribute_mapping: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    name_id_format: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const saml_providersPlainInputUpdate = t.Object(
  {
    metadata_xml: t.Optional(t.String()),
    metadata_url: t.Optional(__nullable__(t.String())),
    attribute_mapping: t.Optional(__nullable__(t.Any())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    name_id_format: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const saml_providersRelationsInputCreate = t.Object(
  {
    sso_providers: t.Object(
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
  {
    additionalProperties: false,
    description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const saml_providersRelationsInputUpdate = t.Partial(
  t.Object(
    {
      sso_providers: t.Object(
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
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const saml_providersWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          sso_provider_id: t.String(),
          entity_id: t.String(),
          metadata_xml: t.String(),
          metadata_url: t.String(),
          attribute_mapping: t.Any(),
          created_at: t.Date(),
          updated_at: t.Date(),
          name_id_format: t.String(),
        },
        {
          additionalProperties: false,
          description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "saml_providers" },
  ),
);

export const saml_providersWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), entity_id: t.String() },
            {
              additionalProperties: false,
              description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ entity_id: t.String() })],
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
              id: t.String(),
              sso_provider_id: t.String(),
              entity_id: t.String(),
              metadata_xml: t.String(),
              metadata_url: t.String(),
              attribute_mapping: t.Any(),
              created_at: t.Date(),
              updated_at: t.Date(),
              name_id_format: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "saml_providers" },
);

export const saml_providersSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      sso_provider_id: t.Boolean(),
      entity_id: t.Boolean(),
      metadata_xml: t.Boolean(),
      metadata_url: t.Boolean(),
      attribute_mapping: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      name_id_format: t.Boolean(),
      sso_providers: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const saml_providersInclude = t.Partial(
  t.Object(
    { sso_providers: t.Boolean(), _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const saml_providersOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sso_provider_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      entity_id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata_xml: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata_url: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      attribute_mapping: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name_id_format: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const saml_providers = t.Composite(
  [saml_providersPlain, saml_providersRelations],
  { additionalProperties: false },
);

export const saml_providersInputCreate = t.Composite(
  [saml_providersPlainInputCreate, saml_providersRelationsInputCreate],
  { additionalProperties: false },
);

export const saml_providersInputUpdate = t.Composite(
  [saml_providersPlainInputUpdate, saml_providersRelationsInputUpdate],
  { additionalProperties: false },
);
