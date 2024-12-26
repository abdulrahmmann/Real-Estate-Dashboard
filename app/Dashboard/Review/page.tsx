"use client";
import React, {Fragment, useState} from 'react';
import {ReviewList} from "@/data";
import ReviewListItem from "@/components/ReviewListItem";
import Pagination from "@/components/Pagination";

const Review = () => {
    const [tabClicked, setTabClicked] = useState<string>("All Reviews");
    return (
        <Fragment>
            <h1 className={`text-primaryTextColor font-bold text-2xl`}>Review List</h1>

            <div className={`my-5`}>
                <div className={`bg-whiteColor rounded-xl px-7 py-5 w-fit flex items-center gap-4 relative`}>
                    <button
                        className={`text-sm transition-all relative hover:tabActive hover:text-primaryColor hover:font-semibold ${tabClicked === "All Reviews" ? 'font-semibold text-primaryColor relative tabActive' : 'font-normal text-secondaryTextColor'}`}
                        onClick={() => setTabClicked("All Reviews")}>
                        All Reviews
                    </button>

                    <button
                        className={`text-sm transition-all relative hover:tabActive hover:text-primaryColor hover:font-semibold ${tabClicked === "Published" ? 'font-semibold text-primaryColor relative tabActive' : 'font-normal text-secondaryTextColor'}`}
                        onClick={() => setTabClicked("Published")}>
                        Published
                    </button>

                    <button
                        className={`text-sm transition-all relative hover:tabActive hover:text-primaryColor hover:font-semibold ${tabClicked === "Deleted" ? 'font-semibold text-primaryColor relative tabActive' : 'font-normal text-secondaryTextColor'}`}
                        onClick={() => setTabClicked("Deleted")}>
                        Deleted
                    </button>
                </div>
            </div>

            <div>
                {
                    ReviewList.map((rev) => (
                        <ReviewListItem key={rev.id} id={rev.id} name={rev.name} image={rev.image} joinDate={rev.joinDate}
                                        description={rev.description} rating={rev.rating} ratingCount={rev.ratingCount}
                                        codeId={rev.codeId}/>
                    ))
                }
            </div>

            <div className={`mt-5`}>
                <Pagination />
            </div>

        </Fragment>
    );
};

export default Review;