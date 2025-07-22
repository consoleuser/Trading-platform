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


function Withdrawal() {
  return (
     <div className='p-5 lg:px-20'>
          <h1 className='font-bold text-3xl pb-4'>Withdrawal</h1>
    
          <Table className='border'>
        
                <TableHeader>
                    <TableRow>
                
                    <TableHead className= 'py-3'>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
        
                <TableBody>
        
                    {[1,1,1].map((item,index) =>
                     <TableRow key={index} >
                      <TableCell>
                        <p>2025/07/08</p>
                      </TableCell>
                    <TableCell>12:00:05</TableCell>
                    <TableCell className="flex items-center gap-2">
                        <span>Bank</span>
                    </TableCell>
                    <TableCell>8704160005</TableCell>
                    <TableCell>
                      Success</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
        
    
  )
}

export default Withdrawal