"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { sidebar } from "@/data";
import Link from "next/link";

const Sidebar = () => {
    const pathname = usePathname();
    const [itemHover, setItemHover] = useState<string | null>(null);

    return (
        <div className="w-full h-full bg-whiteColor px-4 py-6 fixed left-0 top-0 max-w-[250px] z-10">
            <div className="mb-6">
                <button>
                    <img src={'/Logo.svg'} alt="Logo" className="hidden xl:block"/>
                </button>
            </div>
            <div className="flex flex-col items-start gap-2">
                {sidebar.map((item) => {
                    const isActive = pathname === item.link;
                    const isHovered = itemHover === item.name;

                    return (
                        <Link
                            href={item.link}
                            key={item.id}
                            className={`w-full rounded-xl px-6 py-4 flex items-center gap-3 transition-all ${
                                isActive ? 'bg-primaryColor' : isHovered ? 'bg-primaryColor' : 'bg-transparent'
                            }`}
                            onMouseEnter={() => setItemHover(item.name)}
                            onMouseLeave={() => setItemHover(null)}
                        >
                            <img
                                src={isActive || isHovered ? item.iconActive : item.icon}
                                alt="icon"
                                className="size-6"
                            />
                            <h1
                                className={`text-base font-bold ${
                                    isActive || isHovered ? 'text-white' : 'text-secondaryTextColor'
                                }`}
                            >
                                {item.name}
                            </h1>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
