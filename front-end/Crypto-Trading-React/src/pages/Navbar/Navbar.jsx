import React from 'react'
import { Button } from '@/components/ui/button'


import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from './Sidebar'





const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
              aria-label="Open menu"
            >
              <DragHandleHorizontalIcon className="h-7 w-7 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>

              <SheetTitle>
               <div className="text-3x1 flex justify-center items-center gap-1">
                <Avatar>
                    <AvatarImage src="/imgs/324143.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <span className='font-bold text-lime-500'>Lumora</span>
                </div>
               </div> 
              </SheetTitle>
            </SheetHeader>

            <Sidebar></Sidebar>

          </SheetContent>
        </Sheet>
        <p className='font-bold text-lime-500 text-sm lg:text-base cursor-pointer'>
          Lumora
        </p>
        <div className='p-0 ml-9'>
          <Button variant='outline' 
          className='cursor-pointer border-black bg-transparent hover:bg-black/5 justify-start w-100'>
            <MagnifyingGlassIcon/>
            <span>Search tokens</span>
          </Button>
        </div>
      </div>
      <div>
        
        <Avatar className='p-1 rounded-full w-12 h-12 cursor-pointer'>
          <AvatarImage src='invalid.jpg' alt='@YK'/>
          <AvatarFallback className="flex-items-center bg-gray-300 text-gray-800 font-bold">YK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
