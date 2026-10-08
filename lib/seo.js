/**
 * SEO metadata and JSON-LD structured data generators for Nexora Picks
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nexorapicks.com";
const SITE_NAME = "Nexora Picks";
const DEFAULT_TITLE = "Nexora Picks — Smart Finds. Better Choices.";
const DEFAULT_DESCRIPTION = "Editorial affiliate product discovery, verified buying guides, side-by-side gear comparisons, and smart shopping recommendations.";

export function constructMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = "/logo/nexora-logo.svg",
  canonical = "/",
  noIndex = false,
  type = "website"
} = {}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ],
      type
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@nexorapicks"
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true }
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/nexora-logo.svg`,
    description: "Independent consumer research publication curating verified product recommendations.",
    sameAs: [
      "https://pinterest.com/nexorapicks",
      "https://twitter.com/nexorapicks",
      "https://instagram.com/nexorapicks"
    ]
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbJsonLd(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url.startsWith("/") ? item.url : `/${item.url}`}`
    }))
  };
}

export function buildArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = "Nexora Picks Editorial Team"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`
    },
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/nexora-logo.svg`
      }
    }
  };
}

export function buildFaqJsonLd(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildProductJsonLd(product) {
  if (!product || product.isDemo) {
    // Per instructions: "Only use Product structured data when data is accurate and appropriate. Do NOT generate fake structured data."
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency || "INR",
      price: product.price,
      availability: "https://schema.org/InStock"
    }
  };
}
