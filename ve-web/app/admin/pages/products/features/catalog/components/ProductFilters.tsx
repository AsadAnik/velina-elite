"use client";

import { Search, Filter } from "lucide-react";

type ProductFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  totalCount: number;
};

export default function ProductFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  totalCount,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-white dark:bg-zinc-900/50 p-4 shadow-sm">
      <div className="relative flex-1 max-w-md">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-subtle" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products or brands..."
          className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm outline-none focus:border-velina-rose transition-colors"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-muted" />
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="rounded-xl border border-border bg-surface px-3 py-2.5 text-sm font-medium outline-none focus:border-velina-rose transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <span className="text-xs font-bold text-muted">
          {totalCount} products
        </span>
      </div>
    </div>
  );
}
