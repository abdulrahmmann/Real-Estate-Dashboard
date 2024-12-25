import React from 'react';
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddPropertyModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className={`text-sm text-whiteColor font-medium px-5 py-3 bg-primaryColor rounded-xl hover:bg-primaryColor hover:text-whiteColor h-12`}>+ Add Property</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className={`tracking-wide text-xl font-semibold text-primaryTextColor`}>Add Property</DialogTitle>
                    <DialogDescription className={`text-sm text-secondaryTextColor font-light`}>
                        Fill in the details for the new property you want to add. Ensure all fields are accurate and complete before saving.
                    </DialogDescription>
                </DialogHeader>

                <div className={``}>
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Name</Label>
                        <Input id="name" type="text"/>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Country</Label>
                        <Input id="country" type="text"/>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Price</Label>
                        <Input id="price" type="text"/>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Area</Label>
                        <Input id="area" type="number"/>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Rooms</Label>
                        <Input id="room" type="number"/>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                        <Label htmlFor="picture" className={`mb-1 ml-0.5`}>Property Picture</Label>
                        <Input id="picture" type="file"/>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddPropertyModal;