"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/MENGO/IMG-20260715-WA0021.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-secondary-dark/85" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Ready to Create Something Amazing?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Let&apos;s Make Your Event Unforgettable
          </h2>
          <p className="text-text-light-secondary text-lg mb-10">
            Whether you&apos;re planning a wedding, organizing a festival, or hosting
            a corporate event, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="group">
                Start Planning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-secondary-dark"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
