"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    info: "Learn more about Ybit Entertainment and our mission.",
    image: "/MENGO/IMG-20260715-WA0019.jpg",
    label: "About",
    description: "The people and partners behind the Ybit house.",
    children: [
      { href: "/about", label: "Our story" },
      { href: "/team", label: "Meet the team" },
      { href: "/sponsors", label: "Partner with us" },
    ],
  },
  {
    href: "/weddings",
    info: "Celebrate your love story with a custom wedding experience.",
    image: "/MENGO/IMG-20260715-WA0024.jpg",
    label: "Experiences",
    description:
      "Private celebrations and public moments, produced end to end.",
    children: [
      { href: "/weddings", label: "Weddings" },
      { href: "/festivals", label: "Festivals" },
      { href: "/birthdays", label: "Birthdays" },
      { href: "/corporate", label: "Corporate" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

const panelTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const panelVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1 },
};

const mobileSubmenuVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1 },
};

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    if (isOpen || activeMenu) {
      frame = window.requestAnimationFrame(() => {
        setIsOpen(false);
        setActiveMenu(null);
      });
    }
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border border-white/10 bg-ybit-black/75 px-4 py-1.5 backdrop-blur-2xl md:px-6">
        <Link
          href="/"
          aria-label="Ybit Entertainment home"
          className="relative h-14 w-28 overflow-hidden md:h-16 md:w-32"
        >
          <Image
            alt="Ybit Entertainment"
            src="/nav.png"
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ybit-muted lg:flex"
        >
          {navItems.map((item) => {
            const current = item.children
              ? item.children.some((child) => isCurrent(child.href))
              : isCurrent(item.href);
            const menuId = `nav-${item.label.toLowerCase()}`;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={activeMenu === item.label}
                    aria-controls={menuId}
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === item.label ? null : item.label,
                      )
                    }
                    onFocus={() => setActiveMenu(item.label)}
                    className={`nav flex items-center gap-1.5 py-4 transition-colors hover:text-white ${current ? "text-white after:scale-x-100" : ""}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-3 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`nav py-4 transition-colors hover:text-white ${current ? "text-white after:scale-x-100" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && activeMenu === item.label ? (
                    <motion.div
                      id={menuId}
                      role="menu"
                      initial={{ opacity: 0, y: -12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={panelTransition}
                      className={`absolute left-1/2 top-full mt-1 grid ${item.label=="Experiences" ? "w-[800px]" : "w-[700px]"} -translate-x-1/2 grid-cols-[0.8fr_1fr_1.2fr] border border-white/10 bg-ybit-charcoal p-2 shadow-2xl`}
                    >
                      <div className="border-r border-white/10 p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-ybit-rose">
                          {item.label}
                        </p>
                        <p className="mt-4 font-serif text-2xl leading-tight text-ybit-ivory">
                          {item.description}
                        </p>
                      </div>
                      <div className="p-2 border-r border-white/10">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="group flex items-center justify-between px-4 py-3 text-ybit-muted transition hover:bg-white/[0.05] hover:text-white"
                          >
                            <span>{child.label}</span>
                            <span className="text-ybit-rose transition-transform group-hover:translate-x-1">
                              0{index + 1}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className={`grid place-items-center p-4 ${item.label=="Experiences" ? "py-10":""}`}>
                        <div className="group relative h-50 w-50 overflow-hidden scale-130 rounded-sm transition-transform hover:scale-135">
                          <div className="absolute inset-0 z-20 flex items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="text-sm uppercase font-serif text-ybit-ivory">{item.info}</p>
                          </div>
                          <div className="absolute inset-0 z-10 opacity-65 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(180deg,rgba(5,5,5,0.82),rgba(5,5,5,0.08)_70%),linear-gradient(0deg,rgba(5,5,5,0.72),transparent_58%)]" />
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book" className="min-h-10 px-4 text-[10px]">
            Book an event
          </Button>
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="grid size-10 place-items-center text-ybit-ivory lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={panelTransition}
            style={{ transformOrigin: "top" }}
            aria-label="Mobile navigation"
            className="mx-auto mt-2 max-w-[1440px] overflow-hidden border border-white/10 bg-ybit-charcoal p-4 lg:hidden"
          >
            {navItems.map((item) => (
              <div
                key={item.href}
                className="border-b border-white/10 py-3 last:border-0"
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={activeMenu === item.label}
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-ybit-ivory"
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-4 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {activeMenu === item.label ? (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={panelTransition}
                          style={{ transformOrigin: "top" }}
                          className="grid gap-3 overflow-hidden pt-4 pl-4"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-sm text-ybit-muted"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-ybit-ivory"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button href="/book" className="mt-4 w-full">
              Book an event
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
