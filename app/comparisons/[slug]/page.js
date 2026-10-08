import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ComparisonTable from "@/components/comparisons/ComparisonTable";
import ComparisonWinner from "@/components/comparisons/ComparisonWinner";
import { getComparisonBySlug, getAllComparisonSlugs, getFeaturedComparisons } from "@/lib/comparisons";
import { formatDate } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllComparisonSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const comp = await getComparisonBySlug(resolvedParams.slug);
  if (!comp) return {};

  return constructMetadata({
    title: `${comp.title} — Direct Showdown & Winner`,
    description: comp.quickVerdict,
    canonical: `/comparisons/${comp.slug}`
  });
}

export default async function ComparisonDetailPage({ params }) {
  const resolvedParams = await params;
  const comp = await getComparisonBySlug(resolvedParams.slug);

  if (!comp) {
    notFound();
  }

  const allComps = await getFeaturedComparisons();
  const related = allComps.filter(c => c.id !== comp.id).slice(0, 2);

  return (
    <div className="py-8 sm:py-12 space-y-12 sm:space-y-16">
      <Container>
        <Breadcrumbs
          items={[
            { name: "Comparisons", url: "/comparisons" },
            { name: comp.title, url: `/comparisons/${comp.slug}` }
          ]}
        />

        {/* Header */}
        <div className="mt-6 space-y-3 max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Badge variant="editor" size="xs">{comp.category}</Badge>
            <span>•</span>
            <span>Updated {formatDate(comp.updatedDate)}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {comp.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A granular head-to-head analysis examining switch feel, ergonomics, port versatility, and long-term price-to-performance.
          </p>
        </div>

        {/* Side-by-Side Contenders Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contender 1 */}
          <div className="rounded-3xl border-2 border-indigo-200 dark:border-indigo-900/80 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <div className="absolute top-4 right-4">
              <Badge variant="editor" size="xs">Contender A</Badge>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 mb-6 flex items-center justify-center">
                <Image
                  src={comp.product1.image}
                  alt={comp.product1.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-2"
                />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-1">
                {comp.product1.name}
              </h2>
              <p className="text-xs text-slate-500 mb-4 font-medium">{comp.product1.tagline}</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  {comp.product1.price}
                </span>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  ★ {comp.product1.rating}
                </span>
              </div>

              {/* Pros */}
              <div className="space-y-2 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Key Strengths
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {comp.product1.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Drawbacks
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {comp.product1.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contender 2 */}
          <div className="rounded-3xl border-2 border-pink-200 dark:border-pink-900/80 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <div className="absolute top-4 right-4">
              <Badge variant="gaming" size="xs">Contender B</Badge>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 mb-6 flex items-center justify-center">
                <Image
                  src={comp.product2.image}
                  alt={comp.product2.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-2"
                />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-1">
                {comp.product2.name}
              </h2>
              <p className="text-xs text-slate-500 mb-4 font-medium">{comp.product2.tagline}</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-black text-pink-600 dark:text-pink-400">
                  {comp.product2.price}
                </span>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  ★ {comp.product2.rating}
                </span>
              </div>

              {/* Pros */}
              <div className="space-y-2 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Key Strengths
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {comp.product2.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Drawbacks
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {comp.product2.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Verdict Callout */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Executive Summary
          </span>
          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
            {comp.quickVerdict}
          </p>
        </div>

        {/* Specs Table */}
        <section>
          <ComparisonTable
            specsTable={comp.specsTable}
            product1Name={comp.product1.name}
            product2Name={comp.product2.name}
          />
        </section>

        {/* Category Breakdown & Overall Winner */}
        <section>
          <ComparisonWinner
            winnerTitle={comp.overallWinner}
            detailedVerdict={comp.detailedVerdict}
            breakdowns={comp.categoryBreakdown}
          />
        </section>

        {/* Other Comparisons */}
        {related.length > 0 && (
          <section className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              More Showdowns &amp; Comparisons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(r => (
                <Link
                  key={r.id}
                  href={`/comparisons/${r.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover-lift block"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {r.title}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {r.quickVerdict}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
