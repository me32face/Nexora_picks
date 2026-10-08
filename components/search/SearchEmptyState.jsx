import Link from "next/link";
import { getPopularSearches } from "@/lib/search";

export default function SearchEmptyState({ query = "" }) {
  const popular = getPopularSearches();

  return (
    <div className="py-16 text-center max-w-lg mx-auto space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl mx-auto text-slate-400">
        🔍
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {query ? `No results found for "${query}"` : "Search Nexora Picks"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Try checking for spelling errors, broader keywords, or explore one of our popular categories below.
        </p>
      </div>

      <div className="pt-2">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Popular Searches
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {popular.map(term => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 transition-colors"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
