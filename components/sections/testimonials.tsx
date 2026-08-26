"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export  function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-ybit-black py-16 md:py-32 section-compact">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 92, 141, 0.3) 2%, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-ybit-rose">
            Testimonials
          </p>
          <h2 className="text-4xl font-serif  text-ybit-ivory md:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl rounded-[2rem] p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="mx-auto mb-6 h-12 w-12 text-ybit-rose opacity-60" />
              <blockquote className="mb-8 font-serif text-2xl leading-relaxed text-ybit-ivory md:text-3xl">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-lg font-semibold text-ybit-rose">
                  {TESTIMONIALS[current].author}
                </p>
                <p className="text-sm text-ybit-muted">
                  {TESTIMONIALS[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 cursor-pointer  items-center justify-center rounded-full border border-ybit-rose text-ybit-rose transition-all hover:border-ybit-rose hover:bg-ybit-rose hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-6 bg-ybit-rose" : "w-2 bg-ybit-rose/30 hover:bg-ybit-rose/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-ybit-rose hover:text-white transition-all hover:border-ybit-rose hover:bg-ybit-rose text-ybit-rose"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
