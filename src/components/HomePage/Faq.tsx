"use client"

import { useState, useEffect } from "react";


const Faq = () => {

    const [currentNumber, setCurrentNumber] = useState<number>(0)
    
    return ( 
        <main className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between px-5 sm:px-10 md:px-20 xl:px-32 py-6 mt-20">
            <div className="w-full md:w-[45%] lg:w-[48%]">

            </div>
            <div className="w-full md:w-[45%] lg:w-[48%]">

            </div>
        </main>
     );
}
 
export default Faq;