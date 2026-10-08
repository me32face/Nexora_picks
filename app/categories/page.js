import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getCategories } from "@/lib/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Product Categories — Nexora Picks",
  description: "Explore curated product categories across Tech & Gadgets, Home & Kitchen, Work & Study, Gaming, Beauty & Grooming, and Travel.",
  canonical: "/categories"
});

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Categories", url: "/categories" }]} />

        <div className="mt-4 mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Departments &amp; Domains
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Explore All Categories
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Our editorial research is structured across six high-utility everyday domains. Select a category to view verified products, detailed buying guides, and head-to-head comparisons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(cat => (
            <div
              key={cat.id}
              className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm hover-lift flex flex-col justify-between p-6 transition-all"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden mb-5 p-4 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    <Link href={`/categories/${cat.slug}`} className="hover:text-indigo-600 transition-colors">
                      {cat.name}
                    </Link>
                  </h2>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Subcategories list */}
                <div className="mt-5 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Subcategories
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subcategories.map(sub => (
                      <Link
                        key={sub.id}
                        href={`/products?category=${cat.slug}&subcategory=${sub.slug}`}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/categories/${cat.slug}`}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-between"
                >
                  <span>Open {cat.name} Hub</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
