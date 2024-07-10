const FirstSection = () => {
    return (
        <main className="py-6 px-5 sm:px-10 md:px-20 xl:px-32 mt-20">
            <section className="flex flex-col md:flex-row md:justify-between">
                <div className="md:w-[45%] xl:w-[48%] flex flex-col gap-y-5 md:gap-y-7 xl:gap-y-10">
                    <p className="text-base md:text-lg xl:text-xl opacity-70">About Our Company</p>
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Your reliable partner in Oil & Gas and Machinery trading</h1>
                    <p className="opacity-70">At Melvin Trade B.V., we pride ourselves on being a trusted and dependable partner in the oil, gas, and industrial machinery sectors. Our commitment to excellence, compliance, and customer satisfaction sets us apart in the industry. With years of experience and a dedicated team of professionals, we provide seamless transactions, expert market insights, and top-tier machinery solutions tailored to meet your specific needs. Whether you are navigating the complexities of the oil and gas market or seeking high-quality industrial equipment, Melvin Trade B.V. is here to ensure your business thrives and excels.</p>
                    <div className="border-2 border-yellow-400 dark:border-yellow-600 w-[2rem] md:w-[4rem] lg:w-[6rem] 2xl:w-[8rem]"></div>
                </div>
                <div className="md:w-[45%] xl:w-[48%]">

                </div>
            </section>
        </main>
    );
}

export default FirstSection;