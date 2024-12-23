import DashboardLayout from "@/app/Dashboard/layout";
import {propertyReferrals} from "@/data";
import {Progress} from "@/components/ui/progress";
import React from "react";
import StatCards from "@/components/StatCards";
import {TotalRevenueBarChart} from "@/components/TotalRevenueBarChart";
import PropertyReferrals from "@/components/PropertyReferrals";
import PropertyList from "@/components/PropertyList";
import TopAgent from "@/components/TopAgent";
import Customer from "@/components/Customer";
import LatestSales from "@/components/LatestSales";

export default function Home() {
    return (
        <DashboardLayout>
            <h1 className={`text-primaryTextColor font-bold text-2xl`}>Dashboard</h1>

            <div className={`mt-5`}>
                <div className={`grid grid-cols-12 gap-x-4 gap-y-4`}>
                    <StatCards/>
                </div>
            </div>

            <div className={`my-5`}>
                <div className={`grid grid-cols-12 gap-x-4 gap-y-4 lg:max-h-[382px] overflow-hidden`}>
                    <div className={`col-span-12 lg:col-span-8 max-h-[382px]`}>
                        <div className={`bg-whiteColor rounded-2xl px-5 py-3 h-full`}>
                            <div className={`flex items-center justify-between mb-5`}>
                                <h1 className={`text-base text-primaryTextColor font-semibold`}>Total Revenue</h1>
                                <div className={`flex items-center gap-4`}>
                                    <div className={`flex items-center gap-1`}>
                                        <div className={`size-3 rounded-full bg-[#6C5DD3]`}></div>
                                        <h2 className={`text-xs text-secondaryTextColor font-semibold`}>Last Month</h2>
                                    </div>
                                    <div className={`flex items-center gap-1`}>
                                        <div className={`size-3 rounded-full bg-[#CFC8FF]`}></div>
                                        <h2 className={`text-xs text-secondaryTextColor font-semibold`}>Running
                                            Month</h2>
                                    </div>
                                </div>
                            </div>
                            <TotalRevenueBarChart/>
                        </div>
                    </div>

                    <div className={`col-span-12 lg:col-span-4`}>
                        <PropertyReferrals/>
                    </div>
                </div>
            </div>

            <div className={`mb-5`}>
                <div className={`grid grid-cols-12 gap-x-4 gap-y-4`}>
                    <div className={`col-span-12 md:col-span-6 xl:col-span-4 max-h-[360px]`}>
                        <TopAgent />
                    </div>
                    <div className={`col-span-12 md:col-span-6 xl:col-span-4 max-h-[360px]`}>
                        <Customer />
                    </div>
                    <div className={`col-span-12 md:col-span-6  xl:col-span-4 max-h-[360px]`}>
                        <LatestSales />
                    </div>
                </div>
            </div>

            <div className={``}>
                <PropertyList/>
            </div>

        </DashboardLayout>
    );
}
