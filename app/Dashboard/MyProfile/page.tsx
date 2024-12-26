"use client";
import React, {Fragment, useState} from 'react';
import { MdCameraAlt } from "react-icons/md";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {UserProfileDropdown} from "@/components/UserProfileDropdown";

const MyProfile = () => {
    const [dropdown, setDropdown] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const handleEditProfile = () => {
        setIsEditable(true);
        setDropdown(false);
    };
    return (
        <Fragment>
            <h1 className={`text-primaryTextColor font-bold text-2xl`}>My Profile</h1>

            <div className={`mt-5`}>
                <div className={`bg-whiteColor rounded-xl p-5 relative`}>
                    <div className={`flex flex-col md:flex-row items-start md:items-center md:gap-14`}>

                        <div className={`relative w-full md:w-fit h-fit md:h-[320px]`}>
                            <img src={'/bg-profile3.png'} alt={'profile bg'}
                                 className={`w-full h-[160px] md:w-[340px] md:h-[320px] rounded-tr-xl rounded-br-xl rounded-tl-xl rounded-bl-xl  md:rounded-tr-none md:rounded-br-none `}/>
                            <div className={`border-4 md:border-0 border-whiteColor size-[70px] rounded-full absolute -bottom-[35px] ml-5 md:ml-0 md:bottom-[65%] md:-right-[35px]`}>
                                <img src={'/user.svg'} alt={'user img'}
                                     className={`size-[70px] rounded-xl`}/>
                            </div>
                            <button className={`flex items-center gap-2.5 bg-[#F4F4F4] p-3 md:px-4 md:py-3 rounded-xl absolute left-5 bottom-[50%] md:bottom-5 text-xs text-primaryTextColor`}>
                                <MdCameraAlt className={`size-[18px] text-secondaryTextColor`} />
                                Change Photo
                            </button>
                        </div>

                        <div className={`mt-10 md:mt-0 max-w-full w-full md:max-w-[540px]`}>
                            <h1 className={`text-base text-primaryTextColor font-semibold mb-1`}>Mr. Alvert Flore</h1>
                            <h4 className={`text-xs text-secondaryTextColor font-normal`}>Admin</h4>
                            <div className={`mt-7`}>
                                <div className="grid w-full items-center gap-1.5 mb-5">
                                    <Label htmlFor="Address" className={`text-xs text-secondaryTextColor mb-1`}>Address</Label>
                                    <Input type="text" id="Address" placeholder="Address" disabled={!isEditable} className={`text-xs`}/>
                                </div>

                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5`}>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="PhoneNumber"
                                               className={`text-xs text-secondaryTextColor mb-1`}>Phone Number</Label>
                                        <Input type="tel" id="PhoneNumber" placeholder="PhoneNumber" disabled={!isEditable} className={`text-xs`}/>
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="Email"
                                               className={`text-xs text-secondaryTextColor mb-1`}>Email</Label>
                                        <Input type="email" id="Email" placeholder="Email" disabled={!isEditable} className={`text-xs`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`absolute top-[34%] right-5 mt-5 md:mt-0 md:right-5 md:top-5 cursor-pointer`}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        <img src={"/icons/menu-dots.svg"} alt={""} className={`object-contain`}/>

                        <div className={`${dropdown ? "block" : "hidden"}`}>
                            <UserProfileDropdown onEditProfile={handleEditProfile} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MyProfile;