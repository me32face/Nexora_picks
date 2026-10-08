import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = 2026;

  const exploreLinks = [
    { label: "Categories", href: "/categories" },
    { label: "Products", href: "/products" },
    { label: "Buying Guides", href: "/guides" },
    { label: "Comparisons", href: "/comparisons" },
    { label: "Reviews", href: "/reviews" }
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact & Feedback", href: "/contact" },
    { label: "Editorial Policy", href: "/editorial-policy" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" }
  ];

  const socialLinks = [
    { label: "Pinterest", href: "https://pinterest.com", icon: "📌" },
    { label: "Instagram", href: "https://instagram.com", icon: "📷" },
    { label: "YouTube", href: "https://youtube.com", icon: "▶" }
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm transition-colors mt-8 sm:mt-12">
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
                NP
              </div>
              <span className="font-black tracking-tight text-xl text-slate-900 dark:text-slate-100">
                NEXORA<span className="text-indigo-600">PICKS</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Smart Finds. Better Choices.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Nexora Picks is an independent product discovery publication. We rigorously compare specifications, analyze ergonomics, and curate high-utility essentials for modern living.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {exploreLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure disclaimer */}
        <div className="py-6 border-t border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Affiliate Disclosure:</strong> Nexora Picks is a participant in affiliate advertising programs (including the Amazon Associates Program) designed to provide a means for editorial sites to earn fees by linking to Amazon and affiliated merchant websites. When you make a purchase through our verified product links, we may earn an affiliate commission at no additional cost to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <span>© {currentYear} Nexora Picks. All rights reserved.</span>
            <span>Designed for clean, clutter-free product research.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
