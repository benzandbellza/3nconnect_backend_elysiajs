import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_client_type = t.Union(
  [t.Literal("public"), t.Literal("confidential")],
  { additionalProperties: false },
);
