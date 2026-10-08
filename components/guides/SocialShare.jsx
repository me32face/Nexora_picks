"use client";

import { showToast } from "@/components/ui/Toast";

export default function SocialShare({ title, url = "", pinImage = "" }) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : url;

  function copyLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      showToast("Link copied to clipboard! 📋");
    }
  }

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title || "Nexora Picks Buying Guide");

  const channels = [
    {
      name: "WhatsApp",
      icon: "💬",
      color: "hover:bg-emerald-500 hover:text-white",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
    },
    {
      name: "X (Twitter)",
      icon: "𝕏",
      color: "hover:bg-black hover:text-white",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=nexorapicks`
    },
    {
      name: "Pinterest",
      icon: "📌",
      color: "hover:bg-red-600 hover:text-white",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(
        pinImage ? `https://nexorapicks.com${pinImage}` : ""
      )}&description=${encodedTitle}`
    },
    {
      name: "Facebook",
      icon: "f",
      color: "hover:bg-blue-600 hover:text-white",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    }
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
        Share:
      </span>
      {channels.map(c => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ${c.color} transition-all`}
          aria-label={`Share on ${c.name}`}
        >
          <span>{c.icon}</span>
          <span className="hidden sm:inline">{c.name}</span>
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all"
        aria-label="Copy article link"
      >
        <span>🔗</span>
        <span>Copy Link</span>
      </button>
    </div>
  );
}
