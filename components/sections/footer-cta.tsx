import { Button } from "@/components/ui/button";

export function FooterCTA() {
  return (
    <footer id="footer-cta" className="bg-ybit-black py-16 md:py-28 section-compact">
      <div className="ybit-container">
        <div className="grid gap-10 border border-ybit-line p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
              Ybit Entertainment
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-ybit-ivory md:text-7xl">
              Build the next event like people will remember how it felt.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-ybit-muted">
              Founded on 25 August 2019. Based in Westlands, Nairobi. Built for
              planning, production, access, and celebration.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button href="mailto:bookings@ybitentertainment.com">
              Start Inquiry
            </Button>
            <Button href="#tickets" variant="ghost">
              Ticket Access
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
