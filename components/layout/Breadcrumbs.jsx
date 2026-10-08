import Link from "next/link";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export default function Breadcrumbs({ items = [], className = "" }) {
  if (!items || items.length === 0) return null;

  const fullItems = [
    { name: "Home", url: "/" },
    ...items
  ];

  const breadcrumbJson = buildBreadcrumbJsonLd(fullItems);

  return (
    <>
      <JsonLd data={breadcrumbJson} />
      <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-3 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.url + index} className="flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {isLast ? (
                  <span className="font-semibold text-slate-900 dark:text-slate-100 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
