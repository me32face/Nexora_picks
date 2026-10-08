import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function FinalCta() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-indigo-500/20 text-white p-8 sm:p-14 lg:p-20 shadow-2xl text-center">
          {/* Ambient decorative glow orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span>Start Your Research</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              Stop Guessing. Discover Gear{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-200 to-pink-300 bg-clip-text text-transparent">
                That Truly Delivers.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Browse our research library across tech, home, study, and travel. Make informed decisions backed by clear specification analysis and ergonomic testing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Button
                id="final-cta-products-btn"
                href="/products"
                size="lg"
                variant="primary"
                arrow
              >
                Explore All Products
              </Button>
              <Button
                id="final-cta-categories-btn"
                href="/categories"
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              >
                Browse Categories
              </Button>
            </div>

            {/* Trust points micro-row */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-indigo-400">✓</span> 100% Free Access
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-indigo-400">✓</span> Clear Spec Teardowns
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-indigo-400">✓</span> Verified Buying Guides
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
