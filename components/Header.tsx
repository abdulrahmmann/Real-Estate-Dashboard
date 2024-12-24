"use client";
import React, { Fragment, useState } from "react";
import ProfileDropdown from "@/components/ProfileDropdown";
import NotificationsSidebar from "@/components/NotificationsSidebar";

const Header = () => {
    const [profileDropdown, setProfileDropdown] = useState<boolean>(false);
    const [openNotification, setOpenNotification] = useState<boolean>(false);

    return (
        <Fragment>
            <header className={`p-4 md:py-4 md:px-5`}>
                <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center gap-4`}>
                        <img src={"/icons/menu.svg"} alt={""} className={`size-5 block md:hidden mr-2`} />
                    </div>

                    <div
                        className={`flex items-center gap-1 md:w-[250px] xl:w-[20%] md:p-3 rounded-lg md:bg-[#F4F4F4]`}
                    >
                        <img src={"/icons/search.svg"} alt={""} className={`size-5 md:size-4`} />
                        <input
                            placeholder={"Search Property, Customer etc"}
                            className={`hidden md:inline text-xs text-secondaryTextColor border-none outline-none bg-transparent w-full`}
                        />
                    </div>

                    <div className={`flex items-center gap-5 pr-0 md:pr-5`}>
                        <div className={`size-6 cursor-pointer`} onClick={() => setOpenNotification(!openNotification)}>
                            <img src={"/icons/bill-icon.svg"} alt={"bill"} />
                        </div>

                        <div
                            className={`flex items-center gap-3 relative cursor-pointer`}
                            onClick={() => setProfileDropdown(!profileDropdown)}
                        >
                            <img src={"/profile-image.png"} alt={"profile"} className={`size-10 object-contain rounded-full`} />
                            <div className={`hidden md:block`}>
                                <h2 className={`text-sm font-semibold text-primaryTextColor`}>Hawkins Maru</h2>
                                <h4 className={`text-sm text-secondaryTextColor`}>Company Manager</h4>
                            </div>
                            {profileDropdown && <ProfileDropdown />}
                        </div>
                    </div>
                </div>
            </header>

            <NotificationsSidebar
                openNotification={openNotification}
                setOpenNotification={setOpenNotification}
            />
        </Fragment>
    );
};

export default Header;
