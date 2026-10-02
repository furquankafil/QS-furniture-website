// ============================================================
// QS FURNITURE HOUSE — Central Site Configuration
// Single source of truth. Developer: update values here only.
// DEMO_MODE = true → missing contact details show elegant
// placeholders, products are demo-replaceable, no fake claims.
// ============================================================

export const DEMO_MODE = true;

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const siteConfig = {
  businessName: "QS Furniture House",
  shortName: "QS",
  tagline: "Furniture House",
  logo: "/assets/qs-logo.jpeg",
  // Exact address from business card — REPLACE with full showroom address
  // Currently only city is confirmed from reference. Keep format on one line.
  address: "QS Furniture House, Bareilly, Uttar Pradesh",
  addressShort: "Bareilly, Uttar Pradesh",
  city: "Bareilly",

  // ---- Contact (empty = placeholder mode, links stay inactive) ----
  phone: "", // e.g. "+91 98XXXXXXXX" — developer to fill
  phoneDisplay: "Phone available on request", // elegant placeholder
  whatsapp: "", // e.g. "9198XXXXXXXX" (no +, no spaces)
  email: "", // e.g. "hello@qsfurniturehouse.in"
  // Replace with exact Google Maps listing URL when available.
  // Safe generic search placeholder (do not present as exact pin):
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=QS+Furniture+House+Bareilly",
  instagram: "",
  facebook: "",

  hero: {
    eyebrow: "QS Furniture House — Bareilly",
    titleTop: "FURNITURE THAT DEFINES",
    titleBottom: "YOUR SPACE.",
    sub: "Timeless furniture, refined craftsmanship and designs created to make every space feel exceptional.",
    primaryCta: "Explore Collection",
    secondaryCta: "Visit Showroom",
    image: img("photo-1618221195710-dd6b41faaea6", 2000),
    imageAlt: "Luxury Indian living room with premium sofa, wooden tables and warm lighting",
  },

  intro: {
    label: "The QS Experience",
    title: "Made for spaces that deserve more.",
    copy: [
      "QS Furniture House is a destination for quality furniture, refined design and dependable, personalised service — pieces chosen to look exceptional and to live with beautifully, every day.",
      "From a single accent chair to a complete home, every selection balances durability, finish and proportion, so your space feels considered, comfortable and unmistakably yours.",
    ],
    image: img("photo-1616486338812-3dadae4b4ace", 1400),
    imageAlt: "Premium living room sofa and wood coffee table in warm light",
    imageSmall: img("photo-1586023492125-27b2c045efd7", 800),
    imageSmallAlt: "Accent armchair with premium upholstery",
  },

  about: {
    label: "Our Ethos",
    title: "Where craftsmanship meets contemporary living.",
    copy: [
      "At QS Furniture House, furniture is chosen with care — for its joinery, its materials, its finish and the way it sits in a real Indian home.",
      "Practical, timeless and built for daily life: sturdy woods, comfortable proportions and silhouettes that complement evolving interiors, supported by a showroom experience focused on helping you choose right.",
    ],
    points: [
      "Premium craftsmanship",
      "Carefully selected furniture",
      "Practical functionality",
      "Timeless design",
      "Customer-focused service",
    ],
    image: img("photo-1524758631624-e2822e304c36", 1400),
    imageAlt: "Solid wood desk and crafted furniture details",
    image2: img("photo-1567016432779-094069958ea5", 900),
    image2Alt: "Elegant bedroom with premium bed and soft furnishings",
  },

  collections: [
    {
      id: "living",
      title: "Living Room",
      desc: "Sofas, centre tables and accents that anchor the home.",
      image: img("photo-1555041469-a586c61ea9bc", 1200),
      alt: "Premium living room sofa set",
    },
    {
      id: "bedroom",
      title: "Bedroom",
      desc: "Beds, wardrobes and nightstands in warm, restful finishes.",
      image: img("photo-1505693416388-ac5ce068fe85", 1200),
      alt: "Luxury bed with upholstered headboard",
    },
    {
      id: "dining",
      title: "Dining",
      desc: "Dining sets crafted for gathering, in solid wood.",
      image: img("photo-1519710164239-da123dc03ef4", 1200),
      alt: "Solid wood dining table with chairs",
    },
    {
      id: "office",
      title: "Office",
      desc: "Desks and seating for focused, refined workspaces.",
      image: img("photo-1493663284031-b7e3aefcae8e", 1200),
      alt: "Executive office chair and desk",
    },
    {
      id: "storage",
      title: "Storage",
      desc: "Wardrobes, sideboards and units that hide in style.",
      image: img("photo-1618220179428-22790b461013", 1200),
      alt: "Premium storage sideboard in living room",
    },
    {
      id: "custom",
      title: "Custom Furniture",
      desc: "Made-to-fit pieces, tailored to your space.",
      image: img("photo-1586023492125-27b2c045efd7", 1200),
      alt: "Custom accent chair with premium fabric",
    },
  ],

  // Demo showroom pieces — replace with real catalogue. No prices shown.
  products: [
    {
      id: "heritage-sofa",
      name: "The Heritage Sofa",
      category: "Living Room",
      desc: "Deep seats, solid frame, tailored upholstery.",
      image: img("photo-1555041469-a586c61ea9bc", 1000),
      alt: "Heritage premium sofa",
    },
    {
      id: "royale-bed",
      name: "The Royale Bed",
      category: "Bedroom",
      desc: "Upholstered headboard, sturdy wood structure.",
      image: img("photo-1505693416388-ac5ce068fe85", 1000),
      alt: "Royale bed with premium finish",
    },
    {
      id: "signature-dining",
      name: "The Signature Dining Set",
      category: "Dining",
      desc: "Solid wood table with crafted chairs.",
      image: img("photo-1519710164239-da123dc03ef4", 1000),
      alt: "Signature dining set in wood",
    },
    {
      id: "executive-desk",
      name: "The Executive Desk",
      category: "Office",
      desc: "Walnut finish, considered proportions.",
      image: img("photo-1524758631624-e2822e304c36", 1000),
      alt: "Executive wooden desk",
    },
    {
      id: "classic-wardrobe",
      name: "The Classic Wardrobe",
      category: "Storage",
      desc: "Ample storage, clean shutters, fine finish.",
      image: img("photo-1618220179428-22790b461013", 1000),
      alt: "Classic wardrobe and storage",
    },
    {
      id: "modern-tv",
      name: "The Modern TV Unit",
      category: "Living Room",
      desc: "Low, elegant console for contemporary walls.",
      image: img("photo-1616486338812-3dadae4b4ace", 1000),
      alt: "Modern TV unit in living room",
    },
  ],

  showroom: {
    title: "See the difference in person.",
    overlay: "Visit QS Furniture House",
    image: img("photo-1600121848594-d8644e57abab", 2000),
    imageAlt: "QS Furniture House premium showroom interior",
  },

  trust: [
    { title: "Quality Focused", desc: "Materials and finish, checked with care." },
    { title: "Premium Furniture", desc: "A curated, timeless showroom range." },
    { title: "Reliable Service", desc: "Straightforward guidance, end to end." },
    { title: "Professional Approach", desc: "A showroom that respects your time." },
  ],

  why: [
    {
      no: "01",
      title: "Craftsmanship",
      desc: "Thoughtfully selected furniture with attention to detail.",
    },
    {
      no: "02",
      title: "Timeless Design",
      desc: "Furniture designed to complement evolving interiors.",
    },
    {
      no: "03",
      title: "Quality Focus",
      desc: "A premium approach to materials, finish and functionality.",
    },
    {
      no: "04",
      title: "Personal Service",
      desc: "A showroom experience focused on helping customers choose the right furniture.",
    },
  ],

  gallery: [
    { image: img("photo-1618221195710-dd6b41faaea6", 1200), alt: "Luxury living room", tall: true },
    { image: img("photo-1567016432779-094069958ea5", 1200), alt: "Premium bedroom", tall: false },
    { image: img("photo-1519710164239-da123dc03ef4", 1200), alt: "Wooden dining set", tall: false },
    { image: img("photo-1524758631624-e2822e304c36", 1200), alt: "Office furniture in wood", tall: true },
    { image: img("photo-1600210492486-724fe5c67fb0", 1200), alt: "Elegant dining interior", tall: false },
    { image: img("photo-1616486338812-3dadae4b4ace", 1200), alt: "Modern sofa arrangement", tall: true },
    { image: img("photo-1595526114035-0d45ed16cfbf", 1200), alt: "Serene bedroom interior", tall: false },
    { image: img("photo-1600607687939-ce8a6c25118c", 1200), alt: "Showroom interior detail", tall: false },
  ],

  contact: {
    title: "Let's find the right piece for your space.",
    sub: "Visit the showroom, call, or send a message — we will help you choose with confidence.",
  },

  footerNote: "Designed for QS Furniture House",
};

export default siteConfig;
