import Image from "next/image";

//Import Needed Images
import chooseUsImg from "../../../public/service.jpg";


const WhyChooseUs = () => {
    return (
        <main className="py-6 px-5 sm:px-10 md:px-20 xl:px-32 mt-20">
            <section className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row md:justify-between">
                <div className="relative md:w-[45%] xl:w-[48%] h-[30rem]">
                    <Image src={chooseUsImg} alt="Machine Image" className="h-full object-cover object-center md:w-[80%] rounded-2xl" />
                    <div className="absolute w-full lg:w-[80%] h-full -z-10 left-10 top-10 bg-yellow-400 dark:bg-yellow-600 rounded-2xl"></div>
                </div>
                <div className="md:w-[45%] xl:w-[48%] flex flex-col gap-y-5 md:gap-y-7 xl:gap-y-10">
                    <p className="text-base md:text-lg xl:text-xl opacity-70">Why Choose Us</p>
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Your Partner for Success in Oil, Gas, and Machinery Trading</h1>
                    <p className="opacity-70">At Melvin Trade B.V., we offer unmatched expertise and comprehensive services in the oil, gas, and machinery markets. Our global network connects you with key opportunities, while our commitment to compliance ensures smooth, risk-free transactions. With a dedicated team providing personalized support and innovative solutions, we help your business thrive in a competitive landscape. Choose us for a reliable partner dedicated to your success.</p>
                    <div className="border-2 border-yellow-400 dark:border-yellow-600 w-[2rem] md:w-[4rem] lg:w-[6rem] 2xl:w-[8rem]"></div>
                </div>
            </section>
        </main>
    );
}

export default WhyChooseUs;