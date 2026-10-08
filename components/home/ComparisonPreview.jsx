import Link from "next/link";
import Container from "@/components/ui/Container";
import ComparisonCard from "@/components/comparisons/ComparisonCard";

export default function ComparisonPreview({ comparisons = [] }) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Head-to-Head Showdowns
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
              Compare Before You Buy
            </h2>
          </div>
          <Link
            href="/comparisons"
            className="text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 flex items-center gap-1 group"
          >
            <span>All Comparisons</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.slice(0, 3).map(comp => (
            <ComparisonCard key={comp.id} comparison={comp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
