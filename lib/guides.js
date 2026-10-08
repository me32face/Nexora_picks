import {
  guides,
  getGuides as getByCategory,
  getGuideBySlug as getBySlug,
  getFeaturedGuides as getFeatured,
  getRelatedGuides as getRelated
} from "@/data/guides";

export async function getGuides(category) {
  return getByCategory(category);
}

export async function getGuideBySlug(slug) {
  return getBySlug(slug);
}

export async function getFeaturedGuides() {
  return getFeatured();
}

export async function getRelatedGuides(guideId, categorySlug, limit = 3) {
  return getRelated(guideId, categorySlug, limit);
}

export async function getAllGuideSlugs() {
  return guides.map(g => ({ slug: g.slug }));
}
