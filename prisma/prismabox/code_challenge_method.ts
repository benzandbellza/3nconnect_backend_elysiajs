import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const code_challenge_method = t.Union(
  [t.Literal("s256"), t.Literal("plain")],
  { additionalProperties: false },
);
