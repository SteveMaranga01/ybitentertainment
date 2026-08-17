"use client";

import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero-kicker]", { y: 18, autoAlpha: 0, duration: 0.45 })
        .from("[data-hero-line]", { yPercent: 110, autoAlpha: 0, duration: 0.85, stagger: 0.1 }, "-=0.15")
        .from("[data-hero-copy]", { y: 20, autoAlpha: 0, duration: 0.5 }, "-=0.45")
        .from("[data-hero-aside]", { x: 24, autoAlpha: 0, duration: 0.55 }, "-=0.35");

      gsap.to("[data-hero-video]", {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root, dependencies: [] },
  );

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden">
      <video
        data-hero-video
        className="absolute inset-0 h-[112%] w-full object-cover opacity-55"
        src="/MENGO/VID-20260721-WA0010.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0  opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0.05)_58%,rgba(255, 255, 255, 0.05)),linear-gradient(180deg,rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0.05))]
" />

      <div className="ybit-container relative z-10 flex min-h-[100svh] items-end pb-12 pt-32 md:pb-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-5xl">
            <p data-hero-kicker className="mb-7 text-xs font-bold uppercase tracking-[0.34em] text-ybit-rose">
              Westlands, Nairobi · Est. 25 August 2019
            </p>
            <h1 className="font-serif text-[clamp(4.25rem,10vw,10.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-ybit-custom ">
              <span className="block overflow-hidden"><span data-hero-line className="block">Events with</span></span>
              <span className="block overflow-hidden text-ybit-rose"><span data-hero-line className="block">a pulse.</span></span>
            </h1>
            <p data-hero-copy className="mt-10 max-w-xl text-base leading-8 text-ybit-muted md:text-lg">
              Ybit Entertainment designs, produces, and hosts celebrations that feel intentional from first arrival to final applause.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button data-hero-action href="#booking">Plan an Event</Button>
              <Button data-hero-action href="#tickets" variant="ghost">View Tickets</Button>
            </div>
          </div>

          <aside data-hero-aside className="hidden border-l border-ybit-line pl-8 lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-muted">Platform direction</p>
            <p className="mt-4 max-w-sm font-serif text-3xl leading-tight text-ybit-custom">
              Premium planning, public access, M-Pesa checkout, and merch drops in one event house.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
