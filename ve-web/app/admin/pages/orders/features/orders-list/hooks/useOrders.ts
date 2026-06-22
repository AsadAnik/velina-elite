"use client";

import { useMemo, useState } from "react";
import { adminOrders, orderStatusFilters } from "./orders.data";

export function useOrders() {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const orders = useMemo(() => {
    if (statusFilter === "All") return adminOrders;
    return adminOrders.filter((order) => order.status === statusFilter);
  }, [statusFilter]);

  const stats = useMemo(
    () => ({
      pending: adminOrders.filter((o) => o.status === "pending").length,
      processing: adminOrders.filter((o) => o.status === "processing").length,
      shipped: adminOrders.filter((o) => o.status === "shipped").length,
      delivered: adminOrders.filter((o) => o.status === "delivered").length,
    }),
    []
  );

  return {
    orders,
    statusFilter,
    setStatusFilter,
    statusFilters: orderStatusFilters,
    stats,
    totalCount: adminOrders.length,
  };
}
