import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/products/ProductGrid";
import GuideCard from "@/components/guides/GuideCard";
import ComparisonCard from "@/components/comparisons/ComparisonCard";
import FAQSection from "@/components/guides/FAQSection";

import { getCategoryBySlug, getAllCategorySlugs, getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";
import { getGuides } from "@/lib/guides";
import { getComparisons } from "@/lib/comparisons";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllCategorySlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);
  if (!category) return {};

  return constructMetadata({
    title: `${category.name} — Buying Guides & Best Picks`,
    description: category.description,
    image: category.image,
    canonical: `/categories/${category.slug}`
  });
}

export default async function CategoryHubPage({ params }) {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const [products, guides, comparisons, allCategories] = await Promise.all([
    getProducts({ category: category.slug }),
    getGuides(category.slug),
    getComparisons(category.slug),
    getCategories()
  ]);

  const relatedCategories = allCategories.filter(c => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 space-y-16 sm:space-y-20">
      <Container>
        <Breadcrumbs
          items={[
            { name: "Categories", url: "/categories" },
            { name: category.name, url: `/categories/${category.slug}` }
          ]}
        />

        {/* Category Hero */}
        <div className="mt-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-indigo-50/60 via-white to-pink-50/30 dark:from-slate-900 dark:via-slate-900/60 dark:to-indigo-950/20 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Department Hub
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {category.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300">
                {category.tagline}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              {/* Subcategories quick filter tabs */}
              <div className="pt-2 flex flex-wrap gap-2">
                {category.subcategories.map(sub => (
                  <Link
                    key={sub.id}
                    href={`/products?category=${category.slug}&subcategory=${sub.slug}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-850 p-4 border border-slate-200/60 dark:border-slate-800 flex items-center justify-center">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Section: Featured Products in Category */}
        <section className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Curated Hardware
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                Featured {category.name} Products
              </h2>
            </div>
            <Link
              href={`/products?category=${category.slug}`}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              All {category.name} Products →
            </Link>
          </div>
          <ProductGrid
            products={products}
            emptyMessage={`No ${category.name} products currently cataloged.`}
          />
        </section>

        {/* Section: Buying Guides in Category */}
        {guides.length > 0 && (
          <section className="mt-16 sm:mt-20 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                In-Depth Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                Best {category.name} Buying Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map(g => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          </section>
        )}

        {/* Section: Head-to-Head Comparisons in Category */}
        {comparisons.length > 0 && (
          <section className="mt-16 sm:mt-20 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                Direct Showdowns
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                Popular Comparisons
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map(c => (
                <ComparisonCard key={c.id} comparison={c} />
              ))}
            </div>
          </section>
        )}

        {/* Section: Category Buying Tips */}
        {category.buyingTips && category.buyingTips.length > 0 && (
          <section className="mt-16 sm:mt-20 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>💡</span>
                <span>Smart Shopping Tips for {category.name}</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {category.buyingTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Section: Category FAQ */}
        <section className="mt-16 sm:mt-20">
          <FAQSection faqs={category.faqs} title={`${category.name} FAQs`} />
        </section>

        {/* Section: Related Categories */}
        <section className="mt-16 sm:mt-24 space-y-6 border-t border-slate-200/80 dark:border-slate-800 pt-12">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.map(rc => (
              <Link
                key={rc.id}
                href={`/categories/${rc.slug}`}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover-lift block"
              >
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {rc.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {rc.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
