import Image from "next/image";
import { notFound } from "next/navigation";
import { OfferBanner } from "@/components/page/offer-banner";
import { PageHero } from "@/components/page/page-hero";
import { Button } from "@/components/ui/button";
import { eventCategories, galleryImages, planningPackages } from "@/components/data/site";
import { SectionIntro } from "@/components/sections/section-intro";

export function CategoryPage({ slug }: { slug: string }) {
  const category = eventCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow={`${category.label} · ${category.accent}`}
        title={category.title}
        text={category.description}
        image={category.heroImage}
        secondaryHref="/gallery"
        secondaryLabel="View gallery"
      />
      <OfferBanner />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Service scope"
            title="Designed as a complete experience."
            text="Each package can expand or contract depending on venue, audience size, guest movement, production needs, and media requirements."
          />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {category.services.map((service) => (
              <div key={service} className="bg-ybit-charcoal p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-gold">
                  Included focus
                </p>
                <h3 className="mt-5 font-serif text-3xl text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-ybit-charcoal py-24 md:py-32">
        <div className="ybit-container">
          <SectionIntro
            eyebrow="Packages"
            title="Pricing starts with the shape of the event."
            text="Planning prices stay flexible, while the interface prepares users for the backend quote flow."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {planningPackages.map((item) => (
              <article key={item.title} className="border border-white/10 bg-ybit-black p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ybit-muted">
                  {item.price}
                </p>
                <h3 className="mt-5 font-serif text-4xl text-white">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-ybit-muted">{item.bestFor}</p>
              </article>
            ))}
          </div>
          <Button href="/book" className="mt-10">
            Request planning
          </Button>
        </div>
      </section>
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container grid gap-5 md:grid-cols-3">
          {galleryImages.slice(0, 3).map((image, index) => (
            <div key={image} className="relative min-h-[420px] overflow-hidden border border-white/10">
              <Image
                src={image}
                alt={`${category.title} proof ${index + 1}`}
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
