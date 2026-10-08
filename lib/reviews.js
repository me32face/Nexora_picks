import {
  reviews,
  getReviews as getAll,
  getReviewBySlug as getBySlug
} from "@/data/reviews";

export async function getReviews() {
  return getAll();
}

export async function getReviewBySlug(slug) {
  return getBySlug(slug);
}

export async function getAllReviewSlugs() {
  return reviews.map(r => ({ slug: r.slug }));
}
