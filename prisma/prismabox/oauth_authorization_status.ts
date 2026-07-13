import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const oauth_authorization_status = t.Union(
  [
    t.Literal("pending"),
    t.Literal("approved"),
    t.Literal("denied"),
    t.Literal("expired"),
  ],
  { additionalProperties: false },
);
