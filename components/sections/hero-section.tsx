import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55 slow-drift"
        src="/MENGO/VID-20260721-WA0010.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.96),rgba(8,8,8,0.45)_52%,rgba(8,8,8,0.88)),linear-gradient(180deg,rgba(8,8,8,0.28),rgba(8,8,8,1))]" />

      <div className="ybit-container relative z-10 flex min-h-[100svh] items-end pb-12 pt-32 md:pb-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="reveal-up max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
              Westlands, Nairobi · Est. 25 August 2019
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-[0.92] text-white md:text-8xl lg:text-[128px]">
              Events with a cinematic pulse.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ybit-muted md:text-lg">
              Ybit Entertainment designs, produces, and hosts celebrations that
              feel intentional from first arrival to final applause.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#booking">Plan an Event</Button>
              <Button href="#tickets" variant="ghost">
                View Tickets
              </Button>
            </div>
          </div>

          <aside className="hidden border-l border-white/15 pl-8 lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-muted">
              Platform direction
            </p>
            <p className="mt-4 max-w-sm font-serif text-3xl leading-tight text-ybit-ivory">
              Premium planning, public access, M-Pesa checkout, and merch drops
              in one event house.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
