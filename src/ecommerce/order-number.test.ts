import { describe, expect, test } from "bun:test";
import {
  formatOrderNumber,
  getOrderNumberPattern,
  getOrderPeriod,
} from "./order-number";

describe("order number", () => {
  test("formats the first July 2026 order", () => {
    expect(formatOrderNumber("2607", 1, "GBT")).toBe("GBT-SSR26070001");
  });

  test("formats a padded sequence", () => {
    expect(formatOrderNumber("2607", 42, "GBT")).toBe("GBT-SSR26070042");
  });

  test("falls back to SSR without a company short code", () => {
    expect(formatOrderNumber("2607", 1)).toBe("SSR26070001");
  });

  test("rejects an invalid period or monthly overflow", () => {
    expect(() => formatOrderNumber("267", 1)).toThrow();
    expect(() => formatOrderNumber("2607", 10000)).toThrow();
  });

  test("uses Bangkok business month at a UTC month boundary", () => {
    expect(
      getOrderPeriod(
        new Date("2026-06-30T17:30:00.000Z"),
        "Asia/Bangkok",
      ),
    ).toBe("2607");
  });

  test("matches only four-digit order numbers in the requested month", () => {
    expect(getOrderNumberPattern("2607", "GBT")).toBe(
      "^GBT-SSR2607[0-9]{4}$",
    );
    expect(getOrderNumberPattern("2607")).toBe("^SSR2607[0-9]{4}$");
  });
});
