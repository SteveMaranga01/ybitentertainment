import { Button } from "@/frontend/components/ui/button";

const planningFields = [
  "Event type",
  "Guest count",
  "Budget range",
  "Services needed",
];

export function BookingSection() {
  return (
    <section id="booking" className="border-y border-white/10 bg-ybit-charcoal py-24 md:py-32">
      <div className="ybit-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
            Booking
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-white md:text-7xl">
            Two doors into the Ybit world.
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-ybit-muted">
            One path is for clients who want us to produce their moment. The
            other is for guests looking for the next public experience.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-ybit-gold/40 bg-ybit-black p-7 md:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-gold">
              Plan an Event
            </span>
            <h3 className="mt-5 font-serif text-4xl text-white">
              Concierge inquiry
            </h3>
            <p className="mt-4 text-sm leading-7 text-ybit-muted">
              For weddings, birthdays, activations, and private productions.
              Capture date, guests, location, budget, and services.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-ybit-ivory">
              {planningFields.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{item}</span>
                  <span className="text-ybit-muted">Required</span>
                </div>
              ))}
            </div>
            <Button href="#footer-cta" className="mt-8 w-full">
              Request Consultation
            </Button>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-blue">
              Attend an Event
            </span>
            <h3 className="mt-5 font-serif text-4xl text-white">
              Ticket access
            </h3>
            <p className="mt-4 text-sm leading-7 text-ybit-muted">
              For public events with tiers, live slot availability, M-Pesa STK
              Push, confirmations, and QR access passes.
            </p>
            <div className="mt-8 border border-white/10 bg-ybit-black p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-ybit-muted">
                Payment rail
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                M-Pesa Daraja
              </p>
              <p className="mt-2 text-sm text-ybit-muted">
                STK Push first, manual Paybill later.
              </p>
            </div>
            <Button href="#tickets" variant="ghost" className="mt-8 w-full">
              Browse Upcoming
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
