import { Footer } from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { FeaturesSection } from "@/components/sections/features/FeaturesSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";

export default function InitialPage({ userId }: { userId: string | null }) {
  return (
    <main>
      <Navigation />
      <HeroSection userId={userId} />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
