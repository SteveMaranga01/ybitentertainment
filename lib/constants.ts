export const SITE = {
  name: "Ybit Entertainment",
  tagline: "Premium Event Planning & Production",
  description:
    "Ybit Entertainment is a premium event organizing group founded on 25 August 2019 and based in Westlands, Nairobi.",
  founded: "25 August 2019",
  location: "Westlands, Nairobi, Kenya",
  email: "info@ybitentertainment.com",
  phone: "+254 700 000 000",
  social: {
    instagram: "https://instagram.com/ybitentertainment",
    twitter: "https://twitter.com/ybitentertainment",
    facebook: "https://facebook.com/ybitentertainment",
    tiktok: "https://tiktok.com/@ybitentertainment",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Weddings", href: "/weddings" },
      { label: "Festivals", href: "/festivals" },
      { label: "Birthdays", href: "/birthdays" },
      { label: "Corporate", href: "/corporate" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Book Now", href: "/book" },
];

export const EVENT_CATEGORIES = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "The Collection",
    description:
      "From intimate ceremonies to grand celebrations, we craft unforgettable wedding experiences that reflect your unique love story.",
    href: "/weddings",
    image: "/MENGO/IMG-20260715-WA0003.jpg",
  },
  {
    id: "festivals",
    title: "Festivals",
    subtitle: "The Circuit",
    description:
      "High-energy festival production that brings together music, art, and community in extraordinary celebrations.",
    href: "/festivals",
    image: "/MENGO/IMG-20260715-WA0016.jpg",
  },
  {
    id: "birthdays",
    title: "Birthdays",
    subtitle: "Celebrations",
    description:
      "Whether it's a milestone birthday or an intimate gathering, we create celebrations that leave lasting memories.",
    href: "/birthdays",
    image: "/MENGO/IMG-20260715-WA0013.jpg",
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Activations",
    description:
      "Professional event production for product launches, brand activations, conferences, and corporate gatherings.",
    href: "/corporate",
    image: "/MENGO/IMG-20260715-WA0019.jpg",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consult",
    description:
      "We begin with a detailed consultation to understand your vision, requirements, and budget.",
  },
  {
    step: "02",
    title: "Create",
    description:
      "Our team designs and plans every detail, from venue selection to entertainment and decor.",
  },
  {
    step: "03",
    title: "Celebrate",
    description:
      "Sit back and enjoy your event while we handle everything to perfection.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Ybit Entertainment transformed our wedding into a magical experience. Every detail was perfect.",
    author: "Sarah & James",
    event: "Wedding",
  },
  {
    quote:
      "The festival they organized was incredible. The energy, the production, everything was top-notch.",
    author: "Event Partner",
    event: "Festival",
  },
  {
    quote:
      "Professional, creative, and dedicated. They made our corporate launch a huge success.",
    author: "Marketing Director",
    event: "Corporate",
  },
];

export const PACKAGES = [
  {
    name: "Essential Planning",
    bestFor: "Small birthdays, intimate private events",
    price: "From KSh 50,000",
    features: [
      "Venue consultation",
      "Basic decor setup",
      "Day-of coordination",
      "Vendor recommendations",
    ],
  },
  {
    name: "Signature Production",
    bestFor: "Weddings, premium birthdays, corporate events",
    price: "From KSh 150,000",
    features: [
      "Full event design",
      "Premium decor and styling",
      "Entertainment curation",
      "Professional photography",
      "Day-of coordination team",
    ],
    popular: true,
  },
  {
    name: "Full Experience Design",
    bestFor: "Large weddings, festivals, high-touch productions",
    price: "Custom Quote",
    features: [
      "Complete event architecture",
      "Luxury decor and production",
      "A-list entertainment",
      "Videography and photography",
      "Guest management",
      "VIP experience design",
    ],
  },
];

export const GALLERY_IMAGES = [
  { src: "/MENGO/IMG-20260715-WA0003.jpg", category: "weddings", alt: "Wedding celebration" },
  { src: "/MENGO/IMG-20260715-WA0004.jpg", category: "birthdays", alt: "Birthday event" },
  { src: "/MENGO/IMG-20260715-WA0005.jpg", category: "weddings", alt: "Wedding decor" },
  { src: "/MENGO/IMG-20260715-WA0007.jpg", category: "festivals", alt: "Festival energy" },
  { src: "/MENGO/IMG-20260715-WA0008.jpg", category: "corporate", alt: "Corporate event" },
  { src: "/MENGO/IMG-20260715-WA0009.jpg", category: "weddings", alt: "Wedding ceremony" },
  { src: "/MENGO/IMG-20260715-WA0012.jpg", category: "birthdays", alt: "Birthday celebration" },
  { src: "/MENGO/IMG-20260715-WA0013.jpg", category: "festivals", alt: "Festival production" },
  { src: "/MENGO/IMG-20260715-WA0014.jpg", category: "weddings", alt: "Wedding reception" },
  { src: "/MENGO/IMG-20260715-WA0015.jpg", category: "corporate", alt: "Corporate activation" },
  { src: "/MENGO/IMG-20260715-WA0016.jpg", category: "festivals", alt: "Festival crowd" },
  { src: "/MENGO/IMG-20260715-WA0017.jpg", category: "weddings", alt: "Wedding details" },
  { src: "/MENGO/IMG-20260715-WA0018.jpg", category: "birthdays", alt: "Birthday party" },
  { src: "/MENGO/IMG-20260715-WA0019.jpg", category: "corporate", alt: "Corporate event" },
  { src: "/MENGO/IMG-20260715-WA0020.jpg", category: "festivals", alt: "Festival stage" },
  { src: "/MENGO/IMG-20260715-WA0021.jpg", category: "weddings", alt: "Wedding moment" },
  { src: "/MENGO/IMG-20260715-WA0022.jpg", category: "birthdays", alt: "Birthday decor" },
  { src: "/MENGO/IMG-20260715-WA0023.jpg", category: "festivals", alt: "Festival lights" },
  { src: "/MENGO/IMG-20260715-WA0024.jpg", category: "corporate", alt: "Corporate gathering" },
  { src: "/MENGO/IMG-20260715-WA0025.jpg", category: "weddings", alt: "Wedding dance" },
];

export const VIDEOS = [
  "/MENGO/VID-20260721-WA0009.mp4",
  "/MENGO/VID-20260721-WA0010.mp4",
  "/MENGO/VID-20260721-WA0011.mp4",
  "/MENGO/VID-20260721-WA0013.mp4",
];
