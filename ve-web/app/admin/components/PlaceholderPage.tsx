import { Construction } from "lucide-react";
import AdminShell from "../components/AdminShell";

type PlaceholderPageProps = {
  title: string;
  subtitle: string;
};

export default function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <AdminShell title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 py-24 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-velina-rose/20 to-velina-gold/20 text-velina-rose mb-4">
          <Construction size={28} />
        </div>
        <h2 className="text-lg font-black text-foreground">{title} — Coming Soon</h2>
        <p className="mt-2 text-sm text-muted max-w-sm">
          This section is being built. Check back soon for full {title.toLowerCase()} management.
        </p>
      </div>
    </AdminShell>
  );
}
