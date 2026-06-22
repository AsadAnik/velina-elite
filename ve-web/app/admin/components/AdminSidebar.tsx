"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Tag,
  BarChart3,
  Settings,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

const BRAND_LOGO = "/1776256116755-removebg-preview.png";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Promotions", href: "/admin/promotions", icon: Tag },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

type AdminSidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-white dark:bg-zinc-950 transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <Link href="/admin" className="flex items-center gap-2.5 overflow-hidden">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-velina-peach/40 dark:bg-velina-rose/10">
            <Image
              src={BRAND_LOGO}
              alt="Velina Elite"
              fill
              sizes="36px"
              className="object-contain p-1 dark:invert dark:brightness-95"
            />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-foreground">Velina Elite</p>
              <p className="truncate text-[10px] font-bold uppercase tracking-widest text-velina-rose">
                Admin Panel
              </p>
            </div>
          )}
        </Link>
        <button
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-velina-rose transition-colors lg:flex"
        >
          <ChevronLeft
            size={18}
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {!collapsed && (
          <p className="px-3 mb-2 text-[10px] font-black uppercase tracking-widest text-muted-subtle">
            Main Menu
          </p>
        )}
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-velina-rose/15 to-velina-gold/10 text-velina-rose shadow-sm"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  active
                    ? "bg-velina-rose text-white shadow-md shadow-velina-rose/30"
                    : "bg-surface-2 text-muted group-hover:bg-velina-peach/50 group-hover:text-velina-rose dark:group-hover:bg-velina-rose/10"
                }`}
              >
                <Icon size={16} />
              </span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3">
        <div
          className={`rounded-2xl bg-gradient-to-br from-velina-rose/10 via-velina-peach/30 to-velina-gold/10 dark:from-velina-rose/15 dark:via-zinc-900 dark:to-velina-gold/10 p-3 ${
            collapsed ? "text-center" : ""
          }`}
        >
          <Sparkles
            size={18}
            className={`text-velina-gold ${collapsed ? "mx-auto" : "mb-2"}`}
          />
          {!collapsed && (
            <>
              <p className="text-xs font-black text-foreground">Premium Beauty Hub</p>
              <p className="mt-0.5 text-[10px] text-muted leading-relaxed">
                Manage your store with elegance.
              </p>
            </>
          )}
        </div>
        <Link
          href="/"
          className={`mt-3 flex items-center justify-center gap-2 rounded-xl border border-border bg-surface py-2 text-xs font-bold text-muted hover:border-velina-rose/40 hover:text-velina-rose transition-colors ${
            collapsed ? "px-2" : "px-3"
          }`}
        >
          {!collapsed && "←"} Storefront
        </Link>
      </div>
    </aside>
  );
}
