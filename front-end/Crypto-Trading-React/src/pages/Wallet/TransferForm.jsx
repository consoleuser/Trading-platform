import React from 'react'
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import {DialogClose} from "@/components/ui/Dialog"




const TransferForm = () => {
  
  
  
    const [formData, setFormData] = React.useState({
        amount : '',
        walletId : '',
        purpose : ''
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value ,})
    }

     const handleSubmit = () => {
        console.log(formData) 
     }
  
    return (

  
    <div className='pt-10 space-y-5 '>
        <div>
            <h1 className='pb-1 py-2 font-bold'>Enter amount</h1>    
            <Input
            name= "amount"
            onChange = {handleChange} 
            value = {formData.amount}
            className="py-7"
            placeholder="$9999"
            />

            <h1 className='pb-1 py-2 font-bold'>Wallet id</h1>    
            <Input
            name= "walletId"
            onChange = {handleChange} 
            value = {formData.walletId}
            className="py-7"
            placeholder="#ADER455"
            />

            <h1 className='pb-1 py-2 font-bold'>Purpose</h1>    
            <Input
            name= "purpose"
            onChange = {handleChange} 
            value = {formData.purpose}
            className="py-7"
            placeholder="Gift for friend"
            />



        </div> 

      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
            Transfer
        </Button>
      </DialogClose>

    </div>  
  )
}

export default TransferForm