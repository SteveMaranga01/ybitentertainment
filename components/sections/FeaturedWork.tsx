"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function FeaturedWork() {
  // Get first 6 images for featured section
  const featuredImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="section-spacing bg-background-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light">
              Featured Work
            </h2>
          </div>
          <Link
            href="/gallery"
            className="flex items-center text-primary mt-4 md:mt-0 hover:gap-2 transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? "h-full min-h-[400px]" : "h-[200px] md:h-[240px]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-secondary-dark/0 hover:bg-secondary-dark/40 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <span className="text-white text-sm font-medium tracking-wider uppercase">
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
