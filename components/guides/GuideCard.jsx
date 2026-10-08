import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function GuideCard({ guide }) {
  if (!guide) return null;

  return (
    <article className="group flex flex-col h-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm hover-lift transition-all duration-200">
      {/* Cover Media */}
      <Link href={`/guides/${guide.slug}`} className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden block">
        <Image
          src={guide.heroImage || "/images/guides/guide-keyboards.svg"}
          alt={guide.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="editor" size="xs">
            {guide.category}
          </Badge>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>{guide.readTime}</span>
          <span>•</span>
          <span>Updated {formatDate(guide.updatedDate)}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
          <Link href={`/guides/${guide.slug}`}>
            {guide.title}
          </Link>
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {guide.subtitle}
        </p>

        {/* Quick shortlist teaser */}
        {guide.shortlist && guide.shortlist.length > 0 && (
          <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              {guide.shortlist.length} Top Picks Inside
            </span>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read Guide →
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
