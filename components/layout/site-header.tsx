"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/sponsors", label: "Sponsors" },
    ],
  },
  {
    href: "/weddings",
    label: "Experiences",
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

const menuVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 }
  },
};

const mobileVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto", 
    transition: { type: "spring", stiffness: 300, damping: 30 } 
  },
};

const mobileupVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-2">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border border-white/10 bg-ybit-black/45 px-4 backdrop-blur-xl md:px-6">
        <Link href="/" className="relative w-35 h-20 overflow-hidden">
          <Image alt="Ybit Logo" src="/nav.png" fill className="object-cover" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-ybit-muted">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => item.children && setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="hover:text-white flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <FaAngleRight className="text-[10px] group-hover:rotate-90 transition-transform" />
                )}
              </Link>

              <AnimatePresence>
                {item.children && activeMenu === item.label && (
                  <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-2xl bg-ybit-black/90 backdrop-blur-xl border border-white/10 py-2 min-w-48"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-2.5 hover:text-white hover:bg-white/5 transition-colors text-[11px]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <Button
          href="/book"
          className="hidden md:inline-flex min-h-10 px-4 text-[11px]"
        >
          book
        </Button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ybit-gold "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden mt-2 border border-white/10 bg-ybit-black/70 backdrop-blur-xl p-4 overflow-hidden"
          >
            <motion.div
              variants={mobileupVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <div key={item.href} className="py-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === item.label ? null : item.label,
                          )
                        }
                        className="flex w-full items-center justify-between text-ybit-muted hover:text-white"
                      >
                        {item.label}
                        <motion.span
                          animate={{
                            rotate: activeMenu === item.label ? 90 : 0,
                          }}
                        >
                          <FaAngleRight />
                        </motion.span>
                      </button>
                      {activeMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pl-4 mt-3 flex flex-col gap-3 border-l border-white/10"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-ybit-muted hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-ybit-muted hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button href="/book" className="w-full min-h-10 px-4 text-[11px]">
                book
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
