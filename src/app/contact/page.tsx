//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";

//Import Needed Images
import contactUsImg from "../../../public/googleMap.jpg"

const page = () => {
    return ( 
        <main>
            <CustomHeroSection imgSrc={contactUsImg} pageName="Contact Us" currentPage="contact us" />
        </main>
     );
}
 
export default page;