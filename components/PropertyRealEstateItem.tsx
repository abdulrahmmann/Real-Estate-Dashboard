import {PropertyListDateType} from "@/data/types";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import React from "react";
import Link from "next/link";

export const PropertyRealEstateItem = ({id, name, country, price, image}: PropertyListDateType) => {
    return (
        <Link key={id} href={`/Dashboard/Property/${id}`}>
            <div className={`flex gap-2.5`}>
                <Image width={250} height={150} src={image} alt={'real estate image'}
                       className={`w-[150px] h-[120px] xs:w-[250px] xs:h-[150px] rounded-xl`}/>
                <div className={`flex flex-col justify-center gap-2 my-3`}>
                    <div
                        className="w-fit text-xs text-primaryColor font-semibold px-2.5 py-2 bg-[#DADEFA] rounded-sm ">
                        $ {price}
                    </div>
                    <h1 className={`text-base text-primaryTextColor font-semibold`}>
                        {name}
                    </h1>
                    <div className="flex items-center gap-1 ">
                        <FiMapPin color={'#808191'} className={`size-4`}/>
                        <h4 className="text-sm text-[#808191]">{country}</h4>
                    </div>
                    {/*<div className={`flex items-center gap-5`}>*/}
                    {/*    <div className={`flex items-center gap-1`}>*/}
                    {/*        <img src={'/icons/bed.svg'} alt={'bed image'}/>*/}
                    {/*        <h3 className={`text-xs text-primaryTextColor font-medium`}>{room} Rooms</h3>*/}
                    {/*    </div>*/}
                    {/*    <div className={`flex items-center gap-1`}>*/}
                    {/*        <img src={'/icons/estate-area.svg'} alt={'area image'}/>*/}
                    {/*        <h3 className={`text-xs text-primaryTextColor font-medium`}>{area}M</h3>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Link>
    );
}