"use client"

import { useEffect, useState } from "react";

//Import Needed Icons
import { RefreshCircle, Link21, Chart1, LampOn, ShieldTick, Card } from "iconsax-react";

const FirstSectionP = () => {
    const [currentNumber, setCurrentNumber] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            changeNumber();
        }, 60000); // Change every minute

        return () => clearInterval(interval);
    }, []);

    const changeNumber = () => {
        const totalNumber = 5;
        setCurrentNumber((prevIndex) => (prevIndex + 1) % totalNumber);
    };

    let heading: string[] = ["Market Analysis", "Consulting Services", "Compliance Support", "Financial Services", "Transaction Facilitation"];
    let subheading: string[] = ["In-Depth Market Insights", "Expert Market Guidance", "Adhering to Regulations", "Flexible Financing Options", "Seamless Oil & Gas Deals"];
    // eslint-disable-next-line react/jsx-key
    let icon = [<Chart1 variant="Bold" size="36" className="text-inherit" />, <LampOn variant="Bold" size="36" className="text-inherit" />, <ShieldTick variant="Bold" size="36" className="text-inherit" />, <Card variant="Bold" size="36" className="text-inherit" />, <Link21 variant="Bold" size="36" className="text-inherit" />];

    return (
        <section className="w-[90%] xl:w-[92.5%] mx-auto">
            <main className="relative z-10 text-textLight flex overflow-hidden -mt-14 items-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-300 min-w-[16rem] w-[19%] p-4 h-40 flex flex-col items-center justify-center text-center gap-y-1
                    ${currentNumber === index ? "bg-primary h-44 text-white transition-all duration-300" : "bg-bgLight text-gray-400"}`}
                        style={{ transform: `translateX(-${currentNumber * 100}%)` }}
                    >
                        {icon[index]}
                        <h1 className={`${currentNumber === index ? "text-white" : "text-primary"} uppercase font-semibold text-base md:text-lg xl:text-xl `}>{heading[index]}</h1>
                        <p>{subheading[index]}</p>

                    </div>
                ))}
            </main>
            <div onClick={() => setCurrentNumber(0)} className="flex gap-x-1 my-4 items-center cursor-pointer group w-20">
                <RefreshCircle size="24" color="#FF8A65" className="group-hover:rotate-180 duration-300" />
                <p>Reset</p>
            </div>

        </section>

    );
}

export default FirstSectionP;
