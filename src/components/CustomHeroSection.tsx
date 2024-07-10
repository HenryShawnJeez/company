import Image from "next/image";

import logo from "../../public/logo.png"

const CustomHeroSection = () => {
    return ( 
        <main className="relative w-full h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem] 2xl:h-[50rem]">
            <Image src={logo} alt="Logo" className="h-full w-full object-cover object-center opacity-10"/>
            <section className="absolute h-full w-full top-0 left-0 bg-bgDark/80 text-textDark flex items-center justify-center">
            <div className="flex flex-col gap-y-10 text-right">
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold ">About us</h1>
                <p className="text-sm md:text-base xl:text-lg text-right uppercase"><span className="text-textDark/30">Home </span>| About us</p>
            </div>
                
            </section>
        </main>
     );
}
 
export default CustomHeroSection;
//py-6 px-5 sm:px-10 md:px-20 xl:px-32