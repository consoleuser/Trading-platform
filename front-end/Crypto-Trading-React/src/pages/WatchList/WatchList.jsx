import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, 
} from '@/components/ui/table'
import {Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../../components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'


function WatchList() {
  
    const handleRemoveToWatchlist=(value) => {console.log(value)}
    
    
    return (  
    <div className='p-5 lg:px-20'>
      <h1 className='font-bold text-3xl pb-4'>Watchlist</h1>

      <Table className='border'>
    
            <TableHeader>
                <TableRow>
            
                <TableHead className= 'py-3'>Coin</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Market Cap</TableHead>
                <TableHead>24h</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right text-bold text-red-500">REMOVE</TableHead>
                </TableRow>
            </TableHeader>
    
            <TableBody>
    
                {[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>
                 <TableRow key={index} >
                <TableCell className="font-medium flex items-center gap-2">
                    <Avatar className="-z-50">
                        <AvatarImage src="https://s.yimg.com/zb/imgv1/2877aef2-b99b-3601-a6fa-7e33a8ef241b/t_500x300"/>
                    </Avatar><span>Bitcoin</span>
                </TableCell>
                <TableCell><span className='font-medium'>BTC</span></TableCell>
                <TableCell>8704160005</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>-0.79112</TableCell>
                 <TableCell>$103522</TableCell>
                 <TableCell className='text-right'>
                    <Button 
                        onClick={ ()=> handleRemoveToWatchlist(item.id)  } 
                        variant = "outline" // choose either ghost or outline for the buttons

                        size="icon" 
                        className='h-10 w-10 bg-gray-50 text-black hover:bg-gray-300'>
                            <BookmarkFilledIcon className='w-6 h-6'/>
                    </Button>
                </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </div>



  )
}

export default WatchList