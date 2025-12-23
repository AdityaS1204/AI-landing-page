
import { Header, HeroSection, Logos, BentoSection, SolutionSection, FeaturesSection, CollaborativeSection, PricingSection, CTA, FAQ, Footer } from "@/components/index";
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <Logos />
        <BentoSection />
        <SolutionSection />
        <FeaturesSection />
        <CollaborativeSection />
        <PricingSection />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
