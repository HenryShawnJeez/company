//Import Needed Components
import Nav from "@/components/HomePage/Nav";
import HeroSection from "@/components/HomePage/HeroSection";
import Interested from "@/components/HomePage/Interested";
import MapSection from "@/components/HomePage/MapSection";
import ScrollReveal from "@/components/RevelOnScroll";
import Faq from "@/components/HomePage/Faq";
import Cards from "@/components/HomePage/Cards";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Interested />
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
      <ScrollReveal>
        <Faq />
      </ScrollReveal>
      <ScrollReveal>
        <Cards />
      </ScrollReveal>
    </main>
  );
}
