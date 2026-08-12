"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function FeaturedWork() {
  const featuredImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="section-spacing bg-[#0a0a0c]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-ybit-rose">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured Work
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm font-medium uppercase tracking-[0.18em] text-ybit-rose transition-all hover:gap-2"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={
                  index === 0 || index === 3
                    ? "relative h-[280px] min-h-[280px] md:h-[420px]"
                    : "relative h-[200px] md:h-[250px]"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-colors duration-300 hover:bg-black/40 hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-[0.28em] text-white">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
