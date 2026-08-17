"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { experiences } from "@/lib/data/home";
import { SectionIntro } from "@/components/sections/section-intro";

gsap.registerPlugin(ScrollTrigger);

const experienceLinks = ["/weddings", "/festivals", "/birthdays"];

export function ExperienceSection() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistance = () => {
            const trackEl = track.current;
            const rootEl = root.current;
            if (!trackEl || !rootEl) return 0;
            return Math.max(0, trackEl.scrollWidth - rootEl.offsetWidth + 32);
          };

          if (!getDistance()) return;

          gsap.to(track.current, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${getDistance()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        },
      );

      return () => media.revert();
    },
    { scope: root, dependencies: [] },
  );

  return (
    <section
      ref={root}
      id="experiences"
      className="relative overflow-hidden bg-ybit-black py-24 lg:flex lg:min-h-screen lg:items-center lg:py-0"
    >
      <div className="ybit-container w-full lg:max-w-none lg:px-0">
        <div className="ybit-container lg:mb-14">
          <SectionIntro
            eyebrow="Select an experience"
            title="One house. Different worlds."
            text="Choose the energy first. We build every other detail around it."
          />
        </div>
        <div
          ref={track}
          className="mt-14 flex flex-col gap-5 lg:mt-0 lg:w-max lg:flex-row lg:gap-6 lg:pl-[max(1rem,calc((100vw-1440px)/2))]"
        >
          {experiences.map((experience, index) => (
            <Link
              key={experience.title}
              href={experienceLinks[index]}
              className="group relative min-h-[460px] overflow-hidden border border-ybit-line bg-ybit-charcoal lg:min-h-[540px] lg:w-[min(68vw,840px)]"
            >
              <Image
                src={experience.image}
                alt={`${experience.title} event by Ybit Entertainment`}
                fill
                className="object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                sizes="(min-width: 1024px) 68vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.82),rgba(5,5,5,0.08)_70%),linear-gradient(0deg,rgba(5,5,5,0.72),transparent_58%)]" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-ybit-rose">
                  0{index + 1} / {experience.label}
                </p>
                <span className="grid size-10 place-items-center rounded-full border border-ybit-line text-lg transition duration-300 group-hover:border-ybit-rose group-hover:bg-ybit-rose group-hover:text-ybit-black">
                  ↗
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <h3 className="font-serif text-5xl leading-none text-ybit-ivory md:text-7xl">
                  {experience.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-ybit-muted transition duration-300 group-hover:text-ybit-ivory">
                  {experience.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
