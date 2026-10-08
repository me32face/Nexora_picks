import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl font-black mx-auto">
            404
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              The page, product review, or buying guide you are looking for may have been moved, updated, or does not exist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              Return to Homepage
            </Link>
            <Link
              href="/search"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all"
            >
              Search Library
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
