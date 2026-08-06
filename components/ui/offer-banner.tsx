import Link from "next/link";
import { Button } from "@/components/ui/button";
import { offers } from "@/lib/data/site";

export function OfferBanner({ index = 0, variant = "simple" }: { index?: number, variant?: "simple" | "action" }) {
  const offer = offers[index % offers.length];

  if (variant === "action") {
    return (
      <section className="border-y border-ybit-gold/25 bg-ybit-gold text-ybit-black">
        <div className="ybit-container grid gap-5 py-5 md:grid-cols-[auto_1fr_auto] md:items-center">
          <p className="text-xs font-black uppercase tracking-[0.28em]">
            {offer.eyebrow}
          </p>
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              {offer.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-black/70">{offer.text}</p>
          </div>
          <Button
            href={offer.href}
            variant="ghost"
            className="border-ybit-black/20 bg-ybit-black text-white hover:bg-ybit-charcoal"
          >
            {offer.cta}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <aside className="border-y border-ybit-gold/30 bg-ybit-gold text-ybit-black">
      <div className="ybit-container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em]">
            {offer.eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold md:text-base">{offer.title}</p>
        </div>
        <Link
          href={offer.href}
          className="text-xs font-black uppercase tracking-[0.18em] underline underline-offset-4"
        >
          {offer.cta}
        </Link>
      </div>
    </aside>
  );
}
