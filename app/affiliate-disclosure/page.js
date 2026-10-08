import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Affiliate Disclosure — Nexora Picks",
  description: "Transparency statement regarding affiliate links, compensation, Amazon Associates participation, and editorial independence.",
  canonical: "/affiliate-disclosure"
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-8 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ name: "Affiliate Disclosure", url: "/affiliate-disclosure" }]} />

        <div className="mt-6 max-w-3xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Transparency &amp; FTC Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 leading-tight">
              Affiliate Disclosure
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: October 8, 2026
            </p>
          </div>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              In compliance with Federal Trade Commission (FTC) guidelines and international advertising disclosure standards, this page outlines our affiliate relationships and financial arrangements.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                1. What is an Affiliate Link?
              </h2>
              <p>
                Many of the product links on Nexora Picks are tracking links known as affiliate links. When you click on one of these links and complete a purchase on a merchant website (such as Amazon or other retail partners), Nexora Picks may earn a small referral commission.
              </p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Crucially, this referral fee comes at zero additional cost to you. The price you pay is identical whether you use our link or navigate to the merchant directly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                2. Amazon Associates Program Notice
              </h2>
              <p>
                Nexora Picks is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon websites.
              </p>
              <p className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                Notice: Nexora Picks is an independent editorial website and is not owned, operated, or endorsed by Amazon.com, Inc. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                3. Editorial Independence
              </h2>
              <p>
                Our commercial relationships never dictate our editorial verdicts. We do not accept payment to review a product, we do not guarantee positive coverage, and we do not alter our testing criteria to benefit merchant partners.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                4. Pricing &amp; Availability
              </h2>
              <p>
                Prices and availability of products listed on Nexora Picks are accurate as of the date indicated, but are subject to change by retail merchants without notice. Always verify the current price on the merchant checkout page prior to completing your order.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
