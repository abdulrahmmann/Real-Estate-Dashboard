import React, {Fragment} from 'react';
import {FaChevronLeft} from "react-icons/fa";
import Link from "next/link";
import PropertyDetailsUser from "@/components/PropertyDetailsUser";
import {PropertyListDateDetailsType} from "@/data/types";
import {PropertyListDateDetails} from "@/data";
import PropertyDetailsDescription from "@/components/PropertyDetailsDescription";

const PropertyDetails = ({params}: any) => {
    const propertyDetails: PropertyListDateDetailsType = PropertyListDateDetails[params.id - 1];
    return (
        <Fragment>
            <div className={`bg-whiteColor rounded-xl p-5 w-full h-full`}>
                <Link href={'/Dashboard/Property'} className={`flex items-center gap-3`}>
                    <FaChevronLeft className={`text-primaryTextColor size-4`}/>
                    <h2 className={`text-primaryTextColor text-lg font-semibold`}>Details</h2>
                </Link>

                <div className={`mt-6`}>
                    <div className={`grid grid-cols-12 gap-5`}>
                        <div className={`col-span-12 lg:col-span-9 lg:max-h-[321px]`}>
                            <div className={`grid grid-cols-12 gap-2 lg:gap-5`}>
                                <div className={`col-span-8 lg:col-span-9`}>
                                    <div>
                                        <img src={`${propertyDetails.images?.[0]}`} alt={'estate img'}
                                             className={`w-full h-[250px] lg:h-[321px] rounded-xl`}/>
                                    </div>
                                </div>

                                <div className={`col-span-4 lg:col-span-3 lg:max-h-[321px]`}>
                                    <div
                                        className={`flex flex-col justify-between h-[250px] lg:max-h-[321px] lg:min-h-[321px]`}>
                                        <img src={`${propertyDetails.images?.[1]}`} alt={`estate img`}
                                             className={`w-full h-[121px] lg:h-[154px] rounded-xl`}/>
                                        <img src={`${propertyDetails.images?.[2]}`} alt={`estate img`}
                                             className={`w-full h-[121px] lg:h-[154px] rounded-xl`}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`col-span-12 lg:col-span-3 lg:max-h-[321px] lg:min-h-[321px]`}>
                            <PropertyDetailsUser
                                agent={propertyDetails.agent}
                                agentImage={propertyDetails.agentImage}
                                country={propertyDetails.country}
                                propertis={propertyDetails.propertis ?? 0}
                            />
                        </div>
                    </div>
                </div>

                <div className={`my-4`}>
                    <PropertyDetailsDescription id={propertyDetails.id} name={propertyDetails.name} description={propertyDetails.description}
                                                rating={propertyDetails.rating} agent={propertyDetails.agent} agentImage={propertyDetails.agentImage}
                                                price={propertyDetails.price} country={propertyDetails.country} somokingArea={propertyDetails.somokingArea}
                                                kitchen={propertyDetails.kitchen} balcony={propertyDetails.balcony} wifi={propertyDetails.wifi}
                                                parkingArea={propertyDetails.parkingArea} />
                </div>

            </div>
        </Fragment>
    );
};

export default PropertyDetails;