import Container from "@/components/ui/Container";
import PinterestCard from "@/components/guides/PinterestCard";

export default function PinterestDiscovery() {
  const pins = [
    {
      title: "Best Wireless Keyboards for Students",
      subtitle: "5 Smart Picks for Study & Productivity",
      image: "/images/pins/pin-keyboards.svg",
      slug: "best-wireless-keyboards-for-students"
    },
    {
      title: "Best Budget Wireless Mice for Work",
      subtitle: "Quiet Clicks, Ergonomics & Smooth Tracking",
      image: "/images/pins/pin-mouse.svg",
      slug: "best-budget-wireless-mouse-for-work"
    },
    {
      title: "Dream Desk Setup Accessories 2026",
      subtitle: "Clean Minimalist Upgrades for Focus",
      image: "/images/pins/pin-desk.svg",
      slug: "best-desk-accessories-for-work-from-home"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 dark:from-slate-950/60 dark:via-slate-900/40 dark:to-slate-950/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>📌</span> Visual Discovery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Pinterest Pin Collection
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Save high-resolution 1000×1500 infographics directly to your Pinterest boards for fast reference while shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pins.map((pin, idx) => (
            <PinterestCard
              key={idx}
              title={pin.title}
              subtitle={pin.subtitle}
              image={pin.image}
              slug={pin.slug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
