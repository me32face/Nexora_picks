"use client";

import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import GuideCard from "@/components/guides/GuideCard";
import ComparisonCard from "@/components/comparisons/ComparisonCard";
import Link from "next/link";

export default function SearchResults({ results }) {
  const [activeTab, setActiveTab] = useState("all");

  const { products = [], guides = [], comparisons = [], reviews = [], categories = [] } = results;

  const tabs = [
    { id: "all", label: `All (${results.total})` },
    { id: "products", label: `Products (${products.length})`, count: products.length },
    { id: "guides", label: `Guides (${guides.length})`, count: guides.length },
    { id: "comparisons", label: `Comparisons (${comparisons.length})`, count: comparisons.length },
    { id: "reviews", label: `Reviews (${reviews.length})`, count: reviews.length },
    { id: "categories", label: `Categories (${categories.length})`, count: categories.length }
  ].filter(t => t.id === "all" || t.count > 0);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Section */}
      {(activeTab === "all" || activeTab === "products") && products.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Products</span>
            <span className="text-xs font-normal text-slate-400">({products.length})</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Guides Section */}
      {(activeTab === "all" || activeTab === "guides") && guides.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Buying Guides</span>
            <span className="text-xs font-normal text-slate-400">({guides.length})</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map(g => (
              <GuideCard key={g.id} guide={g} />
            ))}
          </div>
        </section>
      )}

      {/* Comparisons Section */}
      {(activeTab === "all" || activeTab === "comparisons") && comparisons.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Product Showdowns</span>
            <span className="text-xs font-normal text-slate-400">({comparisons.length})</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map(c => (
              <ComparisonCard key={c.id} comparison={c} />
            ))}
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {(activeTab === "all" || activeTab === "reviews") && reviews.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Editorial Reviews</span>
            <span className="text-xs font-normal text-slate-400">({reviews.length})</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map(r => (
              <Link
                key={r.id}
                href={`/reviews/${r.slug}`}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover-lift block"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-indigo-600">{r.category}</span>
                  <span className="font-bold text-amber-500">★ {r.rating}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {r.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {r.verdict}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      {(activeTab === "all" || activeTab === "categories") && categories.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>Matched Categories</span>
            <span className="text-xs font-normal text-slate-400">({categories.length})</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(c => (
              <Link
                key={c.id}
                href={`/categories/${c.slug}`}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 transition-colors block"
              >
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {c.name}
                </p>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
