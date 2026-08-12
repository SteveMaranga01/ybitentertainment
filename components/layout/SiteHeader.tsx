"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all duration-300 md:px-5",
          isScrolled ? "" : ""
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border border-white/10 bg-ybit-black/75 px-4 py-1.5 backdrop-blur-2xl md:px-6">
          <Link href="/" aria-label="Ybit Entertainment home" className="relative h-14 w-28 overflow-hidden md:h-16 md:w-32">
            <Image src="/nav.png" alt="Ybit Entertainment" fill className="object-cover" sizes="128px" priority />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-ybit-muted lg:flex">
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const current = hasChildren ? link.children!.some((child) => child.href === "/") : false;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={activeDropdown === link.label}
                      aria-controls={`nav-${link.label.toLowerCase()}`}
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      onFocus={() => setActiveDropdown(link.label)}
                      className="nav flex items-center gap-1.5 py-4 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ChevronDown className={cn("size-3 transition-transform", activeDropdown === link.label && "rotate-180")} />
                    </button>
                  ) : (
                    <Link href={link.href} className="nav py-4 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasChildren && activeDropdown === link.label ? (
                      <motion.div
                        id={`nav-${link.label.toLowerCase()}`}
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full mt-1 grid w-[440px] -translate-x-1/2 grid-cols-[0.8fr_1.2fr] border border-white/10 bg-ybit-charcoal p-2 shadow-2xl"
                      >
                        <div className="border-r border-white/10 p-5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-ybit-rose">{link.label}</p>
                          <p className="mt-4 font-serif text-2xl leading-tight text-ybit-ivory">{link.description ?? "Premium event experiences."}</p>
                        </div>
                        <div className="p-2">
                          {link.children!.map((child, index) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className="group flex items-center justify-between px-4 py-3 text-ybit-muted transition hover:bg-white/[0.05] hover:text-white"
                            >
                              <span>{child.label}</span>
                              <span className="text-ybit-rose transition-transform group-hover:translate-x-1">0{index + 1}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/book" className="ybit-button inline-flex min-h-10 items-center justify-center border border-ybit-rose bg-ybit-rose px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-ybit-black transition hover:text-ybit-black">
              <span className="ybit-button__label" data-label="Book now">
                <span>Book now</span>
              </span>
            </Link>
          </div>

          <button type="button" aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="grid size-10 place-items-center text-ybit-ivory lg:hidden">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} aria-label="Mobile navigation" className="mx-auto mt-2 max-w-[1440px] overflow-hidden border border-white/10 bg-ybit-charcoal p-4 lg:hidden">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-white/10 py-3 last:border-0">
                  {link.children ? (
                    <>
                      <button type="button" aria-expanded={activeDropdown === link.label} onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)} className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-ybit-ivory">
                        {link.label}
                        <ChevronDown className={cn("size-4 transition-transform", activeDropdown === link.label && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeDropdown === link.label ? (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="grid gap-3 overflow-hidden pt-4 pl-4">
                            {link.children!.map((child) => (
                              <Link key={child.href} href={child.href} className="text-sm text-ybit-muted">
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] text-ybit-ivory">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/book" className="mt-4 inline-flex w-full items-center justify-center border border-ybit-rose bg-ybit-rose px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ybit-black">
                Book now
              </Link>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
