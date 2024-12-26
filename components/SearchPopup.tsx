import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/SearchScrollArea";

const SearchPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'k') {
                setIsOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className={`relative flex items-center gap-1 md:w-[250px] xl:w-[230px] md:p-3 rounded-lg md:bg-[#F4F4F4]`}>
                    <input
                        placeholder={"Search Property, Customer etc"}
                        className={`mr-[2rem] hidden md:inline text-xs text-secondaryTextColor border-none outline-none bg-transparent w-full`}
                    />
                    <div className={`hidden md:flex pointer-events-none absolute right-[0.3rem] top-[50%] -translate-y-[50%] h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 py-1.5 text-[10px] font-medium opacity-100`}>
                        <span className="text-xs">⌘</span>K
                    </div>
                    <div>
                        <img src={'/icons/search.svg'} alt={'search'} className={`size-5 block md:hidden`} />
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px] p-4">
                <VisuallyHidden>
                    <DialogHeader>
                        <DialogTitle className={`tracking-wide text-xl font-semibold text-primaryTextColor`}>Add
                            Property</DialogTitle>
                        <DialogDescription className={`text-sm text-secondaryTextColor font-light`}>
                            Fill in the details for the new property you want to add. Ensure all fields are accurate and
                            complete before saving.
                        </DialogDescription>
                    </DialogHeader>
                </VisuallyHidden>

                <div className={``}>
                    <div className="flex items-center" cmdk-input-wrapper="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-search mr-2 h-4 w-4 shrink-0 opacity-50">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Type a command or search..." cmdk-input="" autoComplete="off" autoCorrect="off"
                            spellCheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true"
                            aria-controls=":ra2:" aria-labelledby=":ra3:" id=":ra4:" type="text"/>
                    </div>

                    <div className={`w-full h-[1px] bg-neutral-300 absolute left-0 right-0`}></div>

                    <ScrollArea className={`h-[300px] rounded-md`}>
                        <div className={`py-3 mr-3.5`}>
                            <h4 className={`text-xs text-secondaryTextColor font-semibold mb-1`}>Links</h4>
                            <div className={`flex flex-col gap-2`}>
                                <Link href={'/'}
                                      className={`flex items-center gap-2 px-2 py-3 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <img src={'/icons/dashboards-icon.svg'} alt={'dashboards icon'}
                                         className={`size-5`}/>
                                    Dashboard
                                </Link>
                                <Link href={'/Dashboard/Property'}
                                      className={`flex items-center gap-2 px-2 py-3 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <img src={'/icons/property-icon.svg'} alt={'dashboards icon'} className={`size-5`}/>
                                    Property
                                </Link>
                                <Link href={'/Dashboard/Agent'}
                                      className={`flex items-center gap-2 px-2 py-3 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <img src={'/icons/agent-icon.svg'} alt={'dashboards icon'} className={`size-5`}/>
                                    Agent
                                </Link>
                                <Link href={'/Dashboard/Review'}
                                      className={`flex items-center gap-2 px-2 py-3 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <img src={'/icons/review-icon.svg'} alt={'dashboards icon'} className={`size-5`}/>
                                    Review
                                </Link>
                                <Link href={'/Dashboard/MyProfile'}
                                      className={`flex items-center gap-2 px-2 py-3 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <img src={'/icons/profile-icon.svg'} alt={'dashboards icon'} className={`size-5`}/>
                                    My Profile
                                </Link>
                            </div>

                        </div>

                        <div className={`w-full h-[1px] bg-neutral-300 relative right-3.5`}></div>

                        <div className={`py-3 mr-3.5`}>
                            <h4 className={`text-xs text-secondaryTextColor font-semibold mb-1`}>Theme</h4>
                            <div>
                                <div
                                    className={`cursor-pointer px-2 py-3 flex items-center gap-2 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <MdOutlineLightMode className={`size-5 text-secondaryTextColor`}/>
                                    Light
                                </div>
                            </div>
                            <div>
                                <div
                                    className={`cursor-pointer px-2 py-3 flex items-center gap-2 text-sm text-secondaryTextColor font-medium hover:hover:bg-neutral-100 rounded-lg transition-all`}>
                                    <MdOutlineDarkMode className={`size-5 text-secondaryTextColor`}/>
                                    Dark
                                </div>
                            </div>
                        </div>

                        <div className={`w-full h-[1px] bg-neutral-300 relative right-3.5`}></div>
                    </ScrollArea>
                </div>

                <VisuallyHidden>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </VisuallyHidden>

            </DialogContent>
        </Dialog>
    );
};

export default SearchPopup;
