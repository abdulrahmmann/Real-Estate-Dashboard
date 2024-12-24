"use client";
import React from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {NotificationsListType} from "@/data/types";
import {notificationsList} from "@/data";
import {IoMdNotifications} from "react-icons/io";

export interface openNotificationType {
    openNotification?: boolean;
    setOpenNotification?: () => void;
}

const NotificationsSidebar = ({ openNotification, setOpenNotification }: openNotificationType) => {
    return (
        <div
            className={`fixed inset-y-0 right-0 z-10 transform ${
                openNotification ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 rounded-bl-3xl rounded-tl-3xl`}
            style={{ boxShadow: "rgb(0 0 0 / 55%) 1px 20px 20px 4px;" }}
        >
            <div className={`min-h-screen w-[410px] h-full overflow-y-auto rounded-bl-3xl rounded-tl-3xl bg-whiteColor z-10`}>
                <div className={`px-4 py-6`}>
                    <div className={`flex items-center gap-2`}>
                        <IoMdNotifications className={`size-6 text-primaryTextColor`} />
                        <h1 className={`text-primaryTextColor font-semibold text-xl`}>Notifications</h1>
                    </div>
                    <div className={`w-full h-[1.5px] bg-[#E4E4E4] mt-4`}></div>
                    <div className={`pb-4`}>
                        {notificationsList.map((item) => (
                            <NotificationsItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                message={item.message}
                                dateTime={item.dateTime}
                                notificationType={item.notificationType}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`${openNotification? 'flex': 'hidden'} absolute rounded-full size-14 items-center justify-center border-2 border-primaryTextColor -left-[60px] top-1/2 -translate-y-1/2 bg-white cursor-pointer hover:rotate-[180deg] transition-transform z-20`}
                onClick={() => setOpenNotification(false)}
            >
                <IoCloseOutline className={`size-10 text-primaryTextColor`} />
            </div>
        </div>
    );
};

export default NotificationsSidebar;



export const NotificationsItem = ({id, title, message, dateTime, notificationType}: NotificationsListType) => {
    const typeConfig = {
        Payment: {bgColor: '#38B259', icon: '/icons/payment.svg'},
        Update: {bgColor: '#006CE4', icon: '/icons/update-apps.svg'},
        Booking: {bgColor: '#EC4E2C', icon: '/icons/booking.svg'},
    };

    const {bgColor, icon} = typeConfig[notificationType] || {};

    return (
        <div>
            <div key={id} className="flex items-start gap-2.5 my-4">
                <div
                    className={`min-w-9 min-h-9 max-w-9 max-h-9 rounded-sm flex items-center justify-center`}
                    style={{backgroundColor: bgColor}}
                >
                    <img src={icon} alt={notificationType} className={`size-[18px]`}/>
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
