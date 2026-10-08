"use client";

import Image from "next/image";
import { showToast } from "@/components/ui/Toast";

export default function PinterestCard({
  title,
  subtitle,
  image = "/images/pins/pin-keyboards.svg",
  slug = ""
}) {
  const pageUrl = typeof window !== "undefined"
    ? `${window.location.origin}/guides/${slug}`
    : `https://nexorapicks.com/guides/${slug}`;

  const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&media=${encodeURIComponent(
    `https://nexorapicks.com${image}`
  )}&description=${encodeURIComponent(`${title} — ${subtitle} | Nexora Picks`)}`;

  function handleSave() {
    window.open(pinUrl, "_blank", "noopener,noreferrer,width=750,height=600");
    showToast("Opened Pinterest share window!");
  }

  return (
    <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
            P
          </span>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Save to Pinterest (2:3 Ratio)
          </h4>
        </div>
        <span className="text-[10px] font-mono text-slate-400">1000 × 1500</span>
      </div>

      {/* 2:3 Pinterest Ratio Preview Container */}
      <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md group">
        <Image
          src={image}
          alt={`Pinterest Pin Graphic for ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover transition-transform duration-300 group-hover:scale-102"
        />
        {/* Overlay hover pin button */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl flex items-center gap-2 hover:scale-105 transition-all"
          >
            <span>📌</span>
            <span>Pin It to Board</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-slate-500">
          Save this guide to your Pinterest board for quick reference.
        </p>
        <button
          type="button"
          onClick={handleSave}
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 shrink-0 ml-2"
        >
          <span>Save Pin</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
