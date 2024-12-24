"use client";
import React, {useState} from 'react';
import EstateCarouselItem from "@/components/EstateCarouselItem";
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {propertyList} from "@/data";

const PropertyList = () => {
    const [tabClicked, setTabClicked] = useState<string>("Popular");
    return (
        <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
            <div className={`flex items-center justify-between`}>
                <h1 className="text-base text-primaryTextColor font-semibold">Property List</h1>
                <div className={`flex items-center gap-1 sm:gap-2.5`}>
                    <button
                        className={`${tabClicked === "Popular" ? 'text-whiteColor bg-primaryColor' : 'text-secondaryTextColor bg-[#F7F7F7] '} py-2.5 px-3.5 sm:px-5 rounded-lg text-xs font-semibold`}
                        onClick={() => setTabClicked("Popular")}>
                        Popular
                    </button>

                    <button
                        className={`${tabClicked === "Recommended" ? 'text-whiteColor bg-primaryColor' : 'text-secondaryTextColor bg-[#F7F7F7] '}  py-2.5 px-3.5 sm:px-5 rounded-lg text-xs font-semibold`}
                        onClick={() => setTabClicked("Recommended")}>
                        Recommended
                    </button>

                    <button
                        className={`${tabClicked === "Newest" ? 'text-whiteColor bg-primaryColor' : 'text-secondaryTextColor bg-[#F7F7F7] '}  py-2.5 px-3.5 sm:px-5 rounded-lg text-xs font-semibold`}
                        onClick={() => setTabClicked("Newest")}>
                        Newest
                    </button>
                </div>
            </div>

            <div className={`my-4`}>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                    id={"propertyListCarousel"}
                >
                    <CarouselContent>
                        {
                            propertyList.map((item) => (
                                <CarouselItem key={item.id} className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <EstateCarouselItem id={item.id} name={item.name} country={item.country}
                                                        image={item.image} price={item.price}/>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>

        </div>
    );
};

export default PropertyList;