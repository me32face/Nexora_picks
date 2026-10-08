import {
  products,
  getProducts as getFilteredProducts,
  getProductBySlug as getBySlug,
  getFeaturedProducts as getFeatured,
  getEditorsPicks as getPicks,
  getTrendingProducts as getTrending,
  getRelatedProducts as getRelated
} from "@/data/products";

export async function getProducts(filters) {
  // Abstracted data access layer
  return getFilteredProducts(filters);
}

export async function getProductBySlug(slug) {
  return getBySlug(slug);
}

export async function getFeaturedProducts() {
  return getFeatured();
}

export async function getEditorsPicks() {
  return getPicks();
}

export async function getTrendingProducts() {
  return getTrending();
}

export async function getRelatedProducts(id, category, limit = 3) {
  return getRelated(id, category, limit);
}

export async function getAllProductSlugs() {
  return products.map(p => ({ slug: p.slug }));
}
