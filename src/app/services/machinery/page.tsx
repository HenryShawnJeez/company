//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";
import FirstSection from "@/components/Service/FirstSection";
import ScrollReveal from "@/components/RevelOnScroll";
import MachineList from "@/components/Service/MachineList";


//Import Needed Images
import img from "../../../../public/service.jpg"




const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={img} pageName="Machinery Services" currentPage="Services | Machinery"/>
            <FirstSection />
            <ScrollReveal>
                <MachineList />
            </ScrollReveal>
        </main>
     );
}
 
export default page;