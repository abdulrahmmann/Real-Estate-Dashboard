import React from "react";
import {ActiveListingType} from "@/data/types";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export const ActiveListingItem = ({id, name, price, location, image}: ActiveListingType) => {
    return (
        <div key={id} className={`flex gap-2.5`}>
            <Image src={image} alt={"real estate image"} width={250} height={150} priority={true} quality={100}
                   className={`w-[150px] h-[120px] xs:w-[250px] xs:h-[150px] rounded-xl`}/>
            <div className={`flex flex-col justify-center gap-2 my-3`}>
                <div className="w-fit text-xs text-primaryColor font-semibold px-2.5 py-2 bg-[#DADEFA] rounded-sm ">
                    ${price}
                </div>
                <h1 className="text-base text-primaryTextColor font-semibold">{name}</h1>
                <div className="flex items-center gap-1 ">
                    <FiMapPin color={'#808191'} className={`size-4`}/>
                    <h4 className="text-sm text-[#808191]">London, UK</h4></div>
            </div>
        </div>
    );
}