import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkflowSection } from "@/components/sections/workflow-section";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]" />
      <div className="relative z-10 flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <WorkflowSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
