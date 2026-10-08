import { products } from "@/data/products";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";
import { reviews } from "@/data/reviews";
import { categories } from "@/data/categories";

export async function searchAll(query = "") {
  const q = query.trim().toLowerCase();
  if (!q) {
    return {
      query: "",
      total: 0,
      products: [],
      guides: [],
      comparisons: [],
      reviews: [],
      categories: []
    };
  }

  // 1. Search Products
  const matchedProducts = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.bestFor && p.bestFor.some(b => b.toLowerCase().includes(q))) ||
    (p.badges && p.badges.some(badge => badge.toLowerCase().includes(q)))
  );

  // 2. Search Guides
  const matchedGuides = guides.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.subtitle.toLowerCase().includes(q) ||
    g.category.toLowerCase().includes(q) ||
    (g.sections && g.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)))
  );

  // 3. Search Comparisons
  const matchedComparisons = comparisons.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.product1.name.toLowerCase().includes(q) ||
    c.product2.name.toLowerCase().includes(q) ||
    c.quickVerdict.toLowerCase().includes(q)
  );

  // 4. Search Reviews
  const matchedReviews = reviews.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.verdict.toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q)
  );

  // 5. Search Categories
  const matchedCategories = categories.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.subcategories.some(s => s.name.toLowerCase().includes(q))
  );

  const total =
    matchedProducts.length +
    matchedGuides.length +
    matchedComparisons.length +
    matchedReviews.length +
    matchedCategories.length;

  return {
    query,
    total,
    products: matchedProducts,
    guides: matchedGuides,
    comparisons: matchedComparisons,
    reviews: matchedReviews,
    categories: matchedCategories
  };
}

export function getPopularSearches() {
  return [
    "Mechanical Keyboard",
    "Ergonomic Mouse",
    "Laptop Stand",
    "GaN Charger",
    "Air Fryer",
    "Tech Pouch",
    "Gaming Mouse",
    "Noise Cancelling"
  ];
}
