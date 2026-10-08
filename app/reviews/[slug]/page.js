import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ProductProsCons from "@/components/products/ProductProsCons";
import AffiliateButton from "@/components/products/AffiliateButton";
import { getReviewBySlug, getAllReviewSlugs, getReviews } from "@/lib/reviews";
import { getProductBySlug } from "@/lib/products";
import { getAuthorById } from "@/data/authors";
import { formatDate } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllReviewSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const review = await getReviewBySlug(resolvedParams.slug);
  if (!review) return {};

  return constructMetadata({
    title: `${review.title} — Comprehensive Hands-On Lab Review`,
    description: review.verdict,
    canonical: `/reviews/${review.slug}`
  });
}

export default async function ReviewDetailPage({ params }) {
  const resolvedParams = await params;
  const review = await getReviewBySlug(resolvedParams.slug);

  if (!review) {
    notFound();
  }

  const product = review.productSlug ? await getProductBySlug(review.productSlug) : null;
  const author = getAuthorById(review.authorId);
  const allReviews = await getReviews();
  const moreReviews = allReviews.filter(r => r.id !== review.id).slice(0, 2);

  return (
    <article className="py-8 sm:py-12 space-y-12">
      <Container>
        <Breadcrumbs
          items={[
            { name: "Reviews", url: "/reviews" },
            { name: review.title, url: `/reviews/${review.slug}` }
          ]}
        />

        {/* Header */}
        <div className="mt-6 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Badge variant="editor" size="xs">{review.category}</Badge>
            <span>•</span>
            <span>Reviewed by {author.name}</span>
            <span>•</span>
            <span>Updated {formatDate(review.updatedDate)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {review.title}
          </h1>

          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-500 text-lg">
              <span>★</span>
              <span>{review.rating} / 5.0</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
              Lab Score: {review.scorecard.overallScore} / 10
            </div>
          </div>
        </div>

        {/* Executive Verdict Callout with Affiliate Action */}
        <div className="p-6 sm:p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-white to-pink-50/30 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Our Bottom Line
            </span>
            <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
              {review.verdict}
            </p>
          </div>
          {product && (
            <div className="shrink-0 w-full md:w-auto">
              <AffiliateButton product={product} size="lg" label="Check Price" />
            </div>
          )}
        </div>

        {/* Scorecard Breakdown Grid */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">
            Detailed Performance Scorecard
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(review.scorecard).map(([key, score]) => {
              if (key === "overallScore") return null;
              const formattedLabel = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
              return (
                <div key={key} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1 text-center">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block truncate">
                    {formattedLabel}
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    {score}
                  </span>
                  <span className="text-[10px] text-slate-400 block">/ 10.0</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review Sections */}
        <div className="space-y-10 max-w-4xl">
          {review.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* Pros & Cons */}
        <section className="space-y-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Strengths &amp; Limitations
          </h2>
          <ProductProsCons pros={review.pros} cons={review.cons} />
        </section>

        {/* Link to Full Product Specs */}
        {product && (
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Want complete technical specifications?
              </p>
              <p className="text-xs text-slate-500">
                View the full specification sheet, dimensions, and verified features for {product.name}.
              </p>
            </div>
            <Link
              href={`/products/${product.slug}`}
              className="text-xs font-bold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shrink-0"
            >
              Full Spec Sheet →
            </Link>
          </div>
        )}

        {/* More Reviews */}
        {moreReviews.length > 0 && (
          <section className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              More In-Depth Reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moreReviews.map(mr => (
                <Link
                  key={mr.id}
                  href={`/reviews/${mr.slug}`}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover-lift block"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {mr.title}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {mr.verdict}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
