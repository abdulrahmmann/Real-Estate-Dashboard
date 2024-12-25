import React from 'react';
import Image from "next/image";
import {FiMapPin} from "react-icons/fi";
import {Button} from "@/components/ui/button";
import {MdOutlineMessage} from "react-icons/md";
import {IoCallOutline} from "react-icons/io5";
import {PropertyDetailsUserType} from "@/data/types";

const PropertyDetailsUser = ({agent, agentImage, country, propertis}: PropertyDetailsUserType) => {
    return (
        <div className={`p-6 border-2 border-[#E4E4E4] rounded-lg h-full`}>
            <div className={`flex flex-col items-center justify-center h-full`}>
                <div className={`text-center h-full`}>
                    <div className={`w-16 h-16 overflow-hidden rounded-full mx-auto`}>
                        <Image src={agentImage} alt={'user'} width={16} height={16} layout={"responsive"} quality={100}
                               priority={true} className={`rounded-full object-contain object-center`}/>
                    </div>
                    <h2 className={`text-lg text-primaryTextColor font-semibold mb-1 mt-3`}>{agent}</h2>
                    <h4 className={`text-sm text-secondaryTextColor mb-1`}>Agent</h4>
                    <div className={`flex items-center justify-center gap-1`}>
                        <FiMapPin color={'#808191'} className={`size-4`}/>
                        <h4 className={`text-sm text-secondaryTextColor`}>{country}</h4>
                    </div>
                    <h2 className={`text-base text-primaryTextColor font-semibold my-4`}>{propertis} Propertis</h2>
                </div>
                <div className={`flex items-center gap-2.5`}>
                    <Button className={`bg-primaryColor hover:bg-primaryColor/85 py-2.5 px-4 min-w-[115px]`}>
                        <MdOutlineMessage className={`size-4 text-whiteColor`}/> Message
                    </Button>
                    <Button className={`bg-[#2ED480] hover:bg-[#2ED480]/85 py-2.5 px-4 min-w-[115px]`}>
                        <IoCallOutline className={`size-4 text-whiteColor`}/> Call
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsUser;