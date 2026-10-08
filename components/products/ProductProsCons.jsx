export default function ProductProsCons({ pros = [], cons = [] }) {
  if ((!pros || pros.length === 0) && (!cons || cons.length === 0)) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pros */}
      <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 p-6">
        <div className="flex items-center gap-2 mb-4 text-emerald-800 dark:text-emerald-300">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center font-bold">
            ✓
          </div>
          <h4 className="text-base font-bold">Reasons to Buy</h4>
        </div>
        <ul className="space-y-2.5 text-sm text-slate-800 dark:text-slate-200">
          {pros.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-6">
        <div className="flex items-center gap-2 mb-4 text-rose-800 dark:text-rose-300">
          <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center font-bold">
            ✕
          </div>
          <h4 className="text-base font-bold">Things to Consider</h4>
        </div>
        <ul className="space-y-2.5 text-sm text-slate-800 dark:text-slate-200">
          {cons.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-rose-600 dark:text-rose-400 font-bold shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
