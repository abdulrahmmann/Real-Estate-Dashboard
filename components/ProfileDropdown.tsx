import React from 'react';
import Link from "next/link";

const ProfileDropdown = () => {
    return (
        <div className={`w-[192px] h-[188px] bg-whiteColor p-2.5 rounded-xl absolute top-[62px] z-10 right-0`}
             style={{boxShadow: "0px 40px 50px 1px rgba(120, 114, 114, 0.15)"}}>
            <div className={`flex flex-col`}>
                <Link href={'/Dashboard/MyProfile'} className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <img src={'/icons/edit-profile.svg'} alt={''} className={``}/>
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Edit Profile</h3>
                </Link>
                <Link href={''} className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <img src={'/icons/settings.svg'} alt={''} className={``}/>
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Settings</h3>
                </Link>
                <Link href={'/signin'} className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <img src={'/icons/logout.svg'} alt={''} className={``}/>
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Logout</h3>
                </Link>
                <Link href={''} className={`p-2.5 flex items-center gap-2.5 hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                    <img src={'/icons/edit-profile.svg'} alt={''} className={``}/>
                    <h3 className={`text-sm text-secondaryTextColor font-medium`}>Dark Mode</h3>
                </Link>
            </div>
        </div>
    );
};

export default ProfileDropdown;