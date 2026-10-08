import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import SearchEmptyState from "@/components/search/SearchEmptyState";
import { searchAll } from "@/lib/search";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Search Nexora Picks — Hardware & Guides Finder",
  description: "Search across products, buying guides, product showdowns, and editorial reviews on Nexora Picks.",
  canonical: "/search"
});

export default async function SearchPage({ searchParams }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const query = resolvedParams.q || "";

  const results = await searchAll(query);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Search", url: "/search" }]} />

        <div className="mt-4 mb-8 space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Global Search
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Search Products &amp; Buying Guides
          </h1>
          <div className="pt-2">
            <SearchBar initialQuery={query} />
          </div>
        </div>

        {/* Results or Empty State */}
        <div className="mt-8">
          {query ? (
            results.total > 0 ? (
              <SearchResults results={results} />
            ) : (
              <SearchEmptyState query={query} />
            )
          ) : (
            <SearchEmptyState query="" />
          )}
        </div>
      </Container>
    </div>
  );
}
