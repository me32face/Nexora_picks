import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilterClient from "@/components/products/ProductFilterClient";
import { getProducts } from "@/lib/products";
import { getCategories } from "@/lib/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Researched Products — Nexora Picks",
  description: "Browse verified product recommendations across keyboards, mice, chargers, laptop stands, appliances, and everyday essentials.",
  canonical: "/products"
});

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const { category, rating, price, badge, brand } = resolvedParams;

  let maxPrice = null;
  if (price === "under-1500") maxPrice = 1500;
  if (price === "under-2500") maxPrice = 2500;
  if (price === "under-4000") maxPrice = 4000;

  const [productsList, categories] = await Promise.all([
    getProducts({
      category,
      minRating: rating,
      maxPrice,
      badge,
      brand
    }),
    getCategories()
  ]);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <Breadcrumbs items={[{ name: "Products", url: "/products" }]} />

        <div className="mt-4 mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Hardware &amp; Everyday Essentials
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Curated Products Library
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Every product below has been selected for verified specifications, build quality, and ergonomic reliability.
          </p>
        </div>

        {/* Filter Toolbar (Client Component) */}
        <div className="mb-8">
          <ProductFilterClient
            categories={categories}
            currentFilters={{
              category,
              minRating: rating,
              priceTier: price,
              badge
            }}
          />
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={productsList}
          emptyMessage="No products match your active filters."
        />
      </Container>
    </div>
  );
}
