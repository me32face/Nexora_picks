"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ initialQuery = "", onSearch }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const clean = query.trim();
    if (!clean) return;

    if (onSearch) {
      onSearch(clean);
    } else {
      router.push(`/search?q=${encodeURIComponent(clean)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <div className="relative flex items-center">
        <div className="absolute left-4 text-slate-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products, guides, reviews, comparisons..."
          className="w-full pl-12 pr-24 py-3.5 sm:py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm sm:text-base placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-20 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs px-2 py-1"
          >
            Clear
          </button>
        )}
        <button
          type="submit"
          className="absolute right-2.5 px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all"
        >
          Search
        </button>
      </div>
    </form>
  );
}
