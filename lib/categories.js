import {
  categories,
  getCategories as getAll,
  getCategoryBySlug as getBySlug
} from "@/data/categories";

export async function getCategories() {
  return getAll();
}

export async function getCategoryBySlug(slug) {
  return getBySlug(slug);
}

export async function getAllCategorySlugs() {
  return categories.map(c => ({ slug: c.slug }));
}
