import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080810] min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
