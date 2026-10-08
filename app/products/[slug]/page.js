import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecs from "@/components/products/ProductSpecs";
import ProductProsCons from "@/components/products/ProductProsCons";
import ProductVerdict from "@/components/products/ProductVerdict";
import AffiliateButton from "@/components/products/AffiliateButton";
import ProductCard from "@/components/products/ProductCard";
import FAQSection from "@/components/guides/FAQSection";
import JsonLd from "@/components/seo/JsonLd";

import { getProductBySlug, getRelatedProducts, getAllProductSlugs } from "@/lib/products";
import { formatPrice, formatDate } from "@/lib/utils";
import { constructMetadata, buildProductJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllProductSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  if (!product) return {};

  return constructMetadata({
    title: `${product.name} — Specs, Pros & Editorial Review`,
    description: product.shortDescription,
    image: product.image,
    canonical: `/products/${product.slug}`
  });
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(product.id, product.category, 3);
  const productJsonLd = buildProductJsonLd(product);

  const productFaqs = [
    {
      question: `Is the ${product.name} worth buying at this price point?`,
      answer: `Yes, for users seeking ${product.bestFor?.join(" or ") || "reliable daily performance"}, it offers exceptional build quality, well-considered ergonomics, and honest specifications without unnecessary marketing gimmicks.`
    },
    {
      question: "How does Nexora Picks verify this product data?",
      answer: "We analyze teardowns, retail feedback distributions, manufacturer spec sheets, and material durability. Products in development are transparently tagged with 'Demo Lab' indicators."
    }
  ];

  return (
    <div className="py-8 sm:py-12">
      {productJsonLd && <JsonLd data={productJsonLd} />}

      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Products", url: "/products" },
            { name: product.name, url: `/products/${product.slug}` }
          ]}
        />

        {/* Product Overview Split Hero */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 sticky top-24">
            <ProductGallery images={product.gallery} alt={product.name} />
          </div>

          {/* Right Column: Key Details & Purchasing Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header info */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {product.brand}
                </span>
                {product.badges?.map((badge, idx) => (
                  <Badge key={idx} size="xs">{badge}</Badge>
                ))}
                {product.isDemo && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 uppercase">
                    Demo Lab
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
                {product.name}
              </h1>

              {/* Rating and Reviews */}
              {product.rating && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1 font-bold text-amber-500">
                    <span>★</span>
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 text-xs">
                    {product.reviewCount} Verified Buyer Analyses
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500">
                    Updated {formatDate(product.lastUpdated)}
                  </span>
                </div>
              )}
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="line-through">
                        {formatPrice(product.originalPrice, product.currency)}
                      </span>
                      {product.discount && (
                        <span className="font-bold text-pink-600 dark:text-pink-400">
                          ({product.discount})
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <AffiliateButton
                  product={product}
                  size="lg"
                  label="Check Latest Price"
                />
              </div>

              {/* Amazon Compliance Pricing Disclaimer */}
              <p className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Price accurate as of editorial update. Real-time price & availability are determined on Amazon.in at checkout.</span>
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Editorial Summary
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Best For Tags */}
            {product.bestFor && product.bestFor.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ideal Match For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section: Pros & Cons */}
        <section className="mt-16 sm:mt-20 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Balanced Assessment: Strengths &amp; Trade-offs
          </h2>
          <ProductProsCons pros={product.pros} cons={product.cons} />
        </section>

        {/* Section: Technical Specs */}
        <section className="mt-16 sm:mt-20 space-y-6">
          <ProductSpecs specifications={product.specifications} />
        </section>

        {/* Section: Editorial Verdict */}
        <section className="mt-16 sm:mt-20">
          <ProductVerdict product={product} />
        </section>

        {/* Section: Product FAQ */}
        <section className="mt-16 sm:mt-20">
          <FAQSection faqs={productFaqs} title={`Common Questions: ${product.name}`} />
        </section>

        {/* Section: Related Products */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-24 space-y-8 border-t border-slate-200/80 dark:border-slate-800 pt-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Alternative Options
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                More in {product.category.replace("-", " ")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
