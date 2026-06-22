import { adminOrders } from "../hooks/orders.data";

export const ordersTestCases = {
  ordersHaveIds: () => adminOrders.every((o) => o.id.startsWith("VE-")),
  totalsFormatted: () => adminOrders.every((o) => o.total.startsWith("৳")),
};

export function runOrdersSmokeTests() {
  return Object.entries(ordersTestCases).map(([name, test]) => ({
    name,
    passed: test(),
  }));
}
