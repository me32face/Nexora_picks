import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password, product } = await request.json();

    const expectedPassword = process.env.ADMIN_PASSWORD || "nexora2026";
    if (!password || password !== expectedPassword) {
      return NextResponse.json({ error: "Unauthorized. Incorrect password." }, { status: 401 });
    }

    if (!product || !product.name || !product.price) {
      return NextResponse.json({ error: "Product name and price are required." }, { status: 400 });
    }

    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = process.env.GITHUB_REPO_OWNER || "me32face";
    const repoName = process.env.GITHUB_REPO_NAME || "Nexora_picks";

    if (!githubToken) {
      return NextResponse.json(
        { error: "GITHUB_TOKEN is missing in environment variables." },
        { status: 500 }
      );
    }

    // 1. Generate clean slug and ID if not provided
    const slug = product.slug || product.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const id = product.id || `prod-${Date.now().toString(36)}`;

    // 2. Format product object ensuring compliance and full structure
    const formattedProduct = {
      id,
      name: product.name.trim(),
      slug,
      brand: product.brand ? product.brand.trim() : "Premium Selection",
      category: product.category || "travel-lifestyle",
      subcategory: product.subcategory || "wallets-accessories",
      description: product.description ? product.description.trim() : `${product.name} verified and reviewed by Nexora Picks editorial team.`,
      shortDescription: product.shortDescription ? product.shortDescription.trim() : `${product.name} curated for durability and value.`,
      image: product.image || "https://res.cloudinary.com/dtowl6hgl/image/upload/v1791459795/nexora/products/urban-forest-oliver-black-rfid-leather-wallet.jpg",
      gallery: product.gallery && product.gallery.length > 0 ? product.gallery : [product.image],
      price: Number(product.price),
      originalPrice: product.originalPrice ? Number(product.originalPrice) : null,
      currency: "INR",
      discount: product.discount || (product.originalPrice ? `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF` : null),
      rating: product.rating ? Number(product.rating) : 4.5,
      reviewCount: product.reviewCount ? Number(product.reviewCount) : 120,
      specifications: product.specifications && product.specifications.length > 0 ? product.specifications : [
        { label: "Category", value: product.category || "General" },
        { label: "Authenticity", value: "100% Genuine Retail Pack" },
        { label: "Warranty", value: "Manufacturer Standard Warranty" }
      ],
      pros: product.pros && product.pros.length > 0 ? product.pros : [
        "Curated top performer in its price segment",
        "Excellent build quality and verified user feedback"
      ],
      cons: product.cons && product.cons.length > 0 ? product.cons : [
        "High retail demand may lead to intermittent inventory fluctuation"
      ],
      bestFor: product.bestFor && product.bestFor.length > 0 ? product.bestFor : [
        "Everyday Consumers",
        "Smart Value Seekers"
      ],
      badges: product.badges && product.badges.length > 0 ? product.badges : ["CURATED PICK"],
      amazonUrl: product.amazonUrl || `https://www.amazon.in/s?k=${encodeURIComponent(product.name)}`,
      affiliateUrl: product.affiliateUrl || null,
      isFeatured: Boolean(product.isFeatured),
      isEditorsPick: Boolean(product.isEditorsPick),
      isDemo: false,
      lastUpdated: new Date().toISOString().split("T")[0]
    };

    // 3. Fetch current products.json from GitHub API
    const getFileUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/data/products.json`;
    const getRes = await fetch(getFileUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Nexora-Picks-CMS"
      },
      cache: "no-store"
    });

    let existingProducts = [];
    let fileSha = null;

    if (getRes.ok) {
      const fileData = await getRes.json();
      fileSha = fileData.sha;
      const contentStr = Buffer.from(fileData.content, "base64").toString("utf8");
      existingProducts = JSON.parse(contentStr);
    } else if (getRes.status === 404) {
      // If products.json is not yet in remote, read local or empty
      try {
        const fs = await import("fs/promises");
        const path = await import("path");
        const localData = await fs.readFile(path.join(process.cwd(), "data", "products.json"), "utf8");
        existingProducts = JSON.parse(localData);
      } catch (e) {
        existingProducts = [];
      }
    } else {
      const errBody = await getRes.text();
      return NextResponse.json(
        { error: `GitHub fetch failed (${getRes.status}): ${errBody}` },
        { status: 500 }
      );
    }

    // 4. Prepend new product to the list (safely preserving ALL existing products!)
    // Check if slug already exists; replace if same slug, otherwise prepend
    const existingIndex = existingProducts.findIndex(p => p.slug === formattedProduct.slug);
    if (existingIndex >= 0) {
      existingProducts[existingIndex] = formattedProduct;
    } else {
      existingProducts.unshift(formattedProduct);
    }

    const updatedContent = JSON.stringify(existingProducts, null, 2);
    const base64Content = Buffer.from(updatedContent).toString("base64");

    // 5. Commit updated products.json back to GitHub
    const putRes = await fetch(getFileUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Nexora-Picks-CMS",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `Add ${formattedProduct.name} via Content Studio`,
        content: base64Content,
        sha: fileSha || undefined
      })
    });

    if (!putRes.ok) {
      const errText = await putRes.text();
      return NextResponse.json(
        { error: `GitHub commit failed (${putRes.status}): ${errText}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `"${formattedProduct.name}" published successfully! Vercel is now deploying it live.`,
      slug: formattedProduct.slug,
      url: `/products/${formattedProduct.slug}`
    });
  } catch (error) {
    console.error("Publish error:", error);
    return NextResponse.json(
      { error: "Server error publishing product: " + (error.message || "") },
      { status: 500 }
    );
  }
}
