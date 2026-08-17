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
    <div className="max-w-5xl">
      <div className="flex items-center gap-4">
        <span className="h-px w-9 bg-ybit-rose" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ybit-rose">{eyebrow}</p>
      </div>
      <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-ybit-ivory md:text-7xl">{title}</h2>
      <p className="mt-7 max-w-2xl leading-8 text-ybit-muted">{text}</p>
    </div>
  );
}
