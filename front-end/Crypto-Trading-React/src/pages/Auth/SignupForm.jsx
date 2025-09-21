import React from 'react'
import {Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import {Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { DialogClose } from '@radix-ui/react-dialog'
import { useDispatch } from 'react-redux'
import { register } from '../../State/Auth/Action'
import { Navigate, useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const form = useForm({
      resolver:"",
      defaultValues:{
        fullName:"",
        email:"",
        password:""
      }
    })
    const onSubmit=(data) => {
      dispatch(register(data))
      console.log(data)
    }
  
  
  return (
    <div>


        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit,navigate)} className='space-y-6'>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input className="border w-full border-gray-400 p-5" 
                      placeholder="alexjorge@gmail.com" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}/>

                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input className="border w-full border-gray-400 p-5" 
                       {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />

              
                <div className='pb-3'>
                  <Button className="w-full" type="submit">Submit</Button>  
                </div>
                  
                
              
          
          


        </form>

      </Form>

      
    </div>
  )
}

export default SignupForm