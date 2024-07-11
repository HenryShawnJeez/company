"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

//Import Needed Components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

//Import Needed Images
import faqImg0 from "../../../public/faq.jpeg";
import faqImg1 from "../../../public/faq1.jpeg";
import faqImg2 from "../../../public/faq2.jpeg";
import faqImg3 from "../../../public/faq3.jpeg";
import faqImg4 from "../../../public/faq4.jpeg";
import faqImg5 from "../../../public/faq5.jpeg";
import faqImg6 from "../../../public/faq6.jpeg";


const Faq = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);
    const images = [faqImg0, faqImg1, faqImg2, faqImg3, faqImg4, faqImg5, faqImg6];
    const totalNumber = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentNumber((prevIndex) => (prevIndex + 1) % totalNumber);
                setAnimate(false);
            }, 600);
        }, 30000); // Change image every 30 seconds

        return () => clearInterval(interval);
    }, [totalNumber]);

    return (
        <main className="flex flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:justify-between pr-5 sm:pr-10 pl-5 sm:pl-10 md:pl-0 md:pr-20 xl:pr-32 py-6 mt-20 items-center">
            <div className="relative w-full md:w-[45%] lg:w-[48%] h-[50rem]">
                <Image src={images[currentNumber]} alt="Faq Image" className={`w-full h-full object-cover object-center ${animate ? "scale-110 translate-x-10 translate-y-10 opacity-0 duration-500" : "duration-300 scale-100 translate-x-0 translate-y-0 opacity-100"}`} />
                <section className="absolute h-full w-full top-0 left-0 bg-bgDark/70 flex items-end justify-center gap-x-2">
                    {images.map((image, index) => (
                        <div key={index} className={`my-4 size-3 rounded-[50%] bg-[#FF8A65] ${currentNumber === index ? "w-6 rounded-xl duration-300" : ""}`}></div>
                    ))}
                </section>
            </div>
            <div className="w-full md:w-[45%] lg:w-[48%] flex flex-col gap-y-10">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What services does Melvin Trade B.V. offer?</AccordionTrigger>
                        <AccordionContent>
                            Melvin Trade B.V. specializes in facilitating oil and gas transactions as well as trading industrial machinery. Our comprehensive services include brokerage, due diligence, contract management, logistics coordination, market intelligence, risk management, procurement, inspection, quality control, financing assistance, and after-sales support.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How does Melvin Trade B.V. connect me with reliable sellers of petroleum products?</AccordionTrigger>
                        <AccordionContent>
                            Melvin Trade B.V. connects you with reliable sellers of petroleum products through our extensive network and rigorous due diligence processes. We ensure that all sellers meet stringent credibility and reliability standards, adhering to all legal and regulatory requirements. Our team provides comprehensive support, from initial contact to finalizing contracts, ensuring smooth and profitable transactions. With our market intelligence and expertise, we help you secure the best possible terms and build strong, long-term partnerships.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What types of industrial machinery do you trade?</AccordionTrigger>
                        <AccordionContent>
                            We deal with a wide range of industrial machinery, including construction machinery, agricultural machinery, industrial machinery, mining machinery, packaging machinery, textile machinery, food processing machinery, power generation machinery, woodworking machinery, printing machinery, and other specialized equipment. Whether you need new, used, or refurbished machinery, we have you covered.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Where is Melvin Trade B.V. located?</AccordionTrigger>
                        <AccordionContent>
                            Our company is located at Einsteinstraat 26, 3281 NJ Numansdorp, Netherlands. This strategic location allows us to efficiently manage logistics and ensure timely delivery of products.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Who is the General Manager of Melvin Trade B.V.?</AccordionTrigger>
                        <AccordionContent>
                            The General Manager of Melvin Trade B.V. is Mr. J.E. Hazenbroek. With extensive experience in international trade and a deep understanding of the oil and gas markets, Mr. Hazenbroek leads our company with a commitment to excellence and customer satisfaction.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What makes Melvin Trade B.V. different from other companies in the industry?</AccordionTrigger>
                        <AccordionContent>
                            At Melvin Trade B.V., we prioritize compliance, profitability, and customer satisfaction. Our extensive network, market intelligence, and comprehensive services set us apart from the competition. We are dedicated to building long-term relationships with our clients and providing tailored solutions that meet their unique needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>How does Melvin Trade B.V. ensure the quality of the machinery it sells?</AccordionTrigger>
                        <AccordionContent>
                            We conduct thorough inspections and quality checks on all machinery to ensure it meets industry standards and customer requirements. Our commitment to quality assurance guarantees that you receive reliable and durable equipment for your operations.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
}

export default Faq;