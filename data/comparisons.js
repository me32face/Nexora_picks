export const comparisons = [
  {
    id: "comp-001",
    title: "Mechanical vs Membrane Keyboards for Students",
    slug: "mechanical-vs-membrane-keyboards-students",
    category: "Tech & Gadgets",
    categorySlug: "tech-gadgets",
    product1: {
      name: "75% Tactile Mechanical Keyboard",
      image: "/images/products/keyboard-wireless.svg",
      tagline: "Tactile, durable & highly customizable",
      price: "₹3,499",
      rating: 4.6,
      badge: "BEST FOR LONG ESSAYS",
      pros: [
        "Individual tactile switches prevent bottoming out fatigue",
        "Keycaps and switches are easily replaceable if one fails",
        "Satisfying typing rhythm keeps you focused during long papers"
      ],
      cons: [
        "Heavier footprint in your backpack",
        "Requires brown or silent switches to avoid library noise"
      ]
    },
    product2: {
      name: "Slim Scissor Membrane Keyboard",
      image: "/images/products/keyboard-wireless.svg",
      tagline: "Featherlight, quiet & ultra-portable",
      price: "₹1,999",
      rating: 4.3,
      badge: "BEST FOR PORTABILITY",
      pros: [
        "Ultra-thin profile slides into any backpack pocket",
        "Nearly silent keystrokes suitable for silent study zones",
        "Lighter on student budgets"
      ],
      cons: [
        "Shallow key travel can cause finger soreness during long sprints",
        "Not repairable if individual rubber dome tears"
      ]
    },
    quickVerdict: "If your primary setup is a desk in your dorm or apartment, the tactile mechanical board wins for wrist comfort and long-term switch durability. If you run between 4 campus lecture halls every day, the slim membrane wins on portability.",
    overallWinner: "75% Tactile Mechanical Keyboard (For Desk Ergonomics)",
    categoryBreakdown: [
      {
        category: "Typing Comfort & Speed",
        winner: "Mechanical",
        summary: "Tactile feedback confirms key registration before you slam the keybed, preventing tendon strain."
      },
      {
        category: "Portability & Weight",
        winner: "Membrane",
        summary: "Membrane scissors weigh roughly half of an aluminum-chassis mechanical keyboard."
      },
      {
        category: "Durability & Lifespan",
        winner: "Mechanical",
        summary: "Mechanical switches are rated for 50-80 million actuations versus 5-10 million for rubber domes."
      },
      {
        category: "Acoustics & Library Friendliness",
        winner: "Membrane",
        summary: "Membranes are naturally quieter out of the box without switch lubrication."
      }
    ],
    specsTable: [
      { label: "Switch Mechanism", p1Value: "Mechanical Tactile Switch", p2Value: "Scissor Rubber Dome", winner: "p1" },
      { label: "Key Travel", p1Value: "3.5 mm to 4.0 mm", p2Value: "1.2 mm to 1.5 mm", winner: "p1" },
      { label: "Average Weight", p1Value: "750g - 850g", p2Value: "380g - 420g", winner: "p2" },
      { label: "Durability Rating", p1Value: "50 Million Clicks", p2Value: "5-10 Million Clicks", winner: "p1" },
      { label: "Noise Level", p1Value: "Low to Moderate (Browns)", p2Value: "Whisper Quiet", winner: "p2" }
    ],
    detailedVerdict: "Students writing thesis papers, coding, or spending 6+ hours at their desk should prioritize a compact 75% mechanical board. The tactile feedback translates to fewer typos and dramatically lower finger fatigue. However, if your study life involves hot-desking in silent campus reading rooms, keeping a lightweight scissor-switch membrane board in your backpack remains a practical choice.",
    publishedDate: "2026-09-22",
    updatedDate: "2026-10-08"
  },
  {
    id: "comp-002",
    title: "Logitech MX Master 3S vs MX Anywhere 3S",
    slug: "logitech-mx-master-3s-vs-anywhere-3s",
    category: "Tech & Gadgets",
    categorySlug: "tech-gadgets",
    product1: {
      name: "Logitech MX Master 3S",
      image: "/images/products/mouse-ergonomic.svg",
      tagline: "The gold standard full-sized workstation mouse",
      price: "₹8,995",
      rating: 4.8,
      badge: "DESK POWER USER",
      pros: [
        "Dedicated horizontal thumb wheel for timelines and Excel",
        "Deep ergonomic thumb rest relieves carpal tunnel",
        "Quiet Click switches (90% noise dampening)"
      ],
      cons: [
        "Bulky profile (141 grams); cumbersome to travel with",
        "Right-hand ergonomics only"
      ]
    },
    product2: {
      name: "Logitech MX Anywhere 3S",
      image: "/images/products/mouse-ergonomic.svg",
      tagline: "Compact flagship performance on the go",
      price: "₹6,495",
      rating: 4.6,
      badge: "BEST TRAVEL MOUSE",
      pros: [
        "Compact 99-gram chassis fits into tiny bag pockets",
        "Same 8,000 DPI MagSpeed sensor tracking on glass",
        "Ambidextrous symmetrical contour"
      ],
      cons: [
        "No dedicated horizontal scroll wheel",
        "Flatter shape offers less palm support for large hands"
      ]
    },
    quickVerdict: "Buy the MX Master 3S if your mouse stays on a dedicated desk for video editing, spreadsheets, or engineering. Pick the MX Anywhere 3S if you work in cafes, airport lounges, or co-working spaces.",
    overallWinner: "Logitech MX Master 3S (For Stationary Desks)",
    categoryBreakdown: [
      {
        category: "Ergonomics",
        winner: "MX Master 3S",
        summary: "Full palm support and angled thumb rest promote all-day endurance."
      },
      {
        category: "Portability",
        winner: "MX Anywhere 3S",
        summary: "Saves space and weight in your commuter bag without losing sensor performance."
      },
      {
        category: "Workflow Customization",
        winner: "MX Master 3S",
        summary: "Secondary thumb wheel speeds up horizontal scrubbing across large sheets and video timelines."
      }
    ],
    specsTable: [
      { label: "Weight", p1Value: "141 grams", p2Value: "99 grams", winner: "p2" },
      { label: "Sensor DPI", p1Value: "8,000 DPI (Tracks on glass)", p2Value: "8,000 DPI (Tracks on glass)", winner: "tie" },
      { label: "Scroll Wheel", p1Value: "MagSpeed + Thumb Wheel", p2Value: "MagSpeed (No thumb wheel)", winner: "p1" },
      { label: "Battery Life", p1Value: "Up to 70 days", p2Value: "Up to 70 days", winner: "tie" }
    ],
    detailedVerdict: "Both mice share Logitech's exceptional electromagnetic MagSpeed scroll wheel and Quiet Click switches. The decision boils entirely down to your lifestyle: stationary power users will cherish the thumb wheel of the Master 3S, while frequent flyers will prefer the pocketable Anywhere 3S.",
    publishedDate: "2026-09-24",
    updatedDate: "2026-10-08"
  },
  {
    id: "comp-003",
    title: "Ergonomic Laptop Stand vs Monitor Arm",
    slug: "ergonomic-laptop-stand-vs-monitor-arm",
    category: "Work & Study",
    categorySlug: "work-study",
    product1: {
      name: "Aluminum Laptop Stand",
      image: "/images/products/laptop-stand.svg",
      tagline: "Instant setup, portable, zero installation",
      price: "₹1,299",
      rating: 4.8,
      badge: "EFFORTLESS VALUE",
      pros: [
        "Zero desk clamp requirements or installation tools",
        "Portable: move it between your desk, dining table, or office",
        "Budget-friendly"
      ],
      cons: [
        "Fixed position compared to 3D articulating arms",
        "Still takes up a small footprint on desk surface"
      ]
    },
    product2: {
      name: "Gas-Spring Monitor / Laptop Arm",
      image: "/images/products/laptop-stand.svg",
      tagline: "Total floating adjustability and maximum desk space",
      price: "₹3,499",
      rating: 4.7,
      badge: "PRO DESK SETUP",
      pros: [
        "Frees up 100% of desk surface directly below screen",
        "Smooth fingertip height, tilt, and depth articulation",
        "Integrated cable channels keep cords out of sight"
      ],
      cons: [
        "Requires a sturdy desk lip suitable for clamping",
        "Permanent installation; not portable for mobile work"
      ]
    },
    quickVerdict: "If you rent an apartment with thin glass or hollow-core desks, or travel between locations, grab the solid aluminum laptop stand. If you have a solid wood desk and want maximum clutter-free surface area, a gas-spring arm is unbeatable.",
    overallWinner: "Aluminum Stand (For Renters/Students) / Arm (For Dedicated Offices)",
    categoryBreakdown: [
      {
        category: "Desk Clearance",
        winner: "Monitor Arm",
        summary: "Floats the device in air, reclaiming almost 1 square foot of desk space."
      },
      {
        category: "Portability & Setup",
        winner: "Laptop Stand",
        summary: "Unbox and use in 10 seconds without tightening hex bolts or measuring desk edges."
      },
      {
        category: "Adjustability",
        winner: "Monitor Arm",
        summary: "Full 360-degree rotation, forward reach, and continuous height micro-tuning."
      }
    ],
    specsTable: [
      { label: "Installation Time", p1Value: "Instant (0 tools)", p2Value: "15 - 20 minutes", winner: "p1" },
      { label: "Desk Space Freed", p1Value: "Underneath riser only", p2Value: "100% surface clearance", winner: "p2" },
      { label: "Weight", p1Value: "450g - 800g", p2Value: "2.5kg - 3.5kg", winner: "p1" }
    ],
    detailedVerdict: "We recommend starting with an aluminum riser like the Nexora Elevate. It immediately addresses neck posture for a fraction of the cost. Once you invest in an external 27-inch monitor down the road, upgrade to a dual monitor/laptop arm.",
    publishedDate: "2026-09-28",
    updatedDate: "2026-10-08"
  },
  {
    id: "comp-004",
    title: "ANC Headphones vs True Wireless Earbuds for Studying",
    slug: "anc-headphones-vs-tws-earbuds-studying",
    category: "Tech & Gadgets",
    categorySlug: "tech-gadgets",
    product1: {
      name: "Over-Ear ANC Headphones",
      image: "/images/products/headphones-anc.svg",
      tagline: "Maximum acoustic isolation and marathon battery",
      price: "₹4,999",
      rating: 4.6,
      badge: "STUDY ISOLATION",
      pros: [
        "Physical ear cups + ANC provide superior acoustic seal",
        "40 to 60-hour continuous battery life",
        "Zero ear-canal fatigue during 6-hour revision marathons"
      ],
      cons: [
        "Can cause ear warmth in hot summer climates without AC",
        "Takes up dedicated space in a backpack"
      ]
    },
    product2: {
      name: "True Wireless Earbuds with ANC",
      image: "/images/products/headphones-anc.svg",
      tagline: "Pocket-sized convenience and workout versatility",
      price: "₹3,999",
      rating: 4.4,
      badge: "EVERYDAY VERSATILITY",
      pros: [
        "Case slips effortlessly into small pockets",
        "Water/sweat resistance for gym workouts and rain",
        "No headband hair dent"
      ],
      cons: [
        "Battery lasts 5-7 hours before needing to return to case",
        "In-ear silicone tips can cause ear fatigue after 3+ hours"
      ]
    },
    quickVerdict: "For deep, uninterrupted study sessions where you need to block campus noise for 5+ hours at a stretch, over-ear ANC headphones are vastly superior. For mixed daily commuting, gym, and quick calls, earbuds win.",
    overallWinner: "Over-Ear ANC Headphones (For Academic Deep Work)",
    categoryBreakdown: [
      {
        category: "Noise Cancellation Power",
        winner: "Over-Ear",
        summary: "Passive clamp seal combined with multi-mic hybrid ANC silences both low rumbles and ambient talk."
      },
      {
        category: "All-Day Comfort",
        winner: "Over-Ear",
        summary: "Memory foam resting around the ear beats silicone tips pressing inside the ear canal."
      },
      {
        category: "Portability & Gym Utility",
        winner: "Earbuds",
        summary: "Earbuds won't shift during jogs and live inside a tiny pocket case."
      }
    ],
    specsTable: [
      { label: "Battery Per Session", p1Value: "45 - 60 Hours", p2Value: "6 - 8 Hours", winner: "p1" },
      { label: "Noise Reduction", p1Value: "-38dB (Over-ear seal)", p2Value: "-28dB (In-ear tip)", winner: "p1" },
      { label: "Pocketability", p1Value: "Requires bag / case", p2Value: "Fits coin pocket", winner: "p2" }
    ],
    detailedVerdict: "If your goal is surviving study halls, exams, and loud dorm corridors, over-ear headphones are a game changer for cognitive focus. The passive isolation alone dampens higher-frequency distractions that earbuds struggle to eliminate.",
    publishedDate: "2026-10-02",
    updatedDate: "2026-10-08"
  },
  {
    id: "comp-005",
    title: "65W GaN Charger vs Traditional Multi-Port Adapter",
    slug: "65w-gan-charger-vs-traditional-adapter",
    category: "Tech & Gadgets",
    categorySlug: "tech-gadgets",
    product1: {
      name: "GaN III 65W Fast Charger",
      image: "/images/products/charger-gan.svg",
      tagline: "Modern Gallium Nitride efficiency in a tiny cube",
      price: "₹1,899",
      rating: 4.8,
      badge: "MODERN TECH",
      pros: [
        "50% smaller and 40% lighter than traditional chargers",
        "Generates minimal heat even at peak 65W power",
        "Charges laptop, phone, and tablet simultaneously"
      ],
      cons: [
        "Slightly higher initial purchase cost"
      ]
    },
    product2: {
      name: "Legacy Silicon Multi-Port Brick",
      image: "/images/products/charger-gan.svg",
      tagline: "Heavier traditional silicon charging block",
      price: "₹1,299",
      rating: 4.1,
      badge: "BUDGET LEGACY",
      pros: [
        "Lower price tag"
      ],
      cons: [
        "Heats up noticeably during sustained multi-device charging",
        "Large footprint pulls itself loose from loose wall sockets",
        "Often lacks dynamic PPS power negotiation"
      ]
    },
    quickVerdict: "GaN technology is worth every single rupee. The compact size, reduced heat emission, and superior safety protections make legacy silicon chargers obsolete for anyone with a laptop and phone.",
    overallWinner: "65W GaN Fast Charger",
    categoryBreakdown: [
      {
        category: "Energy Efficiency & Heat",
        winner: "GaN Charger",
        summary: "Gallium Nitride conducts electrons 1000x more efficiently than silicon, dissipating vastly less heat."
      },
      {
        category: "Size & Weight",
        winner: "GaN Charger",
        summary: "Shrinks down into an egg-sized footprint that won't sag out of hotel sockets."
      }
    ],
    specsTable: [
      { label: "Semiconductor", p1Value: "Gallium Nitride (GaN III)", p2Value: "Traditional Silicon", winner: "p1" },
      { label: "Operating Temperature", p1Value: "Warm to touch (~42°C)", p2Value: "Hot (~58°C)", winner: "p1" },
      { label: "Weight", p1Value: "110g", p2Value: "240g", winner: "p1" }
    ],
    detailedVerdict: "Replacing multiple wall adapters with a single 3-port 65W GaN charger cleans up your backpack, hotel nightstands, and desk power strip permanently.",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-08"
  },
  {
    id: "comp-006",
    title: "Budget Air Fryer vs Convection Toaster Oven",
    slug: "budget-air-fryer-vs-convection-toaster-oven",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    product1: {
      name: "Compact 4L Basket Air Fryer",
      image: "/images/products/air-fryer.svg",
      tagline: "Rapid vortex air crisping in minutes",
      price: "₹3,999",
      rating: 4.7,
      badge: "FASTEST RESULTS",
      pros: [
        "Heats in 90 seconds without preheat wait",
        "Crispiest textures on fries, samosas, and roasted vegetables",
        "Removable non-stick basket rinses clean in under a minute"
      ],
      cons: [
        "Smaller horizontal capacity (cannot fit a 12-inch pizza)",
        "Must shake basket halfway through cooking"
      ]
    },
    product2: {
      name: "Countertop Convection Toaster Oven",
      image: "/images/products/air-fryer.svg",
      tagline: "Large multi-rack baking and toasting capacity",
      price: "₹5,499",
      rating: 4.4,
      badge: "LARGER BATCHES",
      pros: [
        "Fits 6 slices of bread or an entire personal pizza",
        "Glass door allows you to monitor food without opening",
        "Multiple rack levels for multi-item cooking"
      ],
      cons: [
        "Takes 8-12 minutes to preheat fully",
        "Harder to clean internal walls and crumbs",
        "Occupies a huge chunk of kitchen counter space"
      ]
    },
    quickVerdict: "For fast weeknight dinners, reheating leftovers with crunchy perfection, and easy 60-second cleanup, the basket air fryer wins hands down. Choose a toaster oven only if you regularly bake large cakes or multi-slice toast.",
    overallWinner: "Compact Basket Air Fryer (For Speed & Cleanup)",
    categoryBreakdown: [
      {
        category: "Cooking Speed & Crispiness",
        winner: "Air Fryer",
        summary: "Dense heating elements and high-velocity vortex fans cook 30% faster with superior crisp."
      },
      {
        category: "Cleanup Effort",
        winner: "Air Fryer",
        summary: "Single dishwasher-safe nonstick bucket versus crumb trays and grease-splattered oven walls."
      },
      {
        category: "Capacity for Large Dishes",
        winner: "Toaster Oven",
        summary: "Wide flat racks accommodate casserole dishes and personal pizzas."
      }
    ],
    specsTable: [
      { label: "Preheat Duration", p1Value: "90 seconds", p2Value: "8 to 12 minutes", winner: "p1" },
      { label: "Counter Footprint", p1Value: "Compact (takes 1 kettle space)", p2Value: "Large (2x microwave size)", winner: "p1" },
      { label: "Dishwasher Friendly", p1Value: "100% (Basket & crisper plate)", p2Value: "Racks only (Oven is manual)", winner: "p1" }
    ],
    detailedVerdict: "For 1 to 3 people, an air fryer quickly becomes the most used appliance in the kitchen. Its lightning-fast thermal response turns weeknight cooking from a chore into a 15-minute breeze.",
    publishedDate: "2026-10-06",
    updatedDate: "2026-10-08"
  }
];

export function getComparisons(category) {
  if (!category) return comparisons;
  return comparisons.filter(c => c.categorySlug === category);
}

export function getComparisonBySlug(slug) {
  return comparisons.find(c => c.slug === slug) || null;
}

export function getFeaturedComparisons() {
  return comparisons.slice(0, 3);
}
