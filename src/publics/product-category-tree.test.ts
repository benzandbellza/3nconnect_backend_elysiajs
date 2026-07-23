import { describe, expect, test } from "bun:test";
import { buildProductCategoryTree } from "./product-category-tree";

describe("buildProductCategoryTree", () => {
  test("nests categories recursively and keeps categories with missing parents at the root", () => {
    const result = buildProductCategoryTree([
      { id: "root", name: "Root", slug: "root", parent_id: null, level: 0 },
      { id: "child", name: "Child", slug: "child", parent_id: "root", level: 1 },
      { id: "grandchild", name: "Grandchild", slug: "grandchild", parent_id: "child", level: 2 },
      { id: "orphan", name: "Orphan", slug: "orphan", parent_id: "missing", level: 1 },
    ]);

    expect(result).toEqual([
      {
        id: "root",
        name: "Root",
        slug: "root",
        other_product_categories: [
          {
            id: "child",
            name: "Child",
            slug: "child",
            other_product_categories: [
              {
                id: "grandchild",
                name: "Grandchild",
                slug: "grandchild",
                other_product_categories: [],
              },
            ],
          },
        ],
      },
      {
        id: "orphan",
        name: "Orphan",
        slug: "orphan",
        other_product_categories: [],
      },
    ]);
  });
});
