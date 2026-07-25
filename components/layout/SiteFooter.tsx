"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

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
    <footer className="bg-secondary-dark text-text-light">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/foo.png"
                alt="Ybit Entertainment"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-text-light-secondary text-sm mb-6">
              Premium event organizing group based in Westlands, Nairobi.
              Creating unforgettable experiences since {SITE.founded}.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg font-semibold mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-light-secondary hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Map */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-text-light-secondary">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{SITE.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light-secondary">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light-secondary">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden aspect-video">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-light-secondary text-sm">
            © {new Date().getFullYear()} Ybit Entertainment. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-light-secondary">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
