import Image from "next/image";
import { notFound } from "next/navigation";
import { FrontendFormShell } from "@/components/forms/frontend-form-shell";
import { OfferBanner } from "@/components/ui/offer-banner";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "@/lib/data/site";

export function EventDetailPage({ slug }: { slug: string }) {
  const event = upcomingEvents.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <section className="relative min-h-[88svh] min-h-[88dvh] overflow-hidden pt-20 md:pt-28">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.96),rgba(8,8,8,0.56)_56%,rgba(8,8,8,0.9)),linear-gradient(180deg,rgba(8,8,8,0.2),rgba(8,8,8,1))]" />
        <div className="ybit-container relative z-10 grid min-h-[calc(88dvh-5rem)] gap-8 pb-10 md:pb-14 hero-compact lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
              {event.category} · {event.status}
            </p>
            <h1 className="hero-compact-title mt-4 font-serif text-5xl leading-[0.95] text-ybit-ivory md:mt-6 md:text-8xl">
              {event.title}
            </h1>
            <p className="hero-compact-gap mt-5 max-w-2xl text-base leading-7 text-ybit-muted md:mt-7 md:text-lg md:leading-8">
              {event.summary}
            </p>
          </div>
          <aside className="border border-ybit-line bg-ybit-black/70 p-6 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-muted">
              Event details
            </p>
            <dl className="mt-6 grid gap-4 text-sm">
              {[
                ["Date", event.date],
                ["Time", event.time],
                ["Venue", event.venue],
                ["From", event.startingPrice],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-ybit-line pb-3">
                  <dt className="text-ybit-muted">{label}</dt>
                  <dd className="font-semibold text-ybit-ivory">{value}</dd>
                </div>
              ))}
            </dl>
            <Button href="#tickets" className="mt-6 w-full">
              View access
            </Button>
          </aside>
        </div>
      </section>
      <OfferBanner />
      <section id="tickets" className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
              Ticket tiers
            </p>
            <h2 className="mt-5 font-serif text-5xl text-ybit-ivory md:text-7xl">
              Select your access level.
            </h2>
            <div className="mt-10 divide-y divide-ybit-line border-y border-ybit-line">
              {event.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="grid gap-4 py-5 md:grid-cols-[1fr_1.1fr_auto_auto] md:items-center"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-ybit-ivory">
                    {tier.name}
                  </p>
                  <p className="text-sm text-ybit-muted">{tier.access}</p>
                  <p className="text-lg font-semibold text-ybit-gold">{tier.price}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-ybit-muted">
                    {tier.availability}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <FrontendFormShell
            title="Checkout preview"
            description="This is the frontend contract for order creation and M-Pesa STK Push later."
            fields={["Ticket Tier", "Quantity", "Full Name", "Email", "M-Pesa Phone"]}
            cta="Send M-Pesa prompt"
          />
        </div>
      </section>
    </main>
  );
}
