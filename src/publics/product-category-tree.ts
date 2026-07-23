export type ProductCategoryRow = {
  id: string;
  name: string | null;
  slug: string | null;
  parent_id: string | null;
  level: number | null;
};

export type ProductCategoryTreeNode = {
  id: string;
  name: string | null;
  slug: string | null;
  other_product_categories: ProductCategoryTreeNode[];
};

export function buildProductCategoryTree(
  categories: ProductCategoryRow[],
): ProductCategoryTreeNode[] {
  const nodes = new Map<string, ProductCategoryTreeNode>();

  for (const category of categories) {
    nodes.set(category.id, {
      id: category.id,
      name: category.name,
      slug: category.slug,
      other_product_categories: [],
    });
  }

  const roots: ProductCategoryTreeNode[] = [];

  for (const category of categories) {
    const node = nodes.get(category.id);
    const parent = category.parent_id ? nodes.get(category.parent_id) : undefined;

    if (!node) continue;

    if (parent) {
      parent.other_product_categories.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}
