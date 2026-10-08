export default function ComparisonWinner({
  winnerTitle,
  detailedVerdict,
  breakdowns = []
}) {
  return (
    <div className="space-y-6">
      {/* Category-by-Category Winner Breakdown */}
      {breakdowns.length > 0 && (
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Category Breakdown & Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {breakdowns.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {b.category}
                  </span>
                  <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                    Winner: {b.winner}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {b.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overall Winner Callout */}
      <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-white to-pink-50/30 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <span>🏆</span>
          <span>Overall Winner Recommendation</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
          {winnerTitle}
        </h4>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {detailedVerdict}
        </p>
      </div>
    </div>
  );
}
