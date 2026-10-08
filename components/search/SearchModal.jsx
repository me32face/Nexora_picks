"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import { searchAll, getPopularSearches } from "@/lib/search";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  const popular = getPopularSearches();

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) return;

    let isSubscribed = true;
    const timer = setTimeout(async () => {
      const data = await searchAll(trimmed);
      if (isSubscribed) {
        setResults(data);
        setLoading(false);
      }
    }, 200);

    return () => {
      isSubscribed = false;
      clearTimeout(timer);
    };
  }, [query]);

  function handleQueryChange(e) {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      setResults(null);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }

  function handleClose() {
    setQuery("");
    setResults(null);
    setLoading(false);
    onClose();
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    const q = query.trim();
    handleClose();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  function handleSelect() {
    handleClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} maxWidth="max-w-2xl">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search products, buying guides, comparisons, categories..."
            className="w-full bg-transparent text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResults(null);
                setLoading(false);
              }}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>
      </form>

      {/* Popular Suggestions */}
      {!query && (
        <div className="py-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {popular.map(term => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  setLoading(true);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Live Loading */}
      {loading && (
        <div className="py-8 text-center text-sm text-slate-400">
          Searching Nexora Picks library...
        </div>
      )}

      {/* Live Results */}
      {!loading && results && (
        <div className="py-3 space-y-4 max-h-[60vh] overflow-y-auto">
          {results.total === 0 ? (
            <div className="text-center py-8">
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for keyboards, mice, chargers, or explore our buying guides.
              </p>
            </div>
          ) : (
            <>
              {/* Products */}
              {results.products.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    Products ({results.products.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.products.slice(0, 4).map(p => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        onClick={handleSelect}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {p.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate max-w-md">
                            {p.shortDescription}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          ₹{p.price?.toLocaleString()}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {results.guides.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
                    Buying Guides ({results.guides.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.guides.slice(0, 3).map(g => (
                      <Link
                        key={g.id}
                        href={`/guides/${g.slug}`}
                        onClick={handleSelect}
                        className="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                      >
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                          {g.title}
                        </p>
                        <p className="text-xs text-slate-500">{g.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparisons */}
              {results.comparisons.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-2">
                    Comparisons ({results.comparisons.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.comparisons.slice(0, 2).map(c => (
                      <Link
                        key={c.id}
                        href={`/comparisons/${c.slug}`}
                        onClick={handleSelect}
                        className="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                      >
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400">
                          {c.title}
                        </p>
                        <p className="text-xs text-slate-500">{c.quickVerdict}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 text-center border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View all {results.total} results on search page →
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </Modal>
  );
}
