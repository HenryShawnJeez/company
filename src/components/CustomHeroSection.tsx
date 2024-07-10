import Image from "next/image";

import logo from "../../public/logo.png"

const CustomHeroSection = () => {
    return ( 
        <main className="relative w-full h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem] 2xl:h-[50rem]">
            <Image src={logo} alt="Logo" className="h-full w-full object-cover object-center"/>
            <section className="absolute h-full w-full top-0 left-0 bg-bgDark/80">

            </section>
        </main>
     );
}
 
export default CustomHeroSection;
//py-6 px-5 sm:px-10 md:px-20 xl:px-32