"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EVENT_CATEGORIES } from "@/lib/constants";

export default function ExperienceCategories() {
  return (
    <section className="section-spacing bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-ybit-rose">
            Our Services
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Experience Categories
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ybit-muted md:text-lg">
            From intimate gatherings to grand productions, we specialize in creating extraordinary events across all occasions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {EVENT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group relative block h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-ybit-charcoal shadow-[0_0_30px_rgba(0,0,0,0.25)]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-ybit-rose">
                    {category.subtitle}
                  </p>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mb-4 max-w-xs text-sm leading-6 text-ybit-muted">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-ybit-rose transition-all group-hover:gap-2">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
