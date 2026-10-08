import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function ComparisonCard({ comparison }) {
  if (!comparison) return null;

  return (
    <article className="group flex flex-col h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm hover-lift p-6 transition-all">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
        <Badge variant="editor" size="xs">
          {comparison.category}
        </Badge>
        <span>Updated {formatDate(comparison.updatedDate)}</span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-4 leading-snug">
        <Link href={`/comparisons/${comparison.slug}`}>
          {comparison.title}
        </Link>
      </h3>

      {/* VS Product Matchup Pills */}
      <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 mb-4 text-center">
        <div className="border-r border-slate-200 dark:border-slate-700 pr-2">
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
            {comparison.product1.name}
          </p>
          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
            {comparison.product1.price}
          </span>
        </div>
        <div className="pl-2">
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
            {comparison.product2.name}
          </p>
          <span className="text-[11px] font-semibold text-pink-600 dark:text-pink-400">
            {comparison.product2.price}
          </span>
        </div>
      </div>

      {/* Quick Verdict */}
      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-grow">
        {comparison.quickVerdict}
      </p>

      {/* Winner preview */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <span>🏆</span>
          <span className="truncate max-w-[180px]">{comparison.overallWinner}</span>
        </span>
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
          Compare →
        </span>
      </div>
    </article>
  );
}
