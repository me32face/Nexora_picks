import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";
import { reviews } from "@/data/reviews";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nexorapicks.com";

export default function sitemap() {
  const currentDate = new Date("2026-10-08").toISOString();

  // Static Pages
  const staticRoutes = [
    "",
    "/products",
    "/categories",
    "/guides",
    "/comparisons",
    "/reviews",
    "/search",
    "/about",
    "/contact",
    "/editorial-policy",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/terms"
  ].map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic Product Pages
  const productRoutes = products.map(p => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: new Date(p.lastUpdated || currentDate).toISOString(),
    changeFrequency: "weekly",
    priority: 0.9
  }));

  // Dynamic Category Pages
  const categoryRoutes = categories.map(c => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // Dynamic Guide Pages
  const guideRoutes = guides.map(g => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.updatedDate || currentDate).toISOString(),
    changeFrequency: "monthly",
    priority: 0.9
  }));

  // Dynamic Comparison Pages
  const comparisonRoutes = comparisons.map(comp => ({
    url: `${SITE_URL}/comparisons/${comp.slug}`,
    lastModified: new Date(comp.updatedDate || currentDate).toISOString(),
    changeFrequency: "monthly",
    priority: 0.85
  }));

  // Dynamic Review Pages
  const reviewRoutes = reviews.map(r => ({
    url: `${SITE_URL}/reviews/${r.slug}`,
    lastModified: new Date(r.updatedDate || currentDate).toISOString(),
    changeFrequency: "monthly",
    priority: 0.85
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...categoryRoutes,
    ...guideRoutes,
    ...comparisonRoutes,
    ...reviewRoutes
  ];
}
