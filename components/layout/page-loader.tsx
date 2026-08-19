"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useState } from "react";

export function PageLoader() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef({ value: 0 });
  const [label, setLabel] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setIsVisible(false);
        return;
      }

      const updateLabel = () => setLabel(Math.round(progress.current.value));
      const timeline = gsap.timeline();
      let hasFinished = false;
      const finish = () => {
        if (hasFinished) return;
        hasFinished = true;
        timeline
          .to(progress.current, {
            value: 100,
            duration: 0.45,
            ease: "power2.out",
            onUpdate: updateLabel,
          })
          .to(
            "[data-loader-copy]",
            { yPercent: -110, duration: 0.45, ease: "power4.in" },
            "-=0.18",
          )
          .to(root.current, {
            yPercent: -105,
            duration: 0.85,
            ease: "power4.inOut",
            onComplete: () => setIsVisible(false),
          });
      };

      timeline.to(progress.current, {
        value: 82,
        duration: 0.8,
        ease: "power2.out",
        onUpdate: updateLabel,
      });
      const fallback = window.setTimeout(finish, 1800);
      window.addEventListener("load", finish, { once: true });

      return () => {
        window.clearTimeout(fallback);
        window.removeEventListener("load", finish);
      };
    },
    { scope: root },
  );

  if (!isVisible) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] overflow-hidden bg-ybit-black text-ybit-ivory"
    >
      {/* <div data-loader-gate className="absolute inset-0 ybit-grid" /> */}
      <div data-loader-copy className="pointer-events-none absolute inset-0 z-[91] flex items-center justify-center scale-up-hor-center">

        <Image
          src="/foo.png"
          alt="Ybit Entertainment logo"
          width={180}
          height={180}
          className="h-auto w-auto object-contain scale-150 md:scale-200"
        />
      </div>
      <div className="relative flex h-full flex-col justify-end p-6 md:p-10">
        <div
          data-loader-copy
          className="flex items-end justify-between border-t border-black/15 pt-4"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-ybit-muted">
            Ybit Entertainment
          </p>
          <p className="font-serif text-[clamp(5rem,15vw,14rem)] leading-none text-ybit-rose">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
