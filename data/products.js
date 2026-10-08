import productsData from "./products.json";

export const products = productsData;

// Helper functions for filtering and querying products
export function getProducts(filters = {}) {
  let list = [...products];

  if (filters.category) {
    list = list.filter(p => p.category === filters.category);
  }
  if (filters.subcategory) {
    list = list.filter(p => p.subcategory === filters.subcategory);
  }
  if (filters.featured !== undefined) {
    list = list.filter(p => p.isFeatured === Boolean(filters.featured));
  }
  if (filters.editorsPick !== undefined) {
    list = list.filter(p => p.isEditorsPick === Boolean(filters.editorsPick));
  }
  if (filters.brand) {
    list = list.filter(p => p.brand.toLowerCase() === filters.brand.toLowerCase());
  }
  if (filters.minRating) {
    list = list.filter(p => (p.rating || 0) >= Number(filters.minRating));
  }
  if (filters.maxPrice) {
    list = list.filter(p => p.price && p.price <= Number(filters.maxPrice));
  }
  if (filters.badge) {
    list = list.filter(p => p.badges && p.badges.includes(filters.badge));
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    );
  }

  return list;
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

export function getFeaturedProducts() {
  return products.filter(p => p.isFeatured);
}

export function getEditorsPicks() {
  return products.filter(p => p.isEditorsPick);
}

export function getTrendingProducts() {
  return products.slice(0, 8);
}

export function getRelatedProducts(productId, category, limit = 3) {
  return products
    .filter(p => p.id !== productId && p.category === category)
    .slice(0, limit);
}

export const getFilteredProducts = getProducts;
