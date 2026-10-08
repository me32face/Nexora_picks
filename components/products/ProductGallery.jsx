"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [], alt = "Product Image" }) {
  const [selected, setSelected] = useState(0);

  const displayImages = images.length > 0 ? images : ["/images/products/keyboard-wireless.svg"];

  return (
    <div className="space-y-4">
      {/* Primary Display */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center p-6 shadow-sm">
        <Image
          src={displayImages[selected]}
          alt={`${alt} - View ${selected + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4 transition-all duration-300"
        />
      </div>

      {/* Thumbnails if multiple */}
      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelected(idx)}
              className={`relative w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 dark:bg-slate-900 shrink-0 transition-all ${
                selected === idx
                  ? "border-indigo-600 shadow-md ring-2 ring-indigo-500/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
