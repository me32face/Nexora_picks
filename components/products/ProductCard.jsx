import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import AffiliateButton from "./AffiliateButton";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product, showQuickAffiliate = true }) {
  if (!product) return null;

  const topBadge = product.badges?.[0];

  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover-lift overflow-hidden transition-all duration-200">
      {/* Top Media Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-4">
        {/* Editorial Badges Overlay */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
          {topBadge && <Badge size="xs">{topBadge}</Badge>}
          {product.discount && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800/60">
              {product.discount}
            </span>
          )}
        </div>

        {/* Demo Tag (per spec #5 & #36) */}
        {product.isDemo && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-850 text-slate-500 uppercase">
              DEMO LAB
            </span>
          </div>
        )}

        <Link
          href={`/products/${product.slug}`}
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-2"
          />
        </Link>
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold uppercase tracking-wider">{product.brand}</span>
          {product.rating && (
            <div className="flex items-center gap-1 font-bold text-amber-500 dark:text-amber-400">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{product.rating}</span>
              {product.reviewCount && (
                <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
              )}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link href={`/products/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Best For Tags */}
        {product.bestFor && product.bestFor.length > 0 && (
          <div className="pt-1 flex flex-wrap gap-1">
            {product.bestFor.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                Best for: {item}
              </span>
            ))}
          </div>
        )}

        {/* Price & Action Row */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
              {formatPrice(product.price, product.currency)}
            </span>
            {product.originalPrice && (
              <span className="block text-[11px] text-slate-400 line-through -mt-0.5">
                {formatPrice(product.originalPrice, product.currency)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={`/products/${product.slug}`}
              className="text-xs font-semibold px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Specs
            </Link>
            {showQuickAffiliate && (
              <AffiliateButton
                product={product}
                size="sm"
                label="Check Price"
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
