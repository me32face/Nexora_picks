"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function ProductFilterClient({
  categories = [],
  currentFilters = {}
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [category, setCategory] = useState(currentFilters.category || "");
  const [minRating, setMinRating] = useState(currentFilters.minRating || "");
  const [priceTier, setPriceTier] = useState(currentFilters.priceTier || "");
  const [badge, setBadge] = useState(currentFilters.badge || "");

  function applyFilter(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`/products?${params.toString()}`);
    });
  }

  function handleCategoryChange(e) {
    const val = e.target.value;
    setCategory(val);
    applyFilter("category", val);
  }

  function handleRatingChange(e) {
    const val = e.target.value;
    setMinRating(val);
    applyFilter("rating", val);
  }

  function handlePriceChange(e) {
    const val = e.target.value;
    setPriceTier(val);
    applyFilter("price", val);
  }

  function handleBadgeChange(e) {
    const val = e.target.value;
    setBadge(val);
    applyFilter("badge", val);
  }

  function resetAll() {
    setCategory("");
    setMinRating("");
    setPriceTier("");
    setBadge("");
    startTransition(() => {
      router.push("/products");
    });
  }

  const hasActiveFilters = category || minRating || priceTier || badge;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span>Filter Products</span>
          {isPending && (
            <span className="text-[10px] font-normal text-indigo-600 animate-pulse">
              Updating...
            </span>
          )}
        </h3>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetAll}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {/* Category */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories.map(c => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Minimum Rating
          </label>
          <select
            value={minRating}
            onChange={handleRatingChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5★ & Above</option>
            <option value="4.0">4.0★ & Above</option>
          </select>
        </div>

        {/* Price Bracket */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Price Bracket
          </label>
          <select
            value={priceTier}
            onChange={handlePriceChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Prices</option>
            <option value="under-1500">Under ₹1,500</option>
            <option value="under-2500">Under ₹2,500</option>
            <option value="under-4000">Under ₹4,000</option>
          </select>
        </div>

        {/* Badge / Award */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Editorial Badge
          </label>
          <select
            value={badge}
            onChange={handleBadgeChange}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Badges</option>
            <option value="EDITOR'S PICK">Editor&apos;s Pick</option>
            <option value="BEST VALUE">Best Value</option>
            <option value="BUDGET PICK">Budget Pick</option>
            <option value="BEST FOR GAMING">Gaming Choice</option>
            <option value="BEST FOR STUDENTS">Student Choice</option>
          </select>
        </div>
      </div>
    </div>
  );
}
