const Interested = () => {

    
    return ( 
        <main className="relative z-10 text-center px-5 sm:px-10 md:px-20 xl:px-32 -mt-10 ">
            <div className="flex flex-col gap-y-5 py-10 p-4 md:p-8 xl:p-10 border border-gray-300 dark:border-gray-600 bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark">
               <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Looking to Sell Your Oil and Gas Efficiently?</h1> 
               <p className="font-medium">Fill out the following details and we will have someone get back to you as soon as possible...</p>
               <form className="flex flex-wrap justify-center xl:justify-between gap-2 mt-4 w-full">
                    <input type="text" name="firstName" id="firstName" className="min-w-[14rem] sm:w-[18rem] md:w-[23%] 2xl:w-[25%] px-5 py-3 md:py-4 bg-[#F0F0F0] dark:bg-black focus:outline-none caret-primary" placeholder="First Name"/>
                    <input type="text" name="lastName" id="lastName" className="min-w-[14rem] sm:w-[18rem] md:w-[23%] 2xl:w-[25%] px-5 py-3 md:py-4 bg-[#F0F0F0] dark:bg-black focus:outline-none caret-primary" placeholder="Last Name"/>
                    <input type="email" name="email" id="email" className="min-w-[14rem] sm:w-[18rem] md:w-[23%] 2xl:w-[25%] px-5 py-3 md:py-4 bg-[#F0F0F0] dark:bg-black focus:outline-none caret-primary" placeholder="Email"/>
                    <input type="submit" name="submit" id="submit" className="min-w-[14rem] sm:w-[18rem] md:w-[16%] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight py-3 md:py-4 font-medium cursor-pointer"/>
               </form>
            </div>
            
        </main>
     );
}
 
export default Interested;
