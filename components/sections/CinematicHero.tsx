"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-24">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-[112%] w-full object-cover opacity-55"
        poster="/MENGO/IMG-20260715-WA0003.jpg"
      >
        <source src="/MENGO/VID-20260721-WA0009.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 ybit-grid opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98),rgba(5,5,5,0.42)_58%,rgba(5,5,5,0.9)),linear-gradient(180deg,rgba(5,5,5,0.12),rgba(5,5,5,1))]" />

      <div className="ybit-container relative z-10 flex min-h-[100svh] items-end pb-10 pt-16 md:pb-16 md:pt-20">
        <div className="grid w-full gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-10">
          <div className="max-w-5xl">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-ybit-rose sm:text-xs">
              Westlands, Nairobi · Est. 25 August 2019
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-[clamp(3.5rem,8vw,10rem)] font-semibold leading-[0.78] tracking-[-0.065em] text-white"
            >
              <span className="block overflow-hidden"><span className="block">Events with</span></span>
              <span className="block overflow-hidden text-ybit-rose"><span className="block">a pulse.</span></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-sm leading-7 text-ybit-muted sm:text-base md:mt-8 md:text-lg"
            >
              Ybit Entertainment designs, produces, and hosts celebrations that feel intentional from first arrival to final applause.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full sm:w-auto">
                  <span>Plan an Event</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/festivals" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="group w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  <span>View tickets</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          <aside className="hidden border-l border-white/15 pl-8 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-ybit-muted">Platform direction</p>
            <p className="mt-4 max-w-sm font-serif text-2xl leading-tight text-ybit-ivory xl:text-3xl">
              Premium planning, public access, M-Pesa checkout, and merch drops in one event house.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
