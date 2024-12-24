"use client";

import React, { useState } from "react";
import { sidebar } from "@/data";
import Link from "next/link";

const Sidebar = () => {
    const [itemActive, setItemActive] = useState<string>(sidebar[0].name);
    const [itemHover, setItemHover] = useState<string | null>(null);

    return (
        <div className="w-full h-full bg-whiteColor px-4 py-6 fixed left-0 top-0 max-w-[250px] z-10">
            <div className="mb-6">
                <img src={'/Logo.svg'} alt="Logo" className="hidden md:block" />
            </div>
            <div className="flex flex-col items-start gap-2">
                {sidebar.map((item) => (
                    <Link
                        href={item.link}
                        key={item.id}
                        className={`w-full rounded-xl px-6 py-4 flex items-center gap-3 transition-all ${
                            itemActive === item.name ? 'bg-primaryColor' : itemHover === item.name ? 'bg-primaryColor' : ''
                        }`}
                        onClick={() => setItemActive(item.name)}
                        onMouseEnter={() => setItemHover(item.name)}
                        onMouseLeave={() => setItemHover(null)}
                    >
                        <img
                            src={
                                itemActive === item.name || itemHover === item.name
                                    ? item.iconActive
                                    : item.icon
                            }
                            alt="icon"
                            className="size-6"
                        />
                        <h1
                            className={`text-base font-bold ${
                                itemActive === item.name || itemHover === item.name
                                    ? 'text-white'
                                    : 'text-secondaryTextColor'
                            }`}
                        >
                            {item.name}
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
