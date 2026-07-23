# Public Active Product Category Tree Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Return active public product categories as a nested tree using `other_product_categories`.

**Architecture:** Keep the Prisma query in `src/publics/route.ts`, then transform the flat rows in a focused helper. Each returned node exposes only `id`, `name`, `slug`, and recursively nested `other_product_categories`; root nodes are returned at the top level.

**Tech Stack:** Bun test, TypeScript, Elysia, Prisma.

## Global Constraints

- Only active categories are included.
- `parent_id` and `level` are used for grouping but are not exposed in the response.
- Existing error handling and ordering remain unchanged.

---

### Task 1: Build and wire the category tree

**Files:**
- Create: `src/publics/product-category-tree.ts`
- Create: `src/publics/product-category-tree.test.ts`
- Modify: `src/publics/route.ts:384-410`

**Interfaces:**
- Consumes rows with `id`, `name`, `slug`, nullable `parent_id`, and nullable `level`.
- Produces `ProductCategoryTreeNode[]` with `id`, `name`, `slug`, and `other_product_categories`.

- [ ] **Step 1: Write the failing test** for root, child, and grandchild nesting, plus treating a category whose parent is absent from the active result as a root.
- [ ] **Step 2: Run `bun test src/publics/product-category-tree.test.ts`** and confirm it fails because the helper is not implemented.
- [ ] **Step 3: Implement the minimal map-based tree builder.** Create every node first, attach nodes to an existing parent by `parent_id`, and return only nodes with no parent or with a missing parent as roots.
- [ ] **Step 4: Update `/product-categories/active`** to call the helper after the existing Prisma query.
- [ ] **Step 5: Run the focused test and the existing publics mapper tests.**
- [ ] **Step 6: Run `bunx tsc --noEmit` and inspect the diff.**
