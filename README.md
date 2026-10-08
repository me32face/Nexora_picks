# Nexora Picks

**Tagline:** Smart Finds. Better Choices.

A production-quality affiliate product discovery and buying-guide website built with **Next.js (App Router)** and **Tailwind CSS**. Designed as a legitimate product research, comparison, review, and buying-guide platform that can monetize through Amazon Associates and capture organic search & Pinterest traffic.

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Local Development

Run the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## 🏛️ Project Architecture

```text
nexora-picks/
│
├── app/                           # Next.js App Router (Server Components by default)
│   ├── layout.js                  # Global layout with theme anti-flash, Nav, Footer, JSON-LD
│   ├── page.js                    # Homepage (10 complete editorial sections)
│   ├── loading.js                 # Global route loading skeletons
│   ├── error.js                   # Client error boundary
│   ├── not-found.js               # 404 handler
│   ├── sitemap.js                 # Dynamic XML sitemap generator
│   ├── robots.js                  # Dynamic robots.txt
│   ├── products/
│   │   ├── page.js                # Catalog listing with query-param filtering
│   │   └── [slug]/page.js         # In-depth product detail page with specs & pros/cons
│   ├── categories/
│   │   ├── page.js                # Categories overview
│   │   └── [slug]/page.js         # Category hub with featured picks, guides, & tips
│   ├── guides/
│   │   ├── page.js                # Buying guides library
│   │   └── [slug]/page.js         # Buying guide article with table of contents & Pinterest pin
│   ├── comparisons/
│   │   ├── page.js                # Side-by-side comparisons directory
│   │   └── [slug]/page.js         # Head-to-head comparison showdowns
│   ├── reviews/
│   │   ├── page.js                # Editorial reviews index
│   │   └── [slug]/page.js         # Review article with performance scorecards
│   ├── search/
│   │   └── page.js                # Global multi-collection search engine
│   ├── about/                     # About Us and editorial standards
│   ├── contact/                   # Contact and reader feedback form
│   ├── editorial-policy/          # Review methodology & integrity policy
│   ├── affiliate-disclosure/      # FTC & Amazon Associates compliance notice
│   ├── privacy-policy/            # Privacy policy
│   └── terms/                     # Terms of service
│
├── components/
│   ├── layout/                    # Navbar, Footer, MobileMenu, Breadcrumbs, ThemeToggle
│   ├── home/                      # Hero, Categories, Trending, Editor's Picks, Guides, etc.
│   ├── products/                  # ProductCard, ProductGrid, Gallery, Specs, ProsCons, Verdict
│   ├── guides/                    # GuideCard, GuideHeader, TableOfContents, FAQSection, PinterestCard, SocialShare
│   ├── comparisons/               # ComparisonCard, ComparisonTable, ComparisonWinner
│   ├── search/                    # SearchBar, SearchResults, SearchModal, SearchEmptyState
│   ├── ui/                        # Button, Badge, Card, Container, Skeleton, Modal, Toast
│   └── seo/                       # JsonLd structured data renderer
│
├── data/                          # Clean structured local data layer (ready for DB/CMS migration)
│   ├── products.js                # 12+ standardized products with specs, pros/cons, badges
│   ├── categories.js              # 6 initial categories with subcategories and buying tips
│   ├── guides.js                  # 10 comprehensive buying guides
│   ├── comparisons.js             # 6 head-to-head product showdowns
│   ├── reviews.js                 # In-depth editorial reviews
│   ├── shoppingTips.js            # 6 smart shopping tip articles
│   └── authors.js                 # Editorial research team profiles
│
├── lib/                           # Abstracted service layer
│   ├── affiliate.js               # Centralized affiliate link resolver
│   ├── products.js                # Product queries & filters
│   ├── guides.js                  # Guide queries
│   ├── categories.js              # Category queries
│   ├── comparisons.js             # Comparison queries
│   ├── reviews.js                 # Review queries
│   ├── search.js                  # Multi-collection search algorithm
│   ├── seo.js                     # OpenGraph, Twitter, and JSON-LD builders
│   └── utils.js                   # Formatting and utility functions
│
├── public/                        # Optimized vector SVGs and assets
│   ├── logo/                      # Nexora Picks logo and icon mark
│   └── images/                    # Products, categories, guides, authors, and Pinterest pins
└── .env.example                   # Environment configuration template
```

---

## 🛒 Content Management & Workflows

### 1. Adding a New Product
Open `data/products.js` and add a new item to the `products` array adhering to the standardized schema:

```javascript
{
  id: "tech-005",
  name: "Product Name",
  slug: "product-name",
  brand: "Brand Name",
  category: "tech-gadgets",
  subcategory: "chargers",
  description: "Full editorial summary...",
  shortDescription: "One-line summary for cards...",
  image: "/images/products/my-image.svg",
  gallery: ["/images/products/my-image.svg"],
  price: 1999,
  originalPrice: 2499,
  currency: "INR",
  discount: "20% OFF",
  rating: 4.7,
  reviewCount: 350,
  specifications: [{ label: "Spec", value: "Value" }],
  pros: ["Strength 1", "Strength 2"],
  cons: ["Limitation 1"],
  bestFor: ["Students", "Travelers"],
  badges: ["EDITOR'S PICK"],
  amazonUrl: "https://www.amazon.in/dp/EXAMPLE",
  affiliateUrl: null, // Custom direct link if applicable
  isFeatured: true,
  isEditorsPick: true,
  isDemo: false, // Mark false once real-world verified
  lastUpdated: "2026-10-08"
}
```

### 2. Adding a Buying Guide
Open `data/guides.js` and append to the `guides` array. Include:
- `quickAnswer`: Short immediate takeaway for readers in a hurry.
- `shortlist`: 2–4 top options with badges.
- `comparisonTable`: Matrix of key features.
- `sections`: Granular explanations of key criteria.
- `buyingConsiderations` & `whatToAvoid`.
- `faqs`: Question/answer pairs (automatically marked up with FAQPage JSON-LD).
- `pinImage`: 1000×1500 image for Pinterest acquisition.

### 3. Adding a Comparison
Open `data/comparisons.js` and add a comparison object containing:
- `product1` and `product2` specifications, pros, and cons.
- `specsTable`: Row-by-row specs with winner flags.
- `categoryBreakdown`: Category-level winners (Ergonomics, Durability, Value, Portability).
- `overallWinner` and `detailedVerdict`.

### 4. Updating Categories
Open `data/categories.js` to modify titles, subcategories, buying tips, or add new domains.

---

## 🔗 Affiliate Architecture

All product buttons across cards, detail pages, reviews, and showdowns route through `lib/affiliate.js`:

```javascript
export function getAffiliateUrl(product) {
  return product.affiliateUrl || product.amazonUrl || "#";
}
```

To configure your Amazon Associates tag globally, add it to your environment variables:

```env
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=yourtag-21
```

The resolver automatically appends `tag=yourtag-21` to any Amazon links without touching individual components.

---

## 🔍 SEO & Structured Data

- **Metadata API**: Dynamic Open Graph, Twitter cards, canonical tags, and title hierarchies on all routes.
- **Sitemap & Robots**: Auto-generated via `app/sitemap.js` and `app/robots.js`.
- **JSON-LD Schema**:
  - `Organization` & `WebSite` on root layout.
  - `BreadcrumbList` on all detail and category pages.
  - `Article` on all buying guides and reviews.
  - `FAQPage` on all guide and category pages with FAQs.
  - `Product` enabled exclusively for verified, non-demo items.

---

## 📌 Pinterest Acquisition Strategy

Pinterest is an essential organic growth channel for buying guides:
- Every guide is paired with a **1000 × 1500 (2:3 ratio)** visual template in `public/images/pins/`.
- The `PinterestCard` component renders this pin in an interactive preview with a one-click &ldquo;Pin It to Board&rdquo; share button.

---

## 🎨 Design System & Dark Mode

- **Primary Colors**: Deep Charcoal (`#090d16`), Indigo/Violet (`#4f46e5`, `#6366f1`).
- **Accent Color**: Soft Pink (`#ec4899`, used selectively).
- **Default Mode**: Light mode.
- **Dark Mode**: Persisted via `localStorage` with an anti-flash inline script.
- **Motion**: No external animation libraries (e.g. Framer Motion); built with native CSS transitions and respects `prefers-reduced-motion`.

---

## 🚀 Deployment

The site is built with standard Next.js App Router conventions and can be deployed to:
- **Vercel** (Recommended): Connect repository for automatic previews and edge CDN caching.
- **Node.js Server**: Run `npm run build && npm start`.
- **Docker**: Containerize the standalone Next.js build.
