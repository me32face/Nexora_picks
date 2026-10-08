export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = ""
}) {
  const base = "inline-flex items-center font-bold tracking-wider uppercase rounded-full select-none";

  const sizeStyles = {
    xs: "text-[10px] px-2 py-0.5",
    sm: "text-xs px-2.5 py-1",
    md: "text-xs px-3 py-1.5"
  };

  // Specific color mappings for editorial badges
  let variantStyle = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";

  const text = typeof children === "string" ? children.toUpperCase() : "";

  if (text.includes("EDITOR") || variant === "editor") {
    variantStyle = "bg-indigo-100 text-indigo-700 border border-indigo-200/60 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60";
  } else if (text.includes("VALUE") || variant === "value") {
    variantStyle = "bg-emerald-100 text-emerald-800 border border-emerald-200/60 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800/60";
  } else if (text.includes("BUDGET") || variant === "budget") {
    variantStyle = "bg-amber-100 text-amber-800 border border-amber-200/60 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800/60";
  } else if (text.includes("PREMIUM") || variant === "premium") {
    variantStyle = "bg-purple-100 text-purple-800 border border-purple-200/60 dark:bg-purple-950/80 dark:text-purple-300 dark:border-purple-800/60";
  } else if (text.includes("GAMING") || variant === "gaming") {
    variantStyle = "bg-pink-100 text-pink-700 border border-pink-200/60 dark:bg-pink-950/80 dark:text-pink-300 dark:border-pink-800/60";
  } else if (text.includes("STUDENT") || variant === "student") {
    variantStyle = "bg-sky-100 text-sky-800 border border-sky-200/60 dark:bg-sky-950/80 dark:text-sky-300 dark:border-sky-800/60";
  } else if (text.includes("DEMO") || variant === "demo") {
    variantStyle = "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
  }

  return (
    <span className={`${base} ${sizeStyles[size] || sizeStyles.sm} ${variantStyle} ${className}`}>
      {children}
    </span>
  );
}
