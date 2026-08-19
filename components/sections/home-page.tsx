import { BookingSection } from "@/components/sections/booking-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterCTA } from "@/components/sections/footer-cta";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MerchSection } from "@/components/sections/merch-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TicketsSection } from "@/components/sections/tickets-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/finalCTA"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <BookingSection />
      <TicketsSection />
      <MerchSection />
      <ProcessSection />
      <GallerySection />
      <Testimonials />
      <FinalCTA/>
      <FooterCTA />
    </>
  );
}
