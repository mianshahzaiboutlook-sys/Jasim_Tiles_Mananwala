"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import EmptyState from "./EmptyState";
import { searchProducts, sortProducts } from "@/data/products";

export default function ProductListing({
  initialProducts,
  defaultCategory = "",
  showCategoryFilter = true,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = initialProducts;

    if (search) {
      result = searchProducts(search).filter((p) =>
        initialProducts.some((ip) => ip.id === p.id)
      );
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    return sortProducts(result, sortBy);
  }, [initialProducts, search, category, sortBy]);

  return (
    <div>
      <div className="space-y-4 mb-8">
        <SearchBar value={search} onChange={setSearch} />
        <Filters
          selectedCategory={category}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showCategoryFilter={showCategoryFilter}
        />
      </div>

      <p className="mb-6 text-sm text-slate-500">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {filteredProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try adjusting your search or filter criteria."
          action={
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory(defaultCategory);
                setSortBy("default");
              }}
              className="rounded-full bg-sky-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-dark transition-colors"
            >
              Clear Filters
            </button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-md">
          <div className="aspect-square skeleton" />
          <div className="p-5 space-y-3">
            <div className="h-3 w-20 skeleton rounded" />
            <div className="h-5 w-3/4 skeleton rounded" />
            <div className="h-4 w-1/2 skeleton rounded" />
            <div className="h-10 w-full skeleton rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
