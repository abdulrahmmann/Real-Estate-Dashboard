import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {PropertyListType} from "@/data/types";

const EstateCarouselItem = ({name, country, image, price}: PropertyListType) => {
    return (
        <div className={`max-w-[330px]`}>
            <img src={`${image}`} alt={''} className={`w-full h-[190px] object-cover object-bottom rounded-xl`} />
            <div className={`mt-3 flex items-center justify-between`}>
                <h2 className={`text-base text-primaryTextColor font-semibold`}>{name}</h2>
                <div className={`text-xs text-primaryColor font-semibold px-2.5 py-2 bg-[#DADEFA] rounded-sm`}>${price}</div>
            </div>
            <div className={`flex items-center gap-1 mt-1`}>
                <IoLocationSharp color={'#11142D'} className={`size-4`} />
                <h4 className={`text-sm text-[#808191]`}>{country}</h4>
            </div>
        </div>
    );
};

export default EstateCarouselItem;