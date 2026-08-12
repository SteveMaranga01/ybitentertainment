"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Weddings", href: "/weddings" },
      { label: "Festivals", href: "/festivals" },
      { label: "Birthdays", href: "/birthdays" },
      { label: "Corporate", href: "/corporate" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Book Now", href: "/book" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ybit-black py-12 text-ybit-ivory">
      <div className="ybit-container grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center bg-ybit-rose text-sm font-black text-ybit-black">
              YB
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.24em] text-white">
                Ybit Entertainment
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-ybit-muted">
                Westlands, Nairobi
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ybit-muted">
            Event planning, production, ticket access, partnerships, and cinematic guest experiences since {SITE.founded}.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-ybit-muted md:justify-end">
            {footerLinks.flatMap((group) => group.links).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/book" className="ybit-button inline-flex min-h-11 items-center justify-center border border-ybit-rose bg-ybit-rose px-6 text-sm font-semibold uppercase tracking-[0.16em] text-ybit-black transition hover:text-ybit-black">
            <span className="ybit-button__label" data-label="Start inquiry">
              <span>Start inquiry</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="ybit-container mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image src="/foo.png" alt="Ybit Entertainment" width={80} height={80} className="h-16 w-auto" />
          </Link>
          <p className="mb-6 text-sm text-ybit-muted">
            Premium event organizing group based in Westlands, Nairobi. Creating unforgettable experiences since {SITE.founded}.
          </p>
          <div className="flex gap-4">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ybit-rose hover:text-ybit-black" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ybit-rose hover:text-ybit-black" aria-label="Twitter">
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ybit-rose hover:text-ybit-black" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-serif text-lg font-semibold text-white">{group.title}</h3>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ybit-muted transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start gap-3 text-sm text-ybit-muted">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-ybit-rose" />
              <span>{SITE.location}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-ybit-muted">
              <Mail className="h-5 w-5 flex-shrink-0 text-ybit-rose" />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ybit-muted">
              <Phone className="h-5 w-5 flex-shrink-0 text-ybit-rose" />
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white">
                {SITE.phone}
              </a>
            </li>
          </ul>

          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.119185959036!2d36.8065!3d-1.2641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173de09f6e8d%3A0x6e7b5b5b5b5b5b5b!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ybit Entertainment Location - Westlands, Nairobi"
            />
          </div>
        </div>
      </div>

      <div className="ybit-container mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
        <p className="text-sm text-ybit-muted">© {new Date().getFullYear()} Ybit Entertainment. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-ybit-muted">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
