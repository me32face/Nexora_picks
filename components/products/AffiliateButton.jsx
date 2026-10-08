import { getAffiliateUrl } from "@/lib/affiliate";

export default function AffiliateButton({
  product,
  label = "Check Latest Price",
  size = "md",
  className = "",
  variant = "primary"
}) {
  const url = getAffiliateUrl(product);

  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 cursor-pointer select-none group focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-500/25 hover:shadow-md focus:ring-indigo-500",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 shadow-sm focus:ring-slate-900",
    outline: "border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-slate-400",
    accent: "bg-pink-600 hover:bg-pink-700 text-white shadow-sm hover:shadow-pink-500/25 hover:shadow-md focus:ring-pink-500"
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`}
      aria-label={`${label} for ${product?.name || "product"} on retail partner`}
    >
      <span>{label}</span>
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
