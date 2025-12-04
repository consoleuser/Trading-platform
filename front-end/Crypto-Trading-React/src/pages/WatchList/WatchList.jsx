import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getUserWatchlist } from '../../State/Watchlist/Action'


function WatchList() {
    const {watchlist} = useSelector(store => store);
    const dispatch = useDispatch();
    const handleRemoveToWatchlist=(value) => {console.log(value)}
    

    useEffect( () => {
        dispatch(getUserWatchlist(localStorage.getItem("jwt")));
    }, []);
    
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
    
                {watchlist.items.map((item,index) =>
                 <TableRow key={index} >
                <TableCell className="font-medium flex items-center gap-2">
                    <Avatar className="-z-50">
                        <AvatarImage src={item.image} />
                    </Avatar><span>{item.name}</span>
                </TableCell>
                <TableCell><span className='font-medium'>{item.symbol.toUpperCase()}</span></TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>${item.market_cap}</TableCell>
                <TableCell>{item.price_change_24h}</TableCell>
                 <TableCell>${item.current_price}</TableCell>
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