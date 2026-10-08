export default function ComparisonTable({
  specsTable = [],
  product1Name = "Product 1",
  product2Name = "Product 2"
}) {
  if (!specsTable || specsTable.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Head-to-Head Specification Comparison
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/20">
              <th className="py-3 px-4 sm:px-6 font-bold text-slate-500 uppercase tracking-wider w-1/3">
                Feature / Spec
              </th>
              <th className="py-3 px-4 sm:px-6 font-bold text-indigo-700 dark:text-indigo-400 w-1/3">
                {product1Name}
              </th>
              <th className="py-3 px-4 sm:px-6 font-bold text-pink-700 dark:text-pink-400 w-1/3">
                {product2Name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {specsTable.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-800 dark:text-slate-200">
                  {row.label}
                </td>
                <td
                  className={`py-3.5 px-4 sm:px-6 font-medium ${
                    row.winner === "p1"
                      ? "text-indigo-700 dark:text-indigo-300 font-bold bg-indigo-50/40 dark:bg-indigo-950/20"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {row.winner === "p1" && <span className="text-xs">✓</span>}
                    <span>{row.p1Value}</span>
                  </div>
                </td>
                <td
                  className={`py-3.5 px-4 sm:px-6 font-medium ${
                    row.winner === "p2"
                      ? "text-pink-700 dark:text-pink-300 font-bold bg-pink-50/40 dark:bg-pink-950/20"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {row.winner === "p2" && <span className="text-xs">✓</span>}
                    <span>{row.p2Value}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
