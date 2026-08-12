"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-spacing relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/MENGO/IMG-20260715-WA0021.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-black/25 px-5 py-12 text-center backdrop-blur-sm md:px-10 md:py-16"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-ybit-rose">
            Ready to Create Something Amazing?
          </p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Let&apos;s Make Your Event Unforgettable
          </h2>
          <p className="mb-10 text-base leading-8 text-ybit-muted md:text-lg">
            Whether you&apos;re planning a wedding, organizing a festival, or hosting a corporate event, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white hover:text-ybit-black sm:w-auto"
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
