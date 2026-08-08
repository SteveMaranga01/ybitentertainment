"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.timeline()
        .set("[data-route-curtain]", { yPercent: 0 })
        .to("[data-route-curtain]", { yPercent: -105, duration: 0.8, ease: "power4.inOut" })
        .from("[data-route-content]", { y: 22, autoAlpha: 0, duration: 0.65, ease: "power3.out" }, "-=0.42");
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="relative">
      <div data-route-curtain className="pointer-events-none fixed inset-0 z-[90] bg-ybit-rose" />
      <div data-route-content>{children}</div>
    </div>
  );
}
