import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const app_theme_configPlain = t.Object(
  {
    id: t.String(),
    config_name: t.String(),
    header_color: __nullable__(t.String()),
    sub_header_color: __nullable__(t.String()),
    selected_color: __nullable__(t.String()),
    primary_color: __nullable__(t.String()),
    primary_appbar_color: __nullable__(t.String()),
    primary_light_color: __nullable__(t.String()),
    secondary_color: __nullable__(t.String()),
    text_color: __nullable__(t.String()),
    gradient_start_color: __nullable__(t.String()),
    gradient_end_color: __nullable__(t.String()),
    animation_duration_ms: __nullable__(t.Integer()),
    default_duration_ms: __nullable__(t.Integer()),
    heading_font_size: __nullable__(t.Number()),
    heading_font_weight: __nullable__(t.String()),
    border_radius: __nullable__(t.Number()),
    is_active: __nullable__(t.Boolean()),
    created_at: __nullable__(t.Date()),
    updated_at: __nullable__(t.Date()),
    updated_by: __nullable__(t.String()),
    alert_color: __nullable__(t.String()),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const app_theme_configRelations = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const app_theme_configPlainInputCreate = t.Object(
  {
    config_name: t.Optional(t.String()),
    header_color: t.Optional(__nullable__(t.String())),
    sub_header_color: t.Optional(__nullable__(t.String())),
    selected_color: t.Optional(__nullable__(t.String())),
    primary_color: t.Optional(__nullable__(t.String())),
    primary_appbar_color: t.Optional(__nullable__(t.String())),
    primary_light_color: t.Optional(__nullable__(t.String())),
    secondary_color: t.Optional(__nullable__(t.String())),
    text_color: t.Optional(__nullable__(t.String())),
    gradient_start_color: t.Optional(__nullable__(t.String())),
    gradient_end_color: t.Optional(__nullable__(t.String())),
    animation_duration_ms: t.Optional(__nullable__(t.Integer())),
    default_duration_ms: t.Optional(__nullable__(t.Integer())),
    heading_font_size: t.Optional(__nullable__(t.Number())),
    heading_font_weight: t.Optional(__nullable__(t.String())),
    border_radius: t.Optional(__nullable__(t.Number())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    updated_by: t.Optional(__nullable__(t.String())),
    alert_color: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const app_theme_configPlainInputUpdate = t.Object(
  {
    config_name: t.Optional(t.String()),
    header_color: t.Optional(__nullable__(t.String())),
    sub_header_color: t.Optional(__nullable__(t.String())),
    selected_color: t.Optional(__nullable__(t.String())),
    primary_color: t.Optional(__nullable__(t.String())),
    primary_appbar_color: t.Optional(__nullable__(t.String())),
    primary_light_color: t.Optional(__nullable__(t.String())),
    secondary_color: t.Optional(__nullable__(t.String())),
    text_color: t.Optional(__nullable__(t.String())),
    gradient_start_color: t.Optional(__nullable__(t.String())),
    gradient_end_color: t.Optional(__nullable__(t.String())),
    animation_duration_ms: t.Optional(__nullable__(t.Integer())),
    default_duration_ms: t.Optional(__nullable__(t.Integer())),
    heading_font_size: t.Optional(__nullable__(t.Number())),
    heading_font_weight: t.Optional(__nullable__(t.String())),
    border_radius: t.Optional(__nullable__(t.Number())),
    is_active: t.Optional(__nullable__(t.Boolean())),
    created_at: t.Optional(__nullable__(t.Date())),
    updated_at: t.Optional(__nullable__(t.Date())),
    updated_by: t.Optional(__nullable__(t.String())),
    alert_color: t.Optional(__nullable__(t.String())),
  },
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const app_theme_configRelationsInputCreate = t.Object(
  {},
  {
    additionalProperties: false,
    description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
  },
);

export const app_theme_configRelationsInputUpdate = t.Partial(
  t.Object(
    {},
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const app_theme_configWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          config_name: t.String(),
          header_color: t.String(),
          sub_header_color: t.String(),
          selected_color: t.String(),
          primary_color: t.String(),
          primary_appbar_color: t.String(),
          primary_light_color: t.String(),
          secondary_color: t.String(),
          text_color: t.String(),
          gradient_start_color: t.String(),
          gradient_end_color: t.String(),
          animation_duration_ms: t.Integer(),
          default_duration_ms: t.Integer(),
          heading_font_size: t.Number(),
          heading_font_weight: t.String(),
          border_radius: t.Number(),
          is_active: t.Boolean(),
          created_at: t.Date(),
          updated_at: t.Date(),
          updated_by: t.String(),
          alert_color: t.String(),
        },
        {
          additionalProperties: false,
          description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
        },
      ),
    { $id: "app_theme_config" },
  ),
);

export const app_theme_configWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), config_name: t.String() },
            {
              additionalProperties: false,
              description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
            },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ config_name: t.String() })],
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
              config_name: t.String(),
              header_color: t.String(),
              sub_header_color: t.String(),
              selected_color: t.String(),
              primary_color: t.String(),
              primary_appbar_color: t.String(),
              primary_light_color: t.String(),
              secondary_color: t.String(),
              text_color: t.String(),
              gradient_start_color: t.String(),
              gradient_end_color: t.String(),
              animation_duration_ms: t.Integer(),
              default_duration_ms: t.Integer(),
              heading_font_size: t.Number(),
              heading_font_weight: t.String(),
              border_radius: t.Number(),
              is_active: t.Boolean(),
              created_at: t.Date(),
              updated_at: t.Date(),
              updated_by: t.String(),
              alert_color: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "app_theme_config" },
);

export const app_theme_configSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      config_name: t.Boolean(),
      header_color: t.Boolean(),
      sub_header_color: t.Boolean(),
      selected_color: t.Boolean(),
      primary_color: t.Boolean(),
      primary_appbar_color: t.Boolean(),
      primary_light_color: t.Boolean(),
      secondary_color: t.Boolean(),
      text_color: t.Boolean(),
      gradient_start_color: t.Boolean(),
      gradient_end_color: t.Boolean(),
      animation_duration_ms: t.Boolean(),
      default_duration_ms: t.Boolean(),
      heading_font_size: t.Boolean(),
      heading_font_weight: t.Boolean(),
      border_radius: t.Boolean(),
      is_active: t.Boolean(),
      created_at: t.Boolean(),
      updated_at: t.Boolean(),
      updated_by: t.Boolean(),
      alert_color: t.Boolean(),
      _count: t.Boolean(),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const app_theme_configInclude = t.Partial(
  t.Object(
    { _count: t.Boolean() },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const app_theme_configOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      config_name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      header_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sub_header_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      selected_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      primary_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      primary_appbar_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      primary_light_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      secondary_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      text_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gradient_start_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      gradient_end_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      animation_duration_ms: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      default_duration_ms: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      heading_font_size: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      heading_font_weight: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      border_radius: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      is_active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      created_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_at: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updated_by: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      alert_color: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    {
      additionalProperties: false,
      description: `This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.`,
    },
  ),
);

export const app_theme_config = t.Composite(
  [app_theme_configPlain, app_theme_configRelations],
  { additionalProperties: false },
);

export const app_theme_configInputCreate = t.Composite(
  [app_theme_configPlainInputCreate, app_theme_configRelationsInputCreate],
  { additionalProperties: false },
);

export const app_theme_configInputUpdate = t.Composite(
  [app_theme_configPlainInputUpdate, app_theme_configRelationsInputUpdate],
  { additionalProperties: false },
);
