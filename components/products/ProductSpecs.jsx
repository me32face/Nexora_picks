export default function ProductSpecs({ specifications = [] }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Key Technical Specifications
        </h3>
      </div>
      <dl className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
        {specifications.map((spec, idx) => (
          <div key={idx} className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors">
            <dt className="font-semibold text-slate-600 dark:text-slate-400">
              {spec.label}
            </dt>
            <dd className="sm:col-span-2 font-medium text-slate-900 dark:text-slate-100">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
