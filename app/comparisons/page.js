import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ComparisonCard from "@/components/comparisons/ComparisonCard";
import { getComparisons } from "@/lib/comparisons";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Product Comparisons & Showdowns — Nexora Picks",
  description: "Direct side-by-side spec comparisons, lab verdicts, and trade-off breakdowns to help you choose between competing models.",
  canonical: "/comparisons"
});

export default async function ComparisonsPage({ searchParams }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const category = resolvedParams.category;

  const comparisonsList = await getComparisons(category);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Comparisons", url: "/comparisons" }]} />

        <div className="mt-4 mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Head-to-Head Analysis
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Product Comparisons &amp; Showdowns
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Stuck deciding between two compelling options? We break down specifications, real ergonomics, acoustics, and budget value side by side.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisonsList.map(comp => (
            <ComparisonCard key={comp.id} comparison={comp} />
          ))}
        </div>
      </Container>
    </div>
  );
}
