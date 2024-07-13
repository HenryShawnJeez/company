//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";
import FirstSection from "@/components/Service/FirstSection";



//Import Needed Images
import img from "../../../../public/service.jpg"



const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={img} pageName="Machinery Services" currentPage="Services | Machinery"/>
            <FirstSection />
        </main>
     );
}
 
export default page;