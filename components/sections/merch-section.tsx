import Image from "next/image";
import { merchItems } from "@/lib/data/home";
import { SectionIntro } from "@/components/sections/section-intro";

export function MerchSection() {
  return (
    <section id="merch" className="border-y border-ybit-line bg-ybit-charcoal py-24 md:py-32">
      <div className="ybit-container">
        <SectionIntro
          eyebrow="Merch"
          title="Event identity beyond the venue."
          text="The MENGO assets can support a merch/drop section for event jerseys, crew editions, wristbands, and celebration kits."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {merchItems.map((item) => (
            <article key={item.name} className="group border border-ybit-line bg-ybit-black">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ybit-gold">
                  {item.type}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ybit-ivory">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-ybit-muted">Coming soon</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
