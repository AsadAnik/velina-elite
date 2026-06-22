/**
 * Dashboard feature tests
 * Run with your preferred test runner (e.g. vitest) when configured.
 */

import { dashboardStats, recentOrders, topProducts } from "../hooks/dashboard.data";

export const dashboardTestCases = {
  statsCount: () => dashboardStats.length === 4,
  ordersHaveIds: () => recentOrders.every((o) => o.id.startsWith("VE-")),
  productsHaveRevenue: () => topProducts.every((p) => p.revenue.startsWith("৳")),
};

export function runDashboardSmokeTests() {
  return Object.entries(dashboardTestCases).map(([name, test]) => ({
    name,
    passed: test(),
  }));
}
