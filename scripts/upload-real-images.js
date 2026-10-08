const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dtowl6hgl',
  api_key: '996625685747289',
  api_secret: 'xKsqN8f4I5fgR-Di_dDGwvbVY84',
  secure: true
});

const productImages = [
  {
    id: "tech-001",
    slug: "keychron-k2-v2-wireless-mechanical-keyboard",
    name: "Keychron K2 V2",
    photoUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "tech-002",
    slug: "logitech-mx-master-3s-wireless-mouse",
    name: "Logitech MX Master 3S",
    photoUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "tech-003",
    slug: "sony-wh-1000xm5-noise-canceling-headphones",
    name: "Sony WH-1000XM5",
    photoUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "tech-004",
    slug: "anker-735-65w-ganprime-fast-charger",
    name: "Anker 735 65W GaN",
    photoUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "tech-005",
    slug: "anker-737-power-bank-24000mah-140w",
    name: "Anker 737 Power Bank",
    photoUrl: "https://images.unsplash.com/photo-1609592424364-750d0a273ff3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "tech-006",
    slug: "amazon-kindle-paperwhite-16gb-6-8-inch",
    name: "Kindle Paperwhite",
    photoUrl: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "work-001",
    slug: "boyata-ergonomic-aluminum-laptop-stand",
    name: "BoYata Aluminum Stand",
    photoUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "work-002",
    slug: "benq-screenbar-plus-monitor-light",
    name: "BenQ ScreenBar Plus",
    photoUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "work-003",
    slug: "logitech-c920x-hd-pro-webcam",
    name: "Logitech C920x HD",
    photoUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "work-004",
    slug: "caldigit-ts4-thunderbolt-4-dock",
    name: "CalDigit TS4 Dock",
    photoUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "kitchen-001",
    slug: "philips-digital-air-fryer-hd9252-4-1l",
    name: "Philips Digital Air Fryer",
    photoUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "kitchen-002",
    slug: "zulay-kitchen-handheld-milk-frother",
    name: "Zulay Milk Frother",
    photoUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "kitchen-003",
    slug: "instant-pot-duo-7-in-1-pressure-cooker",
    name: "Instant Pot Duo 7-in-1",
    photoUrl: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "kitchen-004",
    slug: "aeropress-original-coffee-maker",
    name: "AeroPress Coffee Maker",
    photoUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "travel-001",
    slug: "bellroy-tech-kit-compact-organizer",
    name: "Bellroy Tech Kit",
    photoUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "travel-002",
    slug: "apple-airtag-4-pack-luggage-tracker",
    name: "Apple AirTag (4-Pack)",
    photoUrl: "https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "travel-003",
    slug: "cabeau-evolution-s3-travel-pillow",
    name: "Cabeau Evolution S3",
    photoUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "travel-004",
    slug: "nomatic-30l-travel-pack-backpack",
    name: "Nomatic 30L Travel Pack",
    photoUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "grooming-001",
    slug: "philips-norelco-multigroom-series-7000",
    name: "Philips Norelco 7000",
    photoUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "grooming-002",
    slug: "oral-b-pro-1000-crossaction-electric-toothbrush",
    name: "Oral-B Pro 1000",
    photoUrl: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "grooming-003",
    slug: "theragun-mini-2-0-percussive-massage-gun",
    name: "Theragun Mini 2.0",
    photoUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gaming-001",
    slug: "logitech-g-pro-x-superlight-2-wireless-mouse",
    name: "Logitech G PRO X Superlight 2",
    photoUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gaming-002",
    slug: "bose-quietcomfort-ultra-noise-cancelling-earbuds",
    name: "Bose QC Ultra Earbuds",
    photoUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gaming-003",
    slug: "audio-technica-ath-m50xbt2-wireless-headphones",
    name: "Audio-Technica ATH-M50xBT2",
    photoUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85"
  }
];

async function run() {
  console.log(`Starting Cloudinary upload for ${productImages.length} real product photos...`);
  const uploadedUrls = {};

  for (let i = 0; i < productImages.length; i++) {
    const item = productImages[i];
    console.log(`[${i + 1}/${productImages.length}] Uploading ${item.name} (${item.slug})...`);
    try {
      const result = await cloudinary.uploader.upload(item.photoUrl, {
        folder: "nexora/products",
        public_id: item.slug,
        overwrite: true,
        transformation: [
          { width: 1200, height: 900, crop: "fill", gravity: "auto", quality: "auto", fetch_format: "auto" }
        ]
      });
      uploadedUrls[item.id] = result.secure_url;
      console.log(`  ✓ Uploaded: ${result.secure_url}`);
    } catch (err) {
      console.error(`  ✗ Failed to upload ${item.name}:`, err.message);
    }
  }

  console.log('\nAll uploads finished. Now updating data/products.js...');
  const productsFilePath = path.join(__dirname, '../data/products.js');
  let productsContent = fs.readFileSync(productsFilePath, 'utf8');

  for (const [id, url] of Object.entries(uploadedUrls)) {
    // Find the product block by id and replace its image and gallery fields
    const idRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?image:\\s*"[^"]*"`, 'm');
    productsContent = productsContent.replace(idRegex, (match) => {
      return match.replace(/image:\s*"[^"]*"/, `image: "${url}"`);
    });
  }

  fs.writeFileSync(productsFilePath, productsContent, 'utf8');
  console.log('✓ data/products.js successfully updated with live Cloudinary URLs!');
}

run().catch(console.error);
