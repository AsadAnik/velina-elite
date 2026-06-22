"use client";

import { useMemo, useState } from "react";
import { adminProducts, productCategories } from "./products.data";

export function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = useMemo(() => {
    return adminProducts.filter((product) => {
      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return {
    products,
    categories: productCategories,
    search,
    setSearch,
    category,
    setCategory,
    totalCount: adminProducts.length,
  };
}
