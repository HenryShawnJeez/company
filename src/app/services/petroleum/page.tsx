//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";
import FirstSectionP from "@/components/Service/FirstSectionP";
import ScrollReveal from "@/components/RevelOnScroll";
import PetroluemList from "@/components/Service/PetroluemList";

//Import Needed Images
import img from "../../../../public/service1.jpeg"



const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={img} pageName="Petroleum Services" currentPage="Services | Petroleum"/>
            <FirstSectionP />
            <ScrollReveal>
                <PetroluemList />
            </ScrollReveal>
        </main>
     );
}
 
export default page;