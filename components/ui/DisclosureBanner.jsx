import Link from "next/link";
import { getAffiliateDisclosureText } from "@/lib/affiliate";

export default function DisclosureBanner({ className = "" }) {
  const disclosure = getAffiliateDisclosureText();

  return (
    <aside
      aria-label="Editorial & Affiliate Disclosure"
      className={`border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 py-2.5 px-4 text-center text-xs text-slate-600 dark:text-slate-300 ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3">
        <span>{disclosure}</span>
        <Link
          href="/affiliate-disclosure"
          className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-700 dark:hover:text-indigo-300 shrink-0"
        >
          Read Policy
        </Link>
      </div>
    </aside>
  );
}
