import React from 'react'
import { useState } from 'react';

import { DialogHeader,DialogFooter, DialogTitle, DialogDescription, Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import {Button} from "@/components/ui/button"
function AccountVerificationForm() {
    const handleSubmit = () => {
        console.log(value);
    }

    const [value, setValue] = useState("");


  return (
    <div className='flex justify-center'>
        <div className='space-y-5 mt-10 w-full'>
            <div className='flex justify-between items-center'>
                <p>Email: </p>
                <p>yuriykotyashko7@gmail.com</p>
                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Enter OTP</DialogTitle>
                        <DialogDescription>
                            An OTP code has been sent to your email address
                            <div className='py-5 flex gap-10 justify-center items-center'>
                                 <InputOTP 
                                 value = {value}
                                 onChange={(value) => setValue(value)}
                                 maxLength={6}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>                                    
                                </InputOTP>

                                <DialogClose>
                                    <Button className={"w-[8rem]"}>
                                        Submit
                                    </Button>
                                </DialogClose>
                            </div>

                            
                        </DialogDescription>
                        </DialogHeader>

                    </DialogContent>
                </Dialog>

            </div>

        </div>

    </div>
  )
}

export default AccountVerificationForm