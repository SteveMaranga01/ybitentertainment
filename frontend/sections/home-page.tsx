import { SiteHeader } from "@/frontend/components/layout/site-header";
import { BookingSection } from "@/frontend/sections/booking-section";
import { ExperienceSection } from "@/frontend/sections/experience-section";
import { FooterCTA } from "@/frontend/sections/footer-cta";
import { GallerySection } from "@/frontend/sections/gallery-section";
import { HeroSection } from "@/frontend/sections/hero-section";
import { MerchSection } from "@/frontend/sections/merch-section";
import { ProcessSection } from "@/frontend/sections/process-section";
import { TicketsSection } from "@/frontend/sections/tickets-section";

export function HomePage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <ExperienceSection />
      <BookingSection />
      <TicketsSection />
      <MerchSection />
      <ProcessSection />
      <GallerySection />
      <FooterCTA />
    </main>
  );
}
