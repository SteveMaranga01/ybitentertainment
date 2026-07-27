import { EventCard } from "@/components/cards/event-card";
import { OfferBanner } from "@/components/page/offer-banner";
import { PageHero } from "@/components/page/page-hero";
import { upcomingEvents } from "@/components/data/site";
import { SectionIntro } from "@/components/sections/section-intro";

export function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Upcoming experiences and access tiers."
        text="Browse public Ybit events, preview ticket structures, and prepare the path toward M-Pesa checkout."
        image="/MENGO/IMG-20260715-WA0023.jpg"
        primaryHref="/book#attend"
        primaryLabel="Find tickets"
        secondaryHref="/sponsors"
        secondaryLabel="Sponsor events"
      />
      <OfferBanner index={1} />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container">
          <SectionIntro
            eyebrow="Upcoming"
            title="Public events need sharp inventory language."
            text="Each event card is structured for backend fields: status, date, venue, slots, starting price, and ticket tiers."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
