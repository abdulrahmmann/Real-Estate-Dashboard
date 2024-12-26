import React, {Fragment} from 'react';
import Image from "next/image";
import {FaChevronLeft} from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {DatePicker} from "@/components/ui/DatePicker";
import { TbCloudUpload } from "react-icons/tb";


const AddNewAgent = () => {
    return (
        <Fragment>
            <Link href={'/Dashboard/Agent'} className={`flex items-center gap-3`}>
                <FaChevronLeft className={`text-primaryTextColor size-4`}/>
                <h1 className="text-primaryTextColor font-bold text-lg">Add New Agent</h1>
            </Link>

            <div className={`mt-5 relative`}>
                <div className={`bg-whiteColor rounded-xl`}>
                    <div className={`w-full h-[200px] md:h-[280px] relative`}>
                        <Image
                            src='/bg-profile2.png'
                            alt='profile background image'
                            layout='fill'
                            className={`rounded-xl`}
                        />

                        <div
                            className={`size-[120px] rounded-full absolute -bottom-[60px] left-10 border-4 border-whiteColor`}>
                            <Image
                                src='/user.svg'
                                alt='profile user image'
                                layout='fill'
                                className={`rounded-full`}
                            />
                        </div>
                    </div>

                    <div className={`w-full flex items-center justify-end pt-5 sm:pr-5 pr-0 gap-2 absolute bottom-0 right-5 sm:right-0 sm:left-0 sm:relative`}
                    style={{width: "calc(100% - 40px)"}}>
                        <button className={`w-full sm:w-fit px-4 py-2 rounded-lg text-center text-sm text-primaryTextColor bg-whiteColor border border-[#E4E4E4]`}>Cancel</button>
                        <button className={`w-full sm:w-fit px-4 py-2 rounded-lg text-center text-sm text-whiteColor bg-primaryColor`}>Save</button>
                    </div>

                    <div className={`sm:p-10 px-5 mt-20 sm:mt-0`}>
                        <h2 className={`text-base text-primaryTextColor font-semibold`}>My details</h2>

                        <div className={`py-5`}>
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px]`}>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="fName" className={`mb-1 ml-0.5`}>First name</Label>
                                    <Input id="fName" type="text"/>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="lName" className={`mb-1 ml-0.5`}>Last name</Label>
                                    <Input id="lName" type="text"/>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="phone" className={`mb-1 ml-0.5`}>phone</Label>
                                    <Input id="phone" type="tel"/>
                                </div>

                                <div className={`flex flex-col items-start gap-1`}>
                                    <Label htmlFor="email" className={`mb-1 ml-0.5`}>Date of Birth</Label>
                                    <DatePicker/>
                                </div>

                                <div className={`flex flex-col items-start gap-1`}>
                                    <Label htmlFor="email" className={`text-sm ml-0.5`}>Gender</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Male"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="email" className={`ml-0.5`}>Email</Label>
                                    <Input id="email" type="text"/>
                                </div>

                                <div className={`flex flex-col items-start gap-1`}>
                                    <Label htmlFor="email" className={`mb-1 ml-0.5`}>Country</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Palestine"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="palestine">Palestine</SelectItem>
                                            <SelectItem value="qatar">Qatar</SelectItem>
                                            <SelectItem value="syria">Syria</SelectItem>
                                            <SelectItem value="lebanon">Lebanon</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="properties" className={`mb-1 ml-0.5`}>Properties</Label>
                                    <Input id="properties" type="text"/>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full mt-5 max-w-[800px] sm:pb-0 pb-10">
                                <label htmlFor="dropzone-file"
                                       className="flex flex-col items-center justify-center w-full h-32 bg-whiteColor border border-[#E4E4E4] rounded-xl cursor-pointer">
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <div
                                            className={`mx-auto size-9 rounded-full bg-[#DADEFA] flex items-center justify-center`}>
                                            <TbCloudUpload className={`size-5 text-[#475BE8]`}/>
                                        </div>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                            (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden"/>
                                </label>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default AddNewAgent;