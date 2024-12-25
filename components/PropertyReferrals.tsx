import React from 'react';
import {propertyReferrals} from "@/data";
import {Progress} from "@/components/ui/progress";

const PropertyReferrals = () => {
    return (
        <div className={`bg-whiteColor rounded-2xl px-5 py-3`}>
            <h1 className={`text-base text-primaryTextColor font-semibold`}>Property Referrals</h1>
            <div className={`py-5`}>
                {
                    propertyReferrals.map((property) => (
                        <div key={property.id} className={`mb-4 last:mb-0`}>
                            <div className={`flex items-center justify-between mb-3`}>
                                <h3 className={`text-base text-primaryTextColor font-medium`}>{property.name}</h3>
                                <h3 className={`text-base text-primaryTextColor font-medium`}>{property.percentage}%</h3>
                            </div>
                            <Progress
                                key={property.id}
                                value={property.percentage}
                                indicatorStyle={{backgroundColor: property.color}}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PropertyReferrals;