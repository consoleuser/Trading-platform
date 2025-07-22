import React from 'react'
import { Button } from '@/components/ui/button'
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
    DotIcon,
    Cross1Icon
 } from "@radix-ui/react-icons";
import { MessageCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"


const Home = () => {
    const[category, setCategory] = React.useState("all")
    const[inputValue, setInputValue] = React.useState("");    
    const [isBotReleased, setIsBotReleased] = React.useState("False");


    const handleBotRelease = () => setIsBotReleased(!isBotReleased);

    const handleCategory = (value) => {
        setCategory(value)
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key == "Enter"){
            console.log(inputValue)
        }setInputValue("")
    }





    return (
        <div className='relative'>
            <div className='lg:flex'>
                <div className='lg:w-[50%] lg:border-r'>

                        <div className='p-3 flex items-center gap-4'>
                        <Button 
                        onClick= {()=> handleCategory("all") }
                        variant={category == "all" ? "default" : "outline"} 
                        className='rounded-full cursor-pointer'>
                        All
                        </Button>

                        <Button 
                        onClick= {()=> handleCategory("top-50") }
                        variant={category == "top-50" ? "default" : "outline"} 
                        className='rounded-full cursor-pointer'>
                        Top-50
                        </Button>


                        <Button 
                        onClick= {()=> handleCategory("topGainers") }
                        variant={category == "topGainers" ? "default" : "outline"} 
                        className='rounded-full cursor-pointer'>
                        Top Gainers
                        </Button>

                        <Button 
                        onClick= {()=> handleCategory("topLosers") }
                        variant={category == "topLosers" ? "default" : "outline"} 
                        className='rounded-full cursor-pointer'>
                        Top Losers
                        </Button>


                        </div>    

                <AssetTable/>
                </div>
                <div className="hidden lg:block lg:w-[50%] p-5">
                    <StockChart/>
                    <div className='flex gap-5 items-center'>

                        <div>
                            <Avatar>
                                <AvatarImage src= "/imgs/Ethereum-stock.webp"/> 
                                <AvatarFallback>YK</AvatarFallback>
                            </Avatar>
                        </div>
                    <div>
                        
                        <div className='flex items-center gap-2'>
                            <p>ETH</p>
                            <DotIcon className='text-gray-400'/>
                            <p className='text-gray-400'>Ethereum</p>
                        </div>

                        <div className='flex items-end gap-2'>

                            <p className='text-xl font-bold'>5464</p>
                            <p className='text-red-600'>
                                <span>-1319049822.578</span>
                                <span>(-0.29803%)</span>
                            </p>
                        </div>




                    </div>



                    </div>
                </div>
            </div>
            <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
                
                {isBotReleased && <div className='rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-gray-100 border border-black'>

                    <div className=' flex justify-between items-center border-b px-6 h-[12%] bg[#33CC66] border-black'>
                   
                        <p className='font-bold text-lime-500'>Lumy</p>
                            <Button className="hover:bg-gray-300"
                            onClick={handleBotRelease}
                            variant='ghost' size="icon" >
                                <Cross1Icon/>
                            </Button>
                    </div>

                        <div className='h-[95%] flex flex-col overflow-y-auto gap-1 px-5 py-3 scroll-container'>

                            <div className='self-start pb-5 w-auto'>
                                <div className='justify-end self-end px-5 py-2 rounded-md bg-gray-300'>
                                    <p>Hey, I'm <span>Lumy</span></p>
                                    {/* <p>Hey, I'm <span className='font-bold text-lime-500 [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]'>Lumy</span></p> */}
                                    <p>I can assist you with any questions you have</p>
                                    <p>try asking for price, market cap, extra...</p>
                                </div>
                            </div>

    
                            {[1,1,1,1].map((item , i) => (

                                <div key = {i} 
                                className= {` ${ i % 2==0 ? "self-start" : "self-end" }  'pb-5 w-auto'  `}>

                                { //alternate between messages made between user and AI chatbot 
                                    i % 2 == 0 ? 
                                    <div className='justify-end self-end px-5 py-2 rounded-md bg-gray-300'>
                                        <p>prompt who are you</p>
                                    </div> 
                                    : 
                                    <div className='justify-end self-end px-5 py-2 rounded-md bg-gray-300'>
                                        <p>ans hi, Lumy</p>
                                    </div>

                                }
                                </div>
                            ))}

                            <div className='mt-auto flex-none py-20'>
                                <Input 
                                className='w-full h-full'
                                placeHolder="Prompt"
                                onChange={handleChange}
                                value={inputValue}
                                onKeyPress={handleKeyPress}
                                />
                            </div>

                    </div>
                </div>} 
                
                
                <div className="relative w-[10rem] cursor-pointer group">
                    <Button 
                    onClick={handleBotRelease}
                    className="w-full h-[3rem] gap-2 items-center">
                        <MessageCircle
                        size={30}/>
                        <span className='text-2x1'>Chat Bot</span>
                    </Button>
                </div>
            </section>
        </div>
    )
}


export default Home