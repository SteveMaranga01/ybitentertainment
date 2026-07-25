import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CinematicHero from "@/components/sections/CinematicHero";
import ExperienceCategories from "@/components/sections/ExperienceCategories";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CinematicHero />
        <ExperienceCategories />
        <FeaturedWork />
        <ProcessTimeline />
        <Testimonials />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
