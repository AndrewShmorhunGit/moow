import { Footer } from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { FeaturesSection } from "@/components/sections/features/FeaturesSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
