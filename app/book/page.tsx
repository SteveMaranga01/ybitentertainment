"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Ticket, Send } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Button from "@/components/ui/Button";

const tabs = [
  { id: "plan", label: "Plan An Event", icon: CalendarDays },
  { id: "attend", label: "Attend An Event", icon: Ticket },
];

const eventTypes = [
  "Wedding",
  "Festival",
  "Birthday",
  "Corporate Event",
  "Other",
];

const budgetRanges = [
  "Under KSh 50,000",
  "KSh 50,000 - 100,000",
  "KSh 100,000 - 250,000",
  "KSh 250,000 - 500,000",
  "KSh 500,000+",
  "Custom Quote",
];

export default function BookPage() {
  const [activeTab, setActiveTab] = useState("plan");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    guestCount: "",
    budgetRange: "",
    services: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement API call
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-secondary-dark">
          <div className="container-custom text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              Get Started
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-text-light"
            >
              Book With Us
            </motion.h1>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-background-dark sticky top-20 z-30">
          <div className="container-custom">
            <div className="flex justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all border-b-2 ${
                    activeTab === tab.id
                      ? "text-primary border-primary"
                      : "text-text-light-secondary border-transparent hover:text-text-light"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="section-spacing bg-background">
          <div className="container-custom max-w-3xl">
            <AnimatePresence mode="wait">
              {activeTab === "plan" ? (
                <motion.div
                  key="plan"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                      Plan Your Event
                    </h2>
                    <p className="text-text-secondary">
                      Tell us about your dream event and we&apos;ll make it happen.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Event Type *
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Venue or city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Guest Count
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Estimated guests"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background-warm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us more about your event vision..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="attend"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                      Attend An Event
                    </h2>
                    <p className="text-text-secondary">
                      Browse upcoming events and get your tickets.
                    </p>
                  </div>

                  {/* Upcoming Events */}
                  <div className="space-y-6">
                    <div className="p-6 bg-background-warm rounded-xl border border-border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                            Upcoming
                          </span>
                          <h3 className="font-display text-2xl font-bold text-text-primary">
                            Ybit Festival 2026
                          </h3>
                          <p className="text-text-secondary text-sm mt-1">
                            Music & Arts Festival • Nairobi, Kenya
                          </p>
                          <p className="text-text-muted text-sm">
                            Date to be announced
                          </p>
                        </div>
                        <Button>View Event</Button>
                      </div>
                    </div>

                    <div className="p-8 bg-background-dark rounded-xl text-center">
                      <Ticket className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold text-text-light mb-2">
                        More Events Coming Soon
                      </h3>
                      <p className="text-text-light-secondary">
                        We&apos;re planning exciting events. Check back soon or
                        follow us on social media to stay updated.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
