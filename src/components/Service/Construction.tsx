import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"


//Import Needed Images
import excavators from "../../../public/excavator.jpeg";
import concrete from "../../../public/concrete-mixers.jpeg";
import crane from "../../../public/crane.jpeg";

//Import Needed Icons
import { TickSquare } from "iconsax-react";

const images = [excavators, concrete, crane];

const Construction = () => {
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
                <p className="text-sm md:text-base xl:text-lg font-semibold">Construction Equipment Inventory</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Excavators</p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Bulldozers </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Backhoe Loaders </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Cranes </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Dump Trucks </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Concrete Mixers </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Asphalt Pavers </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Road Rollers </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Skid Steer Loaders </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Pile Drivers </p>
                    <p className="flex gap-x-1 items-center"><TickSquare size="20" className="text-green-600 dark:text-green-400 shrink-0" variant="Bold" />Compactors </p>
                </div>
                <div className="mt-10 flex flex-col gap-y-5">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Excavators</h1>
                            <p>Crawler Excavators</p>
                            <p>Mini Excavators</p>
                            <p>Wheeled Excavators</p>
                            <p>Long Reach Excavators</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Concrete Mixers</h1>
                            <p>Drum Mixers</p>
                            <p>Pan Mixers</p>
                            <p>Twin Shaft Mixers</p>
                            <p>Mobile Concrete Mixers</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Cranes</h1>
                            <p>Mobile Cranes</p>
                            <p>Overhead Cranes</p>
                            <p>Crawler Cranes</p>
                        </div>
                    </section>
                </div>
            </section>
            <p className="mt-10">Our extensive inventory is readily available. For inquiries or assistance, please contact our <span><Link href="/contact" className="text-primary hover:text-secondary duration-300 ml-1 font-semibold cursor-pointer"> TEAM</Link></span></p>
        </main>
    );
}

export default Construction; 