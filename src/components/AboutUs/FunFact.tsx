const FunFact = () => {
    return (
        <main className="py-10 px-5 sm:px-10 md:px-20 xl:px-32 mt-20">
            <section className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-between bg-white dark:bg-black border border-accentLight dark:border-accentDark p-4 sm:p-6 md:p-8 xl:p-10 2xl:p-12">
                <div className="flex flex-col gap-y-5 lg:w-[40%]">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Fun Fact</h1>
                    <p className="opacity-70">At Melvin Trade B.V., our success is reflected in the impressive milestones we&apos;ve achieved over the years. From our extensive network of satisfied clients to the numerous deals we&apos;ve facilitated, our commitment to excellence is evident. Our team of skilled professionals and our dedication to delivering high-quality machinery solutions set us apart in the industry. Here are some key facts that highlight our journey and accomplishments.</p>
                </div>
                <section className="lg:w-[58%] grid grid-cols-2	grid-rows-2 gap-2">
                    <div className="p-2 md:p-4 xl:p-6 flex gap-x-3">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">3,200</h1>
                        <p className="opacity-70 -mt-2 text-xs md:text-sm font-medium"><span className="block text-yellow-400 dark:text-[#F8DE22] opacity-100 font-bold text-base md:text-lg xl:text-xl">+</span>Global Clients</p>
                    </div>
                    <div className="p-2 md:p-4 xl:p-6 flex gap-x-3">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">150</h1>
                        <p className="opacity-70 -mt-2 text-xs md:text-sm font-medium"><span className="block text-yellow-400 dark:text-[#F8DE22] opacity-100 font-bold text-base md:text-lg xl:text-xl">+</span>Skilled Professionals</p>
                    </div>
                    <div className="p-2 md:p-4 xl:p-6 flex gap-x-3">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">1,500</h1>
                        <p className="opacity-70 -mt-2 text-xs md:text-sm font-medium"><span className="block text-yellow-400 dark:text-[#F8DE22] opacity-100 font-bold text-base md:text-lg xl:text-xl">+</span>Deals Facilitated</p>
                    </div>
                    <div className="p-2 md:p-4 xl:p-6 flex gap-x-3">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">250</h1>
                        <p className="opacity-70 -mt-2 text-xs md:text-sm font-medium"><span className="block text-yellow-400 dark:text-[#F8DE22] opacity-100 font-bold text-base md:text-lg xl:text-xl">+</span>Machinery Delivered</p>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default FunFact;