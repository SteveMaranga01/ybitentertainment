"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap
        .timeline()
        .set("[data-route-curtain]", { yPercent: 0, autoAlpha: 1, display: "flex" })
        .to("[data-route-curtain]", {
          yPercent: -105,
          duration: 1.8,
          ease: "power4.inOut",
        })
        .from(
          "[data-route-content]",
          { y: 16, autoAlpha: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        )
        .set("[data-route-curtain]", { autoAlpha: 0, display: "none" })
        .set("[data-route-content]", { clearProps: "all" });
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="relative">
      <div data-route-curtain className="pointer-events-none fixed inset-0 z-[90] bg-ybit-rose" />
      <div data-route-curtain className="pointer-events-none fixed inset-0 z-[91] flex items-center justify-center">
        <Image
          src="/nav.png"
          alt="Ybit Entertainment logo"
          width={180}
          height={180}
          className="h-auto w-auto object-cover scale-150 md:scale-200"
        />
      </div>
      <div data-route-content>{children}</div>
    </div>
  );
}
