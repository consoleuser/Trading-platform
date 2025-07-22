import React, { useState } from 'react'
import {Input} from "@/components/ui/input"
import {Button } from "@/components/ui/Button"
import
{ 
  DollarSign,
  Landmark
} from 'lucide-react';
import { DialogClose } from "@/components/ui/dialog";




const WithdrawlForm = () => {

    const [amount, setAmount] = useState();
    const handleChange = (e) => {
      let value = e.target.value;
      if(value.toString().length < 6){
        setAmount(e.target.value);
      }
    };

    const handleSubmit = () => {
      console.log(amount);
    }


  return (
    <div className='pt-10 space-y-5'>
      
      <div className='flex justify-between items-center rounded-md text-xl font-bold px-5 py-4'>
        <p>Avaliable Balance</p>

        <p className='flex items-center'>
          <DollarSign className='w-6 h-6 relative top-0.5'/>
          <span>
              10,000,00.50
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
            <p className='text-xl font-bold'>Yuriy </p>
            <p className='text-xs'>********1651</p>
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