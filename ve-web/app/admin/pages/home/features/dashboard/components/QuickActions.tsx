import Link from "next/link";
import { ArrowRight, Package, Plus, Tag, Users } from "lucide-react";

const actions = [
  {
    label: "Add Product",
    desc: "List a new beauty item",
    href: "/admin/products",
    icon: Plus,
    color: "from-velina-rose to-velina-magenta",
  },
  {
    label: "View Orders",
    desc: "Process pending shipments",
    href: "/admin/orders",
    icon: Package,
    color: "from-velina-gold to-amber-600",
  },
  {
    label: "New Promotion",
    desc: "Create flash sale or combo",
    href: "/admin/promotions",
    icon: Tag,
    color: "from-purple-500 to-indigo-600",
  },
  {
    label: "Customers",
    desc: "Browse customer profiles",
    href: "/admin/customers",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            Quick Actions
          </p>
          <h3 className="text-sm font-black text-foreground mt-0.5">Manage your store</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5 hover:border-velina-rose/30 hover:shadow-sm transition-all"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${action.color} text-white shadow-md`}
              >
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-foreground group-hover:text-velina-rose transition-colors">
                  {action.label}
                </p>
                <p className="text-[11px] text-muted truncate">{action.desc}</p>
              </div>
              <ArrowRight
                size={14}
                className="text-muted group-hover:text-velina-rose group-hover:translate-x-0.5 transition-all shrink-0"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
