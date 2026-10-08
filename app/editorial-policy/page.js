import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Editorial Policy & Methodology — Nexora Picks",
  description: "Read our comprehensive editorial guidelines, product research methodology, update policies, and commercial independence standards.",
  canonical: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <div className="py-8 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ name: "Editorial Policy", url: "/editorial-policy" }]} />

        <div className="mt-6 max-w-3xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Integrity &amp; Standards
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 leading-tight">
              Editorial Policy &amp; Review Methodology
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: October 8, 2026
            </p>
          </div>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                1. Our Core Mission
              </h2>
              <p>
                At Nexora Picks, our sole responsibility is to the reader. We exist to simplify purchasing decisions by cutting through marketing jargon, inflated discounts, and unverified product claims. Every article and buying guide is written to help you find durable, high-utility products that justify their retail cost.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                2. How Products Are Selected
              </h2>
              <p>
                Product selection begins with rigorous market scans across retail distributors, community forums (such as mechanical keyboard and ergonomic enthusiast groups), and teardown engineering channels. We screen candidates against baseline criteria:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Material integrity (anodized metals, reinforced PBT plastics, fire-retardant electronics).</li>
                <li>Manufacturer warranty responsiveness and spare-parts accessibility.</li>
                <li>Absence of recurring catastrophic failure modes in customer long-term reports.</li>
                <li>Fair retail price relative to bill of materials (BOM).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                3. How Comparisons Are Built
              </h2>
              <p>
                In our head-to-head comparisons, we pit products with overlapping consumer target groups directly against each other. We evaluate each on objective metrics: weight, port standards, battery capacity, thermal dissipation, acoustic decibels, and ergonomic angle. We declare category-specific winners and an overall pick tailored to specific use cases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                4. Truth in Data &amp; Demo Testing Disclosures
              </h2>
              <p>
                We hold a strict policy regarding data honesty. When development prototypes or mock data are used, they are explicitly tagged with &ldquo;Demo Lab&rdquo; notices. We never fabricate customer review counts, invent fake star ratings, or forge testimonials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                5. How Updates &amp; Corrections Are Handled
              </h2>
              <p>
                Consumer electronics and home appliances evolve rapidly. Our editorial team reviews top guides and comparisons monthly to verify stock availability, price stability, and superseded model generations. If you believe any specification listed is inaccurate, please email our editors directly at <span className="font-semibold text-indigo-600">editorial@nexorapicks.com</span>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                6. Commercial Independence &amp; Affiliate Relationships
              </h2>
              <p>
                Nexora Picks participates in affiliate marketing programs, including the Amazon Services LLC Associates Program. When readers purchase through our links, we may receive a commission. However:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Our editorial evaluations are made entirely independently of affiliate commissions.</li>
                <li>A higher affiliate commission will never boost a product&apos;s score or placement.</li>
                <li>We frequently recommend items with zero affiliate monetization if they represent the best choice for our readers.</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
