//Import Needed Components
import HeroSection from "@/components/HomePage/HeroSection";
import Nav from "@/components/HomePage/Nav";


export default function Home() {
  return (
    <main className="text-textLight bg-bgLight dark:bg-bgDark dark:text-textDark">
      <Nav />
      <HeroSection />
    </main>
  );
}
