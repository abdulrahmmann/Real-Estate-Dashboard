import React from 'react';
import Link from "next/link";
import { MdEdit } from "react-icons/md";

const UserProfileDropdown = () => {
    return (
        <div className={`w-[150px] bg-[#FCFCFC] p-2.5 rounded-xl absolute top-5 z-50 right-0 shadow-sm drop-shadow-sm`}
        style={{boxShadow: "0px 16px 30px 0px rgba(135, 134, 134, 0.1)"}}>
            <div className={`flex flex-col`}>
                <Link href={''}
                      className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <MdEdit className={`size-[18px] text-secondaryTextColor`} />
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Edit Profile</h3>
                </Link>
                <Link href={''}
                      className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <img src={'/icons/settings.svg'} alt={''} className={`size-[18px]`}/>
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Settings</h3>
                </Link>
            </div>
        </div>
    );
};

export default UserProfileDropdown;