/**
 * Centralized affiliate URL resolver.
 * All product affiliate buttons and links must use this function.
 * Allows adding an Amazon Associate Tag or dynamic routing in the future.
 */
export function getAffiliateUrl(product) {
  if (!product) return "#";

  if (product.affiliateUrl) {
    return product.affiliateUrl;
  }

  if (product.amazonUrl) {
    const associateTag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG;
    if (associateTag && product.amazonUrl.includes("amazon.")) {
      const url = new URL(product.amazonUrl);
      url.searchParams.set("tag", associateTag);
      return url.toString();
    }
    return product.amazonUrl;
  }

  return "#";
}

export function getAffiliateDisclosureText() {
  return "Nexora Picks is an independent editorial publication. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. We only recommend products our editorial team believes in.";
}
