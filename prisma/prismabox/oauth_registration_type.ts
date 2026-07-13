import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_registration_type = t.Union(
  [t.Literal("dynamic"), t.Literal("manual")],
  { additionalProperties: false },
);
