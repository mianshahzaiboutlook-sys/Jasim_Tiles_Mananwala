"use client";

import { categories } from "@/data/categories";

export default function Filters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  showCategoryFilter = true,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {showCategoryFilter && (
        <div className="flex-1">
          <label htmlFor="category-filter" className="sr-only">
            Filter by category
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-brand shadow-sm transition-all focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20 outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={showCategoryFilter ? "sm:w-56" : "flex-1 sm:max-w-xs"}>
        <label htmlFor="sort-filter" className="sr-only">
          Sort products
        </label>
        <select
          id="sort-filter"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-brand shadow-sm transition-all focus:border-sky-brand focus:ring-2 focus:ring-sky-brand/20 outline-none"
        >
          <option value="default">Default Order</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="company">Company</option>
        </select>
      </div>
    </div>
  );
}
