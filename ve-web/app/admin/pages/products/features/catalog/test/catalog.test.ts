import { adminProducts } from "../hooks/products.data";

export const catalogTestCases = {
  productsHaveIds: () => adminProducts.every((p) => p.id.startsWith("PRD-")),
  pricesFormatted: () => adminProducts.every((p) => p.price.startsWith("৳")),
};

export function runCatalogSmokeTests() {
  return Object.entries(catalogTestCases).map(([name, test]) => ({
    name,
    passed: test(),
  }));
}
