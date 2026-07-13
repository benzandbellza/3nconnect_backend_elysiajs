import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const factor_status = t.Union(
  [t.Literal("unverified"), t.Literal("verified")],
  { additionalProperties: false },
);
