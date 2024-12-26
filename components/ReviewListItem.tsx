import React from 'react';
import {ReviewListType} from "@/data/types";
import { FaStar } from "react-icons/fa";
import {Button} from "@/components/ui/button";

const ReviewListItem = ({id, name, image, codeId, description, joinDate, rating, ratingCount}: ReviewListType) => {
    const ratingC = Math.round(ratingCount);
    return (
        <div key={id} className={`bg-whiteColor rounded-xl w-full mb-5 last:mb-0`}>
            <div className={`p-6`}>
                <div className={`flex flex-col lg:flex-row gap-5 justify-between lg:items-center`}>

                    <div className={`flex items-center gap-3`}>
                        <img src={image} alt={"image"} className={`size-[70px] rounded-lg`}/>
                        <div>
                            <h4 className={`text-sm font-bold text-primaryColor mb-1`}>{codeId}</h4>
                            <h3 className={`text-sm font-medium text-primaryTextColor mb-1`}>{name}</h3>
                            <h4 className={`text-xs font-normal text-secondaryTextColor mb-1`}>Join On {joinDate}</h4>
                        </div>
                    </div>

                    <div className={`flex flex-col gap-3 justify-between`}>
                        <p className={`max-w-[500px] text-sm font-normal text-secondaryTextColor tracking-wide leading-relaxed`}>{description}</p>
                        <div className={`flex items-center gap-3`}>
                            {
                                rating.map((rat, index) => (
                                    <h2 key={index}
                                        className={`uppercase text-sm font-semibold px-4 py-2 rounded-xl text-center ${rat === "bad service" || rat === "unexpected" ? 'text-[#EB5757] border border-[#EB5757]' : 'text-primaryColor border border-primaryColor'}`}>
                                        {rat}
                                    </h2>
                                ))
                            }
                        </div>
                    </div>

                    <div className={`flex flex-col gap-3 lg:items-end justify-between`}>
                        <div className={`flex items-center gap-3`}>
                            <h2 className={`text-primaryTextColor font-semibold text-xl`}>{ratingCount}</h2>
                           <div className={`flex items-center gap-0.5`}>
                               {
                                   Array.from({length: ratingC}, (_, index) => (
                                       <FaStar key={index} color={'#F2C94C'}/>
                                   ))
                               }
                           </div>
                        </div>
                        <div className={`flex items-center gap-3`}>
                            <Button className={`bg-transparent border border-[#EB5757] text-[#EB5757] hover:bg-[#EB5757] hover:text-white transition-all`}>Reject</Button>
                            <Button className={`bg-[#2ED480]`}>Approve</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewListItem;