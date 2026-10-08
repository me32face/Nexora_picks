import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";

export default function EditorsPicks({ products = [] }) {
  const picks = products.filter(p => p.isEditorsPick).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>★</span> Editorial Selection
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Editor&apos;s Verified Picks
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Hand-tested and vetted products that scored highest for craftsmanship, longevity, and price fairness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {picks.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
