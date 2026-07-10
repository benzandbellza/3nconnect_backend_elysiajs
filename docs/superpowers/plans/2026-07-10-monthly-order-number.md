# Monthly Order Number Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `POST /api/ecommerce/orders-create/submit` generate `order_no` automatically in the `INVYYMM####` format, for example `INV26070001`, with a monthly sequence that remains unique under concurrent requests.

**Architecture:** Generate the number inside the same PostgreSQL transaction that creates `order_billing`. Lock the monthly key with `pg_advisory_xact_lock`, read the maximum existing four-digit suffix for that month, then compose the next number in application code. Enforce uniqueness on `order_billing.order_no` so the database remains the final safety net.

**Tech Stack:** Elysia, Prisma 7, PostgreSQL, TypeScript, Bun test

## Global Constraints

- `INV` is the fixed prefix.
- `YY` is the last two digits of the business year; `MM` is the two-digit business month.
- `####` is zero-padded to four digits, starting at `0001` for each month.
- The caller must not control `order_no`; `body.order_no` must be removed from the create contract or ignored with a breaking-change decision documented.
- The business timezone must be explicitly selected. Recommended default: `Asia/Bangkok`, so the month does not depend on the server/container timezone.
- The number allocation and order insert must be in the same transaction.
- Do not use `COUNT(*) + 1` without a transaction lock; concurrent requests can receive the same number.
- Existing uncommitted changes in `src/ecommerce/route.ts` belong to the user and must be preserved while applying this plan.

## File Map

- Modify: `src/ecommerce/route.ts` — call the generator before `order_billing.create`, remove `order_no` from the request body schema, and return the generated value.
- Modify: `prisma/schema.prisma` — keep the unique constraint for `order_billing.order_no`; do not add a counter model.
- Create: `prisma/migrations/<timestamp>_add_unique_order_no/migration.sql` — add the unique index only.
- Create: `src/ecommerce/order-number.ts` — pure format/validation helpers and the transaction-facing allocator.
- Create: `src/ecommerce/order-number.test.ts` — unit tests for month formatting, padding, and overflow rules.
- Modify: `package.json` — replace the placeholder test command with `bun test` if the project agrees to expose automated tests through the package script.

### Task 1: Define and test the order-number rules

**Files:**
- Create: `src/ecommerce/order-number.ts`
- Create: `src/ecommerce/order-number.test.ts`

**Interfaces:**
- `formatOrderNumber(period: string, sequence: number): string` where `period` is `YYMM` and the result is `INVYYMM####`.
- `getOrderPeriod(date: Date, timeZone: string): string` returning `YYMM`.
- `MAX_MONTHLY_SEQUENCE = 9999`.

- [ ] **Step 1: Write failing tests**

```ts
import { describe, expect, test } from "bun:test";
import { formatOrderNumber, getOrderPeriod } from "./order-number";

describe("order number", () => {
  test("formats the first July 2026 order", () => {
    expect(formatOrderNumber("2607", 1)).toBe("INV26070001");
  });

  test("pads and preserves four digits", () => {
    expect(formatOrderNumber("2607", 42)).toBe("INV26070042");
    expect(formatOrderNumber("2607", 9999)).toBe("INV26079999");
  });

  test("rejects an invalid period or overflow", () => {
    expect(() => formatOrderNumber("267", 1)).toThrow();
    expect(() => formatOrderNumber("2607", 10000)).toThrow();
  });

  test("uses Bangkok business month at a UTC month boundary", () => {
    expect(getOrderPeriod(new Date("2026-06-30T17:30:00.000Z"), "Asia/Bangkok"))
      .toBe("2607");
  });
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `bun test src/ecommerce/order-number.test.ts`

Expected: FAIL because `src/ecommerce/order-number.ts` does not yet provide the helpers.

- [ ] **Step 3: Implement the pure helpers**

Implement `getOrderPeriod` with `Intl.DateTimeFormat` and `formatOrderNumber` with strict `YYMM` validation, integer validation, four-digit padding, and a `9999` upper bound. Do not read the database from these pure helpers.

- [ ] **Step 4: Run the focused test**

Run: `bun test src/ecommerce/order-number.test.ts`

Expected: PASS.

### Task 2: Protect uniqueness without a counter table

**Files:**
- Modify: `prisma/schema.prisma` near `model order_billing`
- Create: `prisma/migrations/<timestamp>_add_monthly_order_number_counter/migration.sql`

**Interfaces:**
- Add a unique index on `order_billing.order_no`; because `order_no` is nullable, PostgreSQL will still allow existing null values.

- [ ] **Step 1: Audit existing data before migration**

Run a read-only query against the target database to find duplicate non-null order numbers and existing numbers matching `^INV[0-9]{8}$`. Resolve duplicates before applying the unique index.

- [ ] **Step 2: Write the migration**

Create only the unique index on `order_billing.order_no`. If duplicate order numbers exist, stop and resolve them before applying the index rather than silently changing historical orders.

- [ ] **Step 3: Update Prisma schema and regenerate the client**

Run: `bunx prisma generate`

Expected: Prisma client generation succeeds without an order-number counter model.

- [ ] **Step 4: Verify migration metadata and schema**

Run the repository's normal Prisma migration status command against the configured database and verify that the unique index exists and no counter table is required.

### Task 3: Implement the transaction-safe allocator

**Files:**
- Modify: `src/ecommerce/order-number.ts`
- Test: `src/ecommerce/order-number.test.ts` or a database integration test under `src/ecommerce/`

**Interfaces:**
- `allocateNextOrderNumber(tx: { $queryRaw: Function }, orderDate: Date): Promise<string>`.

- [ ] **Step 1: Lock and read the current maximum**

For the period returned by `getOrderPeriod(orderDate, "Asia/Bangkok")`, execute parameterized PostgreSQL SQL equivalent to:

```sql
SELECT pg_advisory_xact_lock(hashtext('order-number:2607'));

SELECT COALESCE(
  MAX(CAST(SUBSTRING("order_no" FROM 8 FOR 4) AS INTEGER)),
  0
) AS "last_number"
FROM "3nconnect"."order_billing"
WHERE "order_no" ~ '^INV2607[0-9]{4}$';
```

Use Prisma's tagged `$executeRaw` and `$queryRaw`; parameterize the period/pattern. If the next number is above `9999`, throw a clear error so the transaction rolls back.

- [ ] **Step 2: Compose and return the final number**

Pass the returned sequence to `formatOrderNumber(period, sequence)` and return the resulting `INVYYMM####` string.

- [ ] **Step 3: Test the boundary behavior**

Verify that a period with no matching order returns `INVYYMM0001`, an existing period increments from its maximum suffix, and sequence `10000` fails. Add a concurrency integration test with multiple transactions if a test database is available; assert that all returned order numbers are distinct.

### Task 4: Wire generation into `/orders-create/submit`

**Files:**
- Modify: `src/ecommerce/route.ts` around the existing `POST /orders-create/submit` implementation.

**Interfaces:**
- The endpoint generates `order_no` internally and returns it in `data.order_no`.
- The request body no longer requires `order_no`.

- [ ] **Step 1: Choose the business date source**

Use the server-side current time in `Asia/Bangkok` by default. If the product requirement is that `logged_at` represents the invoice/business date, explicitly use the parsed `logged_at` only after confirming that clients are allowed to control numbering periods; otherwise keep `logged_at` for audit fields and use server time for numbering.

- [ ] **Step 2: Allocate inside the existing Prisma transaction**

Immediately before `tx.order_billing.create`, call `allocateNextOrderNumber(tx, orderDate)`. Set `data.order_no` to the returned value. Keep the advisory lock, order header insert, and billing-item insert in the same existing transaction.

- [ ] **Step 3: Update the Elysia body schema**

Remove `order_no: t.String()` from the create request schema. Do not silently accept a caller-provided value unless backward compatibility is required; if compatibility is required, accept it only for logging/validation and still persist the generated value.

- [ ] **Step 4: Map errors to stable HTTP responses**

Return `409` for a database unique violation or duplicate generated value, `422` for the `9999` monthly limit, and `500` for unexpected failures. Ensure a failed order does not consume a visible number by keeping allocation in the same transaction.

- [ ] **Step 5: Compile and manually exercise the endpoint**

Run: `bunx tsc --noEmit`

Then submit two valid create requests in the same month and verify sequential values such as `INV26070001`, `INV26070002`; submit concurrent requests and verify no duplicate `order_no`.

### Task 5: Add regression coverage and handoff documentation

**Files:**
- Modify: `package.json` if approved
- Create or modify: endpoint/integration test location selected by the repository
- Modify: `README.md` or API documentation if this repository documents request schemas there

- [ ] **Step 1: Add an automated test command**

If no existing test runner convention conflicts, change the placeholder `test` script to `bun test`; otherwise run focused tests directly and document the command used.

- [ ] **Step 2: Test the API contract**

Assert that `order_no` is absent from the required request input, is present in the successful response, follows `^INV[0-9]{8}$`, resets to `0001` for a new period, and cannot be duplicated under concurrent submissions.

- [ ] **Step 3: Document operational checks**

Document the chosen timezone, migration prerequisite for duplicate legacy order numbers, the `9999` monthly limit, and the fact that retries after a rolled-back transaction do not permanently consume a number.

## Self-Review

- Requirement coverage: fixed `INV` prefix, two-digit year, two-digit month, four-digit monthly sequence, automatic generation, and the example `INV26070001` are covered by Tasks 1, 3, and 4.
- Concurrency: the monthly advisory lock and unique database index are covered by Tasks 2 and 3.
- Existing data: migration seeding and duplicate audit are covered by Task 2.
- API compatibility: request schema, response, and status handling are covered by Tasks 4 and 5.
- No placeholder implementation steps remain; all database and route decisions are explicit.
