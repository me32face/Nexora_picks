const fs = require('fs');
const path = require('path');

// Ensure directories exist
const dirs = [
  'public/logo',
  'public/images/products',
  'public/images/categories',
  'public/images/guides',
  'public/images/pins',
  'public/images/authors'
];

dirs.forEach(d => {
  const full = path.join(__dirname, '..', d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

// 1. Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" fill="none">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="iconGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <!-- Icon Mark: Hexagonal compass / modern pick diamond -->
  <g transform="translate(10, 15)">
    <rect x="0" y="0" width="70" height="70" rx="18" fill="url(#brandGrad)" />
    <!-- Stylized Compass / Check Sparkle -->
    <path d="M35 15L43 32L60 35L43 38L35 55L27 38L10 35L27 32Z" fill="#ffffff" />
    <circle cx="35" cy="35" r="4" fill="#ec4899" />
  </g>
  <!-- Typography -->
  <text x="96" y="52" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" letter-spacing="-0.03em" fill="#0f172a" class="dark-invert">
    NEXORA<tspan fill="url(#brandGrad)">PICKS</tspan>
  </text>
  <text x="98" y="74" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="11" letter-spacing="0.22em" fill="#64748b">
    SMART FINDS · BETTER CHOICES
  </text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/logo/nexora-logo.svg'), logoSvg);

// Icon mark only
const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="brandGradMark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect x="5" y="5" width="90" height="90" rx="24" fill="url(#brandGradMark)" />
  <path d="M50 18L60 42L84 46L60 50L50 74L40 50L16 46L40 42Z" fill="#ffffff" />
  <circle cx="50" cy="46" r="6" fill="#ec4899" />
</svg>`;
fs.writeFileSync(path.join(__dirname, '../public/logo/nexora-mark.svg'), logoMarkSvg);

// Helper to make beautiful product SVGs
function createProductSvg(title, subtitle, iconType, bgAccent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
  <defs>
    <radialGradient id="bgLight" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </radialGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgAccent.start || '#6366f1'}" />
      <stop offset="100%" stop-color="${bgAccent.end || '#a855f7'}" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect width="800" height="600" fill="url(#bgLight)" />
  
  <!-- Subtle Grid Pattern -->
  <g opacity="0.15">
    <line x1="100" y1="0" x2="100" y2="600" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6 6"/>
    <line x1="250" y1="0" x2="250" y2="600" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6 6"/>
    <line x1="400" y1="0" x2="400" y2="600" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6 6"/>
    <line x1="550" y1="0" x2="550" y2="600" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6 6"/>
    <line x1="700" y1="0" x2="700" y2="600" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6 6"/>
  </g>

  <!-- Editorial Card Shape -->
  <g filter="url(#shadow)" transform="translate(140, 70)">
    <rect width="520" height="380" rx="28" fill="#ffffff" />
    
    <!-- Accent Top Bar -->
    <rect width="520" height="8" rx="4" fill="url(#accentGrad)" />

    <!-- Glow Circle Behind Icon -->
    <circle cx="260" cy="190" r="110" fill="url(#accentGrad)" opacity="0.08" />

    <!-- Icon Graphic -->
    <g transform="translate(200, 130)">
      ${getIconContent(iconType)}
    </g>

    <!-- Badge -->
    <g transform="translate(40, 36)">
      <rect width="105" height="26" rx="13" fill="#f1f5f9" />
      <text x="52" y="17" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="10" fill="#4f46e5" letter-spacing="0.06em">VERIFIED LAB</text>
    </g>

    <!-- Nexora Watermark -->
    <text x="480" y="52" text-anchor="end" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#cbd5e1" letter-spacing="0.1em">NEXORA PICKS</text>
  </g>

  <!-- Bottom Details -->
  <text x="400" y="505" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="24" fill="#0f172a" letter-spacing="-0.02em">
    ${escapeXml(title)}
  </text>
  <text x="400" y="538" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#64748b">
    ${escapeXml(subtitle)}
  </text>
</svg>`;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function getIconContent(type) {
  switch (type) {
    case 'keyboard':
      return `<rect x="0" y="20" width="120" height="70" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="12" y="32" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="32" y="32" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="52" y="32" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="72" y="32" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="92" y="32" width="16" height="10" rx="2" fill="#ec4899"/>
        <rect x="12" y="48" width="18" height="10" rx="2" fill="#818cf8"/>
        <rect x="36" y="48" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="56" y="48" width="14" height="10" rx="2" fill="#818cf8"/>
        <rect x="76" y="48" width="32" height="10" rx="2" fill="#818cf8"/>
        <rect x="25" y="64" width="70" height="12" rx="3" fill="#c7d2fe"/>`;
    case 'mouse':
      return `<path d="M35 15 C35 5, 85 5, 85 15 L85 75 C85 95, 35 95, 35 75 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <line x1="60" y1="15" x2="60" y2="45" stroke="#818cf8" stroke-width="2"/>
        <rect x="56" y="30" width="8" height="18" rx="4" fill="#ec4899"/>`;
    case 'headphones':
      return `<path d="M25 60 C25 25, 95 25, 95 60" fill="none" stroke="#6366f1" stroke-width="6" stroke-linecap="round"/>
        <rect x="15" y="55" width="20" height="35" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
        <rect x="85" y="55" width="20" height="35" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
        <circle cx="25" cy="72" r="5" fill="#ec4899"/>
        <circle cx="95" cy="72" r="5" fill="#ec4899"/>`;
    case 'charger':
      return `<rect x="30" y="25" width="60" height="65" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="45" y="10" width="10" height="15" rx="2" fill="#818cf8"/>
        <rect x="65" y="10" width="10" height="15" rx="2" fill="#818cf8"/>
        <rect x="42" y="60" width="36" height="8" rx="4" fill="#ec4899"/>
        <rect x="42" y="74" width="36" height="6" rx="3" fill="#38bdf8"/>`;
    case 'powerbank':
      return `<rect x="30" y="15" width="60" height="85" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="60" cy="30" r="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <text x="60" y="34" text-anchor="middle" font-size="9" fill="#ec4899" font-weight="bold">98%</text>
        <line x1="45" y1="65" x2="75" y2="65" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>
        <line x1="45" y1="75" x2="75" y2="75" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>`;
    case 'stand':
      return `<path d="M20 80 L60 25 L100 80" fill="none" stroke="#6366f1" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="25" y="25" width="70" height="8" rx="4" fill="#ec4899"/>
        <rect x="15" y="78" width="90" height="8" rx="4" fill="#1e1b4b"/>`;
    case 'lamp':
      return `<path d="M35 85 L55 20 L65 20 L85 85" fill="none" stroke="#6366f1" stroke-width="4"/>
        <path d="M40 25 L80 25 L90 50 L30 50 Z" fill="#ec4899" opacity="0.9"/>
        <line x1="60" y1="50" x2="60" y2="90" stroke="#fef08a" stroke-width="3" stroke-dasharray="4 4"/>`;
    case 'kitchen':
      return `<rect x="25" y="30" width="70" height="60" rx="14" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="60" cy="55" r="16" fill="#312e81" stroke="#ec4899" stroke-width="2"/>
        <path d="M40 20 C40 10, 80 10, 80 20" fill="none" stroke="#818cf8" stroke-width="4"/>`;
    case 'shaver':
      return `<path d="M45 20 L75 20 L70 85 L50 85 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="60" cy="30" r="14" fill="#ec4899"/>
        <circle cx="50" cy="24" r="8" fill="#818cf8"/>
        <circle cx="70" cy="24" r="8" fill="#818cf8"/>
        <rect x="52" y="55" width="16" height="6" rx="3" fill="#38bdf8"/>`;
    case 'travel':
      return `<rect x="25" y="30" width="70" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <path d="M45 30 L45 15 C45 10, 75 10, 75 15 L75 30" fill="none" stroke="#ec4899" stroke-width="4"/>
        <line x1="25" y1="50" x2="95" y2="50" stroke="#818cf8" stroke-width="2"/>
        <line x1="25" y1="70" x2="95" y2="70" stroke="#818cf8" stroke-width="2"/>`;
    case 'webcam':
      return `<rect x="25" y="45" width="70" height="35" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="60" cy="62" r="12" fill="#0f172a" stroke="#818cf8" stroke-width="3"/>
        <circle cx="60" cy="62" r="5" fill="#38bdf8"/>
        <circle cx="82" cy="55" r="3" fill="#22c55e"/>
        <path d="M50 80 L70 80 L80 95 L40 95 Z" fill="#64748b"/>`;
    case 'reader':
      return `<rect x="30" y="15" width="60" height="85" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="36" y="24" width="48" height="66" rx="4" fill="#f8fafc"/>
        <line x1="42" y1="34" x2="78" y2="34" stroke="#64748b" stroke-width="2"/>
        <line x1="42" y1="44" x2="78" y2="44" stroke="#64748b" stroke-width="2"/>
        <line x1="42" y1="54" x2="70" y2="54" stroke="#64748b" stroke-width="2"/>
        <line x1="42" y1="64" x2="74" y2="64" stroke="#64748b" stroke-width="2"/>`;
    case 'coffee':
      return `<rect x="35" y="30" width="50" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <line x1="60" y1="12" x2="60" y2="35" stroke="#ec4899" stroke-width="5" stroke-linecap="round"/>
        <rect x="42" y="10" width="36" height="8" rx="4" fill="#ec4899"/>
        <line x1="45" y1="45" x2="75" y2="45" stroke="#818cf8" stroke-width="2"/>
        <line x1="45" y1="60" x2="75" y2="60" stroke="#818cf8" stroke-width="2"/>`;
    case 'toothbrush':
      return `<rect x="52" y="35" width="16" height="65" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <path d="M54 35 L56 12 L64 12 L66 35 Z" fill="#818cf8"/>
        <rect x="56" y="8" width="16" height="18" rx="3" fill="#38bdf8"/>
        <circle cx="60" cy="55" r="4" fill="#ec4899"/>`;
    case 'massage':
      return `<path d="M30 40 L70 25 L85 55 L45 70 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="35" y="55" width="22" height="42" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <circle cx="85" cy="25" r="14" fill="#ec4899"/>`;
    case 'backpack':
      return `<path d="M35 35 C35 15, 85 15, 85 35 L90 85 C90 92, 30 92, 30 85 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="42" y="50" width="36" height="28" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <line x1="42" y1="62" x2="78" y2="62" stroke="#ec4899" stroke-width="2"/>`;
    case 'tracker':
      return `<circle cx="60" cy="55" r="32" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
        <circle cx="60" cy="55" r="18" fill="#e2e8f0"/>
        <circle cx="60" cy="55" r="7" fill="#6366f1"/>`;
    case 'dock':
      return `<rect x="20" y="35" width="80" height="50" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <rect x="28" y="50" width="10" height="6" rx="2" fill="#38bdf8"/>
        <rect x="43" y="50" width="10" height="6" rx="2" fill="#38bdf8"/>
        <rect x="58" y="50" width="14" height="6" rx="2" fill="#818cf8"/>
        <circle cx="82" cy="53" r="3" fill="#22c55e"/>`;
    case 'earbuds':
      return `<rect x="30" y="35" width="60" height="45" rx="18" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="48" cy="24" r="8" fill="#ec4899"/>
        <circle cx="72" cy="24" r="8" fill="#ec4899"/>
        <path d="M48 28 L46 45" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
        <path d="M72 28 L74 45" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>`;
    case 'gaming':
      return `<path d="M30 40 C30 25, 90 25, 90 40 L95 75 C95 85, 80 90, 75 80 L65 65 L55 65 L45 80 C40 90, 25 85, 25 75 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="45" cy="45" r="4" fill="#818cf8"/>
        <circle cx="75" cy="45" r="4" fill="#ec4899"/>
        <rect x="42" y="42" width="6" height="6" fill="#38bdf8"/>`;
    default:
      return `<rect x="30" y="30" width="60" height="60" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
        <circle cx="60" cy="60" r="16" fill="#ec4899"/>`;
  }
}

// 2. Generate Product SVGs (24 Real Amazon Best-Sellers)
const productsToGen = [
  // Tech & Gadgets
  { file: 'keyboard-wireless.svg', title: 'Keychron K2 V2', sub: 'Compact 75% Wireless Mechanical Keyboard', icon: 'keyboard', color: { start: '#6366f1', end: '#a855f7' } },
  { file: 'mouse-ergonomic.svg', title: 'Logitech MX Master 3S', sub: 'Ergonomic Precision Quiet-Click Wireless Mouse', icon: 'mouse', color: { start: '#8b5cf6', end: '#ec4899' } },
  { file: 'headphones-anc.svg', title: 'Sony WH-1000XM5', sub: 'Industry-Leading Noise Cancelling Headphones', icon: 'headphones', color: { start: '#4f46e5', end: '#6366f1' } },
  { file: 'charger-gan.svg', title: 'Anker 735 65W GaN', sub: 'Ultra-Compact GaNPrime 3-Port Fast Charger', icon: 'charger', color: { start: '#0ea5e9', end: '#6366f1' } },
  { file: 'powerbank-slim.svg', title: 'Anker 737 Power Bank', sub: '24,000mAh 140W Ultra-Fast Smart Display', icon: 'powerbank', color: { start: '#6366f1', end: '#8b5cf6' } },
  { file: 'kindle-reader.svg', title: 'Amazon Kindle Paperwhite', sub: '6.8" Glare-Free Display with Warm Light (16GB)', icon: 'reader', color: { start: '#0284c7', end: '#38bdf8' } },
  
  // Work & Study
  { file: 'laptop-stand.svg', title: 'BoYata Aluminum Stand', sub: 'Dual-Hinge Heavy-Duty Ergonomic Laptop Riser', icon: 'stand', color: { start: '#64748b', end: '#475569' } },
  { file: 'desk-lamp.svg', title: 'BenQ ScreenBar Plus', sub: 'Asymmetric Eye-Care Monitor Light with Dial', icon: 'lamp', color: { start: '#f59e0b', end: '#ec4899' } },
  { file: 'webcam-hd.svg', title: 'Logitech C920x HD Pro', sub: 'Full HD 1080p Webcam with Dual Microphones', icon: 'webcam', color: { start: '#475569', end: '#0ea5e9' } },
  { file: 'thunderbolt-dock.svg', title: 'CalDigit TS4 Thunderbolt 4', sub: '18-Port Premium Universal Docking Station', icon: 'dock', color: { start: '#3b82f6', end: '#8b5cf6' } },

  // Home & Kitchen
  { file: 'air-fryer.svg', title: 'Philips Digital Air Fryer', sub: 'HD9252/90 4.1L Rapid Air 90% Less Oil', icon: 'kitchen', color: { start: '#f97316', end: '#ec4899' } },
  { file: 'kitchen-frother.svg', title: 'Zulay Original Milk Frother', sub: 'High-Torque Handheld Foam Maker & Whisk', icon: 'kitchen', color: { start: '#10b981', end: '#6366f1' } },
  { file: 'instant-pot.svg', title: 'Instant Pot Duo 7-in-1', sub: '6-Quart Multi-Use Programmable Pressure Cooker', icon: 'kitchen', color: { start: '#ef4444', end: '#f97316' } },
  { file: 'aeropress-maker.svg', title: 'AeroPress Coffee Maker', sub: 'Original Rapid Micro-Filter Espresso Brewer', icon: 'coffee', color: { start: '#d97706', end: '#f59e0b' } },

  // Travel Essentials
  { file: 'travel-pouch.svg', title: 'Bellroy Tech Kit Compact', sub: 'Weatherproof Origami Recycled Tech Organizer', icon: 'travel', color: { start: '#ec4899', end: '#8b5cf6' } },
  { file: 'airtag-tracker.svg', title: 'Apple AirTag (4-Pack)', sub: 'Precision Finding Ultra-Wideband Item Trackers', icon: 'tracker', color: { start: '#64748b', end: '#94a3b8' } },
  { file: 'travel-pillow.svg', title: 'Cabeau Evolution S3', sub: 'Seat Strap Ergonomic Memory Foam Travel Pillow', icon: 'travel', color: { start: '#6366f1', end: '#3b82f6' } },
  { file: 'travel-backpack.svg', title: 'Nomatic 30L Travel Pack', sub: 'TSA-Ready Water-Resistant Commuter Bag', icon: 'backpack', color: { start: '#1e293b', end: '#475569' } },

  // Beauty & Grooming
  { file: 'beard-trimmer.svg', title: 'Philips Norelco 7000', sub: '23-Piece All-in-One Stainless Steel Trimmer', icon: 'shaver', color: { start: '#0f172a', end: '#6366f1' } },
  { file: 'toothbrush.svg', title: 'Oral-B Pro 1000', sub: 'CrossAction 3D Cleaning Electric Toothbrush', icon: 'toothbrush', color: { start: '#0284c7', end: '#06b6d4' } },
  { file: 'massage-gun.svg', title: 'Theragun Mini 2.0', sub: 'Ultra-Portable QuietForce Percussive Massager', icon: 'massage', color: { start: '#111827', end: '#dc2626' } },

  // Audio & Gaming
  { file: 'gaming-mouse.svg', title: 'Logitech G PRO X Superlight 2', sub: '60g Lightweight HERO 2 32K DPI Gaming Mouse', icon: 'gaming', color: { start: '#ef4444', end: '#8b5cf6' } },
  { file: 'earbuds-anc.svg', title: 'Bose QC Ultra Earbuds', sub: 'Spatial Audio & World-Class Active Noise Canceling', icon: 'earbuds', color: { start: '#374151', end: '#6366f1' } },
  { file: 'studio-headphones.svg', title: 'Audio-Technica ATH-M50xBT2', sub: 'Wireless Professional Studio Monitor Headphones', icon: 'headphones', color: { start: '#1e1b4b', end: '#4f46e5' } }
];

productsToGen.forEach(p => {
  const content = createProductSvg(p.title, p.sub, p.icon, p.color);
  fs.writeFileSync(path.join(__dirname, '../public/images/products', p.file), content);
});

// 3. Category SVGs
const categoriesToGen = [
  { file: 'tech-gadgets.svg', title: 'Tech & Gadgets', sub: 'Keyboards, chargers, audio & mobile accessories', icon: 'keyboard', color: { start: '#4f46e5', end: '#818cf8' } },
  { file: 'home-kitchen.svg', title: 'Home & Kitchen', sub: 'Smart culinary gear, coffee & space savers', icon: 'kitchen', color: { start: '#f97316', end: '#fb923c' } },
  { file: 'work-study.svg', title: 'Work & Study', sub: 'Ergonomic stands, lamps & focus essentials', icon: 'stand', color: { start: '#6366f1', end: '#a855f7' } },
  { file: 'gaming.svg', title: 'Gaming', sub: 'Precision mice, headsets & esports hardware', icon: 'gaming', color: { start: '#ec4899', end: '#8b5cf6' } },
  { file: 'beauty-grooming.svg', title: 'Beauty & Grooming', sub: 'Personal care tools, trimmers & styling gadgets', icon: 'shaver', color: { start: '#06b6d4', end: '#3b82f6' } },
  { file: 'travel-lifestyle.svg', title: 'Travel & Lifestyle', sub: 'Compact organizers, adapters & commuter bags', icon: 'travel', color: { start: '#10b981', end: '#14b8a6' } }
];

categoriesToGen.forEach(c => {
  const content = createProductSvg(c.title, c.sub, c.icon, c.color);
  fs.writeFileSync(path.join(__dirname, '../public/images/categories', c.file), content);
});

// 4. Guide Cover SVGs
function createGuideCoverSvg(title, categoryName, badge, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <defs>
    <linearGradient id="bgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="60%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor || '#6366f1'}" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgG)" />
  
  <!-- Subtle Glowing Orbs -->
  <circle cx="1000" cy="150" r="300" fill="${accentColor || '#6366f1'}" opacity="0.12" filter="blur(60px)" />
  <circle cx="200" cy="500" r="250" fill="#ec4899" opacity="0.08" filter="blur(70px)" />
  
  <!-- Top meta line -->
  <g transform="translate(100, 90)">
    <rect width="140" height="32" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="70" y="21" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#f1f5f9" letter-spacing="0.1em">
      ${escapeXml(badge || "BUYING GUIDE")}
    </text>

    <text x="170" y="21" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="#a5b4fc" letter-spacing="0.05em">
      · ${escapeXml(categoryName.toUpperCase())}
    </text>
  </g>

  <!-- Editorial Headline -->
  <text x="100" y="220" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-0.03em">
    ${escapeXml(title)}
  </text>

  <!-- Subtitle line -->
  <text x="100" y="290" font-family="system-ui, sans-serif" font-weight="500" font-size="22" fill="#94a3b8">
    Researched and compared for real-world value &amp; durability
  </text>

  <!-- Divider line -->
  <line x1="100" y1="350" x2="1100" y2="350" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

  <!-- Editorial Pillars -->
  <g transform="translate(100, 420)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#c7d2fe">✓ ZERO SPONSORED BIAS</text>
    <text x="320" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#c7d2fe">✓ MULTI-TIER PICKS</text>
    <text x="640" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#c7d2fe">✓ UPDATED MONTHLY</text>
  </g>

  <!-- Nexora watermark -->
  <g transform="translate(100, 520)">
    <text x="0" y="22" font-family="system-ui, sans-serif" font-weight="900" font-size="20" fill="url(#glow)" letter-spacing="0.05em">
      NEXORA PICKS
    </text>
    <text x="170" y="22" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#64748b">
      Smart Finds. Better Choices.
    </text>
  </g>
</svg>`;
}

const guidesToGen = [
  { file: 'guide-keyboards.svg', title: 'Best Wireless Keyboards for Students', cat: 'Tech & Gadgets', badge: 'EDITOR CHOICE', color: '#6366f1' },
  { file: 'guide-mouse.svg', title: 'Best Budget Wireless Mouse for Work', cat: 'Tech & Gadgets', badge: 'TOP BUDGET PICK', color: '#8b5cf6' },
  { file: 'guide-laptop-acc.svg', title: 'Best Laptop Accessories for Students', cat: 'Work & Study', badge: 'ROUNDUP', color: '#4f46e5' },
  { file: 'guide-desk-setup.svg', title: 'Best Desk Accessories for Work From Home', cat: 'Work & Study', badge: 'ESSENTIALS', color: '#6366f1' },
  { file: 'guide-travel.svg', title: 'Best Travel Accessories for Commuters', cat: 'Travel & Lifestyle', badge: 'HANDPICKED', color: '#10b981' },
  { file: 'guide-gaming-beginners.svg', title: 'Best Gaming Accessories for Beginners', cat: 'Gaming', badge: 'STARTER GUIDE', color: '#ec4899' },
  { file: 'guide-kitchen.svg', title: 'Useful Kitchen Gadgets That Actually Save Time', cat: 'Home & Kitchen', badge: 'LIFESTYLE', color: '#f97316' },
  { file: 'guide-grooming.svg', title: 'Men’s Grooming Essentials Daily Routine', cat: 'Beauty & Grooming', badge: 'GROOMING 101', color: '#06b6d4' },
  { file: 'guide-budget-tech.svg', title: 'Best Budget Tech Accessories Under ₹2,000', cat: 'Tech & Gadgets', badge: 'VALUE VERIFIED', color: '#8b5cf6' },
  { file: 'guide-power-bank.svg', title: 'How to Choose a Power Bank: Capacity & Speed', cat: 'Tech & Gadgets', badge: 'DEEP DIVE', color: '#3b82f6' }
];

guidesToGen.forEach(g => {
  const content = createGuideCoverSvg(g.title, g.cat, g.badge, g.color);
  fs.writeFileSync(path.join(__dirname, '../public/images/guides', g.file), content);
});

// 5. Pinterest Pins (1000 x 1500 Ratio)
function createPinterestPinSvg(title, subtitle, tag, numPicks) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" fill="none">
  <defs>
    <linearGradient id="pinBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="40%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
    <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ec4899" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="1000" height="1500" fill="url(#pinBg)" />

  <!-- Background decorative rings -->
  <circle cx="850" cy="250" r="350" fill="#6366f1" opacity="0.15" />
  <circle cx="150" cy="1200" r="400" fill="#ec4899" opacity="0.1" />

  <!-- Top Brand Tag -->
  <g transform="translate(100, 100)">
    <rect width="200" height="42" rx="21" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="100" y="27" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#ffffff" letter-spacing="0.15em">
      NEXORA PICKS
    </text>
  </g>

  <!-- Tag badge -->
  <g transform="translate(100, 200)">
    <rect width="220" height="48" rx="12" fill="url(#pinGrad)" />
    <text x="110" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="16" fill="#ffffff" letter-spacing="0.1em">
      ${escapeXml(tag || "BUYING GUIDE")}
    </text>
  </g>

  <!-- Big Title -->
  <text x="100" y="380" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" fill="#ffffff" letter-spacing="-0.03em">
    ${escapeXml(title)}
  </text>

  <!-- Subtitle -->
  <text x="100" y="560" font-family="system-ui, sans-serif" font-weight="600" font-size="28" fill="#c7d2fe">
    ${escapeXml(subtitle)}
  </text>

  <!-- Card Illustration Container -->
  <g filter="url(#cardShadow)" transform="translate(100, 640)">
    <rect width="800" height="580" rx="36" fill="#ffffff" />
    
    <!-- Header pill -->
    <rect x="50" y="50" width="160" height="38" rx="19" fill="#ede9fe" />
    <text x="130" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#6d28d9">
      ${escapeXml(numPicks || "TOP 5 PICKS")}
    </text>

    <!-- 3 Mini Items listed inside card -->
    <g transform="translate(50, 130)">
      <rect width="700" height="100" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="50" cy="50" r="22" fill="#6366f1" />
      <text x="50" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#ffffff">1</text>
      <text x="95" y="44" font-family="system-ui, sans-serif" font-weight="800" font-size="20" fill="#0f172a">Top Overall Pick</text>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#64748b">Verified balance of build, performance &amp; ergonomics</text>
    </g>

    <g transform="translate(50, 255)">
      <rect width="700" height="100" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="50" cy="50" r="22" fill="#ec4899" />
      <text x="50" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#ffffff">2</text>
      <text x="95" y="44" font-family="system-ui, sans-serif" font-weight="800" font-size="20" fill="#0f172a">Best Budget Contender</text>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#64748b">Exceptional price-to-performance without compromise</text>
    </g>

    <g transform="translate(50, 380)">
      <rect width="700" height="100" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="50" cy="22" r="22" fill="#8b5cf6" />
      <text x="50" y="56" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#ffffff">3</text>
      <text x="95" y="44" font-family="system-ui, sans-serif" font-weight="800" font-size="20" fill="#0f172a">Premium Long-Term Investment</text>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-weight="500" font-size="14" fill="#64748b">Built for daily heavy workflow with class-leading specs</text>
    </g>

    <!-- Footer of card -->
    <text x="400" y="535" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#4f46e5">
      nexorapicks.com/guides
    </text>
  </g>

  <!-- Bottom CTA in Pin -->
  <g transform="translate(100, 1310)">
    <rect width="800" height="90" rx="24" fill="url(#pinGrad)" />
    <text x="400" y="54" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="22" fill="#ffffff" letter-spacing="0.05em">
      TAP TO READ COMPLETE BUYING GUIDE →
    </text>
  </g>
</svg>`;
}

const pinsToGen = [
  { file: 'pin-keyboards.svg', title: 'BEST WIRELESS KEYBOARDS FOR STUDENTS', sub: '5 Smart Picks for Study & Productivity', tag: 'STUDENT TECH', count: '5 SMART PICKS' },
  { file: 'pin-mouse.svg', title: 'BEST BUDGET WIRELESS MICE FOR WORK', sub: 'Quiet Clicks, Ergonomics & Smooth Tracking', tag: 'OFFICE SETUP', count: '4 TESTED PICKS' },
  { file: 'pin-desk.svg', title: 'DREAM DESK SETUP ACCESSORIES 2026', sub: 'Clean Minimalist Upgrades for Focus', tag: 'WORK FROM HOME', count: '7 ESSENTIALS' },
  { file: 'pin-travel.svg', title: 'SMART COMMUTER & TRAVEL GEAR', sub: 'Lightweight Organizers That Last', tag: 'TRAVEL SMARTER', count: '6 PACKING FINDS' },
  { file: 'pin-kitchen.svg', title: 'KITCHEN GADGETS WORTH THE CABINET SPACE', sub: 'No Gimmicks. Only High-Utility Tools', tag: 'SMART KITCHEN', count: '5 WINNERS' }
];

pinsToGen.forEach(p => {
  const content = createPinterestPinSvg(p.title, p.sub, p.tag, p.count);
  fs.writeFileSync(path.join(__dirname, '../public/images/pins', p.file), content);
});

// 6. Authors Avatars
function createAuthorSvg(name, initial, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
    <rect width="200" height="200" rx="100" fill="${color || '#6366f1'}" />
    <text x="100" y="118" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="70" fill="#ffffff">
      ${escapeXml(initial)}
    </text>
  </svg>`;
}

fs.writeFileSync(path.join(__dirname, '../public/images/authors/aarav.svg'), createAuthorSvg('Aarav Mehta', 'AM', '#4f46e5'));
fs.writeFileSync(path.join(__dirname, '../public/images/authors/priya.svg'), createAuthorSvg('Priya Sharma', 'PS', '#ec4899'));
fs.writeFileSync(path.join(__dirname, '../public/images/authors/rohan.svg'), createAuthorSvg('Rohan Roy', 'RR', '#8b5cf6'));

console.log('All SVG assets generated successfully!');
