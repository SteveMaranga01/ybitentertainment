import { Button } from "@/components/ui/button";
import Image from "next/image";

const planningFields = [
  "Event type",
  "Guest count",
  "Budget range",
  "Services needed",
];

export function BookingSection() {
  return (
    <section
      id="booking"
      className="border-y border-ybit-line bg-ybit-charcoal py-16 md:py-32 section-compact"
    >
      <div className="ybit-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className=" p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
            Booking
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ybit-ivory sm:text-5xl md:text-6xl">
            Two doors into the Ybit world.
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-ybit-muted">
            One path is for clients who want us to produce their moment. The
            other is for guests looking for the next public experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="border border-ybit-gold/30 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ybit-gold">
              Private events
            </span>
            <span className="border border-ybit-line px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ybit-ivory">
              Public access
            </span>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <div className="border border-ybit-gold/40 bg-ybit-black p-7 md:p-8 shadow-[0_0_0_1px_var(--ybit-line)]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-gold">
                Plan an Event
              </span>
              <span className="border border-ybit-gold/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ybit-ivory">
                Concierge
              </span>
            </div>
            <h3 className="mt-5 font-serif text-3xl text-ybit-ivory sm:text-4xl">
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
                  className="flex items-center justify-between border-b border-ybit-line pb-3"
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

          <div className="border border-ybit-line bg-white/[0.03] p-7 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-blue">
                Attend an Event
              </span>
              <span className="border border-ybit-line px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ybit-muted">
                Live access
              </span>
            </div>
            <h3 className="mt-5 font-serif text-3xl text-ybit-ivory sm:text-4xl">
              Ticket access
            </h3>
            <p className="mt-4 text-sm leading-7 text-ybit-muted">
              For public events with tiers, live slot availability, M-Pesa STK
              Push, confirmations, and QR access passes.
            </p>
            <div className="mt-8 border border-ybit-line bg-ybit-black p-5 flex md:flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-ybit-muted">
                  Payment rail
                </p>
                <p className="mt-3 text-2xl font-semibold text-ybit-ivory">
                  M-Pesa Daraja
                </p>
                <p className="mt-2 text-sm text-ybit-muted">
                  STK Push first, manual Paybill later.
                </p>
              </div>

              <Image
                src="/MENGO/M-PESA-logo-2.png"
                alt="M-Pesa logo"
                width={100}
                height={40}
                className="h-auto w-auto object-contain scale:150"
              />
            </div>
            <Button href="#tickets" variant="ghost" className="mt-8 w-full">
              Browse Upcoming Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
