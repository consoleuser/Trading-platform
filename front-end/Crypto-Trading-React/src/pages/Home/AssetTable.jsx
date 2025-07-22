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
import { useNavigate } from 'react-router-dom'





const AssetTable = () => {

  const navigate = useNavigate()
  return (

        <Table>

        <TableHeader>
            <TableRow>
        
            <TableHead>Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>

            {[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>
             <TableRow key={index} >
            <TableCell onClick={() => navigate('/market/bitcoin')} className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                    <AvatarImage src="https://s.yimg.com/zb/imgv1/2877aef2-b99b-3601-a6fa-7e33a8ef241b/t_500x300"/>
                </Avatar><span>Bitcoin</span>
            </TableCell>
            <TableCell><span className='font-medium'>BTC</span></TableCell>
            <TableCell>8704160005</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>-0.79112</TableCell>
             <TableCell className="text-right">$103522</TableCell>
            </TableRow>)}
        </TableBody>
    </Table>
  )
}

export default AssetTable