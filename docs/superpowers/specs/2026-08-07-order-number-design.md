# Order Number Allocation Design

## Goal

Update `allocateNextOrderNumber` to generate order numbers using the company short code and the fixed document type `SSR`.

## Format

The generated value is:

`{company_short_code}-SSR{YYMM}{sequence}`

where `sequence` is a four-digit, monthly running number. For example: `GBT-SSR26080001`.

When the order has no company short code, the fallback is `SSR{YYMM}{sequence}` without the hyphen or company segment.

## Data flow

The allocator receives the order's `company_id`, reads `short_code` from `public_companies`, builds the monthly prefix, locks allocation for that prefix, finds the highest matching sequence in `public.IM.docid`, and returns the next number.

## Error handling

An absent company, missing short code, or company lookup failure uses the no-company fallback. Invalid dates and sequence overflow retain the existing validation behavior.

## Testing

Tests will cover formatting with and without a company code, matching only the current monthly prefix, and allocation query behavior with the company-specific prefix.
