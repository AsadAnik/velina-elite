import {
  activityFeed,
  dashboardStats,
  recentOrders,
  revenueChartData,
  topProducts,
} from "./dashboard.data";

export function useDashboardStats() {
  return {
    stats: dashboardStats,
    orders: recentOrders,
    topProducts,
    activity: activityFeed,
    chartData: revenueChartData,
  };
}
