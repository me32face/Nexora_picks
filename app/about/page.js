import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { authors } from "@/data/authors";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us — Nexora Picks",
  description: "Learn about Nexora Picks, our editorial standards, our research team, and our commitment to clutter-free product discovery.",
  canonical: "/about"
});

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16">
      <Container>
        <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

        {/* Hero */}
        <div className="mt-6 max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Our Mission &amp; Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Smart Finds. Better Choices.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Nexora Picks was founded on a simple conviction: modern online product shopping has become deeply broken. Between fake discount percentages, AI-generated review spam, and paid influencer promotions, finding trustworthy everyday gear takes hours of frustration.
          </p>
        </div>

        {/* What We Are / What We Are Not */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-8 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-4">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <span>✓</span> What Nexora Picks Is
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span>An independent editorial research and buying-guide publication.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span>A rigorous analyzer of specifications, ergonomics, and material life.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span>Transparent about development data and affiliate monetization.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20 space-y-4">
            <h2 className="text-xl font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
              <span>✕</span> What Nexora Picks Never Does
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>We do NOT accept paid placements or sponsored product ranking spots.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>We do NOT operate as a dropshipping store or coupon scraper.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>We do NOT publish hallucinated specs or fabricate customer testimonials.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Team */}
        <section className="space-y-8 pt-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Behind the Research
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
              Meet Our Editorial Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map(author => (
              <div
                key={author.id}
                className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
              >
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-indigo-50 dark:bg-indigo-950">
                  <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {author.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {author.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {author.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
