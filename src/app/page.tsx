import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsSection from "@/components/sections/StatsSection";
import WhySection from "@/components/sections/WhySection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <WhySection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PartnersSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
}
