export function FrontendFormShell({
  title,
  description,
  fields,
  cta,
}: {
  title: string;
  description: string;
  fields: string[];
  cta: string;
}) {
  return (
    <form className="border border-white/10 bg-ybit-black p-6 md:p-8">
      <h3 className="font-serif text-4xl text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ybit-muted">{description}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="block">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ybit-muted">
              {field}
            </span>
            <span className="mt-2 block border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-ybit-muted">
              Backend connected later
            </span>
          </label>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-ybit-gold bg-ybit-gold px-6 text-sm font-semibold uppercase tracking-[0.16em] text-ybit-black transition hover:bg-ybit-ivory"
      >
        {cta}
      </button>
    </form>
  );
}
