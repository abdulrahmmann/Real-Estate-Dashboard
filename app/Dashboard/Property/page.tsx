"use client";
import React, {Fragment} from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {propertyListData} from "@/data";
import {PropertyRealEstateItem} from "@/components/PropertyRealEstateItem";
import Pagination from "@/components/Pagination";
import AddPropertyModal from "@/components/AddPropertyModal";

const Property = () => {
    return (
        <Fragment>
            <div className={`flex items-center justify-between`}>
                <h1 className={`text-primaryTextColor font-bold text-2xl`}>Property List</h1>
                <AddPropertyModal />
            </div>

            <div className={`mt-5 bg-whiteColor rounded-xl p-5 w-full h-full`}>
                <div className={`flex items-center gap-5 flex-wrap`}>

                    <div className="flex items-center gap-1 w-full sm:w-[50%] lg:w-[230px] p-3 rounded-lg bg-[#F3F3F3]">
                        <img src="/icons/search.svg" alt="" className="size-4"/>
                        <input placeholder="Enter an address, city or Zip code"
                        className="text-xs text-secondaryTextColor border-none outline-none bg-transparent w-full"/>
                    </div>

                    <Select>
                        <SelectTrigger className="w-full sm:w-[160px] bg-[#F3F3F3]">
                            <SelectValue placeholder="Any Status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="anyType">Any Type</SelectItem>
                            <SelectItem value="forSale">For Sale</SelectItem>
                            <SelectItem value="forRent">For Rent</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full sm:w-[160px] bg-[#F3F3F3]">
                            <SelectValue placeholder="Any Type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="anyType">Any Type</SelectItem>
                            <SelectItem value="Apartments">Apartments</SelectItem>
                            <SelectItem value="Houses">Houses</SelectItem>
                            <SelectItem value="Commercial">Commercial</SelectItem>
                            <SelectItem value="Garages">Garages</SelectItem>
                            <SelectItem value="Lots">Lots</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full sm:w-[160px] bg-[#F3F3F3]">
                            <SelectValue placeholder="All Countries"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="AllCountries">All Countries</SelectItem>
                            <SelectItem value="UK">UK</SelectItem>
                            <SelectItem value="USA">USA</SelectItem>
                            <SelectItem value="Spain">Spain</SelectItem>
                            <SelectItem value="Italy">Italy</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full sm:w-[160px] bg-[#F3F3F3]">
                            <SelectValue placeholder="All States"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="AllStates">All States</SelectItem>
                            <SelectItem value="London">London</SelectItem>
                            <SelectItem value="Liverpool">Liverpool</SelectItem>
                            <SelectItem value="Washington">Washington</SelectItem>
                            <SelectItem value="NewYork">NewYork</SelectItem>
                            <SelectItem value="Barcelona">Barcelona</SelectItem>
                            <SelectItem value="Madrid">Madrid</SelectItem>
                            <SelectItem value="Milano">Milano</SelectItem>
                            <SelectItem value="Roma">Roma</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <div className={`mt-6`}>
                    <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5`}>
                        {
                            propertyListData.map((item) => (
                                <PropertyRealEstateItem key={item.id} id={item.id} name={item.name} country={item.country}
                                                    image={item.image} price={item.price}/>
                            ))
                        }
                    </div>
                </div>

                <div className={`mt-6`}>
                    <Pagination />
                </div>

            </div>
        </Fragment>
    );
};

export default Property;


