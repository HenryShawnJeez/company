import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/logo.svg"


const Footer = () => {
    return (
        <main className="px-5 sm:px-10 md:px-20 xl:px-32 py-10 mt-20 bg-bgLight flex flex-col gap-y-10 md:gap-y-0 gap-x-5 md:flex-row text-textLight md:justify-between">
            <Image src={logo} alt="Logo" className='w-20 lg:w-28 h-10 lg:h-14' />
            <section className="flex gap-10 flex-wrap">
                <div>
                    <h1 className="font-semibold text-sm md:text-base xl:text-lg">Company Details</h1>
                    <p className="mt-2">Einsteinstraat 26, 3281 NJ Numansdorp, Netherlands</p>
                    <p className="mt-2">Emailaddress@companylink.com</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h1 className="font-semibold text-sm md:text-base xl:text-lg">Quick links</h1>
                    <Link className="text-primary hover:text-secondary hover:font-semibold font-medium duration-300 mt-2" href="/about">About Us</Link>
                    <Link className="text-primary hover:text-secondary hover:font-semibold font-medium duration-300" href="/contact">Contact Us</Link>
                    <Link className="text-primary hover:text-secondary hover:font-semibold font-medium duration-300" href="/services/petroleum">Petroleum Services</Link>
                    <Link className="text-primary hover:text-secondary hover:font-semibold font-medium duration-300" href="/services/machinery">Machinery Services</Link>
                </div>
                <div className="w-fit">
                    <h1 className="font-semibold text-sm md:text-base xl:text-lg">Newsletter Sign up</h1>
                    <form className="flex border border-primary mt-4 p-1">
                        <input type="email" name="email" id="email" className="px-2 sm:px-3 lg:px-5 py-3 focus:outline-none caret-primary bg-inherit" placeholder="Johndoe@email.com" />
                        <input type="submit" value="Join Newsletter" className="cursor-pointer px-5 py-3 bg-primary hover:bg-secondary duration-300 text-textDark" />
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Footer;