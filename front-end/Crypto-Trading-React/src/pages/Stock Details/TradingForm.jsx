import { Input }from "@/components/ui/input"
import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar"

import { DotIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import {Button} from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { getUserWallet } from "../../State/Wallet/Action"
import { getAssetDetails } from "../../State/Asset/Action"
import { payOrder } from "../../State/Orders/Action"


const TradingForm = () => {
   const [orderType,setOrderType] = useState("BUY")
   const [amount, setAmount] = useState(0);
   const {coin, wallet, assets} = useSelector((store) => store);
   const [Quantity, setQuantity] = useState(0);
   const dispatch = useDispatch();




   const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount);
        const volume = calculateBuyCost(amount, coin.coinDetails.market_data.current_price.cad);
        setQuantity(volume);
   }


   const calculateBuyCost = (amount, price) => {
    let volume = amount / price;
    return volume.toPrecision(3); 
   }

   const validAction = () => {
    if (orderType == "BUY") {return wallet.userWallet.balance >= amount; }
    else{return assets?.assetDetails.quantity >= Quantity;}
    }

   // Fetch User Wallet and Asset Details on Component Mount
   useEffect(() => {
        dispatch(getUserWallet(localStorage.getItem("jwt")));
        dispatch(getAssetDetails(
            {
                coinId: coin.coinDetails.id, 
                jwt: localStorage.getItem("jwt")}
        ));
    }, [])

    //ensure walletBalance is updated after a buy order
    useEffect(() => {
        if (orderType === "BUY" && amount > 0) {}
    }, [wallet.userWallet.balance]); 

    const HandleBuy = ()  =>{
        console.log("Cost:",amount);
        console.log("Order type", orderType);
        console.log("Quantity --->", Quantity);
        console.log("Price ---- >")
        dispatch(payOrder(
            {
                jwt: localStorage.getItem("jwt"),
                orderData: {
                    coinId : coin.coinDetails.id, 
                    quantity : Quantity,
                    orderType : orderType
                },
                amount : amount

            }
        ));
        

        setTimeout(() => {
            dispatch(getUserWallet(localStorage.getItem("jwt")));
        }, 500);
    }



  
    return (
    <div className="space-y-10 p-5">
        <div>      
            <div className="flex gap-4 items-center justify-between">
                <Input className="py-7 focus:outline-none"
                placeholder="Enter amount to trade"
                onChange = {handleChange} 
                type= "number" 
                name = "amount" 
                />

                <div>
                    <p className="overflow-x-auto font-semibold border text-2xl flex justify-center items-center w-36 h-14 rounded-md    "> {Quantity}</p>
                </div>

            </div>

            {(!validAction() && orderType == "BUY") && <h1 className="font-semibold text-red-600 text-center pt-4">Insufficient Wallet Balance</h1>}
        </div>


            <div className='flex gap-5 items-center'>
                <div>
                    <Avatar>
                    <AvatarImage src={coin.coinDetails.image.large}/>
                </Avatar>
                </div>
                    <div>
                    <div className='font-semibold flex items-center gap-2'>
                    <p>{coin.coinDetails.symbol.toUpperCase()}</p>
                    <DotIcon className='text-gray-400'/>
                    <p className='text-gray-400'>{coin.coinDetails.name}</p>
                    </div>


                    <div className='flex items-end gap-2'>
                    <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.cad}</p>
                    {
                    coin.coinDetails?.market_data.price_change_percentage_24h > 0 ?
                    <p className='font-bold text-lime-600'>
                        <span>{coin.coinDetails?.market_data.market_cap_change_24h} </span>
                        <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                    </p>
                    :
                    <p className='font-bold text-red-600'>
                        <span>{coin.coinDetails?.market_data.market_cap_change_24h} </span>
                        <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                    </p>

                    }



                    </div>
                </div>
            </div>


            <div className="flex font-semibold items-center justify-between">
                <p>Order Type</p>
                <p>Market Order</p>
            </div>

            <div className="flex items-center justify-between">
                <p className="font-semibold">
                    {orderType == "BUY" ? "Funds Avaliable" : "Avaliable Quantity" }
                </p>

                <p>
                    {orderType == "BUY" ? wallet?.userWallet.balance : assets?.assetDetails.quantity.toPrecision(3) }
                </p>
            </div>

            <div>
                <Button 
                onClick={HandleBuy}
                className={`w-full py-6 
                    ${orderType=="SELL"  ? "bg-red-600 text-white" : ""}  `}>
                    {orderType}
                </Button>

                <Button 
                variant="link"
                className="w-full mt-5 text-xl"
                onClick = { () => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}>
                    {orderType == "BUY" ? "Or Sell" : "Or Buy"}
                </Button>
            </div>
        

    </div>
  )
}

export default TradingForm