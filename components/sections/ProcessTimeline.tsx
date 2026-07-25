"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
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
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-primary">
                  {step.step}
                </span>
              </div>

              {/* Connector Line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-40%)] h-[2px] bg-primary/20" />
              )}

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
