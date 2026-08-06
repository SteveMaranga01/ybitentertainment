export const offers = [
  {
    eyebrow: "Limited offer",
    title: "Early concept calls for August events are open.",
    text: "Secure planning support before venue, vendor, and production slots tighten.",
    href: "/book",
    cta: "Start inquiry",
  },
  {
    eyebrow: "Upcoming",
    title: "Westlands After Dark ticket tiers are being prepared.",
    text: "Early Bird, VIP Access, and VVIP Table reservations will sit inside the ticket flow.",
    href: "/events/westlands-after-dark",
    cta: "Preview tickets",
  },
];

export const galleryImages = [
  "/MENGO/IMG-20260715-WA0004.jpg",
  "/MENGO/IMG-20260715-WA0007.jpg",
  "/MENGO/IMG-20260715-WA0008.jpg",
  "/MENGO/IMG-20260715-WA0009.jpg",
  "/MENGO/IMG-20260715-WA0012.jpg",
  "/MENGO/IMG-20260715-WA0015.jpg",
  "/MENGO/IMG-20260715-WA0020.jpg",
  "/MENGO/IMG-20260715-WA0021.jpg",
  "/MENGO/IMG-20260715-WA0024.jpg",
];

export const eventCategories = [
  {
    slug: "weddings",
    title: "Weddings",
    label: "The Collection",
    accent: "Rose",
    href: "/weddings",
    heroImage: "/MENGO/IMG-20260715-WA0024.jpg",
    description:
      "Ceremonies, receptions, styling, guest experience, and production flow for intimate and large-scale weddings.",
    services: ["Concept direction", "Vendor coordination", "Guest flow", "Reception production"],
  },
  {
    slug: "festivals",
    title: "Festivals",
    label: "The Circuit",
    accent: "Electric",
    href: "/festivals",
    heroImage: "/MENGO/IMG-20260715-WA0022.jpg",
    description:
      "Public experiences with stage, talent, crowd rhythm, sound, lighting, access control, and partner activations.",
    services: ["Stage production", "Ticketing", "Talent handling", "Brand activations"],
  },
  {
    slug: "birthdays",
    title: "Birthdays",
    label: "Private Editions",
    accent: "Gold",
    href: "/birthdays",
    heroImage: "/MENGO/IMG-20260715-WA0025.jpg",
    description:
      "Personal celebrations with strong mood, decor, hosting, music, photography, and carefully timed guest moments.",
    services: ["Theme design", "Decor setup", "Entertainment", "Media coverage"],
  },
  {
    slug: "corporate",
    title: "Corporate",
    label: "Brand Activations",
    accent: "Blue",
    href: "/corporate",
    heroImage: "/MENGO/IMG-20260715-WA0023.jpg",
    description:
      "Launches, corporate parties, brand activations, and team events designed for visibility and smooth execution.",
    services: ["Launch planning", "Brand moments", "Guest registration", "Production management"],
  },
];

export const upcomingEvents = [
  {
    slug: "westlands-after-dark",
    title: "Westlands After Dark",
    category: "Festival",
    date: "August 30, 2026",
    time: "7:00 PM",
    venue: "Westlands, Nairobi",
    status: "Early access",
    startingPrice: "KSh 1,500",
    slots: "Limited tiers",
    image: "/MENGO/IMG-20260715-WA0023.jpg",
    summary:
      "A night experience designed around music, friends, access bands, and a premium Ybit entry flow.",
    tiers: [
      {
        name: "Early Bird",
        access: "Limited entry access",
        price: "KSh 1,500",
        availability: "23 left",
      },
      {
        name: "Regular",
        access: "General admission",
        price: "KSh 2,500",
        availability: "Open",
      },
      {
        name: "VIP Access",
        access: "Priority entry + lounge",
        price: "KSh 5,000",
        availability: "12 left",
      },
      {
        name: "VVIP Table",
        access: "Reserved table + host service",
        price: "KSh 25,000",
        availability: "3 tables",
      },
    ],
  },
  {
    slug: "mengo-private-edit",
    title: "Mengo Private Edit",
    category: "Celebration",
    date: "September 12, 2026",
    time: "5:00 PM",
    venue: "Private location",
    status: "Invitation list",
    startingPrice: "By request",
    slots: "Guest list",
    image: "/MENGO/IMG-20260715-WA0025.jpg",
    summary:
      "A private celebration concept with curated access, hosted tables, music, and Ybit production support.",
    tiers: [
      {
        name: "Guest List",
        access: "Invitation access",
        price: "By request",
        availability: "Curated",
      },
      {
        name: "Hosted Table",
        access: "Reserved table + host service",
        price: "Custom",
        availability: "Limited",
      },
    ],
  },
];

export const sponsors = [
  {
    name: "Mengo Collective",
    category: "Experience Partner",
    note: "Collaborative event identity and guest culture partner.",
  },
  {
    name: "Westlands Creative Network",
    category: "Media Partner",
    note: "Visibility, content capture, and local audience reach.",
  },
  {
    name: "Ybit Sound Desk",
    category: "Production Partner",
    note: "Audio, staging, and technical event support.",
  },
];

export const sponsorTiers = [
  "Title Sponsor",
  "Gold Partner",
  "Experience Partner",
  "Media Partner",
  "Vendor Partner",
];

export const teamMembers = [
  {
    name: "Ybit Lead",
    role: "Founder / Event Director",
    image: "/MENGO/IMG-20260715-WA0019.jpg",
    bio: "Leads the event vision, client relationships, and final production direction.",
  },
  {
    name: "Creative Producer",
    role: "Creative Lead",
    image: "/MENGO/IMG-20260715-WA0016.jpg",
    bio: "Shapes the mood, story, styling, and visual feel across each event.",
  },
  {
    name: "Operations Lead",
    role: "Logistics & Vendor Flow",
    image: "/MENGO/IMG-20260715-WA0017.jpg",
    bio: "Keeps timelines, vendors, venue movement, and execution details aligned.",
  },
  {
    name: "Media Lead",
    role: "Photography & Content",
    image: "/MENGO/IMG-20260715-WA0018.jpg",
    bio: "Turns event moments into post-event proof, reels, archives, and sponsor value.",
  },
];

export const planningPackages = [
  {
    title: "Essential Planning",
    price: "From KSh 80,000",
    bestFor: "Small birthdays, dinners, showers, and intimate celebrations.",
  },
  {
    title: "Signature Production",
    price: "From KSh 180,000",
    bestFor: "Weddings, corporate launches, premium birthdays, and full event days.",
  },
  {
    title: "Full Experience Design",
    price: "Custom Quote",
    bestFor: "Large weddings, festivals, VVIP experiences, and high-touch productions.",
  },
];
