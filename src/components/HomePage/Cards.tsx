
//Import Needed Icons
import { ChartSuccess, Global, Setting2 } from "iconsax-react";

const Cards = () => {
    return (
        <main className="cards flex flex-wrap sm:justify-center gap-3 xl:gap-x-10 px-5 sm:px-10 md:px-20 xl:px-32 py-6 mt-20">
            <div className="card duration-300 min-w-full sm:min-w-[18rem] w-[29%] text-center border border-accentLight dark:border-accentDark flex flex-col items-center p-4 sm:p-6 lg:p-8 xl:p-10">
                <ChartSuccess size="40" variant="Bold" className="text-primary dark:text-secondary" />
                <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl mt-4 font-semibold text-primary dark:text-secondary">Streamlined Transactions</h1>
                <div className="border-2 lg:border-[3px] 2xl:border-4 border-yellow-400 dark:border-yellow-600 w-[4rem] md:w-[6rem] lg:w-[8rem] 2xl:w-[10rem] mx-auto my-2"></div>
                <p className="text-textLight dark:text-textDark my-4">At Melvin Trade B.V., we ensure that your oil and gas transactions are seamless and fully compliant with all regulatory standards. Our expertise in brokerage and contract management guarantees a smooth process from start to finish, maximizing your profitability while mitigating risks.</p>
            </div>
            <div className="card duration-300 min-w-full sm:min-w-[18rem] w-[29%] text-center border border-accentLight dark:border-accentDark flex flex-col items-center p-4 sm:p-6 lg:p-8 xl:p-10">
                <Global size="40" variant="Bold" className="text-primary dark:text-secondary" />
                <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl mt-4 font-semibold text-primary dark:text-secondary">Global Reach</h1>
                <div className="border-2 lg:border-[3px] 2xl:border-4 border-yellow-400 dark:border-yellow-600 w-[4rem] md:w-[6rem] lg:w-[8rem] 2xl:w-[10rem] mx-auto my-2"></div>
                <p className="text-textLight dark:text-textDark my-4">With a strong network of buyers and sellers across the globe, Melvin Trade B.V. bridges the gap in the international oil and gas market. Our market intelligence and logistics coordination enable us to connect you with the right partners, ensuring timely and efficient transactions.</p>
            </div>
            <div className="card duration-300 min-w-full sm:min-w-[18rem] w-[29%] text-center border border-accentLight dark:border-accentDark flex flex-col items-center p-4 sm:p-6 lg:p-8 xl:p-10">
                <Setting2 size="40" variant="Bold" className="text-primary dark:text-secondary" />
                <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl mt-4 font-semibold text-primary dark:text-secondary">Top-Tier Machinery</h1>
                <div className="border-2 lg:border-[3px] 2xl:border-4 border-yellow-400 dark:border-yellow-600 w-[4rem] md:w-[6rem] lg:w-[8rem] 2xl:w-[10rem] mx-auto my-2"></div>
                <p className="text-textLight dark:text-textDark my-4">Melvin Trade B.V. offers a wide range of industrial machinery, sourced from reputable manufacturers. Whether you need new, used, or refurbished equipment, our thorough inspection and quality control processes ensure that you receive only the best machinery to keep your operations running smoothly and efficiently.</p>
            </div>
        </main>
    );
}

export default Cards;
