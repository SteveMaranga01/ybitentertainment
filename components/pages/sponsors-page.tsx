import { FrontendFormShell } from "@/components/forms/frontend-form-shell";
import { OfferBanner } from "@/components/ui/offer-banner";
import { PageHero } from "@/components/ui/page-hero";
import { sponsors, sponsorTiers } from "@/lib/data/site";
import { SectionIntro } from "@/components/sections/section-intro";

export function SponsorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sponsors"
        title="Partner with the experience."
        text="Ybit sponsorship is built for brands that want visibility inside real guest moments, event media, activations, and access culture."
        image="/MENGO/IMG-20260715-WA0020.jpg"
        primaryLabel="Register interest"
        primaryHref="#sponsor-form"
        secondaryHref="/events"
        secondaryLabel="Upcoming events"
      />
      <OfferBanner index={1} />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container">
          <SectionIntro
            eyebrow="Current partners"
            title="The brands already close to the room."
            text="Sponsor cards are ready for real logos later. For now they define the frontend model the backend can manage."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sponsors.map((sponsor) => (
              <article key={sponsor.name} className="border border-white/10 bg-ybit-charcoal p-7">
                <div className="grid size-16 place-items-center border border-ybit-gold bg-ybit-gold text-xl font-black text-ybit-black">
                  {sponsor.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-ybit-gold">
                  {sponsor.category}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-white">{sponsor.name}</h3>
                <p className="mt-4 text-sm leading-7 text-ybit-muted">{sponsor.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-ybit-charcoal py-24 md:py-32">
        <div className="ybit-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Sponsor tiers"
            title="Give every partner a clear access lane."
            text="The frontend should support logos, tier descriptions, benefits, budgets, and event-specific sponsor interest."
          />
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {sponsorTiers.map((tier) => (
              <div key={tier} className="bg-ybit-black p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ybit-muted">
                  Partnership
                </p>
                <h3 className="mt-4 font-serif text-3xl text-white">{tier}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="sponsor-form" className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container max-w-5xl">
          <FrontendFormShell
            title="Sponsor registration"
            description="This static frontend form defines the fields the sponsor inquiry backend should accept later."
            fields={[
              "Company / Brand",
              "Contact Person",
              "Email",
              "Phone",
              "Sponsorship Tier",
              "Budget Range",
              "Event Interest",
              "Message",
            ]}
            cta="Submit sponsor interest"
          />
        </div>
      </section>
    </main>
  );
}
