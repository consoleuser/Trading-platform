import React from 'react'
import { Button } from '@/components/ui/button'

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

import { 
  DotIcon, 
  BookmarkIcon, 
  BookmarkFilledIcon
} from '@radix-ui/react-icons'


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import TradingForm from './TradingForm'



function StockDetails() {
  return (
    <div className='p-5 mt-5'>
        <div className='flex justify-between'>
          <div className='flex gap-5 items-center'>
            <div>
              <Avatar>
              <AvatarImage src="/imgs/324143.png"/>
            </Avatar>
            </div>
             <div>
              <div className='font-semibold flex items-center gap-2'>
                <p>BTC</p>
                <DotIcon className='text-gray-400'/>
                <p className='text-gray-400'>Bitcoin</p>
              </div>


              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>$6654</p>
                <p className='text-red-600'>
                    <span>-1319049822.578 </span>
                    <span>(-0.29803%)</span>
                </p>


              </div>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <Button>
              {true ?
              <BookmarkFilledIcon className="h-6 w-6"/>  
              :  
              <BookmarkIcon className="h-6 w-6"/>
              }
            </Button>
              
            <Dialog>
              <DialogTrigger>
                <Button size='lg'>Trade</Button>

              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle >How much do you want to spend?</DialogTitle>
                </DialogHeader>
                <TradingForm />

              </DialogContent>
            </Dialog>


          </div>


        </div>
    </div>
  )
}

export default StockDetails