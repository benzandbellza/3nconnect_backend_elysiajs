import { describe, expect, test } from "bun:test";
import { mapEventTierFields } from "./event-tier-mapping";

describe("event tier mapping", () => {
  test("maps plain text tier fields without JSON serialization", () => {
    expect(
      mapEventTierFields({
        tier_preregister: "สมาชิกเดิมเท่านั้น",
        tier_register: "สมาชิกทั่วไป",
      }),
    ).toEqual({
      tierpreregister: "สมาชิกเดิมเท่านั้น",
      tierregister: "สมาชิกทั่วไป",
    });
  });
});
