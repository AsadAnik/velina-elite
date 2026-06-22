import AdminShell from "../components/AdminShell";
import { Home } from "../pages/orders/features/orders-list";

export default function OrdersPage() {
  return (
    <AdminShell
      title="Orders"
      subtitle="View, process, and track customer orders"
    >
      <Home />
    </AdminShell>
  );
}
