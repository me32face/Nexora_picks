"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { showToast } from "@/components/ui/Toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    setSubmitted(true);
    showToast("Subscribed to Nexora Picks weekly dispatch! 🎉");
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-indigo-200/90 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/80 via-white to-pink-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              The Nexora Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Get Smart Picks Delivered Weekly
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              No marketing noise or daily spam. Just one curated digest featuring genuine price drops, vetted gear roundups, and practical buying tips.
            </p>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-semibold animate-slide-down">
                ✓ You&apos;re subscribed! We will send you our next Sunday digest.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-grow px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-indigo-500/20 transition-all cursor-pointer shrink-0"
                >
                  Join Dispatch
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Zero spam guarantee. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
