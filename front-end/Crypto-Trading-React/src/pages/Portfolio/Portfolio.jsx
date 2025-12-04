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
import { useDispatch, useSelector,} from 'react-redux'
import { getUserAssets } from '../../State/Asset/Action';


function Portfolio() {
  const dispatch = useDispatch();
  const assets = useSelector((store) => store.assets);
  console.log("asset state --->", assets);
  console.log("user assets --->", assets.userAssets);

  useEffect( () => {
    dispatch(getUserAssets(localStorage.getItem("jwt")));
  }, [])
     




  

  return (
    <div className='p-5 lg:px-20'>
      <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
      <Table>
    
            <TableHeader>
                <TableRow>
            
                <TableHead>Asset</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Change%</TableHead>
                <TableHead className="text-right">Value</TableHead>
                </TableRow>
            </TableHeader>
    
            <TableBody>
              {assets.userAssets?.map((item, index) => (
                item && item.coin ? (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Avatar className="-z-50">
                        <AvatarImage src={item.coin.image} />
                      </Avatar>
                      <span>{item.coin.name}</span>
                    </TableCell>
                    <TableCell><span className='font-medium'>{item.coin.symbol.toUpperCase()}</span></TableCell>
                    <TableCell>{item.quantity.toPrecision(3)}</TableCell>
                    <TableCell>{item.coin.price_change_24h.toPrecision(3)}</TableCell>
                    <TableCell>{item.coin.price_change_percentage_24h.toPrecision(3)}</TableCell>
                    <TableCell className="text-right">{(item.coin.current_price * item.quantity).toPrecision(4)}</TableCell>
                  </TableRow>
                ) : null
              ))}
            </TableBody>
        </Table>
    </div>

  )
}

export default Portfolio