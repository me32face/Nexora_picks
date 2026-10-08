import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GuideCard from "@/components/guides/GuideCard";
import { getGuides } from "@/lib/guides";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Buying Guides Library — Nexora Picks",
  description: "Exhaustive, hype-free buying guides covering keyboards, mice, desk setups, travel gear, air fryers, and grooming essentials.",
  canonical: "/guides"
});

export default async function GuidesPage({ searchParams }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const category = resolvedParams.category;

  const guidesList = await getGuides(category);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Buying Guides", url: "/guides" }]} />

        <div className="mt-4 mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Editorial Research
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Comprehensive Buying Guides
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Every guide answers real practical questions: What works? What fails? And which model gives you the highest return on investment?
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidesList.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </Container>
    </div>
  );
}
