import React from 'react';
import {HiDotsVertical} from "react-icons/hi";
import {NewCustomersBarChart} from "@/components/NewCustomersBarChart";
import {TotalCustomersBarChart} from "@/components/TotalCustomersBarChart";

const Customer = () => {
    return (
        <div className={`bg-whiteColor rounded-2xl px-5 py-3 h-full`}>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-base text-primaryTextColor font-semibold">Customer</h1>
                {/*<img src={'/icons/menu-dots.svg'} alt={'menu dots'} className={`cursor-pointer`} />*/}
                <HiDotsVertical color={'#808191'} className={`cursor-pointer`}/>
            </div>
            <div className={`flex flex-col`} style={{height: "calc(100% - 44px)"}}>
                <div className={`h-[50%] pb-6`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h2 className={`text-xs text-secondaryTextColor font-semibold mb-3`}>Total Customers</h2>
                            <h2 className={`text-2xl text-primaryTextColor font-semibold mb-1`}>5007k</h2>
                            <h2 className={`text-sm text-[#2ED480] font-semibold mb-1`}>21.77%</h2>
                        </div>
                        <TotalCustomersBarChart />
                    </div>
                </div>

                <div className={`w-full h-[1px] bg-[#E4E4E4]`}></div>
                <div className={`h-[50%] py-6`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h2 className={`text-xs text-secondaryTextColor font-semibold mb-3 whitespace-nowrap`}>New Customers This
                                Month</h2>
                            <h2 className={`text-2xl text-primaryTextColor font-semibold mb-1`}>12k</h2>
                            <h2 className={`text-sm text-[#2ED480] font-semibold mb-1`}>19.48%</h2>
                        </div>
                        <NewCustomersBarChart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;