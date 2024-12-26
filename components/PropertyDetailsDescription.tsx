import React from 'react';
import {PropertyListDateDetailsType} from "@/data/types";
import {FiMapPin} from "react-icons/fi";
import Image from "next/image";
import {TiStarFullOutline} from "react-icons/ti";

const PropertyDetailsDescription = ({id, description, propertyType, country, wifi, balcony, kitchen, price, rating, name, area, parkingArea, somokingArea, room, baths}: PropertyListDateDetailsType) => {
    return (
        <div key={id} className={``}>
            <div className={`mt-4 grid grid-cols-12 gap-5`}>
                <div className={`col-span-12 lg:col-span-9`}>

                    <div className={`flex items-start justify-between`}>
                        <div>
                            <h3 className={`text-base font-medium text-primaryTextColor mb-1`}>{propertyType}</h3>
                            <h3 className={`text-xl font-medium text-primaryTextColor mb-1.5`}>{name}</h3>
                            <div className="flex items-center gap-1">
                                <FiMapPin color={'#808191'} className={`size-4`}/>
                                <h4 className="text-sm text-[#808191]">{country}</h4>
                            </div>
                        </div>
                        <div>
                            <div className={``}>
                                <div className={`mb-2 flex items-center gap-0.5`}>
                                    {Array.from({length: Math.round(rating)}, (_, index) => (
                                        <TiStarFullOutline key={index} className={`text-[#F2C94C] size-[18px]`}/>
                                    ))}
                                </div>
                                <h3 className={`text-sm font-semibold text-primaryTextColor mb-0`}>Price</h3>
                                <h1 className={`text-xs text-secondaryTextColor font-medium`}>
                                    <span
                                        className={`text-primaryColor text-lg font-bold`}>${(Number(price) / 365).toFixed(1)}</span> For
                                    One Day
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className={`mt-5`}>
                        <h2 className={`text-lg text-primaryTextColor font-medium`}>Facility</h2>

                        <div className={`mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5`}>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/bed.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>{room} Rooms</h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/bath.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>{baths} Baths</h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/estate-area.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>{area}M Area</h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/smooking.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>
                                    {somokingArea ? 'Smooking Area' : 'No Smooking Area'}
                                </h2>
                            </div>

                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/kitchen.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>{kitchen} Kitchen</h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/balcony.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>
                                    {balcony ? 'Balcony' : 'No Balcony'}
                                </h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/wifi.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>
                                    {wifi ? 'Wifi' : 'No Wifi'}
                                </h2>
                            </div>
                            <div className={`flex items-center gap-1`}>
                                <Image src={'/icons/parking.svg'} alt={'bed icon'} width={18} height={18}/>
                                <h2 className={`text-sm text-primaryTextColor font-medium`}>
                                    {parkingArea ? 'Parking Area' : 'No Parking Area'}
                                </h2>
                            </div>
                        </div>

                        <div className={`mt-5`}>
                            <h2 className={`text-lg text-primaryTextColor font-medium mb-1`}>Description</h2>
                            <p className={`text-sm text-secondaryTextColor font-normal tracking-wide leading-relaxed`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`col-span-12 lg:col-span-3`}>
                    <div className={`h-full flex flex-col justify-between gap-4`}>
                        <div className={`h-full`}>
                            <img src={'/map.png'} alt={'map image'} className={`w-full h-full rounded-xl`}/>
                        </div>
                        <button
                            className={`text-lg text-whiteColor font-semibold py-2 w-full text-center bg-primaryColor hover:bg-primaryColor/85 rounded-xl`}>
                            Book Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetailsDescription;