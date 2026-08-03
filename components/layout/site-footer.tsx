import Link from "next/link";
import { Button } from "@/components/ui/button";
import Img from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "Book" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ybit-black py-12">
      <div className="ybit-container grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center bg-ybit-gold text-sm font-black text-ybit-black">
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
            Event planning, production, ticket access, partnerships, and
            cinematic guest experiences since 25 August 2019.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-ybit-muted md:justify-end">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Button href="/book" className="min-h-11">
            Start Inquiry
          </Button>
        </div>
      </div>
    </footer>
  );
}
