//Import Needed Components
import Nav from "@/components/HomePage/Nav";
import HeroSection from "@/components/HomePage/HeroSection";
import Interested from "@/components/HomePage/Interested";
import MapSection from "@/components/HomePage/MapSection";
import ScrollReveal from "@/components/RevelOnScroll";
import Faq from "@/components/HomePage/Faq";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Interested />
      <ScrollReveal>
        <MapSection />
        <Faq />
      </ScrollReveal>
    </main>
  );
}
