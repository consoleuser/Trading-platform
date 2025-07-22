import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import 
{ 
  Wallet,
  DollarSign,
  UploadIcon,
  CopyIcon,
  RefreshCw 
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { 
  ReloadIcon,
  ShuffleIcon
} from '@radix-ui/react-icons';
import WithdrawlForm from './withdrawlForm';
import TopupForm from './TopupForm';
import TransferForm from './TransferForm';
import {Avatar,AvatarFallback} from "@/components/ui/avatar"


function userpaymenthistory() {
  return (
    <div className='flex flex-col items-center'>
        <div className='pt-10 w-full lg:w-[60%]'>

          <Card>
              <CardHeader className='pb-9'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <Wallet size = {40}/>
                        <div>
                          <CardTitle className='text-2xl'> User Wallet</CardTitle>
                          <div className='flex items-center gap-2'>
                            <p className='text-gray-400 cursor-pointer'>
                              #A475ED
                            </p>
                            <CopyIcon size={20} className='cursor-pointer hover:text-gray-400'/>                            
                          </div>
                        </div>
                    </div>
                    <div>
                      <ReloadIcon className='w-6 h-6 cursor-pointer hover:text-gray-400'/>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex items-center'>
                  <DollarSign/>
                  <span className='text-2xl font-semibold'>
                    10,000,00.50
                  </span>

                </div>

                <div className='flex gap-7 mt-5'>
                  <Dialog>
                    <DialogTrigger>
                        <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                        flex flex-col 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-slate-600 
                        shadow-md'>
                            <UploadIcon/>
                            <span className='text-sm mt-2 font-semibold'> Increase funds</span>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Top up your Wallet
                        </DialogTitle>
                        <TopupForm/>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>


                
                  <Dialog>
                    <DialogTrigger>
                        <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                        flex flex-col 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-slate-600
                        shadow-md'>
                            <UploadIcon/>
                            <span className='text-sm mt-2 font-semibold'> Withdraw funds</span>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <p className='text-bold'>Request withdrawal</p>
                        </DialogTitle>
                        <WithdrawlForm/>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                   <Dialog>
                    <DialogTrigger>
                        <div className='h-24 w-24 hover:text-gray-400 cursor-pointer
                        flex flex-col 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-slate-600
                        shadow-md'>
                            <UploadIcon/>
                            <span className='text-sm mt-2 font-semibold'> Transfer funds </span>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-bold">
                          Transfer funds between accounts
                        </DialogTitle>
                        <TransferForm/>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
          </Card>


          <div className='py-5 pt-10'>
            <div className='flex gap-2 items-center pb-5'>
              <h1 className='text-2xl font-semibold'>History</h1>
              <RefreshCw className='h-6 w-6 cursor-pointer hover:text-gray-400'/>
            </div>

            <div className="space-y-5">
              {[1,1,1,1,1,1,1,1].map((item,i) => <div key={i}>
                <Card className="px-5 py-2 flex justify-between items-center">
                  <div className='flex items-center gap-5 w-full'>
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon/>
                      </AvatarFallback>
                    </Avatar>

                    <div className='space-y-1 '>
                      <h1 className=''>Buy Asset</h1>
                      <p className='text-sm font-semi-bold text-gray-400'>2025-07-14</p>
                    </div>

                    <div className='ml-auto'>
                      <p className="text-green-500 font-semibold">999 CAD</p>
                    </div>
                    
                  </div>
                </Card>
              </div>  )}



            </div>
          </div>
        </div>
    </div>
  )
}

export default userpaymenthistory