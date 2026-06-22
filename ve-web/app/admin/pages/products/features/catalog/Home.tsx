"use client";

import { Plus } from "lucide-react";
import ProductFilters from "./components/ProductFilters";
import ProductTable from "./components/ProductTable";
import { useProducts } from "./hooks";

export default function Home() {
  const {
    products,
    categories,
    search,
    setSearch,
    category,
    setCategory,
    totalCount,
  } = useProducts();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            Product Catalog
          </p>
          <h2 className="text-xl font-black text-foreground mt-0.5">
            Manage your beauty inventory
          </h2>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-velina-rose to-velina-magenta px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-velina-rose/25 hover:opacity-90 transition-opacity">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
        totalCount={products.length}
      />

      <ProductTable products={products} />

      <p className="text-center text-xs text-muted">
        Showing {products.length} of {totalCount} products
      </p>
    </div>
  );
}
