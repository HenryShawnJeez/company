//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";

//Import Needed Images
import logo from "../../../public/logo.png"

const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={logo} pageName="About Us" currentPage="about us"/>
        </main>
     );
}
 
export default page;