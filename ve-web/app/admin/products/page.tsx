import AdminShell from "../components/AdminShell";
import { Home } from "../pages/products/features/catalog";

export default function ProductsPage() {
  return (
    <AdminShell
      title="Products"
      subtitle="Manage product catalog, pricing, and inventory"
    >
      <Home />
    </AdminShell>
  );
}
