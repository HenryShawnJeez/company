import Image from "next/image";

//Import Needed Image
import img from "../../../public/service1.jpeg";

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
                <section className="flex flex-col gap-y-3 w-full">
                    <div className="py-3 px-10 bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight">
                        <h1 className="text-base md:text-lg xl:text-xl font-semibold capitalize">Overview of Our Oil Business</h1>
                    </div>
                    <Image src={img} alt="Image" className="w-full h-[20rem] sm:h-[22rem] md:h-[24rem] lg:h-[28rem] xl:h-[32rem] object-cover object-center" />
                    <p>At Melvin Trade B.V., we specialize in facilitating seamless transactions within the oil and gas industry. Our comprehensive services encompass a wide range of activities designed to streamline the buying and selling of petroleum products, ensuring efficiency, compliance, and profitability for all parties involved.</p>

                    <div className="mt-6">
                        <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Key Services</h1>
                        <ul className="list-disc flex flex-col gap-y-5">
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Brokerage Services</li>
                                <p>We act as intermediaries, connecting credible buyers with reputable sellers to facilitate smooth and secure transactions. Our extensive network and market expertise ensure that both parties achieve favorable terms.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Due Diligence</li>
                                <p>We perform thorough checks on potential partners to ensure credibility and reliability. This includes verifying financial stability, compliance with regulatory standards, and overall market reputation.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Contract Management</li>
                                <p>Our team drafts, reviews, and manages contracts to protect the interests of our clients. We ensure that all terms are met and that transactions proceed smoothly and transparently.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Logistics Coordination</li>
                                <p>We handle the complexities of transportation and storage logistics, ensuring timely and secure delivery of oil products. Our logistics services are designed to minimize disruptions and optimize the supply chain.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Market Intelligence</li>
                                <p>We provide clients with up-to-date information on market trends, pricing, and geopolitical factors. This intelligence enables informed decision-making and helps clients navigate the volatile oil market.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Compliance Support</li>
                                <p>Ensuring all transactions adhere to international and local laws, including sanctions and trade regulations, is a priority. We help our clients navigate the complex regulatory landscape, reducing risks and ensuring smooth operations.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Risk Management</li>
                                <p>We identify and mitigate risks associated with oil trading, including market volatility and geopolitical factors. Our proactive approach helps protect our clients&apos; investments and ensures long-term success.</p>
                            </div>
                            <div>
                                <li className="text-sm md:text-base xl:text-lg font-semibold">Financial Services</li>
                                <p>We assist clients in arranging financing options, including letters of credit and other financial instruments, to facilitate transactions. Our financial services are designed to provide liquidity and flexibility in the trading process.</p>
                            </div>
                        </ul>
                        <div className="mt-10">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Petroleum Products Handled</h1>
                            <ul className="list-disc flex flex-col gap-y-5">
                                <li className="text-sm md:text-base xl:text-lg font-semibold dark:text-yellow-400 text-yellow-600">Crude Oil: <span className="font-light text-textLight dark:text-textDark">Including Brent Crude, WTI, Dubai Crude, Bonny Light, and more.</span></li>
                                <li className="text-sm md:text-base xl:text-lg font-semibold dark:text-yellow-400 text-yellow-600">Refined Products: <span className="font-light text-textLight dark:text-textDark">Such as gasoline, diesel fuel, kerosene, jet fuel, and marine fuels..</span></li>
                                <li className="text-sm md:text-base xl:text-lg font-semibold dark:text-yellow-400 text-yellow-600">Specialized Products: <span className="font-light text-textLight dark:text-textDark">Including aviation gasoline, industrial oils, and synthetic oils</span></li>
                            </ul>
                        </div>
                        <p className="mt-4">At Melvin Trade B.V., our commitment to excellence and our deep industry knowledge make us a trusted partner in the global oil market. We strive to build long-term relationships with our clients, offering reliable, efficient, and compliant services that drive their success in the dynamic world of oil and gas trading.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default PetroleumList;