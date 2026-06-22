"use client";

import { Bell, Menu, Search } from "lucide-react";
import ThemeToggle from "@/app/components/ThemeToggle";

type AdminHeaderProps = {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
};

export default function AdminHeader({ title, subtitle, onMenuClick }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-velina-rose transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-black text-foreground">{title}</h1>
            {subtitle && (
              <p className="truncate text-xs text-muted hidden sm:block">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden md:block">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-subtle"
            />
            <input
              type="search"
              placeholder="Search admin..."
              className="w-56 lg:w-72 rounded-full border border-border bg-surface py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-velina-rose focus:bg-background placeholder:text-muted-subtle"
            />
          </div>

          <button
            aria-label="Notifications"
            className="relative rounded-full border border-border bg-surface p-2 text-muted hover:border-velina-rose/40 hover:text-velina-rose transition-colors"
          >
            <Bell size={17} />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-velina-rose ring-2 ring-white dark:ring-zinc-950" />
          </button>

          <ThemeToggle />

          <div className="hidden sm:flex items-center gap-2.5 rounded-full border border-border bg-surface pl-1.5 pr-3 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-velina-rose to-velina-gold text-xs font-black text-white">
              VE
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-bold text-foreground leading-none">Admin</p>
              <p className="text-[10px] text-muted mt-0.5">velina@elite.bd</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
