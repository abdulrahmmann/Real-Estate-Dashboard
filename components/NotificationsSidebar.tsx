"use client";
import React from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {notificationsList} from "@/data";
import {IoMdNotifications} from "react-icons/io";
import {NotificationsItem} from "@/components/NotificationsItem";
import { ScrollArea } from "@/components/ui/scroll-area"
import {ScrollAreaThumb} from "@radix-ui/react-scroll-area";

export interface openNotificationType {
    openNotification?: boolean;
    setOpenNotification?: (isOpen: boolean) => void;
}

const NotificationsSidebar = ({ openNotification, setOpenNotification }: openNotificationType) => {
    return (
        <div
            className={`fixed inset-y-0 right-0 z-50 transform ${
                openNotification ? "translate-x-0 shadow-lg drop-shadow-lg" : "translate-x-full"
            } transition-transform duration-300 rounded-bl-3xl rounded-tl-3xl`}
            >

            <div
                className={`min-h-screen w-[410px] h-full overflow-y-hidden rounded-bl-3xl rounded-tl-3xl bg-whiteColor z-10`}>
                <div className={`flex items-center gap-2 px-4 py-6`}>
                    <IoMdNotifications className={`size-6 text-primaryTextColor`}/>
                    <h1 className={`text-primaryTextColor font-semibold text-xl`}>Notifications</h1>
                </div>
                <ScrollArea className="h-[85vh] rounded-md">
                    <div className={`px-4 pb-14`}>
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
                            <div className={`w-full h-[1.5px] bg-[#E4E4E4] mt-4 block last:hidden`}></div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
            <div
                className={`${openNotification ? 'flex' : 'hidden'} bg-transparent absolute rounded-full size-14 items-center justify-center border-2 border-primaryTextColor -left-[60px] top-1/2 -translate-y-1/2 cursor-pointer hover:rotate-[180deg] transition-transform z-20`}
                onClick={() => setOpenNotification(false)}
            >
                <IoCloseOutline className={`size-10 text-primaryTextColor`}/>
            </div>
        </div>
    );
};

export default NotificationsSidebar;



