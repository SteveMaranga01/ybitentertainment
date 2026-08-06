import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ticketTiers } from "@/lib/data/home";
import { SectionIntro } from "@/components/sections/section-intro";

export function TicketsSection() {
  return (
    <section id="tickets" className="bg-ybit-black py-24 md:py-36">
      <div className="ybit-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[560px] overflow-hidden border border-white/10">
          <Image
            src="/MENGO/IMG-20260715-WA0023.jpg"
            alt="Upcoming Ybit event crowd moment"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ybit-black via-ybit-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-gold">
              Next public experience
            </p>
            <h2 className="mt-4 font-serif text-5xl text-white">
              Westlands After Dark
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-ybit-muted">
              Sample ticket architecture for upcoming Ybit-hosted events.
            </p>
          </div>
        </div>

        <div>
          <SectionIntro
            eyebrow="Access"
            title="Tickets should feel like entry bands."
            text="The pricing UI avoids generic cards. Each tier reads as an access decision: name, value, price, scarcity, action."
          />
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {ticketTiers.map((tier) => (
              <div
                key={tier.name}
                className="grid gap-4 py-5 md:grid-cols-[1fr_1.2fr_auto_auto] md:items-center"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {tier.name}
                </p>
                <p className="text-sm text-ybit-muted">{tier.access}</p>
                <p className="text-lg font-semibold text-ybit-gold">
                  {tier.price}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-ybit-muted">
                  {tier.availability}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#footer-cta">Reserve Access</Button>
            <Button href="#booking" variant="quiet">
              How ticketing works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
