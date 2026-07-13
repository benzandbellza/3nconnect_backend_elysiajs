import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const aal_level = t.Union(
  [t.Literal("aal1"), t.Literal("aal2"), t.Literal("aal3")],
  { additionalProperties: false },
);
