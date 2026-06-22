import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RecentOrder } from "../hooks/dashboard.data";

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  processing: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  shipped: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
};

type RecentOrdersProps = {
  orders: RecentOrder[];
};

export default function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            Recent Orders
          </p>
          <h3 className="text-sm font-black text-foreground mt-0.5">Latest transactions</h3>
        </div>
        <Link
          href="/admin/orders"
          className="flex items-center gap-1 text-xs font-bold text-velina-rose hover:underline"
        >
          View all <ArrowRight size={12} />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface/50">
              {["Order", "Customer", "Product", "Amount", "Status", "Time"].map((col) => (
                <th
                  key={col}
                  className="px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-muted-subtle"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border-subtle last:border-0 hover:bg-surface/60 transition-colors"
              >
                <td className="px-5 py-3.5 font-bold text-velina-rose">{order.id}</td>
                <td className="px-5 py-3.5 font-medium text-foreground">{order.customer}</td>
                <td className="px-5 py-3.5 text-muted max-w-[180px] truncate">{order.product}</td>
                <td className="px-5 py-3.5 font-bold text-foreground">{order.amount}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-muted-subtle">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
