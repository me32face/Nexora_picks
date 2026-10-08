export const categories = [
  {
    id: "tech-gadgets",
    name: "Tech & Gadgets",
    slug: "tech-gadgets",
    tagline: "Find useful tech without the confusion.",
    description: "Curated wireless peripherals, high-speed GaN chargers, audio gear, and everyday accessories tested for battery longevity and real-world durability.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452250/nexora/categories/tech-gadgets.jpg",
    icon: "laptop",
    color: "#4f46e5",
    subcategories: [
      { id: "keyboards", name: "Keyboards", slug: "keyboards" },
      { id: "mice", name: "Mice & Trackballs", slug: "mice" },
      { id: "headphones", name: "Headphones & Earbuds", slug: "headphones" },
      { id: "chargers", name: "GaN Chargers", slug: "chargers" },
      { id: "power-banks", name: "Power Banks", slug: "power-banks" },
      { id: "desk-audio", name: "Desk Audio", slug: "desk-audio" }
    ],
    buyingTips: [
      "Prioritize multi-device Bluetooth switching (3+ devices) if you jump between a laptop, tablet, and phone.",
      "Check GaN (Gallium Nitride) technology when buying wall adapters for cooler operation and compact size.",
      "Look for USB-C Power Delivery (PD 3.0) with at least 65W output to charge modern ultrabooks."
    ],
    faqs: [
      {
        question: "How do we select tech products at Nexora Picks?",
        answer: "We evaluate real build specifications, long-term user reports, teardowns, switch reliability, and verified customer feedback. We eliminate products with inflated marketing claims."
      },
      {
        question: "Are prices and ratings dynamically verified?",
        answer: "Our editorial team periodically cross-references retail listings. Development data is explicitly marked as demo until retail APIs are linked."
      }
    ]
  },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    tagline: "High-utility tools for everyday living.",
    description: "Time-saving kitchen gadgets, compact countertop appliances, space-maximizing organizers, and smart tools that earn their counter space.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452252/nexora/categories/home-kitchen.jpg",
    icon: "coffee",
    color: "#f97316",
    subcategories: [
      { id: "kitchen-gadgets", name: "Kitchen Gadgets", slug: "kitchen-gadgets" },
      { id: "storage", name: "Pantry & Storage", slug: "storage" },
      { id: "appliances", name: "Countertop Appliances", slug: "appliances" },
      { id: "coffee-tools", name: "Coffee & Beverage", slug: "coffee-tools" },
      { id: "cleaning-products", name: "Smart Cleaning", slug: "cleaning-products" }
    ],
    buyingTips: [
      "Ensure removable parts are 100% dishwasher-safe before purchasing culinary gadgets.",
      "Measure cabinet clearance before buying countertop appliances like air fryers or stand mixers.",
      "Opt for stainless steel or BPA-free borosilicate glass over cheap plastics for longevity."
    ],
    faqs: [
      {
        question: "Do single-purpose kitchen gadgets make the cut?",
        answer: "Only if they perform an essential recurring task dramatically faster and cleaner than standard tools, with minimal maintenance."
      }
    ]
  },
  {
    id: "work-study",
    name: "Work & Study",
    slug: "work-study",
    tagline: "Ergonomics and focus for your daily grind.",
    description: "Thoughtfully engineered desk accessories, aluminum laptop stands, asymmetric screenbars, and cable organizers designed to relieve neck strain and elevate focus.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452253/nexora/categories/work-study.jpg",
    icon: "briefcase",
    color: "#6366f1",
    subcategories: [
      { id: "laptop-stands", name: "Laptop & Monitor Stands", slug: "laptop-stands" },
      { id: "desk-lamps", name: "Screenbars & Lamps", slug: "desk-lamps" },
      { id: "desk-pads", name: "Desk Mats & Organizers", slug: "desk-pads" },
      { id: "cable-management", name: "Cable Management", slug: "cable-management" },
      { id: "stationery", name: "Productivity Stationery", slug: "stationery" }
    ],
    buyingTips: [
      "Elevate your screen so the top third aligns with eye level to eliminate posture-related neck aches.",
      "Choose asymmetric screenbars rather than standard desk lamps to prevent screen glare and eye fatigue."
    ],
    faqs: [
      {
        question: "Why invest in an ergonomic laptop stand?",
        answer: "Elevating the laptop screen aligns eye level naturally, while allowing improved passive airflow under laptop chassis."
      }
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    slug: "gaming",
    tagline: "Precision gear without the gamer tax.",
    description: "Low-latency wireless mice, tactile mechanical boards, directional audio headsets, and performance gear chosen for sensor fidelity and durability.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452254/nexora/categories/gaming.jpg",
    icon: "gamepad",
    color: "#ec4899",
    subcategories: [
      { id: "gaming-mice", name: "Gaming Mice", slug: "gaming-mice" },
      { id: "gaming-keyboards", name: "Mechanical Keyboards", slug: "gaming-keyboards" },
      { id: "controllers", name: "Game Controllers", slug: "controllers" },
      { id: "headsets", name: "Gaming Headsets", slug: "headsets" },
      { id: "mousepads", name: "Speed & Control Pads", slug: "mousepads" }
    ],
    buyingTips: [
      "Sub-65 gram mouse weight offers noticeably faster flick precision and reduces wrist fatigue during long sessions.",
      "Look for optical switches rather than mechanical leaf switches to eliminate double-clicking issues."
    ],
    faqs: [
      {
        question: "Is wireless gaming fast enough nowadays?",
        answer: "Yes, modern 2.4GHz wireless protocols deliver sub-1ms polling rates, matching or exceeding wired latency."
      }
    ]
  },
  {
    id: "beauty-grooming",
    name: "Beauty & Grooming",
    slug: "beauty-grooming",
    tagline: "Precision personal care and grooming tools.",
    description: "Self-sharpening beard trimmers, ionic hair tools, ultrasonic facial scrubbers, and travel-ready grooming kits engineered for consistency.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452255/nexora/categories/beauty-grooming.jpg",
    icon: "sparkles",
    color: "#06b6d4",
    subcategories: [
      { id: "grooming-tools", name: "Beard & Hair Trimmers", slug: "grooming-tools" },
      { id: "hair-tools", name: "Hair Styling & Dryers", slug: "hair-tools" },
      { id: "skincare-tools", name: "Facial Care Devices", slug: "skincare-tools" },
      { id: "personal-care", name: "Oral & Body Care", slug: "personal-care" }
    ],
    buyingTips: [
      "Lithium-ion batteries with USB-C charging make travel grooming far less burdensome than proprietary barrel chargers.",
      "IPX7 waterproof rating ensures you can safely rinse cutters directly under running tap water."
    ],
    faqs: [
      {
        question: "How long should stainless steel trimmer blades last?",
        answer: "Self-sharpening blades typically maintain cut precision for 2-3 years with routine oiling and rinsing."
      }
    ]
  },
  {
    id: "travel-lifestyle",
    name: "Travel & Lifestyle",
    slug: "travel-lifestyle",
    tagline: "Engineered gear for commuters and nomads.",
    description: "Weather-resistant tech pouches, modular backpacks, vacuum-insulated bottles, and universal travel adapters built to survive daily transit.",
    image: "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791452256/nexora/categories/travel-lifestyle.jpg",
    icon: "compass",
    color: "#10b981",
    subcategories: [
      { id: "travel-organizers", name: "Tech Pouches & Cubes", slug: "travel-organizers" },
      { id: "backpacks", name: "Commuter Backpacks", slug: "backpacks" },
      { id: "bottles", name: "Insulated Drinkware", slug: "bottles" },
      { id: "travel-adapters", name: "Universal Adapters", slug: "travel-adapters" }
    ],
    buyingTips: [
      "Look for YKK weather-sealed zippers and water-resistant Cordura or recycled ripstop nylon.",
      "Universal travel adapters must include built-in fuse protection and at least 30W USB-C output."
    ],
    faqs: [
      {
        question: "What makes a tech pouch worth buying over ziplock bags?",
        answer: "Elastic cable organizers, padded divider walls, and structured bases prevent bent adapter pins and tangled cords."
      }
    ]
  }
];

export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug) || null;
}
