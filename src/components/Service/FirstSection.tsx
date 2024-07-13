"use client"

import { useEffect, useState } from "react";

//Import Needed Icons
import { RefreshCircle, Setting2, Diagram, Truck, SearchNormal, Briefcase } from "iconsax-react";

const FirstSection = () => {
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

    let heading: string[] = ["Procurement", "Sales & Marketing","Logistics", "Quality Control", "After-Sales Support" ];
    let subheading: string[] = ["Sourcing Top-Quality Machinery", "Promoting Industry-Leading Equipment","Ensuring Timely Delivery", "Rigorous Quality Assurance", "Comprehensive Maintenance Services" ];
    // eslint-disable-next-line react/jsx-key
    let icon = [<Setting2 variant="Bold" size="36" className="text-inherit"/>,<Diagram variant="Bold" size="36" className="text-inherit"/>,<Truck variant="Bold" size="36" className="text-inherit"/>, <SearchNormal variant="Bold" size="36" className="text-inherit"/>,<Briefcase variant="Bold" size="36" className="text-inherit"/> ];

    return (
        <section className="w-[90%] xl:w-[92.5%] mx-auto">
            <main className="relative z-10 text-textLight flex overflow-hidden -mt-10 items-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-300 min-w-[16rem] w-[19%] p-4 py-8 rounded-md border border-gray-300 flex flex-col items-center justify-center gap-y-1
                    ${currentNumber === index ? "bg-blue-600 h-44 text-white transition-all duration-300" : "bg-bgLight text-gray-400"}`}
                        style={{ transform: `translateX(-${currentNumber * 100}%)` }}
                    >   
                        {icon[index]}
                        <h1 className={`${currentNumber === index ? "text-white" : "text-blue-600"} uppercase font-semibold text-base md:text-lg xl:text-xl `}>{heading[index]}</h1>
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

export default FirstSection;
