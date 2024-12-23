import React from 'react';
import {FaArrowRightLong} from "react-icons/fa6";
import {LatestSalesType} from "@/data/types";
import {latestSales} from "@/data";
import {HiDotsVertical} from "react-icons/hi";

const LatestSales = () => {
    return (
        <div className={`bg-whiteColor rounded-2xl px-5 py-3 h-full`}>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-base text-primaryTextColor font-semibold">Latest Sales</h1>
                {/*<img src={'/icons/arrow_right_line.svg'} alt={'arrow_right_line'} className={`cursor-pointer`}/>*/}
                <FaArrowRightLong color={'#808191'} className={`cursor-pointer`}/>

            </div>
            <div>
                {
                    latestSales.map((item) => (
                        <LatestSalesItem id={item.id} name={item.name} country={item.country} image={item.image}
                                         price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestSales;


export const LatestSalesItem = ({id, name, country, price, image}: LatestSalesType) => {
    return (
        <div key={id} className={`flex items-center justify-between mb-4 last:mb-0`}>
            <div className={`flex items-center gap-2.5`}>
                <img src={image} alt={'TopAgentUserImage'} className={`size-10 rounded-full object-cover`}/>
                <div>
                    <h3 className={`text-sm text-primaryTextColor font-medium`}>{name}</h3>
                    <h4 className={`text-xs text-secondaryTextColor font-normal`}>{country}</h4>
                </div>
            </div>

            <h6 className={`text-lg text-[#2F80ED] font-semibold`}>+${price}</h6>
        </div>
    );
};

