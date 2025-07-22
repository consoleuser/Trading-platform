import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DotFilledIcon } from '@radix-ui/react-icons'
import { CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {DialogClose} from "@/components/ui/Dialog"



const TopupForm = () => {
  const[ amount, setAmount] = React.useState('')
  const[paymentMethod, setPaymentMethod] = React.useState("STRIPE")
  
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value)
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = () => {
    console.log(amount, paymentMethod)
  }

  // To do ***
  // Add payment detail info page for each of the buttons that are selected
  // card / stripe payment options avaliable

  return (
    <div className='pt-10 space-y-5'>
      <div>
        <h1 className='text-bold pb-1'>Enter Amount</h1>
        <Input
        onChange={handleChange} 
        className='py-7 text-lg' placeholder='$10'
        />
      </div>

      

      <div>
        <h1 className='text-bold'>Select payment method</h1>
        <RadioGroup
        onValueChange={(value) => handlePaymentMethodChange(value)} 
        className='flex' 
        defaultValue="Stripe">
          <div className="flex items-center space-x-2  p-3 px-5 
          rounder-md">
            <RadioGroupItem  
            icon={DotFilledIcon}
            className="h-5 w-5"
            value="Stripe"
            id= "r1" />
            <Label htmlFor="r1">
              <div className='rounded-md px-5 py-2 w-32'>
                <img className= 'border border-gray-400'src="../../../public/imgs/Stripe-Logo.png" alt="Stripe-Logo" />
              </div>
              
            </Label>
          </div>

          <div className="flex items-center space-x-2  p-3 px-5 
          rounder-md">
            <RadioGroupItem  
            icon={DotFilledIcon}
            className="h-5 w-5"
            value="CARD"
            id= "r2" />
            <Label htmlFor="r2">
              <div className='flex items-center gap-1 rounded-md px-5 py-2 w70'>
                <CreditCard size={40}/>  
                <span>Credit Card / Debit Card</span>
              </div>
              
            </Label>
          </div>
        </RadioGroup>
      </div>

      
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl" >
          Submit
        </Button>
      </DialogClose>


    </div>
  );
};

export default TopupForm