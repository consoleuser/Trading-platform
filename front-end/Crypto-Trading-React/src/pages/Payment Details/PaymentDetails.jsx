import 
{
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import PaymentDetailForm from "./PaymentDetailForm"
import { use, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPaymentDetails } from "../../State/Withdrawl/Action"

function censoruserbankinfo(info) {
  const length = info.length;
  const sub = info.substring(length - 4, length);
  return "********" + sub;
}

function PaymentDetails() {
  const {withdrawal} = useSelector(store => store); 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPaymentDetails({jwt:localStorage.getItem("jwt")}))
  }, [])
    console.log("payment details ",withdrawal.paymentDetails)
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
    {withdrawal.paymentDetails ?  <Card>
        <CardHeader>

          <CardTitle>{withdrawal.paymentDetails.bankName}</CardTitle>

          <CardDescription>{censoruserbankinfo(withdrawal.paymentDetails.accountNumber)}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center">
            <p className="w-32">Account Holder: </p>
            <p className="text-gray-400">{withdrawal.paymentDetails.accountHolderName}</p>
          </div>

          
        </CardContent>
      </Card> 
      
      : 

      
      <div className="py-4">
         <Dialog>
          <DialogTrigger>
            <Button className="py-6">
              Add Payment Details
            </Button>
          </DialogTrigger>

          
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Payment Details</DialogTitle>
                <div className="py-2">
                  <PaymentDetailForm/>  
                </div>
                



              </DialogHeader>
            </DialogContent>
          </Dialog>
      </div>}

  
     


    </div>
  )
}

export default PaymentDetails