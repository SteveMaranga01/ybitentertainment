import Image from "next/image";
import type { teamMembers } from "@/components/data/site";

type TeamMember = (typeof teamMembers)[number];

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group border border-white/10 bg-ybit-charcoal">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-ybit-gold">
          {member.role}
        </p>
        <h3 className="mt-3 font-serif text-3xl text-white">{member.name}</h3>
        <p className="mt-4 text-sm leading-7 text-ybit-muted">{member.bio}</p>
      </div>
    </article>
  );
}
