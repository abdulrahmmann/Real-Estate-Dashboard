import React, {Fragment} from 'react';
import {statsCard} from "@/data";
import {SalesDonutChart} from "@/components/SalesDonutChart";
import {RentDonutChart} from "@/components/RentDonutChart";
import {CustomersDonutChart} from "@/components/CustomersDonutChart";
import {CitiesDonutChart} from "@/components/CitiesDonutChart";

const StatCards = () => {
    return (
        <Fragment>
            <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3`}>
                <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h3 className={`text-sm text-secondaryTextColor font-medium mb-1`}>{statsCard[0].title}</h3>
                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{statsCard[0].number}</h1>
                        </div>
                        <SalesDonutChart/>
                    </div>
                </div>
            </div>

            <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3`}>
                <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h3 className={`text-sm text-secondaryTextColor font-medium mb-1`}>{statsCard[1].title}</h3>
                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{statsCard[1].number}</h1>
                        </div>
                        <RentDonutChart/>
                    </div>
                </div>
            </div>

            <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3`}>
                <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h3 className={`text-sm text-secondaryTextColor font-medium mb-1`}>{statsCard[2].title}</h3>
                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{statsCard[2].number}</h1>
                        </div>
                        <CustomersDonutChart/>
                    </div>
                </div>
            </div>

            <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3`}>
                <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
                    <div className={`flex items-center justify-between`}>
                        <div>
                            <h3 className={`text-sm text-secondaryTextColor font-medium mb-1`}>{statsCard[3].title}</h3>
                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{statsCard[3].number}</h1>
                        </div>
                        <CitiesDonutChart/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default StatCards;