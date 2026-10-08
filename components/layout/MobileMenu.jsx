"use client";

import Link from "next/link";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu({ isOpen, onClose, onOpenSearch }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { label: "Categories", href: "/categories" },
    { label: "Products", href: "/products" },
    { label: "Buying Guides", href: "/guides" },
    { label: "Comparisons", href: "/comparisons" },
    { label: "Reviews", href: "/reviews" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "About Nexora", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex lg:hidden bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-[85%] max-w-sm h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-down"
        onClick={e => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-sm">
                NP
              </div>
              <span className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-slate-100">
                NEXORA<span className="text-indigo-600">PICKS</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ✕
            </button>
          </div>

          {/* Quick Search Action */}
          <div className="mt-4">
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-sm hover:border-indigo-400 transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search Nexora...</span>
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block px-3 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer info & theme toggle */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-500">Theme</span>
            <ThemeToggle />
          </div>
          <p className="text-[11px] text-slate-400">
            Smart Finds. Better Choices.
            <br />
            Independent editorial product research.
          </p>
        </div>
      </div>
    </div>
  );
}
