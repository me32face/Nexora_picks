import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy — Nexora Picks",
  description: "Learn how Nexora Picks protects user privacy, handles anonymous analytics, and manages cookies.",
  canonical: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

        <div className="mt-6 max-w-3xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date: October 8, 2026
            </p>
          </div>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                1. Information We Collect
              </h2>
              <p>
                Nexora Picks respects your privacy and is committed to minimal data collection. We do not require accounts or user logins to access any of our buying guides, comparison tables, or product reviews.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Newsletter Information:</strong> If you voluntarily join our email dispatch, we collect only your email address.</li>
                <li><strong>Anonymous Log Data:</strong> Like most web servers, we receive standard aggregated log data (such as browser type, referring pages, and timestamp) to monitor site stability.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                2. Cookies &amp; Third-Party Links
              </h2>
              <p>
                When you click outbound affiliate links to Amazon or other merchants, third-party cookies may be placed on your browser by those retailers to track referrals. Please review the respective privacy policies of these third-party platforms to understand their cookie handling practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                3. We Do Not Sell Personal Data
              </h2>
              <p>
                Nexora Picks will never rent, sell, or trade your personal email address or data to any marketing brokers or third parties.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
