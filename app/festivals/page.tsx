"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Ticket, Users, Star, Crown, Music, Zap } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CategoryHero from "@/components/sections/CategoryHero";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/constants";

const festivalImages = GALLERY_IMAGES.filter(
  (img) => img.category === "festivals"
).slice(0, 6);

const ticketTiers = [
  {
    name: "Early Bird",
    description: "Limited early purchase discount",
    price: "KSh 1,500",
    spotsLeft: 23,
    icon: Ticket,
    benefits: ["General admission", "Event access", "Standard amenities"],
  },
  {
    name: "Regular",
    description: "Standard admission",
    price: "KSh 2,500",
    spotsLeft: 150,
    icon: Users,
    benefits: ["General admission", "Event access", "Standard amenities"],
    popular: true,
  },
  {
    name: "VIP Access",
    description: "Lounge + priority entry",
    price: "KSh 5,000",
    spotsLeft: 12,
    icon: Star,
    benefits: [
      "Priority entry",
      "VIP lounge access",
      "Premium seating",
      "Complimentary drinks",
    ],
  },
  {
    name: "VVIP Table",
    description: "Table reservation",
    price: "KSh 25,000",
    spotsLeft: 3,
    icon: Crown,
    benefits: [
      "Reserved table",
      "Table service",
      "Premium bar access",
      "Backstage access",
      "Meet & greet",
    ],
  },
];

export default function FestivalsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CategoryHero
          title="Festivals"
          subtitle="The Circuit"
          description="High-energy festival production that brings together music, art, and community in extraordinary celebrations."
          image="/MENGO/IMG-20260715-WA0016.jpg"
          ctaText="View Events"
          ctaHref="#events"
        />

        {/* Energy Section */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                  The Energy
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
                  Experience the Circuit
                </h2>
                <p className="text-text-secondary text-lg mb-6">
                  Our festivals are more than events — they&apos;re movements. From
                  pulsating music to immersive art installations, every element
                  is designed to create unforgettable moments.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="font-display text-3xl font-bold text-primary">
                      50K+
                    </p>
                    <p className="text-text-secondary text-sm">Attendees</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-primary">
                      100+
                    </p>
                    <p className="text-text-secondary text-sm">Artists</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-primary">
                      5
                    </p>
                    <p className="text-text-secondary text-sm">Stages</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/MENGO/IMG-20260715-WA0020.jpg"
                  alt="Festival energy"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="events" className="section-spacing bg-background-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                Upcoming Events
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light">
                Festival Calendar
              </h2>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary rounded-xl overflow-hidden max-w-4xl mx-auto"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/MENGO/IMG-20260715-WA0013.jpg"
                  alt="Upcoming Festival"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-secondary-dark text-sm font-semibold rounded-full">
                  Upcoming
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-4 text-sm text-text-light-secondary mb-4">
                  <span className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-primary" />
                    Music & Arts Festival
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Nairobi, Kenya
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold text-text-light mb-4">
                  Ybit Festival 2026
                </h3>
                <p className="text-text-light-secondary mb-6">
                  The biggest music and arts festival in East Africa. Join us
                  for three days of incredible music, art installations, and
                  unforgettable experiences.
                </p>
                <div className="flex items-center gap-4">
                  <Button>Get Tickets</Button>
                  <Button variant="ghost" className="text-text-light hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ticket Tiers */}
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
                Access Tiers
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Choose Your Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ticketTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-6 rounded-xl ${
                    tier.popular
                      ? "bg-secondary-dark text-text-light ring-2 ring-primary"
                      : "bg-background-warm"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-secondary-dark text-xs font-semibold rounded-full">
                      Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tier.popular ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <tier.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          tier.popular ? "text-text-light" : "text-text-primary"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={`text-xs ${
                          tier.popular
                            ? "text-text-light-secondary"
                            : "text-text-muted"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>
                  </div>

                  <p className="text-primary font-bold text-2xl mb-4">
                    {tier.price}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={`flex items-center gap-2 text-sm ${
                          tier.popular
                            ? "text-text-light-secondary"
                            : "text-text-secondary"
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs ${
                        tier.spotsLeft <= 10
                          ? "text-red-500"
                          : tier.popular
                          ? "text-text-light-secondary"
                          : "text-text-muted"
                      }`}
                    >
                      {tier.spotsLeft} left
                    </span>
                    <Button
                      variant={tier.popular ? "primary" : "outline"}
                      size="sm"
                    >
                      Select
                    </Button>
                  </div>
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
                Past Events
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light">
                Festival Gallery
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {festivalImages.map((image, index) => (
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
