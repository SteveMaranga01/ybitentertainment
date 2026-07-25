import Link from "next/link";
import { Button } from "@/frontend/components/ui/button";

const navItems = ["Experiences", "Tickets", "Merch", "Gallery"];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border border-white/10 bg-ybit-black/45 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center border border-ybit-gold bg-ybit-gold text-sm font-black text-ybit-black">
            YB
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-bold uppercase tracking-[0.24em] text-white">
              Ybit
            </span>
            <span className="block text-[10px] uppercase tracking-[0.34em] text-ybit-muted">
              Entertainment
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-ybit-muted md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <Button href="#booking" className="min-h-10 px-4 text-[11px]">
          Book
        </Button>
      </div>
    </header>
  );
}
