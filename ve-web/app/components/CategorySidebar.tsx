"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { categories, Category } from "@/lib/data";

type Props = {
  currentCategory: Category;
  currentSubSlug?: string;
  totalCount: number;
};

export default function CategorySidebar({ currentCategory, currentSubSlug, totalCount }: Props) {
  const [priceRange, setPriceRange] = useState(6800);
  const [openCat, setOpenCat] = useState<string>(currentCategory.slug);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Filter by Price */}
      <div>
        <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 mb-4">Filter by Price</h3>
        <input
          type="range"
          min={50}
          max={6800}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-velina-rose cursor-pointer"
        />
        <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
          <span>৳ 50</span>
          <span>৳ {priceRange.toLocaleString()}</span>
        </div>
      </div>

      <hr className="border-zinc-100 dark:border-zinc-800" />

      {/* Product Categories */}
      <div>
        <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 mb-3">Product Categories</h3>
        <ul className="space-y-0.5">
          {categories.map((cat) => {
            const isOpen = openCat === cat.slug;
            const isCurrent = cat.slug === currentCategory.slug;
            return (
              <li key={cat.slug}>
                <button
                  onClick={() => setOpenCat(isOpen ? "" : cat.slug)}
                  className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isCurrent
                      ? "text-velina-rose"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span>{cat.name}</span>
                  <div className="flex items-center gap-2">
                    {isCurrent && (
                      <span className="text-[10px] font-black bg-velina-rose text-white px-2 py-0.5 rounded-full">
                        {totalCount}
                      </span>
                    )}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-zinc-400 dark:text-zinc-600 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="ml-3 mt-1 space-y-0.5 border-l-2 border-zinc-100 dark:border-zinc-800 pl-3">
                    {cat.subcategories.map((sub) => {
                      const isActiveSub = sub.slug === currentSubSlug;
                      return (
                        <li key={sub.slug}>
                          <Link
                            href={`/category/${cat.slug}/${sub.slug}`}
                            className={`flex items-center justify-between px-2 py-1.5 rounded-lg text-xs transition-colors ${
                              isActiveSub
                                ? "text-velina-rose font-bold bg-velina-peach/30 dark:bg-velina-rose/10"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-velina-rose font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
                            }`}
                          >
                            <span>{sub.name}</span>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                isActiveSub
                                  ? "bg-velina-rose text-white font-black"
                                  : "text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800"
                              }`}
                            >
                              {sub.count}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter trigger */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="flex items-center gap-2 px-4 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:border-velina-rose hover:text-velina-rose transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 shadow-sm sticky top-24">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile bottom sheet backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[65] md:hidden transition-opacity duration-300 ${
          showMobileFilter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMobileFilter(false)}
      />
      {/* Mobile bottom sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 z-[70] rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto transition-transform duration-300 md:hidden ${
          showMobileFilter ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="sticky top-0 bg-white dark:bg-zinc-950 flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 rounded-t-3xl">
          <h2 className="font-black text-zinc-900 dark:text-zinc-100">Filters</h2>
          <button
            onClick={() => setShowMobileFilter(false)}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <X size={20} className="text-zinc-500 dark:text-zinc-400" />
          </button>
        </div>
        <div className="p-5">
          <SidebarContent />
        </div>
        <div className="px-5 pb-8 pt-2">
          <button
            onClick={() => setShowMobileFilter(false)}
            className="w-full bg-velina-rose text-white font-bold py-3.5 rounded-full text-sm"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}
