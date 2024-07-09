import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import map from "../../../public/map.png";


const MapSection = () => {
    return ( 
        <main className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between px-5 sm:px-10 md:px-20 xl:px-32 py-6 mt-20">
            <div className="flex flex-col gap-y-3 w-full md:w-[45%] lg:w-[48%]">
                <h2 className="font-bold text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Since 2000s</h2>
                <h1 className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">Nestled in the heart of the Netherlands and after over twenty(20) years in the business, we have learned a few things.</h1>
                <p className="text-textLight/50 dark:text-textDark/50">In the early years, Melvin Trade B.V. focused on establishing strong relationships with key stakeholders in the oil and gas sector. The company quickly gained a reputation for its meticulous due diligence, ensuring that all transactions were compliant with international regulations and beneficial for all parties involved. This commitment to excellence laid a solid foundation for the company&apos;s expansion.</p>
                <p className="text-textLight/50 dark:text-textDark/50 mt-1">As the market evolved, so did Melvin Trade B.V. Recognizing the increasing demand for industrial machinery, the company diversified its services to include machinery trading. Today, Melvin Trade B.V. is not only a leader in facilitating oil and gas transactions but also a premier source for high-quality industrial equipment. The company&apos;s comprehensive services now encompass procurement, logistics, quality control, and after-sales support, catering to a wide range of industries, from construction and agriculture to mining and packaging.</p>
                <Link href="/contact" className="font-medium mt-10 px-10 py-3 md:py-4 max-w-fit dark:bg-bgLight bg-bgDark dark:text-textLight text-textDark transition hover:-translate-y-2 duration-300">Get Started</Link>
           </div>
            <div className="w-full md:w-[45%] lg:w-[48%]">
                <Image src={map} alt="Map" className="relative mx-auto w-[60%]"/>
            </div>
        </main>
     );
}
 
export default MapSection;