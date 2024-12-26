import React, {Fragment} from 'react';
import {AgentsType} from "@/data/types";
import {agentsList} from "@/data";
import {FaChevronLeft} from "react-icons/fa";
import Link from "next/link";
import AgentInfo from "@/components/AgentInfo";
import {MdDone} from "react-icons/md";
import {CustomersDonutChart} from "@/components/CustomersDonutChart";
import {CitiesDonutChart} from "@/components/CitiesDonutChart";
import {RentDonutChart} from "@/components/RentDonutChart";
import {ActiveListingItem} from "@/components/ActiveListingItem";

const AgentDetails = ({params, searchParams}: any) => {
    const agentDetails: AgentsType = agentsList[params.id - 1];
    console.log(agentDetails.city)
    return (
        <Fragment>
            <div className={`w-full h-full`}>
                <Link href={'/Dashboard/Agent'} className={`flex items-center gap-3`}>
                    <FaChevronLeft className={`text-primaryTextColor size-4`}/>
                    <h2 className={`text-primaryTextColor text-lg font-semibold`}>Agent Details</h2>
                </Link>
            </div>

            <div className={`mt-5 grid grid-cols-12 gap-5`}>
                <div className={`col-span-12 lg:col-span-3`}>
                    <AgentInfo agentID={agentDetails.agentID} agent={agentDetails.agent} city={agentDetails.city}
                               state={agentDetails.state} age={agentDetails.age} postCode={agentDetails.postCode}
                               country={agentDetails.country} phone={agentDetails.phone} email={agentDetails.email}
                               image={agentDetails.image} instagram={agentDetails.instagram}
                               twitter={agentDetails.twitter} facebook={agentDetails.facebook}/>
                </div>

                <div className={`col-span-12 lg:col-span-9`}>
                    <div className={`bg-whiteColor p-5 rounded-xl h-full`}>
                        <h2 className={`text-primaryTextColor text-base font-semibold`}>Agent Details</h2>
                        <div className={`my-4 bg-[#E4E4E4] w-full h-[1.5px]`}></div>
                        <p className={`text-sm text-secondaryTextColor leading-relaxed tracking-wide`}>{agentDetails.overview}</p>
                        <div className={`my-6`}>
                            <div className={`flex items-center mb-4`}>
                                <div className={`flex items-center gap-3 w-40`}>
                                    <div
                                        className={`size-5 rounded-xl bg-primaryColor flex items-center justify-center`}>
                                        <MdDone className={`text-white size-3.5`}/>
                                    </div>
                                    <h3 className={`text-sm text-primaryTextColor font-medium`}>Agency</h3>
                                </div>

                                <div className={`flex items-center gap-8`}>
                                    <h4 className={`text-sm text-primaryTextColor font-normal`}>:</h4>
                                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>{agentDetails.agency}</h3>
                                </div>
                            </div>

                            <div className={`flex items-center mb-4`}>
                                <div className={`flex items-center gap-3 w-40`}>
                                    <div
                                        className={`size-5 rounded-xl bg-primaryColor flex items-center justify-center`}>
                                        <MdDone className={`text-white size-3.5`}/>
                                    </div>
                                    <h3 className={`text-sm text-primaryTextColor font-medium`}>Agent License</h3>
                                </div>

                                <div className={`flex items-center gap-8`}>
                                    <h4 className={`text-sm text-primaryTextColor font-normal`}>:</h4>
                                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>{agentDetails.agentLicense}</h3>
                                </div>
                            </div>

                            <div className={`flex items-center mb-4`}>
                                <div className={`flex items-center gap-3 w-40`}>
                                    <div
                                        className={`size-5 rounded-xl bg-primaryColor flex items-center justify-center`}>
                                        <MdDone className={`text-white size-3.5`}/>
                                    </div>
                                    <h3 className={`text-sm text-primaryTextColor font-medium`}>Tax Number</h3>
                                </div>

                                <div className={`flex items-center gap-8`}>
                                    <h4 className={`text-sm text-primaryTextColor font-normal`}>:</h4>
                                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>{agentDetails.agentLicense}</h3>
                                </div>
                            </div>

                            <div className={`flex items-center mb-4`}>
                                <div className={`flex items-center gap-3 w-40`}>
                                    <div
                                        className={`size-5 rounded-xl bg-primaryColor flex items-center justify-center`}>
                                        <MdDone className={`text-white size-3.5`}/>
                                    </div>
                                    <h3 className={`text-sm text-primaryTextColor font-medium`}>Service area</h3>
                                </div>

                                <div className={`flex items-center gap-8`}>
                                    <h4 className={`text-sm text-primaryTextColor font-normal`}>:</h4>
                                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>{agentDetails.serviceArea}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`my-4 bg-[#E4E4E4] w-full h-[1.5px]`}></div>

                        <h2 className={`text-primaryTextColor text-base font-semibold`}>Agent Status</h2>

                        <div className={`mt-5`}>
                            <div className={`grid grid-cols-12 gap-5`}>
                                <div className={`col-span-12 md:col-span-4`}>
                                    <div className={`bg-whiteColor border border-[#E4E4E4] rounded-xl py-5 px-7`}>
                                        <div className={`h-full text-center`}>
                                            <h4 className={`text-base text-secondaryTextColor font-normal mb-1`}>Total
                                                Listings</h4>
                                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{agentDetails.totalListings}</h1>
                                            <div className={`mt-5`}>
                                                <CustomersDonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`col-span-12 md:col-span-4`}>
                                    <div className={`bg-whiteColor border border-[#E4E4E4] rounded-xl py-5 px-7`}>
                                        <div className={`h-full text-center`}>
                                            <h4 className={`text-base text-secondaryTextColor font-normal mb-1`}>Properties
                                                Sold</h4>
                                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{agentDetails.propertiesSold}</h1>
                                            <div className={`mt-5`}>
                                                <CitiesDonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`col-span-12 md:col-span-4`}>
                                    <div className={`bg-whiteColor border border-[#E4E4E4] rounded-xl py-5 px-7`}>
                                        <div className={`h-full text-center`}>
                                            <h4 className={`text-base text-secondaryTextColor font-normal mb-1`}>Properties
                                                Rent</h4>
                                            <h1 className={`text-2xl text-primaryTextColor font-bold`}>{agentDetails.propertiesRent}</h1>
                                            <div className={`mt-5`}>
                                                <RentDonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mt-5`}>
                <div className={`p-5 bg-whiteColor rounded-xl`}>
                    <div className={`flex items-center justify-between`}>
                        <h2 className="text-primaryTextColor text-base font-semibold">Active Listing</h2>
                        <Link href={''}
                              className={`p-2 text-sm font-medium text-secondaryTextColor rounded-lg border border-[#E4E4E4]`}>View
                            All</Link>
                    </div>

                    <div className={`mt-5`}>
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                            {
                                agentDetails.activeListing?.slice(0, 4)?.map((listing) => (
                                    <ActiveListingItem id={listing.id} image={listing.image} price={listing.price}
                                                       name={listing.name} location={listing.location}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default AgentDetails;

