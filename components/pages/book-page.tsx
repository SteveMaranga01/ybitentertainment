import { FrontendFormShell } from "@/components/forms/frontend-form-shell";
import { EventCard } from "@/components/ui/event-card";
import { OfferBanner } from "@/components/ui/offer-banner";
import { PageHero } from "@/components/ui/page-hero";
import { upcomingEvents } from "@/lib/data/site";
import { SectionIntro } from "@/components/sections/section-intro";

export function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book"
        title="Plan an event or attend one."
        text="The booking frontend is split into two clear journeys: private planning inquiries and public ticket access."
        image="/MENGO/IMG-20260715-WA0024.jpg"
        primaryHref="#plan"
        primaryLabel="Plan an event"
        secondaryHref="#attend"
        secondaryLabel="Attend an event"
      />
      <OfferBanner />
      <section id="plan" className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Plan an event"
            title="A concierge inquiry, not a contact form."
            text="These fields define the payload for the future inquiry email and database workflow."
          />
          <FrontendFormShell
            title="Planning inquiry"
            description="Use this for weddings, birthdays, corporate events, festivals, and private celebrations."
            fields={[
              "Name",
              "Email",
              "Phone",
              "Event Type",
              "Preferred Date",
              "Location",
              "Guest Count",
              "Budget Range",
              "Services Needed",
              "Message",
            ]}
            cta="Request consultation"
          />
        </div>
      </section>
      <section id="attend" className="border-y border-white/10 bg-ybit-charcoal py-24 md:py-32">
        <div className="ybit-container">
          <SectionIntro
            eyebrow="Attend an event"
            title="Choose an upcoming experience."
            text="Visitors should move from event discovery to ticket tiers and M-Pesa checkout with minimal friction."
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
