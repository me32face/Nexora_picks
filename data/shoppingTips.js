export const shoppingTips = [
  {
    id: "tip-001",
    title: "How to Spot Fake Discounts vs Genuine Price Drops",
    slug: "spot-fake-discounts-vs-genuine-price-drops",
    category: "Smart Buying",
    readTime: "4 min read",
    snippet: "Retailers frequently raise the 'list price' right before sale holidays to show inflated 50% discounts. Learn how to verify historical price bottoms using tracker extensions.",
    content: "Online sales often advertise dramatic 60% or 70% discounts that are mathematically manufactured. Retailers artificially inflate the Manufacturer's Suggested Retail Price (MSRP) weeks before a festival sale, then discount it back down to its ordinary everyday price. Use tools like Keepa to inspect 90-day price graphs before celebrating a 'deal'."
  },
  {
    id: "tip-002",
    title: "Why GaN Technology Matters for Everyday Chargers",
    slug: "why-gan-technology-matters-for-chargers",
    category: "Tech Hardware",
    readTime: "5 min read",
    snippet: "Gallium Nitride runs 5x cooler than traditional silicon. Here is why switching to GaN prolongs device battery health and shrinks travel weight.",
    content: "Gallium Nitride (GaN) is a wide-bandgap semiconductor that conducts electric current at vastly higher frequencies than traditional silicon. Because it loses less energy as ambient heat, internal components can be packed tightly together. The result: a 65W GaN brick is the size of an older 20W silicon charger and runs noticeably cooler."
  },
  {
    id: "tip-003",
    title: "Ergonomics 101: Aligning Monitor Height for Posture",
    slug: "ergonomics-101-aligning-monitor-height",
    category: "Work & Study",
    readTime: "4 min read",
    snippet: "The human head weighs approximately 11 pounds upright, but tilting forward 45 degrees puts 49 pounds of force on the spine. Learn how a 6-inch riser fixes it.",
    content: "When working at a laptop resting flat on a desk, users inevitably bend their neck downward. Over years, this triggers chronic cervical spine strain and tension headaches. Elevating the display so the top third is aligned with natural eye height keeps the neck in neutral alignment."
  },
  {
    id: "tip-004",
    title: "Understanding Battery Watt-Hours vs Milliampere-Hours",
    slug: "understanding-battery-wh-vs-mah",
    category: "Travel & Tech",
    readTime: "5 min read",
    snippet: "Why a 20,000mAh rating doesn't tell the whole story. How voltage and airline regulations govern portable power packs.",
    content: "Milliampere-hours (mAh) only measure electric charge capacity at a specific cell voltage (usually 3.7V for lithium-ion). Watt-hours (Wh = (mAh x V) / 1000) measures actual total energy capacity. Aviation authorities restrict carry-on batteries based on Watt-hours (maximum 100Wh without airline permission), not raw mAh."
  },
  {
    id: "tip-005",
    title: "How to Maintain Mechanical Keyboard Switches",
    slug: "how-to-maintain-mechanical-keyboard-switches",
    category: "Tech Hardware",
    readTime: "4 min read",
    snippet: "Simple cleaning, switch lubing tips, and keycap maintenance that extend the life of your mechanical board to a decade.",
    content: "Unlike membrane boards where dust underneath can permanently ruin contact domes, mechanical keyboards are inherently serviceable. Using a wire keycap puller, an alcohol wipe, and a can of compressed air every quarter prevents grit from wearing switch stems."
  },
  {
    id: "tip-006",
    title: "Non-Stick Cookware: Ceramic vs Traditional PTFE",
    slug: "non-stick-cookware-ceramic-vs-traditional-ptfe",
    category: "Home & Kitchen",
    readTime: "5 min read",
    snippet: "What 'Teflon-free' actually means, how ceramic sol-gel coatings work, and how to prevent heat degradation in air fryers.",
    content: "Ceramic non-stick coatings are made from a silica-derived sol-gel solution rather than fluoropolymers. They are naturally free of PTFE, PFOA, and cadmium, meaning they do not emit toxic degradation fumes even if an empty pan is accidentally heated past 260°C."
  }
];

export function getShoppingTips() {
  return shoppingTips;
}

export function getShoppingTipBySlug(slug) {
  return shoppingTips.find(t => t.slug === slug) || null;
}
