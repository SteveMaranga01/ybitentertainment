import Image from "next/image";
import { experiences } from "@/lib/data/home";
import { SectionIntro } from "@/components/sections/section-intro";

export function ExperienceSection() {
  return (
    <section id="experiences" className="bg-ybit-black py-24 md:py-36">
      <div className="ybit-container">
        <SectionIntro
          eyebrow="Experiences"
          title="Three moods. One production standard."
          text="Each event category gets its own tempo, palette, and guest flow while staying unmistakably Ybit."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="group relative min-h-[520px] overflow-hidden border border-white/10 bg-ybit-charcoal"
            >
              <Image
                src={experience.image}
                alt={`${experience.title} event by Ybit Entertainment`}
                fill
                className="object-cover opacity-60 grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ybit-black via-ybit-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-gold">
                  {experience.label}
                </p>
                <h3 className="mt-3 font-serif text-5xl text-white">
                  {experience.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-ybit-muted">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
