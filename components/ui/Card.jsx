export default function Card({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 shadow-sm transition-all duration-200 ${
        hover ? "hover-lift hover:border-slate-300 dark:hover:border-slate-700" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
