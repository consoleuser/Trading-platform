import React from 'react'
import SignupForm from './SignupForm'
import { useLocation, useNavigate } from 'react-router-dom'
import {Button} from "@/components/ui/button"
import ForgotPasswordForm from './ForgotPasswordForm'
import SigninForm from './SigninForm'



const Auth = () => {


    const navigate = useNavigate();
    const location = useLocation();




  return (
    <div className='h-screen relative authContainer'>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-opacity-50'>



            <div className=' bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 flex flex-col justify-center 
            items-center h-[35rem] w-[30rem] rounded-md z-50
            bg-gray-400 bg-opacity-50 shadow-2xl '>

                
                <h1 className='text-6xl font-bold pb-9'>Lumora</h1>
                
                {location.pathname == "/signup" ? (
            
                <section>
                    <SignupForm/>

                    <div className='flex items-center justify-center pb-3 gap-2 w-[400px]'>
                        <span className='font-semibold'>Already have an account?</span>
                        <Button onClick={ () => navigate("/auth/signin")}variant="ghost" >
                            Login
                        </Button>
                    </div>
                </section> )

                : 

                location.pathname=="forgot-password" 
                ?
                (<section>
                    <ForgotPasswordForm/>
                </section> )
                :
                (<section>
                    <SigninForm/>
                    <div className='flex items-center justify-center pb-3 w-[400px] gap-3'>   
                        <span className='font-semibold'>Dont have account?</span>
                        <Button onClick={ () => navigate("/signup")}variant="ghost" >
                            Sign in
                        </Button>
                    </div>



                    <div>
                        
                        <Button className="w-full" onClick={ () => navigate("/forgot-password")} variant="ghost">
                            Forgot Password
                        </Button>
                    </div>
                </section>)
            
            }    

            </div>
            
        </div>


    </div>
  )
}

export default Auth