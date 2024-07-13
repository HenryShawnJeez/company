//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";

//Import Needed Images
import img from "../../../../public/service1.jpeg"


const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={img} pageName="Petroleum Services" currentPage="Services | Petroleum"/>
        </main>
     );
}
 
export default page;