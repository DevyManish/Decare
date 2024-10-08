import { Button } from "@/components/ui/button";
//dialog
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const Patreg = () => {

    return (
        <>
        <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-red-500 hover:bg-red-400 text-white h-5 py-8">Patient Registration</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Please enter valid details we will verify.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 text-justify">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Manish Gupta"
                                className="col-span-3"
                            />
                        </div>
                        <RadioGroup defaultValue="comfortable" className="flex px-4 ml-5 items-center">
                            <p>Gender</p>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Female</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" />
                                <Label htmlFor="r3">Others</Label>
                            </div>
                        </RadioGroup>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="username"
                                defaultValue="me@manish.me"
                                className="col-span-3"
                                type="email"
                            />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right w-full">
                                Disease
                            </Label>
                            <Input
                                id="bio"
                                className="col-span-3"
                                type="text"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}