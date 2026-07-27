import Image from "next/image";
import Link from "next/link";
import type { upcomingEvents } from "@/components/data/site";

type EventItem = (typeof upcomingEvents)[number];

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block overflow-hidden border border-white/10 bg-ybit-charcoal"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-ybit-gold">
          {event.category} · {event.status}
        </p>
        <h3 className="mt-4 font-serif text-4xl text-white">{event.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ybit-muted">{event.summary}</p>
        <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm text-ybit-ivory sm:grid-cols-3">
          <span>{event.date}</span>
          <span>{event.venue}</span>
          <span className="text-ybit-gold">{event.startingPrice}</span>
        </div>
      </div>
    </Link>
  );
}
