"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EVENT_CATEGORIES } from "@/lib/constants";

export default function ExperienceCategories() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience Categories
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand productions, we specialize in
            creating extraordinary events across all occasions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group block relative h-[400px] rounded-xl overflow-hidden"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">
                    {category.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-light-secondary text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
