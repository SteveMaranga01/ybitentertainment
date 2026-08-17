import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  primaryHref = "/book",
  primaryLabel = "Start inquiry",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden pt-28">
      <Image src={image} alt="" fill priority className="object-cover opacity-55" sizes="100vw" />
      <div className="absolute inset-0 ybit-grid opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98),rgba(5,5,5,0.48)_58%,rgba(5,5,5,0.88)),linear-gradient(180deg,transparent_45%,rgba(5,5,5,0.96))]" />
      <div className="ybit-container relative z-10 flex min-h-[calc(88svh-7rem)] items-end pb-12 md:pb-16">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
          <div className="max-w-6xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-ybit-rose" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-ybit-rose">{eyebrow}</p>
            </div>
            <h1 className="max-w-5xl font-serif text-[clamp(4.1rem,10vw,10rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-ybit-ivory">{title}</h1>
            <p className="mt-9 max-w-2xl text-base leading-8 text-ybit-muted md:text-lg">{text}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel ? <Button href={secondaryHref} variant="ghost">{secondaryLabel}</Button> : null}
            </div>
          </div>
          <p className="hidden border-l border-ybit-line pl-6 text-[10px] font-bold uppercase leading-6 tracking-[0.24em] text-ybit-muted lg:block">
            Ybit Entertainment<br />Westlands, Nairobi<br />Since 2019
          </p>
        </div>
      </div>
    </section>
  );
}
