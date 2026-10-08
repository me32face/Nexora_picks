import Container from "@/components/ui/Container";
import { shoppingTips } from "@/data/shoppingTips";

export default function ShoppingTips() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Consumer Knowledge
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
            Smart Shopping Tips &amp; Insights
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Actionable strategies to avoid inflated discounts, decode technical specs, and protect your investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoppingTips.map(tip => (
            <div
              key={tip.id}
              className="p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {tip.category}
                  </span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.snippet}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Verified Advice
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
