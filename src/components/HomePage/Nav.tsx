"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';


//Import Needed Components
import { ModeToggle } from './ToggleMode';

//Import Needed Images
import logo from "../../../public/logo.svg"

//Import Needed Icons
import { Category2, CloseCircle } from "iconsax-react";



const Nav = () => {

    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)

    //Toggle Function
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <main className="sticky">
            <div className="flex justify-between items-center md:text-sm lg:text-base xl:text-lg py-6 px-5 sm:px-10 md:px-20 xl:px-32 bg-bgLight text-textLight">
                <Image src={logo} alt='Logo' className='w-20 lg:w-28' />
                <div className="p-2 sm:p-3 bg-primary md:hidden cursor-pointer">
                    <Category2 size="28" onClick={toggleMenu} className="text-white" />
                </div>
                <div
                    className={`${isOpen ? "translate-x-0 delay-500" : "-translate-x-full"} fixed md:translate-x-0 md:static top-0 left-0 w-72 p-4 md:p-0 md:w-auto h-full md:h-auto bg-primary md:bg-inherit transition-transform duration-500 ease-in-out z-50`}>
                    <div className="md:hidden absolute top-4 right-4 cursor-pointer bg-bgLight p-1" onClick={toggleMenu}>
                        <CloseCircle size="32" variant="Bold" className='text-primary' />
                    </div>

                    <nav className="flex flex-col gap-y-7 md:gap-y-0 md:flex-row md:items-center md:gap-x-3 lg:gap-x-5 xl:gap-x-10 mt-20 md:mt-0">
                        <Link href="/" className={`${pathname === "/" && "text-textDark border-bgLight md:text-primary font-semibold"} border-b-2 border-bgDark py-2 hover:border-bgLight md:border-0 font-medium hover:text-textDark md:hover:text-primary duration-300`}>
                            Home
                        </Link>
                        <Link href="about" className={`${pathname === "/about" && "text-textDark border-bgLight md:text-primary font-semibold"} border-b-2 border-bgDark py-2 hover:border-bgLight md:border-0 font-medium hover:text-textDark md:hover:text-primary duration-300`}>
                            About Us
                        </Link>
                        <div className="relative group" onMouseEnter={() => setIsServiceOpen(true)} onMouseLeave={() => setIsServiceOpen(false)}>
                            <button className={`${pathname === "/services/petroleum" || pathname === "/services/machinery" && "border-bgLight py-2 md:border-0 text-textDark md:text-primary font-semibold"} text-left border-b-2 border-bgDark md:border-0 py-2 hover:border-bgLight w-full font-medium hover:text-textDark md:hover:text-primary duration-300`}>
                                Services
                            </button>
                            <div className={`absolute left-0 mt-2 bg-bgLight md:bg-primary shadow-lg overflow-hidden transition-all duration-300 ${isServiceOpen ? 'w-full md:w-40 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link href="/services/petroleum" className="block px-4 py-3 text-sm text-textLight md:text-textDark transition duration-300 hover:bg-secondary">
                                    Petroleum
                                </Link>
                                <Link href="/services/machinery" className="block px-4 py-3 text-sm text-textLight md:text-textDark transition duration-300 hover:bg-secondary">
                                    Machinery
                                </Link>
                            </div>
                        </div>
                        <Link href="contact" className={`${pathname === "/contact" && "bg-bgLight text-textLight border border-textLight"} md:border-2 hover:bg-bgLight hover:text-textLight md:hover:border-2 md:hover:border-textLight text-center px-5 py-3 text-textDark font-medium bg-bgDark duration-300`}>
                            Contact
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
            <div
                className={`md:hidden fixed inset-0 bg-black opacity-50 z-20 ${isOpen ? "translate-x-0" : "-translate-x-full delay-500"} transition-transform duration-500 ease-in-out`}
                onClick={toggleMenu}
            ></div>
        </main>
    );
};

export default Nav;