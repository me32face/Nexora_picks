import {
  comparisons,
  getComparisons as getByCategory,
  getComparisonBySlug as getBySlug,
  getFeaturedComparisons as getFeatured
} from "@/data/comparisons";

export async function getComparisons(category) {
  return getByCategory(category);
}

export async function getComparisonBySlug(slug) {
  return getBySlug(slug);
}

export async function getFeaturedComparisons() {
  return getFeatured();
}

export async function getAllComparisonSlugs() {
  return comparisons.map(c => ({ slug: c.slug }));
}
