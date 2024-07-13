//Import Needed Icons
import { ArrowRight } from "iconsax-react";


const PetroleumList = () => {


    return (
        <main className="py-6 px-5 sm:px-10 md:px-20 xl:px-32 mt-20">
            <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row gap-x-5">
                <div className="flex flex-col gap-y-1 bg-bgLight p-2 md:p-4 xl:p-6 text-textLight border border-accentLight h-fit">
                    <div className={`text-primary font-semibold flex justify-between items-center bg-accentLight/40 p-2 px-4 min-w-[16rem] w-full cursor-pointer group`}>
                        <p className="group-hover:text-primary duration-300">OVERVIEW</p>
                        <ArrowRight size="20" className={`text-secondary group-hover:text-primary duration-300`} />
                    </div>
                </div>
            </div>

        </main>
    );
}

export default PetroleumList;