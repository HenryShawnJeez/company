"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

// Import Needed Images
import heroImg0 from "../../../public/heroImg1.jpeg";
import heroImg1 from "../../../public/heroImg2.jpg";
import heroImg2 from "../../../public/heroImg4.jpeg";

//Import Needed Data
import en from "../../../messages/en.json"

// Import Needed Icons
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

const HeroSection = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);
    const images = [heroImg0, heroImg1, heroImg2];
    const totalNumber = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 60000); // Change image every minute

        return () => clearInterval(interval);
    }, [totalNumber]);

    const handleNext = () => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentNumber((prevIndex) => (prevIndex + 1) % totalNumber);
            setAnimate(false);
        }, 500);
    };

    const handlePrev = () => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentNumber((prevIndex) => (prevIndex - 1 + totalNumber) % totalNumber);
            setAnimate(false);
        }, 500);
    };

    return (
        <main>
            <div className="relative w-full h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem] 2xl:h-[50rem] z-10 overflow-hidden">
                <Image
                    src={images[currentNumber]}
                    alt={`Hero Section ${currentNumber}`}
                    className={`h-full w-full object-cover object-center transition-transform duration-500 ease-in-out ${animate ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}
                />
                <section className="absolute h-full w-full top-0 left-0 bg-bgDark/80">
                    <div className="h-full w-full flex flex-col justify-center md:flex-row md:justify-between md:items-center text-xs md:text-sm xl:text-base py-6 px-5 sm:px-10 md:px-20 xl:px-32">
                        <div className="md:w-[59%] xl:w-[55%] flex flex-col gap-y-10 text-textDark">
                            <h1
                                className={`hedvig text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold tracking-wider transform transition-all duration-500 ease-in-out ${animate ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
                            >
                               { currentNumber === 0 ? en.Navigation.heading0 : currentNumber === 1 ? en.Navigation.heading1 : currentNumber === 2 ? en.Navigation.heading2 : "" }
                            </h1>
                            <p
                                className={`text-textDark/80 transform transition-all duration-500 ease-in-out ${animate ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
                            >
                                { currentNumber === 0 ? en.Navigation.subheading0 : currentNumber === 1 ? en.Navigation.subheading1 : currentNumber === 2 ? en.Navigation.subheading2 : "" }
                            </p>
                            <Link
                                href=""
                                className="bg-bgDark text-textDark py-3 md:py-4 w-72 text-center border-2 border-bgDark hover:bg-inherit duration-300"
                            >
                                {en.Navigation.header}
                            </Link>
                        </div>
                        <div className="md:w-[39%] xl:w-[35%] flex flex-col items-end gap-y-3 mt-20 md:mt-0">
                            <ArrowCircleRight
                                onClick={handleNext}
                                size="36"
                                className="cursor-pointer hover:text-textDark hover:translate-x-2 duration-300 text-textDark/50"
                            />
                            <ArrowCircleLeft
                                onClick={handlePrev}
                                size="36"
                                className="cursor-pointer hover:text-textDark hover:-translate-x-2 duration-300 text-textDark/50"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HeroSection;
