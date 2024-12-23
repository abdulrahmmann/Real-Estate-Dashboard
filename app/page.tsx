import Link from "next/link";
import {sidebar} from "@/data";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <main className={`w-full min-h-screen bg-whiteColor`}>
            <div className={`py-4 px-5`}>
                <div className={`flex items-center justify-between`}>
                    <img src={'/Logo.svg'} alt={'Logo'} className={``}/>
                    <div className={`flex items-center gap-1 w-[20%] p-3 rounded-lg bg-[#F4F4F4]`}>
                        <img src={'/icons/search.svg'} alt={''} className={`size-4`}/>
                        <input
                            placeholder={'Search Property, Customer etc'}
                            className={`text-xs text-secondaryTextColor border-none outline-none bg-transparent w-full`}/>
                    </div>
                    <div className={`flex items-center gap-5 pr-5`}>
                        <div className={`size-6 cursor-pointer`}>
                            <img src={'/icons/bill-icon.svg'} alt={'bill'} className={``} />
                        </div>
                        <div className={`flex items-center gap-3`}>
                            <img src={'/profile-image.png'} alt={'profile'} className={`size-10 object-contain rounded-full cursor-pointer`} />
                            <div>
                                <h2 className={`text-sm font-semibold text-primaryTextColor`}>Hawkins Maru</h2>
                                <h4 className={`text-sm text-secondaryTextColor`}>Company Manager</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-12`} style={{minHeight: 'calc(100vh - 72px)'}}>
                <div className={`col-span-2`}>
                    <Sidebar />
                </div>

                <div className={`col-span-12 md:col-span-10`}>
                    <div className={`container mx-auto`}>
                        <div className={``}>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
