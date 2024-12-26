import React from 'react';
import {topAgent} from "@/data";
import {TopAgentType} from "@/data/types";
import {HiDotsVertical} from "react-icons/hi";

const TopAgent = () => {
    return (
        <div className={`bg-whiteColor rounded-2xl px-5 py-3 h-full`}>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-base text-primaryTextColor font-semibold">Total Revenue</h1>
                <div className={`text-sm text-secondaryTextColor font-semibold py-2 px-3.5 border border-[#E4E4E4] rounded-lg cursor-pointer`}>
                    View All
                </div>
            </div>
            <div className={``}>
                {
                    topAgent.map((agent) => (
                        <TopAgentUser key={agent.id} id={agent.id} name={agent.name} agent={agent.agent} image={agent.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopAgent;

export const TopAgentUser = ({id, name, agent, image}: TopAgentType) => {
    return (
        <div key={id} className={`flex items-center justify-between mb-4 last:mb-0`}>
            <div className={`flex items-center gap-2.5`}>
                <img src={image} alt={'TopAgentUserImage'} className={`size-10 rounded-full object-cover`} />
                <div>
                    <h3 className={`text-sm text-primaryTextColor font-medium`}>{name}</h3>
                    <h4 className={`text-xs text-secondaryTextColor font-normal`}>{agent}</h4>
                </div>
            </div>

            <HiDotsVertical color={'#808191'} className={`cursor-pointer`} />
        </div>
    );
}