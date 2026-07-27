import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative min-h-[78svh] overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.96),rgba(8,8,8,0.55)_55%,rgba(8,8,8,0.88)),linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,1))]" />
      <div className="ybit-container relative z-10 flex min-h-[calc(78svh-7rem)] items-end pb-14 md:pb-20">
        <div className="max-w-5xl reveal-up">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.94] text-white md:text-8xl lg:text-[112px]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ybit-muted md:text-lg">
            {text}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
