import { processSteps } from "@/lib/data/home";
import { SectionIntro } from "@/components/sections/section-intro";

export function ProcessSection() {
  return (
    <section className="bg-ybit-black py-24 md:py-36">
      <div className="ybit-container">
        <SectionIntro
          eyebrow="Method"
          title="A clear production rhythm."
          text="The workflow keeps the event emotional for guests and operationally calm behind the scenes."
        />
        <div className="mt-14 grid gap-px overflow-hidden border border-ybit-line bg-ybit-line md:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-ybit-black p-7 md:min-h-[300px] md:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-gold">
                {item.step}
              </span>
              <h3 className="mt-8 font-serif text-4xl text-ybit-ivory">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ybit-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
