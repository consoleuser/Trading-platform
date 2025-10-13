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


function Portfolio() {
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
    
                {[1,1,1,1,1,1,1,1].map((item,index) =>
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
                 <TableCell className="text-right">$103522</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </div>

  )
}

export default Portfolio