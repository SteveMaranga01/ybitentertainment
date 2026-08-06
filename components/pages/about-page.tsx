import { OfferBanner } from "@/components/ui/offer-banner";
import { PageHero } from "@/components/ui/page-hero";
import { SectionIntro } from "@/components/sections/section-intro";

const facts = [
  ["Founded", "25 August 2019"],
  ["Base", "Westlands, Nairobi"],
  ["Focus", "Planning, production, access"],
  ["Style", "Cinematic, precise, guest-first"],
];

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Ybit"
        title="Built for moments that need command and feeling."
        text="Ybit Entertainment is an event organizing group from Westlands, Nairobi, shaping private celebrations and public experiences with calm execution and cinematic taste."
        image="/MENGO/IMG-20260715-WA0022.jpg"
        secondaryHref="/team"
        secondaryLabel="Meet the team"
      />
      <OfferBanner index={1} />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Origin"
            title="The event house started with a simple belief."
            text="A good event is not only decor, sound, or a crowd. It is timing, hospitality, movement, anticipation, and the quiet confidence of a team that knows where every detail belongs."
          />
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label} className="bg-ybit-charcoal p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ybit-muted">
                  {label}
                </p>
                <p className="mt-4 font-serif text-3xl text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
