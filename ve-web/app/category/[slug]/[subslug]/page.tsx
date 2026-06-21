"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import {
  getCategoryBySlug,
  getProductsBySubcategory,
  categories,
} from "@/lib/data";
import ProductCard from "@/app/components/ProductCard";
import CategorySidebar from "@/app/components/CategorySidebar";
import Navbar from "@/app/components/Navbar";
import CartDrawer from "@/app/components/CartDrawer";

type Props = {
  params: { slug: string; subslug: string };
};

type SortOption = "default" | "price_asc" | "price_desc" | "rating";

export default function SubcategoryPage({ params }: Props) {
  const { slug, subslug } = params;
  const category = getCategoryBySlug(slug);
  const subcategory = category?.subcategories.find((s) => s.slug === subslug);
  const allProducts = getProductsBySubcategory(subslug);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("default");

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (search.trim()) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())
      );
    }
    switch (sort) {
      case "price_asc":
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price_desc":
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "rating":
        result.sort(
          (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount
        );
        break;
    }
    return result;
  }, [allProducts, search, sort]);

  if (!category || !subcategory) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-background">
          <p className="text-2xl font-black text-zinc-800 dark:text-zinc-200">Not found</p>
          <Link href="/" className="text-velina-rose font-bold underline">
            Back to Home
          </Link>
        </div>
        <CartDrawer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-zinc-950 dark:to-zinc-900 py-8 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
          {subcategory.name}
        </h1>
        <nav className="flex items-center justify-center gap-1.5 mt-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href={`/category/${slug}`}
            className="hover:text-white transition-colors"
          >
            {category.name}
          </Link>
          <ChevronRight size={12} />
          <span className="text-white font-semibold">{subcategory.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex gap-6 bg-background min-h-screen">
        <CategorySidebar
          currentCategory={category}
          currentSubSlug={subslug}
          totalCount={subcategory.count}
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Search in this category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 rounded-full text-sm outline-none focus:border-velina-rose transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full px-4 py-2.5 pr-8 text-sm font-medium outline-none focus:border-velina-rose cursor-pointer"
              >
                <option value="default">Default sorting</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronRight
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 rotate-90 pointer-events-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="flex items-center gap-1.5 bg-velina-peach/40 dark:bg-velina-rose/10 text-velina-rose text-xs font-bold px-3 py-1.5 rounded-full border border-velina-rose/20">
              {category.name} &rsaquo; {subcategory.name}
              <Link href={`/category/${slug}`} className="hover:opacity-70">
                <X size={12} />
              </Link>
            </span>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              {filtered.length > 0
                ? `${filtered.length} product${filtered.length !== 1 ? "s" : ""} found`
                : `${subcategory.count} products in this category`}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <Search size={28} className="text-zinc-300 dark:text-zinc-600" />
              </div>
              <p className="text-zinc-800 dark:text-zinc-200 font-bold text-lg">
                {subcategory.name}
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm max-w-xs">
                We&apos;re adding products to this category soon. Check back
                shortly!
              </p>
              <Link
                href={`/category/${slug}`}
                className="text-velina-rose text-sm font-bold underline"
              >
                Browse all {category.name}
              </Link>
            </div>
          )}
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
