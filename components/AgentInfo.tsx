import React from 'react';
import {AgentsType} from "@/data/types";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const AgentInfo = ({image, agent, age, city, state, country, phone, email, postCode, agentID, instagram, twitter, facebook}: AgentsType) => {
    return (
        <div className={`bg-whiteColor rounded-xl h-full`}>
            <div className={`relative`}>
                <img src={'/bg-profile.png'} alt={'profile bg'}
                     className={`w-full h-[130px] rounded-xl object-cover`}/>
                <div
                    className={`absolute left-[50%] top-[50%] -translate-x-[50%] z-10 rounded-full border-4 border-whiteColor`}>
                    <img src={image} alt={'user img'} className={`size-24 rounded-full`}/>
                </div>
            </div>
            <div className={`mt-10 text-center`}>
                <h2 className={`text-primaryTextColor font-semibold text-base`}>{agent}</h2>
                <h4 className={`text-secondaryTextColor font-normal text-sm`}>Agent</h4>
            </div>
            <div className={`p-4 mt-4`}>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Age:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{age}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>City:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{city}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>State:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{state}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Country:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{country}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Post
                        Code:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{postCode}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Agent
                        ID:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{agentID}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Phone:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{phone}</h3>
                </div>
                <div className={`flex items-center gap-5 mb-3.5`}>
                    <h4 className={`text-sm text-secondaryTextColor font-normal whitespace-nowrap w-[65px]`}>Email:</h4>
                    <h3 className={`text-sm text-primaryTextColor font-semibold`}>{email}</h3>
                </div>
            </div>

            <div className={`my-0`}>
                <div className={`flex items-center justify-center gap-2`}>
                    <Link href={`/${facebook}`} className={`size-9 rounded-full bg-[#F7F7F7] flex items-center justify-center`}>
                        <FaFacebookF className={`size-[18px] text-[#1976D2]`} />
                    </Link>
                    <Link href={`/${instagram}`} className={`size-9 rounded-full bg-[#F7F7F7] flex items-center justify-center`}>
                        <img src={'/logo-instagram.svg'} alt={''} className={`size-[18px]`} />
                    </Link>
                    <Link href={`/${twitter}`} className={`size-9 rounded-full bg-[#F7F7F7] flex items-center justify-center`}>
                        <FaXTwitter className={`size-[18px]`} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AgentInfo;