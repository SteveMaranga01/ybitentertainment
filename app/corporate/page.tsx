"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, Users, Mic, Target } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CategoryHero from "@/components/sections/CategoryHero";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/constants";

const corporateImages = GALLERY_IMAGES.filter(
  (img) => img.category === "corporate"
).slice(0, 6);

const features = [
  {
    icon: Building2,
    title: "Brand Activations",
    description: "Memorable product launches and brand experiences.",
  },
  {
    icon: Users,
    title: "Conferences",
    description: "Professional event production for seminars and summits.",
  },
  {
    icon: Mic,
    title: "Corporate Galla",
    description: "Annual parties, award ceremonies, and team building.",
  },
  {
    icon: Target,
    title: "Team Building",
    description: "Engaging activities that strengthen team bonds.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CategoryHero
          title="Corporate"
          subtitle="Activations"
          description="Professional event production for product launches, brand activations, conferences, and corporate gatherings."
          image="/MENGO/IMG-20260715-WA0019.jpg"
        />

        {/* Features Section */}
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
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Corporate Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-spacing bg-secondary-dark">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "200+", label: "Corporate Events" },
                { value: "50+", label: "Brand Partners" },
                { value: "10K+", label: "Attendees Served" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-text-light-secondary text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-spacing bg-background-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                Our Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light">
                Corporate Gallery
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {corporateImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/gallery">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary-dark">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Ready to Elevate Your Corporate Event?
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
                Let us help you create a professional, memorable event that
                reflects your brand&apos;s excellence.
              </p>
              <Link href="/book">
                <Button size="lg">Get a Quote</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
