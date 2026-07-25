"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { SITE } from "@/lib/constants";

const stats = [
  { icon: Calendar, value: "2019", label: "Founded" },
  { icon: MapPin, value: "Westlands", label: "Location" },
  { icon: Users, value: "500+", label: "Events Completed" },
  { icon: Award, value: "50+", label: "Awards Won" },
];

const team = [
  {
    name: "Founding Team",
    role: "Visionary Leadership",
    description:
      "A passionate team of event professionals dedicated to creating extraordinary experiences.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-secondary-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25px 25px, rgba(201, 169, 98, 0.3) 2%, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          <div className="container-custom relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-text-light mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-light-secondary text-lg max-w-2xl"
            >
              {SITE.description}
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-3xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-spacing bg-background-dark">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light mb-6">
                  Creating Unforgettable Experiences
                </h2>
                <p className="text-text-light-secondary text-lg mb-6">
                  At Ybit Entertainment, we believe every event should be a
                  masterpiece. Our mission is to transform your vision into
                  reality with creativity, precision, and passion.
                </p>
                <p className="text-text-light-secondary">
                  From the initial concept to the final execution, we handle
                  every detail with care. Our team of experienced professionals
                  works tirelessly to ensure your event exceeds expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/MENGO/IMG-20260715-WA0021.jpg"
                  alt="Ybit Entertainment event"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Our Values
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for perfection in every event we produce, leaving no detail overlooked.",
                },
                {
                  title: "Creativity",
                  description:
                    "We push boundaries and innovate to create unique, memorable experiences.",
                },
                {
                  title: "Passion",
                  description:
                    "We love what we do, and that passion shows in every event we touch.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-background-warm rounded-xl text-center"
                >
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-spacing bg-background-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                The Team
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-light mb-6">
                Meet Our Team
              </h2>
              <p className="text-text-light-secondary text-lg max-w-2xl mx-auto">
                A passionate team of event professionals dedicated to creating
                extraordinary experiences. Together, we bring creativity,
                precision, and passion to every event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                Find Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Our Location
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.119185959036!2d36.8065!3d-1.2641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173de09f6e8d%3A0x6e7b5b5b5b5b5b5b!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ybit Entertainment Location - Westlands, Nairobi"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-text-secondary">
                  <MapPin className="w-5 h-5 inline-block text-primary mr-2" />
                  {SITE.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
