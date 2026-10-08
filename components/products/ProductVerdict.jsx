import AffiliateButton from "./AffiliateButton";

export default function ProductVerdict({ product }) {
  if (!product) return null;

  return (
    <div className="rounded-3xl border border-indigo-100 dark:border-indigo-950/80 bg-gradient-to-br from-indigo-50/70 via-white to-pink-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              The Nexora Picks Verdict
            </span>
            {product.isDemo && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 uppercase">
                Demo Lab
              </span>
            )}
          </div>
          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
            {product.description}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Researched with focus on long-term durability, ergonomics, and authentic retail value.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2.5">
          <AffiliateButton
            product={product}
            size="lg"
            label="Check Latest Price"
            className="w-full shadow-md"
          />
          <span className="text-[11px] text-center text-slate-400">
            Directly on verified partner
          </span>
        </div>
      </div>
    </div>
  );
}
