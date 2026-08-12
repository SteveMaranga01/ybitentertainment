"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
  return (
    <section className="section-spacing bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-ybit-rose">
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-[1.6rem] border border-white/10 bg-[#0b0b0d] p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.18)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-ybit-rose/30 bg-ybit-rose/10">
                <span className="font-serif text-3xl font-bold text-ybit-rose">
                  {step.step}
                </span>
              </div>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-[calc(100%-8px)] top-10 hidden h-[2px] w-[calc(100%-16px)] bg-white/10 md:block" />
              )}

              <h3 className="mb-3 text-2xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-7 text-ybit-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
