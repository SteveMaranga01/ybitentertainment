import Image from "next/image";
import Link from "next/link";
import type { upcomingEvents } from "@/lib/data/site";

type EventItem = (typeof upcomingEvents)[number];

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block border border-white/10 bg-ybit-charcoal"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute left-4 top-4 bg-ybit-gold px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-ybit-black">
          {event.status}
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-ybit-muted">
          {event.category} · {event.date}
        </p>
        <h3 className="mt-4 font-serif text-4xl text-white">{event.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ybit-muted">{event.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.16em]">
          <span className="border border-white/10 px-3 py-2 text-ybit-ivory">
            {event.startingPrice}
          </span>
          <span className="border border-white/10 px-3 py-2 text-ybit-muted">
            {event.slots}
          </span>
        </div>
      </div>
    </Link>
  );
}
