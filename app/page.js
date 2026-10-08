import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import TrendingProducts from "@/components/home/TrendingProducts";
import EditorsPicks from "@/components/home/EditorsPicks";
import LatestGuides from "@/components/home/LatestGuides";
import ComparisonPreview from "@/components/home/ComparisonPreview";
import ShoppingTips from "@/components/home/ShoppingTips";
import PinterestDiscovery from "@/components/home/PinterestDiscovery";
import Newsletter from "@/components/home/Newsletter";
import FinalCta from "@/components/home/FinalCta";

import { getTrendingProducts, getProducts } from "@/lib/products";
import { getCategories } from "@/lib/categories";
import { getFeaturedGuides } from "@/lib/guides";
import { getFeaturedComparisons } from "@/lib/comparisons";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Nexora Picks — Discover Better Products. Buy With Confidence.",
  description: "Independent affiliate product discovery and buying-guide website. We research ergonomics, analyze real specs, and compare options so you make smarter buying decisions."
});

export default async function HomePage() {
  const [trending, allProducts, categories, guides, comparisons] = await Promise.all([
    getTrendingProducts(),
    getProducts(),
    getCategories(),
    getFeaturedGuides(),
    getFeaturedComparisons()
  ]);

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Explore Categories */}
      <CategorySection categories={categories} />

      {/* 3. Trending Products */}
      <TrendingProducts products={trending} />

      {/* 4. Editor's Picks */}
      <EditorsPicks products={allProducts} />

      {/* 5. Latest Buying Guides */}
      <LatestGuides guides={guides} />

      {/* 6. Compare Before You Buy */}
      <ComparisonPreview comparisons={comparisons} />

      {/* 7. Smart Shopping Tips */}
      <ShoppingTips />

      {/* 8. Pinterest Discovery */}
      <PinterestDiscovery />

      {/* 9. Newsletter */}
      <Newsletter />

      {/* 10. Final CTA */}
      <FinalCta />
    </div>
  );
}
