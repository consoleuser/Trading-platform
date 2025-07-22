import React from 'react'
import {Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import {Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { DialogClose } from '@radix-ui/react-dialog'

const PaymentDetailForm = () => {
  const form = useForm({
    resolver:"",
    defaultValues:{
      accountHolderName:"",
      accountNumber:"",
      bankName:""
    }
  })
  const onSubmit=(data) => {
    console.log(data)
  }
  
  return (
    <div className='px-10'>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input className="border w-full border-gray-400 p-5" 
                  placeholder="Alex Jorge" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input className="border w-full border-gray-400 p-5" 
                  placeholder="********1671" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}/>

            <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input className="border w-full border-gray-400 p-5" 
                  placeholder="Bank of America" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          
          <DialogClose className="w-full py-5">
              <Button type="submit">Submit</Button>  
          </DialogClose>
          
          
          


        </form>

      </Form>



    </div>
  )
}

export default PaymentDetailForm