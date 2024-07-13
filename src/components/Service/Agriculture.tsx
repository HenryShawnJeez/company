import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

//Import Needed Images
import tractor from "../../../public/tractors.jpeg";
import sprayers from "../../../public/sprayers.jpeg";
import harvesters from "../../../public/haversters.jpeg";

//Import Needed Icons
import { TickSquare } from "iconsax-react";


const images = [tractor, sprayers, harvesters];

const Agriculture = () => {
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
                <p className="text-sm md:text-base xl:text-lg font-semibold">Agricultural Equipment Inventory</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                    <p className="flex gap-x-1 items-center">Tractors<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Combine Harvesters<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Ploughs<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Seeders<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Balers<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Sprayers<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Tillage Equipment<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Irrigation Systems<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Cultivators<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                    <p className="flex gap-x-1 items-center">Mowers<TickSquare size="20" className="text-green-600 dark:text-green-400" variant="Bold" /></p>
                </div>
                <div className="mt-10 flex flex-col gap-y-5">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Tractors</h1>
                            <p>Compact Tractors</p>
                            <p>Utility Tractors</p>
                            <p>Row Crop Tractors</p>
                            <p>Articulated Tractors</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Sprayers</h1>
                            <p>Boom Sprayers</p>
                            <p>Mist Sprayers</p>
                            <p>Handheld Sprayers</p>
                            <p>Air Blast Sprayers</p>
                        </div>
                        <div className="flex flex-col gap-y-1 text-sm md:text-base xl:text-lg font-medium">
                            <h1 className="text-base md:text-lg xl:text-xl font-semibold my-4">Harvesters</h1>
                            <p>Combine Harvesters</p>
                            <p>Forage Harvesters</p>
                            <p>Potato Harvesters</p>
                            <p>Grape Harvesters</p>
                        </div>
                    </section>
                </div>
            </section>
            <p className="mt-10">Our extensive inventory is readily available. For inquiries or assistance, please contact our <span><Link href="/contact" className="text-primary hover:text-secondary duration-300 ml-1 font-semibold cursor-pointer"> TEAM</Link></span></p>
        </main>
     );
}
 
export default Agriculture;