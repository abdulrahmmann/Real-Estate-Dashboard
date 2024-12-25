import React from "react";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {AgentsType} from "@/data/types";

export const AgentItem = ({id, agent, propertis, country, phone, email, image}: AgentsType) => {
    return (
        <div key={id} className={`bg-whiteColor rounded-xl p-5 h-[230px]`}
             style={{boxShadow: "box-shadow: 0px 22px 45px 2px rgba(176, 176, 176, 0.1);"}}>
            <div className={`relative flex items-start gap-5`}>
                <img src={image} alt={'agent image'} className={`w-[130px] h-[110px] sm:w-[250px] sm:h-[190px] rounded-xl`} />
                <div className={``}>
                    <h2 className={`text-lg text-primaryTextColor font-semibold mb-1`}>{agent}</h2>
                    <h4 className={`text-sm text-secondaryTextColor font-normal`}>Real-Estate Agent</h4>
                    <div className={`mt-4 flex flex-col gap-3`}>
                        <div className={`flex items-center gap-2`}>
                            <MdEmail className={`size-4 text-secondaryTextColor`}/>
                            <h4 className={`text-secondaryTextColor text-sm font-normal`}>{email}</h4>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <FaPhoneAlt className={`size-4 text-secondaryTextColor`}/>
                            <h4 className={`text-secondaryTextColor text-sm font-normal`}>{phone}</h4>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <MdLocationOn className={`size-4 text-secondaryTextColor`}/>
                            <h4 className={`text-secondaryTextColor text-sm font-normal`}>{country}</h4>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <FaBuilding className={`size-4 text-secondaryTextColor`}/>
                            <h4 className={`text-secondaryTextColor text-sm font-normal`}>{propertis} Properties</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}