import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Toast from "@/components/ui/Toast";
import DisclosureBanner from "@/components/ui/DisclosureBanner";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata, buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Nexora Picks — Smart Finds. Better Choices.",
  description: "Independent consumer research publication curating verified product recommendations, technical teardowns, and side-by-side gear comparisons."
});

export default function RootLayout({ children }) {
  const orgSchema = buildOrganizationJsonLd();
  const siteSchema = buildWebSiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash script for dark mode preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("nexora-theme");if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`
          }}
        />
        <JsonLd data={orgSchema} />
        <JsonLd data={siteSchema} />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <DisclosureBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
