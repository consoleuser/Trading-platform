import React from 'react'
import {Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import {Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { DialogClose } from '@radix-ui/react-dialog'
import { login } from '../../State/Auth/Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const form = useForm({
       resolver:"",
       defaultValues:{
         email:"",
         password:""
       }
     })
      const onSubmit=(data) => {
        dispatch(login({data, navigate}))
        console.log(data)  
      }
    
 
 
 
  return (
 
      <div >




        <Form {...form} >
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                   
      
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
                             {...field} 
                             placeholder="********"/>
                          </FormControl>
                          
                          <FormMessage />
                        </FormItem>
                      )}
                    />
      
                    
                        <div className='pb-3'>
                          <Button className="w-full" type="outline">Submit</Button>    
                        </div>
                        
                    
                    
                
                
      
      
              </form>
      
            </Form>
    </div>
  )
}

export default SigninForm