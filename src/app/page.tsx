//Import Needed Components
import Nav from "@/components/HomePage/Nav";
import HeroSection from "@/components/HomePage/HeroSection";
import Interested from "@/components/HomePage/Interested";
import MapSection from "@/components/HomePage/MapSection";



export default function Home() {
  return (
    <main className="bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark">
      <Nav />
      <HeroSection />
      <Interested />
      <MapSection />
    </main>
  );
}
