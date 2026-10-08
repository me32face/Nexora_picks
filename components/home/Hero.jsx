import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/70 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>INDEPENDENT PRODUCT RESEARCH & BUYING GUIDES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-[1.12]">
              Discover Better Products.{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                Buy With Confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nexora Picks helps you discover useful products, compare your options, and make smarter buying decisions without endless searching.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                id="hero-explore-btn"
                href="/products"
                size="lg"
                variant="primary"
                arrow
              >
                Explore Products
              </Button>
              <Button
                id="hero-guides-btn"
                href="/guides"
                size="lg"
                variant="outline"
              >
                Browse Buying Guides
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200/70 dark:border-slate-800/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Zero Sponsored Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Verified Spec Teardowns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Ergonomics & Value Tested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Product Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-square">
              {/* Central Hero Showcase Card */}
              <div className="absolute inset-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    Editor&apos;s Pick
                  </span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <span>★</span> 4.8 Rating
                  </span>
                </div>

                <div className="relative aspect-[4/3] w-full my-auto flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dtowl6hgl/image/upload/v1791451583/nexora/products/keychron-k2-v2-wireless-mechanical-keyboard.jpg"
                    alt="Keychron K2 V2 Wireless Mechanical Keyboard"
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-slate-400">Tech &amp; Productivity</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Keychron K2 V2 Wireless 75%
                  </p>
                  <p className="text-xs text-slate-500">
                    Tactile Gateron switches, Mac/Win support, 4000mAh.
                  </p>
                </div>
              </div>

              {/* Floating Top Card (Slow subtle animation) */}
              <div className="absolute -top-4 -right-2 sm:-right-6 w-52 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-850/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/60 flex items-center justify-center text-pink-600 font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Charging Tech
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                      Anker 735 65W GaN
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                  <span>✓ 50% Smaller than Silicon</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 w-56 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-850/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    📐
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Ergonomics
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                      Logitech MX Master 3S
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <span>✓ 8000 DPI Glass Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
