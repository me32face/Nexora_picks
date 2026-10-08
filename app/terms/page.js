import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service — Nexora Picks",
  description: "Terms and conditions governing the use of Nexora Picks guides, research content, and affiliate recommendations.",
  canonical: "/terms"
});

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms" }]} />

        <div className="mt-6 max-w-3xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date: October 8, 2026
            </p>
          </div>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Nexora Picks (the &ldquo;Site&rdquo;), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the Site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                2. Informational &amp; Research Purposes Only
              </h2>
              <p>
                All reviews, product comparisons, buying advice, and technical summaries on Nexora Picks are provided solely for general informational and educational purposes. While we strive to verify specifications and prices, we do not warrant that product descriptions, merchant pricing, or other content are error-free or uninterrupted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                3. Intellectual Property
              </h2>
              <p>
                Original editorial copy, comparison tables, graphics, layouts, and trademarks appearing on Nexora Picks are the property of Nexora Picks and are protected under copyright and intellectual property laws.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
