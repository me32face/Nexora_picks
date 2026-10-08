"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { generateEditorialData } from "@/lib/editorialGenerator";

const CATEGORIES = [
  { id: "tech-gadgets", name: "Tech & Gadgets" },
  { id: "home-kitchen", name: "Home & Kitchen" },
  { id: "work-study", name: "Work & Study" },
  { id: "gaming", name: "Gaming" },
  { id: "beauty-grooming", name: "Beauty & Grooming" },
  { id: "travel-lifestyle", name: "Travel & Lifestyle" }
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("travel-lifestyle");
  const [subcategory, setSubcategory] = useState("wallets-accessories");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [rating, setRating] = useState("4.5");
  const [reviewCount, setReviewCount] = useState("1000");
  const [amazonUrl, setAmazonUrl] = useState("");
  const [affiliateUrl, setAffiliateUrl] = useState("");
  const [image, setImage] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isEditorsPick, setIsEditorsPick] = useState(true);
  const [badgeText, setBadgeText] = useState("EDITOR'S PICK");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  
  // Lists
  const [pros, setPros] = useState([""]);
  const [cons, setCons] = useState([""]);
  const [specs, setSpecs] = useState([{ label: "Material", value: "" }]);

  // Upload & Publish Status
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishMessage, setPublishMessage] = useState(null);
  const [publishError, setPublishError] = useState(null);

  // Check stored password in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("nexora_admin_pwd");
    if (saved) {
      setPassword(saved);
      verifyPassword(saved);
    }
  }, []);

  async function verifyPassword(pwdToTest) {
    setIsVerifying(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwdToTest || password })
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("nexora_admin_pwd", pwdToTest || password);
      } else {
        setAuthError(data.error || "Incorrect password");
        setIsAuthenticated(false);
      }
    } catch (e) {
      setAuthError("Failed to verify password. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  }

  // Handle Cloudinary Image File Upload
  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setPublishError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", password);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setImage(data.url);
      } else {
        alert("Upload error: " + (data.error || "Failed to upload image to Cloudinary"));
      }
    } catch (err) {
      alert("Network error uploading image to Cloudinary");
    } finally {
      setIsUploading(false);
    }
  }

  // Add / Remove List items
  const addPro = () => setPros([...pros, ""]);
  const updatePro = (idx, val) => {
    const next = [...pros];
    next[idx] = val;
    setPros(next);
  };
  const removePro = (idx) => setPros(pros.filter((_, i) => i !== idx));

  const addCon = () => setCons([...cons, ""]);
  const updateCon = (idx, val) => {
    const next = [...cons];
    next[idx] = val;
    setCons(next);
  };
  const removeCon = (idx) => setCons(cons.filter((_, i) => i !== idx));

  const addSpec = () => setSpecs([...specs, { label: "", value: "" }]);
  const updateSpec = (idx, field, val) => {
    const next = [...specs];
    next[idx][field] = val;
    setSpecs(next);
  };
  const removeSpec = (idx) => setSpecs(specs.filter((_, i) => i !== idx));

  // Publish Product to GitHub
  async function handlePublish(e) {
    e.preventDefault();
    if (!name || !price) {
      alert("Product Name and Price are required!");
      return;
    }

    setIsPublishing(true);
    setPublishMessage(null);
    setPublishError(null);

    const productPayload = {
      name,
      brand: brand || "Curated Brand",
      category,
      subcategory,
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : null,
      rating: Number(rating) || 4.5,
      reviewCount: Number(reviewCount) || 1200,
      image: image || "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791459795/nexora/products/urban-forest-oliver-black-rfid-leather-wallet.jpg",
      amazonUrl: amazonUrl || (affiliateUrl.startsWith("http") ? affiliateUrl : `https://www.amazon.in/s?k=${encodeURIComponent(name)}`),
      affiliateUrl: affiliateUrl || null,
      isFeatured,
      isEditorsPick,
      badges: badgeText ? [badgeText] : ["EDITOR'S PICK"],
      shortDescription: shortDescription || `${name} reviewed and recommended by Nexora Picks editorial desk.`,
      description: description || `Extensively evaluated for build quality, materials, and long-term daily utility. ${name} delivers proven performance and reliability.`,
      pros: pros.filter(p => p.trim().length > 0),
      cons: cons.filter(c => c.trim().length > 0),
      specifications: specs.filter(s => s.label.trim().length > 0 && s.value.trim().length > 0)
    };

    try {
      const res = await fetch("/api/admin/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          product: productPayload
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setPublishMessage({
          text: data.message,
          url: data.url
        });
        // Clear form for next entry
        setName("");
        setBrand("");
        setPrice("");
        setOriginalPrice("");
        setAmazonUrl("");
        setAffiliateUrl("");
        setImage("");
        setShortDescription("");
        setDescription("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setPublishError(data.error || "Failed to publish product");
      }
    } catch (err) {
      setPublishError("Network error publishing product. Please check console.");
    } finally {
      setIsPublishing(false);
    }
  }

  // Auto-generate descriptions and pros/cons if user has no time
  function handleAutoFill() {
    if (!name) {
      alert("Please enter the Product Title first so we can auto-fill details for it!");
      return;
    }

    const generated = generateEditorialData(name, category);
    setShortDescription(generated.shortDescription);
    setDescription(generated.description);
    setPros(generated.pros);
    setCons(generated.cons);
    setSpecs(generated.specifications);
    if (generated.badges && generated.badges[0]) {
      setBadgeText(generated.badges[0]);
    }
  }

  // Calculate discount
  const discountPercent = price && originalPrice && Number(originalPrice) > Number(price)
    ? Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100)
    : null;

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center mx-auto text-indigo-600 dark:text-indigo-400 text-2xl font-black shadow-inner">
            ⚡
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Nexora Studio
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Private Content Studio • Add products without touching code
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); verifyPassword(password); }} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Admin Access Key
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
              />
            </div>

            {authError && (
              <p className="text-xs font-semibold text-rose-500 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900">
                {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Unlock Studio"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // AUTHENTICATED STUDIO FORM
  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Studio Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
                Studio Connected • Auto-Vercel Deploy
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
              Add New Product Review
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Upload images directly to Cloudinary and commit products without writing a single line of code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              View Catalog
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("nexora_admin_pwd");
                setIsAuthenticated(false);
              }}
              className="text-xs font-bold px-3 py-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {publishMessage && (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  {publishMessage.text}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                  Vercel is rebuilding your site now. It will appear live in ~45 seconds.
                </p>
              </div>
            </div>
            {publishMessage.url && (
              <a
                href={publishMessage.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-extrabold px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shrink-0"
              >
                Open Product Page →
              </a>
            )}
          </div>
        )}

        {/* Error Alert */}
        {publishError && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p className="text-sm font-bold text-rose-800 dark:text-rose-200">
              {publishError}
            </p>
          </div>
        )}

        <form onSubmit={handlePublish} className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Main Form Fields (Left Column) */}
          <div className="xl:col-span-7 space-y-6">
            {/* Box 1: Core Details */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  1. Product Information
                </h2>
                <button
                  type="button"
                  onClick={handleAutoFill}
                  className="px-3 py-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800 transition-colors"
                >
                  <span>✨</span>
                  <span>Auto-Fill Details</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Product Full Title *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. URBAN FOREST Oliver Black Leather Wallet"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Urban Forest, Sony, Apple"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Primary Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Box 2: Pricing & Affiliate */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                2. Pricing & Amazon Links
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Deal Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 469"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Original MRP (₹)
                  </label>
                  <input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="e.g. 2000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Discount
                  </label>
                  <div className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-sm font-extrabold flex items-center">
                    {discountPercent ? `${discountPercent}% OFF` : "No discount"}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  SiteStripe Affiliate Short Link (link.amazon / amzn.to)
                </label>
                <input
                  type="url"
                  value={affiliateUrl}
                  onChange={(e) => setAffiliateUrl(e.target.value)}
                  placeholder="e.g. https://link.amazon/B0hKlZrVC or https://amzn.to/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Generated via SiteStripe on Amazon. Opens directly in Amazon app on phones.
                </p>
              </div>
            </div>

            {/* Box 3: Cloudinary Image Upload */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  3. Cloudinary Image
                </h2>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  ☁️ Cloudinary Auto-Upload
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="w-full sm:w-auto cursor-pointer px-4 py-2.5 rounded-xl border-2 border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 hover:bg-indigo-50 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={isUploading}
                  />
                  <span>{isUploading ? "Uploading to Cloudinary..." : "📁 Upload Image File"}</span>
                </label>

                <span className="text-xs text-slate-400 font-medium">or paste image URL:</span>

                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full sm:flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {image && (
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <img
                    src={image}
                    alt="Uploaded preview"
                    className="w-16 h-16 rounded-lg object-contain bg-white dark:bg-slate-900 border"
                  />
                  <div className="text-xs truncate text-slate-500 font-mono flex-1">
                    {image}
                  </div>
                </div>
              )}
            </div>

            {/* Box 4: Editorial Content */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    4. Review & Editorial
                  </h2>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    100% Optional — Auto-generated if left blank!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAutoFill}
                  className="px-3 py-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800 transition-colors w-fit"
                >
                  <span>✨</span>
                  <span>Auto-Fill Everything</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Short One-Line Summary (Optional)
                </label>
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="e.g. Handcrafted genuine leather bifold wallet with RFID protection."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Editorial Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detailed breakdown of build quality, material feel, and everyday performance..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      ✓ Pros
                    </label>
                    <button
                      type="button"
                      onClick={addPro}
                      className="text-[11px] font-bold text-emerald-600 hover:underline"
                    >
                      + Add Pro
                    </button>
                  </div>
                  {pros.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 mb-2">
                      <input
                        type="text"
                        value={p}
                        onChange={(e) => updatePro(idx, e.target.value)}
                        placeholder={`Pro #${idx + 1}`}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-200"
                      />
                      {pros.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePro(idx)}
                          className="text-slate-400 hover:text-rose-500 px-1"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-rose-600 dark:text-rose-400">
                      ✗ Cons
                    </label>
                    <button
                      type="button"
                      onClick={addCon}
                      className="text-[11px] font-bold text-rose-600 hover:underline"
                    >
                      + Add Con
                    </button>
                  </div>
                  {cons.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 mb-2">
                      <input
                        type="text"
                        value={c}
                        onChange={(e) => updateCon(idx, e.target.value)}
                        placeholder={`Con #${idx + 1}`}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-200"
                      />
                      {cons.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCon(idx)}
                          className="text-slate-400 hover:text-rose-500 px-1"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isPublishing}
              className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isPublishing ? (
                <>
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Committing to GitHub & Deploying Vercel...</span>
                </>
              ) : (
                <>
                  <span>🚀 Publish to Website</span>
                </>
              )}
            </button>
          </div>

          {/* Live Preview Panel (Right Column) */}
          <div className="xl:col-span-5 sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Live Card Preview
              </span>
              <span className="text-[11px] text-slate-400">
                Updates in real time
              </span>
            </div>

            {/* Mimic ProductCard component */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950 p-6 flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={name || "Preview"}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="text-slate-300 dark:text-slate-700 text-4xl">
                    📦
                  </div>
                )}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-600 text-white shadow-sm">
                    {badgeText || "EDITOR'S PICK"}
                  </span>
                  {discountPercent && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-pink-600 text-white shadow-sm">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {brand || "BRAND"}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 mt-0.5 line-clamp-2">
                    {name || "Your Product Title Here"}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mt-1">
                    <span>★ {rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {shortDescription || description || "Your short editorial product summary will appear here."}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-slate-900 dark:text-slate-100">
                      ₹{price || "0"}
                    </span>
                    {originalPrice && (
                      <span className="block text-[11px] text-slate-400 line-through">
                        ₹{originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-sm">
                    Check Price →
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-1.5">
              <p className="font-bold text-slate-700 dark:text-slate-300">
                ⚡ What happens when you click Publish?
              </p>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li>Image is safely saved on your Cloudinary account.</li>
                <li>Product is appended to GitHub repo with zero code changes.</li>
                <li>Vercel automatically triggers a build and publishes it worldwide in ~45s.</li>
                <li>All 25 existing products remain 100% intact.</li>
              </ul>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
