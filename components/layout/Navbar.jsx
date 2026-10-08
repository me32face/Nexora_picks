import Link from "next/link";
import NavbarActions from "./NavbarActions";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const navLinks = [
    { label: "Categories", href: "/categories" },
    { label: "Products", href: "/products" },
    { label: "Buying Guides", href: "/guides" },
    { label: "Comparisons", href: "/comparisons" },
    { label: "Reviews", href: "/reviews" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Nexora Picks Home">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                NEXORA<span className="text-indigo-600 dark:text-indigo-400">PICKS</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-0.5 hidden sm:inline">
                Smart Finds · Better Choices
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <NavbarActions />
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center justify-center text-xs font-bold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-500/20 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
