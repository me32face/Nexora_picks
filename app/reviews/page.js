import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import { getReviews } from "@/lib/reviews";
import { formatDate } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "In-Depth Product Reviews — Nexora Picks",
  description: "Granular product evaluations covering ergonomic fatigue, switch acoustics, thermal dissipation, and long-term durability.",
  canonical: "/reviews"
});

export default async function ReviewsPage() {
  const reviewsList = await getReviews();

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Reviews", url: "/reviews" }]} />

        <div className="mt-4 mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Field &amp; Spec Analysis
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            In-Depth Product Reviews
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Detailed evaluations focused on real-world utility: switch tactile feedback, acoustic measurements, battery decay rates, and chassis rigidity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map(review => (
            <article
              key={review.id}
              className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm hover-lift transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <Badge variant="editor" size="xs">{review.category}</Badge>
                  <span className="font-bold text-amber-500 flex items-center gap-1">
                    ★ {review.rating} / 5
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  <Link href={`/reviews/${review.slug}`} className="hover:text-indigo-600 transition-colors">
                    {review.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {review.verdict}
                </p>

                {/* Scorecard quick pills */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">Overall Lab Score</span>
                  <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">
                    {review.scorecard.overallScore} / 10
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Updated {formatDate(review.updatedDate)}
                </span>
                <Link
                  href={`/reviews/${review.slug}`}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read Review →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
