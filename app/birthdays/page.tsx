"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gift, PartyPopper, Cake, Sparkles } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CategoryHero from "@/components/sections/CategoryHero";
import Button from "@/components/ui/Button";
import { PACKAGES, GALLERY_IMAGES } from "@/lib/constants";

const birthdayImages = GALLERY_IMAGES.filter(
  (img) => img.category === "birthdays"
).slice(0, 6);

const features = [
  {
    icon: Gift,
    title: "Custom Themes",
    description: "Personalized decor and styling for any age or theme.",
  },
  {
    icon: PartyPopper,
    title: "Entertainment",
    description: "From clowns to DJs, we bring the party to life.",
  },
  {
    icon: Cake,
    title: "Catering",
    description: "Delicious cakes and refreshments for all ages.",
  },
  {
    icon: Sparkles,
    title: "Memorable Moments",
    description: "Photo booths and special touches to capture the joy.",
  },
];

export default function BirthdaysPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CategoryHero
          title="Birthdays"
          subtitle="Celebrations"
          description="Whether it's a milestone birthday or an intimate gathering, we create celebrations that leave lasting memories."
          image="/MENGO/IMG-20260715-WA0013.jpg"
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
                Birthday Services
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
                Birthday Gallery
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {birthdayImages.map((image, index) => (
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

        {/* Packages */}
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
                Packages
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Birthday Packages
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PACKAGES.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-8 rounded-xl ${
                    pkg.popular
                      ? "bg-secondary-dark text-text-light ring-2 ring-primary"
                      : "bg-background-warm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-dark text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3
                    className={`font-display text-2xl font-bold mb-2 ${
                      pkg.popular ? "text-text-light" : "text-text-primary"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      pkg.popular
                        ? "text-text-light-secondary"
                        : "text-text-secondary"
                    }`}
                  >
                    {pkg.bestFor}
                  </p>
                  <p className="text-primary font-semibold text-xl mb-6">
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2 text-sm ${
                          pkg.popular
                            ? "text-text-light-secondary"
                            : "text-text-secondary"
                        }`}
                      >
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/book">
                    <Button
                      variant={pkg.popular ? "primary" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
