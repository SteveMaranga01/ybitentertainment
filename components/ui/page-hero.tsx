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
    <section className="relative min-h-[78svh] overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.96),rgba(8,8,8,0.55)_55%,rgba(8,8,8,0.9)),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,1))]/20" />
      <div className="ybit-container relative z-10 flex min-h-[calc(78svh-7rem)] items-end pb-14">
        <div className="max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.95] text-white md:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ybit-muted md:text-lg">
            {text}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
