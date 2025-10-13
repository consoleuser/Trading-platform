import React, { useState } from 'react'
import {Input} from "@/components/ui/input"
import {Button } from "@/components/ui/Button"
import
{ 
  DollarSign,
  Landmark
} from 'lucide-react';
import { DialogClose } from "@/components/ui/dialog";
import { useDispatch, useSelector } from 'react-redux';
import { withdrawalRequest } from '../../State/Withdrawl/Action';




const WithdrawlForm = () => {
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store => store);
    console.log("withdrawal state ------->", withdrawal);
    console.log("wallet state -------> ", wallet); 

    const [amount, setAmount] = useState();
    const handleChange = (e) => {
      let value = e.target.value;
      if(value.toString().length < 6){
        setAmount(e.target.value);
      }
    };

    const hideNumber = (String) => {
      let len = String.length;

      let sub = String.substring(len - 4, len);
      return "********" + sub;
    }

    const handleSubmit = () => {
      dispatch(withdrawalRequest({amount:amount, jwt:localStorage.getItem("jwt")}))
      console.log(amount);
    }


  return (
    <div className='pt-10 space-y-5'>
      
      <div className='flex justify-between items-center rounded-md text-xl font-bold px-5 py-4'>
        <p>Avaliable Balance</p>

        <p className='flex items-center'>
          <DollarSign className='w-6 h-6 relative top-0.5'/>
          <span>
            {wallet.userWallet.balance}
          </span>
        </p>
      </div>
      <div className='flex justify-between items-center px-5  '>
        <h1 className='text-xl text-bold'> Enter Amount</h1>
        <div className='flex items-center justify-center'>
          <Input 
          onChange = {handleChange}
          value = {amount}
          className= "h-9 w-35"
          placeholder ="$10"
          type="number" />
        </div>
      </div>

    <div>
        <p className='font-bold   pb-2'>Transfer to</p>
        <div className='flex items-center gap-5 px-5 py-2 rounded-md'>
          <Landmark className='h-8 w-8'/>
          <div>
            <p className='text-xl font-bold'>{withdrawal.paymentDetails.accountHolderName}</p>
            <p className='text-xs'>{hideNumber(withdrawal.paymentDetails.accountNumber)}</p>
          </div>
        </div>
    </div>
      <DialogClose className="w-full">
        <Button onClick = {handleSubmit} className = "w-full py-7 text-xl">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  )
}

export default WithdrawlForm