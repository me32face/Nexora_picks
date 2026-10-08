import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { getAuthorById } from "@/data/authors";

export default function GuideHeader({ guide }) {
  if (!guide) return null;

  const author = getAuthorById(guide.authorId);

  return (
    <header className="space-y-6 max-w-4xl">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="editor" size="sm">
          {guide.category}
        </Badge>
        <span className="text-xs text-slate-400">•</span>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {guide.readTime}
        </span>
        <span className="text-xs text-slate-400">•</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Updated {formatDate(guide.updatedDate)}
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15]">
        {guide.title}
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
        {guide.subtitle}
      </p>

      {/* Author Bar */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-950 shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
            {author.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {author.role} · Independent Editorial Review
          </p>
        </div>
      </div>
    </header>
  );
}
