import Image from "next/image";
import { OfferBanner } from "@/components/ui/offer-banner";
import { PageHero } from "@/components/ui/page-hero";
import { teamMembers } from "@/lib/data/site";
import { SectionIntro } from "@/components/sections/section-intro";

export function TeamPage() {
  const [leader, ...members] = teamMembers;

  return (
    <main>
      <PageHero
        eyebrow="Team"
        title="The people behind the production."
        text="Meet the leadership and core roles that turn ideas, venues, vendors, and guest movement into one composed event."
        image="/MENGO/IMG-20260715-WA0019.jpg"
        secondaryHref="/sponsors"
        secondaryLabel="Partner with Ybit"
      />
      <OfferBanner />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="relative min-h-[560px] overflow-hidden border border-ybit-gold/40">
            <Image src={leader.image} alt={leader.name} fill className="object-cover opacity-80" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-ybit-gold">
              Leadership
            </p>
            <h2 className="mt-5 font-serif text-6xl text-ybit-ivory">{leader.name}</h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-ybit-muted">
              {leader.role}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ybit-muted">{leader.bio}</p>
          </div>
        </div>
      </section>
      <section className="border-y border-ybit-line bg-ybit-charcoal py-24 md:py-32">
        <div className="ybit-container">
          <SectionIntro
            eyebrow="Core roles"
            title="Execution needs different kinds of calm."
            text="Each role gives the client and guest experience a clear owner, from creative direction to logistics and media."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {members.map((member) => (
              <article key={member.role} className="border border-ybit-line bg-ybit-black">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover opacity-75" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-ybit-ivory">{member.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-ybit-gold">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-ybit-muted">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
