export function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-ybit-gold">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-5xl leading-tight text-white md:text-7xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl leading-8 text-ybit-muted">{text}</p>
    </div>
  );
}
