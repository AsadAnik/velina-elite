import type { AdminOrder } from "../hooks/orders.data";

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  processing: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  shipped: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  cancelled: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
};

const paymentStyles = {
  paid: "text-emerald-600 dark:text-emerald-400",
  pending: "text-amber-600 dark:text-amber-400",
  refunded: "text-red-500",
};

type OrderStatusBadgeProps = {
  status: AdminOrder["status"];
};

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export function PaymentLabel({ payment }: { payment: AdminOrder["payment"] }) {
  return (
    <span className={`text-xs font-bold capitalize ${paymentStyles[payment]}`}>
      {payment}
    </span>
  );
}
