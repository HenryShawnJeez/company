import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

//Import Needed Images
import printer from "../../../public/faq3.jpeg";
import sawing from "../../../public/sawing.jpeg";
import welding from "../../../public/welding.jpeg";

//Import Needed Icons
import { TickSquare } from "iconsax-react";


const images = [printer, sawing, welding];

const Industrial = () => {
    return ( 
        <main className="mt-20">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                orientation="vertical"
                className="w-full"
            >
                <CarouselContent className="-mt-1 h-[14rem] sm:h-[18rem] md:h-[20rem] lg:h-[24rem] xl:h-[30rem]">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1">
                            <Image src={images[index]} alt="Machine" className="h-full w-full object-center" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <section className="mt-14">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Industrial Equipment Inventory</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />CNC Machines</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />3D Printers</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Welding Equipment</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Laser Cutting Machines</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Press Brakes</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Hydraulic Presses</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Grinding Machines</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Drilling Machines</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Sawing Machines</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Injection Molding Machines</p>
                </div>
                <div className="mt-10 flex flex-col gap-y-5">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">3D Printers</h1>
                            <p>FDM (Fused Deposition Modeling) Printers</p>
                            <p>SLA (Stereolithography) Printers</p>
                            <p>SLS (Selective Laser Sintering) Printers</p>
                            <p>Metal 3D Printers</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Sawing Machines</h1>
                            <p>Band Saws</p>
                            <p>Circular Saws</p>
                            <p>Jig Saws</p>
                            <p>Table Saws</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Welding Equipment</h1>
                            <p>MIG Welders</p>
                            <p>TIG Welders</p>
                            <p>Stick Welders</p>
                            <p>Plasma Cutters</p>
                        </div>
                    </section>
                </div>
            </section>
            <p className="mt-10">Our extensive inventory is readily available. For inquiries or assistance, please contact our <span><Link href="/contact" className="text-primary hover:text-secondary duration-300 ml-1 font-semibold cursor-pointer"> TEAM</Link></span></p>
        </main>
     );
}
 
export default Industrial;