import { NotificationsListType } from "@/data/types";
import React from "react";

type NotificationType = 'Payment' | 'Update' | 'Booking';

export const NotificationsItem = ({ id, title, message, dateTime, notificationType }: NotificationsListType & { notificationType: NotificationType }) => {
    const typeConfig: Record<NotificationType, { bgColor: string; icon: string }> = {
        Payment: { bgColor: '#38B259', icon: '/icons/payment.svg' },
        Update: { bgColor: '#006CE4', icon: '/icons/update-apps.svg' },
        Booking: { bgColor: '#EC4E2C', icon: '/icons/booking.svg' },
    };

    const type = typeConfig[notificationType];

    const bgColor = type.bgColor;
    const icon = type.icon;

    return (
        <div>
            <div key={id} className="flex items-start gap-2.5 my-4">
                <div
                    className={`min-w-9 min-h-9 max-w-9 max-h-9 rounded-sm flex items-center justify-center`}
                    style={{ backgroundColor: bgColor }}
                >
                    <img src={icon} alt={notificationType} className={`size-[18px]`} />
                </div>

                <div>
                    <h2 className="text-sm text-primaryTextColor font-semibold mb-1">{title}</h2>
                    <p className="text-xs text-secondaryTextColor font-semibold mb-2">{message}</p>
                    <h4 className="text-sm text-primaryTextColor font-normal">{dateTime}</h4>
                </div>
            </div>
            <div className={`w-full h-[1.5px] bg-[#E4E4E4] mt-4`}></div>
        </div>
    );
};
