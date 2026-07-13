import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const one_time_token_type = t.Union(
  [
    t.Literal("confirmation_token"),
    t.Literal("reauthentication_token"),
    t.Literal("recovery_token"),
    t.Literal("email_change_token_new"),
    t.Literal("email_change_token_current"),
    t.Literal("phone_change_token"),
  ],
  { additionalProperties: false },
);
