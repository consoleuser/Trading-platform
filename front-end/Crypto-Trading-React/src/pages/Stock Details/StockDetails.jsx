import React, { useEffect } from 'react'
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
import StockChart from '../Home/StockChart'

import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getCoinDetails } from '../../State/Coin/Action'
import { addItemToWatchlist } from '../../State/Watchlist/Action'





function StockDetails() {

  const dispatch = useDispatch();
  const {id} = useParams();
  const {coin} = useSelector(store => store);

  useEffect(() => {
    dispatch(getCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") }));
  }, [id]);

  const handleAddToWatchList = () => {
    dispatch(addItemToWatchlist({coinId: coin.coinDetails?.id, jwt: localStorage.getItem("jwt")}));
  }



  return (
    <div className='p-5 mt-5'>
        <div className='flex justify-between'>
          <div className='flex gap-5 items-center'>
            <div>
              <Avatar>
              <AvatarImage src= {coin.coinDetails?.image.large}/>
            </Avatar>
            </div>
             <div>
              <div className='font-semibold flex items-center gap-2'>
                <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                <DotIcon className='text-gray-400'/>
                <p className='text-gray-400'>{coin.coinDetails?.name}</p>
              </div>


              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.cad}</p>
                {
                  coin.coinDetails?.market_data.price_change_percentage_24h >= 0 ?
                  <p className='font-bold text-lime-600'>
                    <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                    <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                </p>
                :
                  <p className='font-bold text-red-600'>
                    <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                    <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                 </p>
                }



              </div>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <Button onClick={handleAddToWatchList}>
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
        <div className='mt-10'>
          <StockChart coinId={id}/>
        </div>
    </div>
  )
}

export default StockDetails