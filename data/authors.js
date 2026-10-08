export const authors = [
  {
    id: "aarav-mehta",
    name: "Aarav Mehta",
    role: "Lead Tech & Hardware Editor",
    bio: "Obsessive hardware researcher with 8+ years analyzing ergonomics, productivity gear, and wireless peripherals. Former tech journalist focused on consumer electronics longevity.",
    avatar: "/images/authors/aarav.svg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Lifestyle & Workspace Analyst",
    bio: "Architectural designer turned workspace consultant. Specializes in ergonomic workspace layouts, kitchen efficiency tools, and travel gear that balances aesthetics with durability.",
    avatar: "/images/authors/priya.svg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "rohan-roy",
    name: "Rohan Roy",
    role: "Gaming & Audio Specialist",
    bio: "Competitive esports analyst and acoustic enthusiast. Reviews gaming mice, wireless headsets, and mechanical keyboard switches with strict focus on latency, switch life, and value.",
    avatar: "/images/authors/rohan.svg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export function getAuthorById(id) {
  return authors.find(a => a.id === id) || authors[0];
}
