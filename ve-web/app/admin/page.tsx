import AdminShell from "./components/AdminShell";
import { Home } from "./pages/home/features/dashboard";

export default function AdminPage() {
  return (
    <AdminShell
      title="Dashboard"
      subtitle="Overview of your Velina Elite store performance"
    >
      <Home />
    </AdminShell>
  );
}
