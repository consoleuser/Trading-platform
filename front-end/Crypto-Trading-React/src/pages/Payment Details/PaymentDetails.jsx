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


function PaymentDetails() {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
    {true ?  <Card>
        <CardHeader>

          <CardTitle>RBC Bank</CardTitle>

          <CardDescription>********1651</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center">
            <p className="w-32">Account Holder: </p>
            <p className="text-gray-400">Yuriy Kotyashko</p>
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