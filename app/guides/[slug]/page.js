import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GuideHeader from "@/components/guides/GuideHeader";
import TableOfContents from "@/components/guides/TableOfContents";
import FAQSection from "@/components/guides/FAQSection";
import PinterestCard from "@/components/guides/PinterestCard";
import SocialShare from "@/components/guides/SocialShare";
import GuideCard from "@/components/guides/GuideCard";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";

import { getGuideBySlug, getRelatedGuides, getAllGuideSlugs } from "@/lib/guides";
import { constructMetadata, buildArticleJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const guide = await getGuideBySlug(resolvedParams.slug);
  if (!guide) return {};

  return constructMetadata({
    title: `${guide.title} — Nexora Picks Buying Guide`,
    description: guide.subtitle,
    image: guide.heroImage,
    canonical: `/guides/${guide.slug}`,
    type: "article"
  });
}

export default async function GuideDetailPage({ params }) {
  const resolvedParams = await params;
  const guide = await getGuideBySlug(resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  const related = await getRelatedGuides(guide.id, guide.categorySlug, 3);

  const articleSchema = buildArticleJsonLd({
    title: guide.title,
    description: guide.subtitle,
    url: `/guides/${guide.slug}`,
    image: guide.heroImage,
    datePublished: guide.publishedDate,
    dateModified: guide.updatedDate,
    authorName: guide.authorId === "aarav-mehta" ? "Aarav Mehta" : "Priya Sharma"
  });

  const tocItems = [
    { id: "quick-answer", title: "Quick Recommendation" },
    { id: "shortlist", title: "Editor's Shortlist" },
    { id: "comparison-table", title: "Comparison Table" },
    ...guide.sections.map(s => ({ id: s.id, title: s.title })),
    { id: "buying-considerations", title: "Key Buying Considerations" },
    { id: "what-to-avoid", title: "What to Avoid" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  return (
    <article className="py-8 sm:py-12">
      <JsonLd data={articleSchema} />

      <Container>
        <Breadcrumbs
          items={[
            { name: "Buying Guides", url: "/guides" },
            { name: guide.title, url: `/guides/${guide.slug}` }
          ]}
        />

        {/* Header */}
        <div className="mt-6 mb-8">
          <GuideHeader guide={guide} />
        </div>

        {/* Social Share Bar */}
        <div className="py-4 border-y border-slate-200/80 dark:border-slate-800 flex items-center justify-between mb-8">
          <SocialShare
            title={guide.title}
            url={`/guides/${guide.slug}`}
            pinImage={guide.pinImage}
          />
        </div>

        {/* Hero Cover Graphic */}
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-sm mb-12 bg-slate-900">
          <Image
            src={guide.heroImage}
            alt={guide.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Quick Answer Callout */}
            <section
              id="quick-answer"
              className="p-6 sm:p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-white to-pink-50/30 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-wider">
                <span>⚡</span>
                <span>The Quick Answer</span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                {guide.quickAnswer}
              </p>
            </section>

            {/* 2. Editor's Shortlist */}
            <section id="shortlist" className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                The Shortlist: At a Glance
              </h2>
              <div className="space-y-4">
                {guide.shortlist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge size="xs">{item.badge}</Badge>
                        <span className="font-bold text-slate-900 dark:text-slate-100">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-400">{item.spec}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {item.rationale}
                      </p>
                    </div>

                    {item.productSlug && (
                      <Link
                        href={`/products/${item.productSlug}`}
                        className="text-xs font-bold px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 transition-colors shrink-0 self-start sm:self-center"
                      >
                        View Product →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Comparison Table */}
            {guide.comparisonTable && (
              <section id="comparison-table" className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  Detailed Feature Matrix
                </h2>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                          {guide.comparisonTable.headers.map((h, idx) => (
                            <th key={idx} className="py-3 px-4 font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {guide.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3.5 px-4 ${cIdx === 0 ? "font-bold text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-300 font-medium"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* 4. Detailed Sections */}
            <div className="space-y-10">
              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* 5. Buying Considerations */}
            <section id="buying-considerations" className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Important Buying Considerations
              </h2>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 space-y-3">
                {guide.buyingConsiderations.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-indigo-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. What to Avoid */}
            <section id="what-to-avoid" className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Red Flags: What to Avoid
              </h2>
              <div className="p-6 rounded-2xl border border-rose-200/80 dark:border-rose-950/60 bg-rose-50/30 dark:bg-rose-950/15 space-y-3">
                {guide.whatToAvoid.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. FAQs */}
            <section id="faqs">
              <FAQSection faqs={guide.faqs} />
            </section>
          </div>

          {/* Sticky Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <TableOfContents items={tocItems} />

            {/* Pinterest Pin Card */}
            {guide.pinImage && (
              <PinterestCard
                title={guide.title}
                subtitle={guide.subtitle}
                image={guide.pinImage}
                slug={guide.slug}
              />
            )}
          </div>
        </div>

        {/* Related Guides Footer */}
        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Related Buying Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(rel => (
                <GuideCard key={rel.id} guide={rel} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
