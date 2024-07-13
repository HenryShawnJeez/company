"use client"
import { useState } from "react";

//Import Needed Components
import Construction from "./Construction";
import Agriculture from "./Agriculture";
import Industrial from "./Industrial";

//Import Needed Icons
import { ArrowRight } from "iconsax-react";


const MachineList = () => {

    const [activeTopic, setActiveTopic] = useState<string>("construction")

    return ( 
        <main className="py-6 px-5 sm:px-10 md:px-20 xl:px-32 mt-20">
            <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row gap-x-5">
                <div className="flex flex-col gap-y-1 bg-bgLight p-2 md:p-4 xl:p-6 text-textLight border border-accentLight h-fit">
                    <div className={`${activeTopic === "construction" ? "text-primary font-semibold" : "font-medium"} flex justify-between items-center bg-accentLight/40 p-2 px-4 min-w-[16rem] w-full cursor-pointer group`}>
                        <p className="group-hover:text-primary duration-300" onClick={()=> setActiveTopic("construction")}>Construction Machinery</p>
                        <ArrowRight size="20" className={`${activeTopic === "construction" ? "text-secondary" : ""} group-hover:text-primary duration-300`}/>
                    </div>
                    <div className={`${activeTopic === "agricultural" ? "text-primary font-semibold" : "font-medium"} flex justify-between items-center bg-accentLight/40 p-2 px-4 min-w-[16rem] w-full cursor-pointer group`}>
                        <p className="group-hover:text-primary duration-300" onClick={()=> setActiveTopic("agricultural")}>Agricultural Machinery</p>
                        <ArrowRight size="20" className={`${activeTopic === "agricultural" ? "text-secondary" : ""} group-hover:text-primary duration-300`}/>
                    </div>
                    <div className={`${activeTopic === "industrial" ? "text-primary font-semibold" : "font-medium"} flex justify-between items-center bg-accentLight/40 p-2 px-4 min-w-[16rem] w-full cursor-pointer group`}>
                        <p className="group-hover:text-primary duration-300" onClick={()=> setActiveTopic("industrial")}>Industrial Machinery</p>
                        <ArrowRight size="20" className={`${activeTopic === "industrial" ? "text-secondary" : ""} group-hover:text-primary duration-300`}/>
                    </div>
                </div>
                <section className="flex flex-col gap-y-3 w-full">
                    <div className="py-3 px-10 bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight">
                       <h1 className="text-base md:text-lg xl:text-xl font-semibold capitalize">{activeTopic} Machinery</h1> 
                    </div>
                    {activeTopic === "construction" && <Construction />}
                    {activeTopic === "agricultural" && <Agriculture />}
                    {activeTopic === "industrial" && <Industrial />}
                </section>
            </div>
        </main>
     );
}
 
export default MachineList;