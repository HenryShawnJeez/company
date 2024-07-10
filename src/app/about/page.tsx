//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";
import ScrollReveal from "@/components/RevelOnScroll";
import FirstSection from "@/components/AboutUs/FirstSection";
import FunFact from "@/components/AboutUs/FunFact";

//Import Needed Images
import logo from "../../../public/logo.png"



const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={logo} pageName="About Us" currentPage="about us"/>
            <ScrollReveal>
                <FirstSection />
            </ScrollReveal>
            <ScrollReveal>
                <FunFact />
            </ScrollReveal>
        </main>
     );
}
 
export default page;