"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "Book" },
];

const supportLinks = [
  { href: "/book", label: "Inquire" },
  { href: "mailto:bookings@ybitentertainment.com", label: "Email us" },
  { href: "/events", label: "Upcoming events" },
];

export function SiteFooter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubscribed(true);
  }

  return (
    <footer className="overflow-hidden border-t border-ybit-line bg-ybit-black py-10 md:py-16">
      <div className="ybit-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-ybit-rose px-6 py-8 text-ybit-black sm:px-10 sm:py-10 md:rounded-[3rem] md:px-14 md:py-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Link href="/" className="inline-flex items-center gap-3" aria-label="Ybit Entertainment home">
                <span className="grid size-10 place-items-center bg-ybit-black text-sm font-black text-ybit-rose">
                  YB
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.24em]">
                    Ybit Entertainment
                  </span>
                  <span className="block text-xs uppercase tracking-[0.24em] opacity-70">
                    Westlands, Nairobi
                  </span>
                </span>
              </Link>
              <p className="mt-8 max-w-lg font-serif text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
                Events with a point of view.
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 opacity-75">
                Planning, production, ticket access, partnerships, and cinematic guest experiences since 25 August 2019.
              </p>
              <Button href="/book" className="mt-8 min-h-11 border-ybit-black bg-ybit-black text-ybit-rose hover:text-ybit-rose">
                Start inquiry
              </Button>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:pt-1">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">Navigation</h2>
                <nav className="mt-4 flex flex-col items-start gap-3 text-xs font-semibold uppercase tracking-[0.14em]" aria-label="Footer navigation">
                  {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">Connect</h2>
                <nav className="mt-4 flex flex-col items-start gap-3 text-xs font-semibold uppercase tracking-[0.14em]" aria-label="Footer contact links">
                  {supportLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="sm:col-span-1">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">The latest</h2>
                <p className="mt-4 text-sm leading-6 opacity-75">A considered note from the Ybit house, occasionally.</p>
                <form className="mt-5" onSubmit={handleSubscribe}>
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <div className="flex border-b border-ybit-black/40 pb-2 focus-within:border-ybit-black">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email address"
                      className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ybit-black/60"
                    />
                    <button type="submit" className="ml-3 shrink-0 text-xs font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ybit-black">
                      Submit
                    </button>
                  </div>
                  <p className="mt-3 min-h-5 text-xs opacity-75" aria-live="polite">
                    {isSubscribed ? "You are on the list." : "No noise. Just the good stuff."}
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 border-t border-ybit-black/20 pt-4 text-xs opacity-65 sm:flex sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Ybit Entertainment</p>
            <p className="mt-2 sm:mt-0">Made for memorable moments.</p>
          </div>

          <p aria-hidden="true" className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[clamp(8rem,28vw,28rem)] font-bold leading-[0.7] tracking-[-0.08em] text-ybit-black/10">
            YBIT
          </p>
        </div>
      </div>
    </footer>
  );
}
