import React, {Fragment} from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {AgentItem} from "@/components/AgentItem";
import {agentsList} from "@/data";
import Pagination from "@/components/Pagination";

const Agent = () => {
    return (
        <Fragment>
            <div className={`flex items-center justify-between`}>
                <h1 className={`text-primaryTextColor font-bold text-2xl`}>Agents List</h1>
                <Link href={'/Dashboard/Agent/add-new-agent'}>
                    <Button
                        className={`text-sm text-whiteColor font-medium px-5 py-3 bg-primaryColor rounded-xl hover:bg-primaryColor hover:text-whiteColor h-12`}>
                        + Add Agent
                    </Button>
                </Link>
            </div>

            <div className={`mt-5`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                    {
                        agentsList.map((item) => (
                            <AgentItem id={item.id} agent={item.agent} country={item.country} phone={item.phone}
                                       propertis={item.propertis} email={item.email} image={item.image}/>
                        ))
                    }
                </div>
            </div>

            <div className={`mt-6`}>
                <Pagination />
            </div>


        </Fragment>
    );
};

export default Agent;


