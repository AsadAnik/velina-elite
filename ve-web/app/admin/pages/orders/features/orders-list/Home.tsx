"use client";

import OrdersTable from "./components/OrdersTable";
import { useOrders } from "./hooks";

export default function Home() {
  const { orders, statusFilter, setStatusFilter, statusFilters, stats, totalCount } =
    useOrders();

  const statCards = [
    { label: "Pending", value: stats.pending, color: "text-amber-600" },
    { label: "Processing", value: stats.processing, color: "text-blue-600" },
    { label: "Shipped", value: stats.shipped, color: "text-purple-600" },
    { label: "Delivered", value: stats.delivered, color: "text-emerald-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-muted">
          Order Management
        </p>
        <h2 className="text-xl font-black text-foreground mt-0.5">
          Track and fulfill customer orders
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-4 shadow-sm"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-muted">
              {card.label}
            </p>
            <p className={`mt-1 text-2xl font-black ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {statusFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setStatusFilter(filter)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold capitalize transition-all ${
              statusFilter === filter
                ? "bg-velina-rose text-white shadow-md shadow-velina-rose/25"
                : "border border-border bg-surface text-muted hover:border-velina-rose/40 hover:text-velina-rose"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <OrdersTable orders={orders} />

      <p className="text-center text-xs text-muted">
        Showing {orders.length} of {totalCount} orders
      </p>
    </div>
  );
}
