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
import { useDispatch, useSelector } from 'react-redux';
import { getWithdrawalHistory } from '../../State/Withdrawl/Action';

function Withdrawal() {
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store => store);
   
  
    const getTime = (dateString) => {
      var fields = dateString.split('T');
      var time = fields[1].split('.');
      return time[0];
    }

    const getDate = (dateString) => {
      var fields = dateString.split('T');
      return fields[0];
    }
   
    useEffect(() => {
      dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
    }, [])
    

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
        
                    {withdrawal.history.map((item,index) =>
                     <TableRow key={index} >
                      <TableCell>
                        <p>{getDate(item.date)}</p>
                      </TableCell>
                    <TableCell>{getTime(item.date)}</TableCell>
                    <TableCell className="flex items-center gap-2">
                        <span>Bank</span>
                    </TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      {item.status}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
        
    
  )
}

export default Withdrawal