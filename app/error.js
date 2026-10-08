"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("Route error boundary captured:", error);
  }, [error]);

  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center text-3xl mx-auto">
            ⚠️
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              Something went wrong
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              We encountered an unexpected issue while rendering this page. Our technical team has been alerted.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
