import { Eye } from "lucide-react";
import type { AdminOrder } from "../hooks/orders.data";
import OrderStatusBadge, { PaymentLabel } from "./OrderStatusBadge";

type OrdersTableProps = {
  orders: AdminOrder[];
};

export default function OrdersTable({ orders }: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-12 text-center shadow-sm">
        <p className="text-sm font-bold text-muted">No orders match this filter.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface/50">
              {["Order ID", "Customer", "Items", "Total", "Payment", "Status", "Date", ""].map(
                (col) => (
                  <th
                    key={col || "actions"}
                    className="px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-muted-subtle"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border-subtle last:border-0 hover:bg-surface/60 transition-colors"
              >
                <td className="px-5 py-4 font-bold text-velina-rose">{order.id}</td>
                <td className="px-5 py-4">
                  <p className="font-medium text-foreground">{order.customer}</p>
                  <p className="text-[10px] text-muted-subtle">{order.email}</p>
                </td>
                <td className="px-5 py-4 text-muted">{order.items}</td>
                <td className="px-5 py-4 font-bold text-foreground">{order.total}</td>
                <td className="px-5 py-4">
                  <PaymentLabel payment={order.payment} />
                </td>
                <td className="px-5 py-4">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="px-5 py-4 text-xs text-muted">{order.date}</td>
                <td className="px-5 py-4">
                  <button
                    aria-label="View order"
                    className="rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-velina-rose transition-colors"
                  >
                    <Eye size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
