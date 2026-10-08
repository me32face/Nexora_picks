"use client";

import { useState, useEffect } from "react";

let toastHandler = null;

export function showToast(message, type = "info") {
  if (toastHandler) {
    toastHandler(message, type);
  }
}

export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    toastHandler = (message, type) => {
      setToast({ message, type });
      setTimeout(() => {
        setToast(null);
      }, 3200);
    };
    return () => {
      toastHandler = null;
    };
  }, []);

  if (!toast) return null;

  return (
    <aside
      aria-label="Notification"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/95 dark:bg-white text-white dark:text-slate-900 shadow-xl border border-slate-800 dark:border-slate-200 animate-slide-down"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
      <span className="text-sm font-semibold">{toast.message}</span>
      <button
        onClick={() => setToast(null)}
        aria-label="Dismiss notification"
        className="ml-2 text-slate-400 hover:text-white dark:hover:text-slate-900"
      >
        ✕
      </button>
    </aside>
  );
}
