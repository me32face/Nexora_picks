const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dtowl6hgl',
  api_key: '996625685747289',
  api_secret: 'xKsqN8f4I5fgR-Di_dDGwvbVY84',
  secure: true
});

const categoryImages = [
  { slug: "tech-gadgets", name: "Tech & Gadgets", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85" },
  { slug: "home-kitchen", name: "Home & Kitchen", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85" },
  { slug: "work-study", name: "Work & Study", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85" },
  { slug: "gaming", name: "Gaming", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85" },
  { slug: "beauty-grooming", name: "Beauty & Grooming", url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85" },
  { slug: "travel-lifestyle", name: "Travel & Lifestyle", url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85" }
];

const guideImages = [
  { slug: "best-wireless-keyboards-for-students", name: "Keyboards Guide", url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-budget-wireless-mouse-for-work", name: "Mouse Guide", url: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-laptop-accessories-for-students", name: "Laptop Accessories", url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-desk-accessories-for-work-from-home", name: "Desk Accessories", url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-air-fryers-under-100", name: "Air Fryer Guide", url: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-compact-fast-chargers-for-travel", name: "Charger Guide", url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-beard-trimmers-for-men", name: "Beard Trimmer Guide", url: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-travel-tech-accessories", name: "Travel Tech Guide", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-ergonomic-mice-for-wrist-pain", name: "Ergonomic Mice", url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=85" },
  { slug: "best-budget-noise-cancelling-headphones", name: "ANC Headphones", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85" }
];

async function main() {
  console.log('--- Uploading 6 Category Lifestyle Images ---');
  const catUploaded = {};
  for (const cat of categoryImages) {
    try {
      console.log(`Uploading Category: ${cat.name}...`);
      const res = await cloudinary.uploader.upload(cat.url, {
        folder: "nexora/categories",
        public_id: cat.slug,
        overwrite: true,
        transformation: [
          { width: 1200, height: 800, crop: "fill", gravity: "auto", quality: "auto", fetch_format: "auto" }
        ]
      });
      catUploaded[cat.slug] = res.secure_url;
      console.log(`  ✓ ${cat.name} -> ${res.secure_url}`);
    } catch (err) {
      console.error(`  ✗ Error uploading ${cat.name}:`, err.message);
    }
  }

  console.log('\n--- Uploading 10 Guide Cover Images ---');
  const guideUploaded = {};
  for (const guide of guideImages) {
    try {
      console.log(`Uploading Guide: ${guide.name}...`);
      const res = await cloudinary.uploader.upload(guide.url, {
        folder: "nexora/guides",
        public_id: guide.slug,
        overwrite: true,
        transformation: [
          { width: 1200, height: 675, crop: "fill", gravity: "auto", quality: "auto", fetch_format: "auto" }
        ]
      });
      guideUploaded[guide.slug] = res.secure_url;
      console.log(`  ✓ ${guide.name} -> ${res.secure_url}`);
    } catch (err) {
      console.error(`  ✗ Error uploading ${guide.name}:`, err.message);
    }
  }

  // Update data/categories.js
  const catPath = path.join(__dirname, '../data/categories.js');
  let catContent = fs.readFileSync(catPath, 'utf8');
  for (const [slug, url] of Object.entries(catUploaded)) {
    const regex = new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?image:\\s*"[^"]*"`, 'm');
    catContent = catContent.replace(regex, match => match.replace(/image:\s*"[^"]*"/, `image: "${url}"`));
  }
  fs.writeFileSync(catPath, catContent, 'utf8');
  console.log('\n✓ data/categories.js updated with Cloudinary URLs!');

  // Update data/guides.js
  const guidePath = path.join(__dirname, '../data/guides.js');
  let guideContent = fs.readFileSync(guidePath, 'utf8');
  for (const [slug, url] of Object.entries(guideUploaded)) {
    const regex = new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?heroImage:\\s*"[^"]*"`, 'm');
    guideContent = guideContent.replace(regex, match => match.replace(/heroImage:\s*"[^"]*"/, `heroImage: "${url}"`));
  }
  fs.writeFileSync(guidePath, guideContent, 'utf8');
  console.log('✓ data/guides.js updated with Cloudinary URLs!');
}

main().catch(console.error);
