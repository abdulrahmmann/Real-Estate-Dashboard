"use client";
import React, {useState} from 'react';
import {sidebar} from "@/data";
import Link from "next/link";

const Sidebar = () => {
    const [itemActive, setItemActive] = useState<string>(sidebar[0].name);
    return (
        <div className={`w-full h-full bg-whiteColor px-4 py-6`}>
            <div className={`flex flex-col items-start `}>
                {
                    sidebar.map((item) => (
                        <Link href={item.link} key={item.id}
                              className={`w-full rounded-xl px-6 py-4 flex items-center gap-3 transition-all ${itemActive === item.name? 'bg-primaryColor': ''}`}
                        onClick={() => setItemActive(item.name)}>
                            <img src={`${itemActive === item.name? `${item.iconActive}`: `${item.icon}`}`} alt={'icon'} className={`size-6`}/>
                            <h1 className={`text-base font-bold ${itemActive === item.name? 'text-white': 'text-secondaryTextColor'}`}>{item.name}</h1>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;