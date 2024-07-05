"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

//Import Needed Images
import heroImg1 from "../../../public/heroImg1.jpeg"
import heroImg2 from "../../../public/heroImg2.jpg"
import heroImg4 from "../../../public/heroImg4.jpeg"

//Import Needed Icons
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react"


const HeroSection = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(1)
    const totalNumber = 3

    return (
        <main>
            <div className="relative w-full h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem] 2xl:h-[50rem] z-10">
                <Image src={heroImg1} alt="Hero Section" className="h-full w-full object-cover object-center" />
                <section className="absolute h-full w-full top-0 left-0 bg-bgDark/80">
                    <div className="h-full w-full flex flex-col justify-center md:flex-row md:justify-between md:items-center text-xs md:text-sm xl:text-base py-6 px-5 sm:px-10 md:px-20 xl:px-32">
                        <div className="md:w-[59%] xl:w-[55%] flex flex-col gap-y-10 text-textDark">
                            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold hedvig tracking-wider">Mastering Oil & Gas Transactions.</h1>
                            <p className="text-textDark/80">At Melvin Trade B.V, we excel in facilitating seamless oil and gas transactions, ensuring every step is handled with precision and expertise. Our comprehensive approach encompasses compliance, profitability maximization, and in-depth market intelligence. With our expert guidance, you can confidently navigate the complexities of the oil and gas industry, secure in the knowledge that every detail is managed to the highest standard.</p>
                            <Link href="" className="bg-bgDark text-textDark py-3 md:py-4 w-60 text-center border-2 border-bgDark hover:bg-inherit duration-300">Collaborate with us</Link>
                        </div>
                        <div className="md:w-[39%] xl:w-[35%] flex flex-col items-end gap-y-2 mt-20 md:mt-0">
                            <ArrowCircleLeft size="36" className="hover:text-textDark duration-300 text-textDark/50" />
                            <ArrowCircleRight size="36" className="hover:text-textDark duration-300 text-textDark/50" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HeroSection;


