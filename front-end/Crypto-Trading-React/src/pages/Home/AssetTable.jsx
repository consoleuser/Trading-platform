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
import { ScrollArea } from "@/components/ui/scroll-area"


const AssetTable = ({coin, category}) => {

  const navigate = useNavigate()
  return (
      <ScrollArea className={ `${category == "all" ? "h-[77vh] " :  "h-[82vh]" }`}>
        <Table>
        <TableHeader>
            <TableRow>
        
            <TableHead className="w-[180px]">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody> 

            {coin.map(
              (coin,index) => <TableRow key={index} >
            <TableCell onClick={() => navigate(`/market/${coin.id}`)} className="font-medium flex items-center gap-2 w-[180px]">
                <Avatar className="-z-50">
                    <AvatarImage src={coin.image}/>
                </Avatar><span>{coin.name}</span>
            </TableCell>
            <TableCell><span className='font-medium'>{coin.symbol.toUpperCase()}</span></TableCell>
            <TableCell>{coin.total_volume}</TableCell>
            <TableCell>{coin.market_cap}</TableCell>
            <TableCell>{coin.market_cap_change_percentage_24h}</TableCell>
             <TableCell className="text-right">${coin.current_price}</TableCell>
            </TableRow>)}
        </TableBody>
        </Table>
      </ScrollArea>
  )
}

export default AssetTable