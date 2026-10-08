import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [], emptyMessage = "No products found." }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8">
        <p className="text-base font-semibold text-slate-700 dark:text-slate-300">{emptyMessage}</p>
        <p className="text-xs text-slate-500 mt-1">Try resetting filters or adjusting your search keywords.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
