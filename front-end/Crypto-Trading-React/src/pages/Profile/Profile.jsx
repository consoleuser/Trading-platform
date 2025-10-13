import React from 'react'
import { Badge } from "@/components/ui/badge"
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { CircleAlert } from 'lucide-react';
import {Button } from "@/components/ui/button"
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/Dialog"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import AccountVerificationForm from './accountVerificationForm';
import { useSelector } from 'react-redux';

function Profile() {
  const {auth} = useSelector(store => store);

  const handleEnableTwoStepVerification = () => {
    console.log("two step verification")
  }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:flex gap-32'>
              <div className='space-y-7'>
                
                <div className= "flex">
                  <p className='w-[8rem]'>Name: </p>
                  <p className='text-gray-400'>{auth.user?.fullName}</p>
                </div>
                
                <div className= "flex">
                  <p className='w-[8rem]'>Phone number: </p>
                  <p className='text-gray-400'>647-562-5486</p>
                </div>
                
                <div className= "flex">
                  <p className='w-[8rem]'>Email </p>
                  <p className='text-gray-400'>{auth.user.email}</p>
                </div>

                 <div className= "flex">
                  <p className='w-[8rem]'>Country: </p>
                  <p className='text-gray-400'>Canada</p>
                </div>

              </div> 

              <div className='space-y-7'>
                   <div className= "flex">
                  <p className='w-[8rem]'>Address: </p>
                  <p className='text-gray-400'>1517 - 40 Fountainhead Road</p>
                </div>
                
                <div className= "flex">
                  <p className='w-[8rem]'>City: </p>
                  <p className='text-gray-400'>North York</p>
                </div>
                
                <div className= "flex">
                  <p className='w-[8rem]'>Postal Code: </p>
                  <p className='text-gray-400'>M3J 2V1</p>
                </div>

                 <div className= "flex">
                  <p className='w-[8rem]'>Country: </p>
                  <p className='text-gray-400'>Canada</p>
                </div>


                </div>             
            </div>

          </CardContent>
        </Card>

        <div className='mt-6'>

          <Card className="w-full">
            <CardHeader className="pb-1">
              <div className='flex items-center gap-3'>
                <CardTitle>Two Step Verification</CardTitle>
                {
                true ?  
                <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
                  <BadgeCheckIcon />
                  Verified
                </Badge> 
                : 
                <Badge variant="secondary" className="bg-orange-600 text-white">
                  <CircleAlert />
                  Disabled
                </Badge>
                }
                
              </div>  
            </CardHeader>
            <CardContent>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enable Two Auth Verification</Button>
                  </DialogTrigger>
                  
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Verify your account</DialogTitle>                          
                      </DialogHeader>    
                      <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                    </DialogContent>
                </Dialog>

            </CardContent>
        </Card>

        </div>
      </div>
    </div>
  )
}

export default Profile