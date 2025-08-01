import { HomeIcon,
         DashboardIcon, 
         BookmarkIcon,
         ActivityLogIcon,
         PersonIcon,
         ExitIcon
         } from '@radix-ui/react-icons'

import {
    CreditCardIcon, 
    LandmarkIcon,
    SettingsIcon,
    WalletIcon
} from 'lucide-react'

import React from 'react'
import { Button } from '@/components/ui/button'
import {SheetClose} from '@/components/ui/sheet'
import { useNavigate } from 'react-router-dom'



const menu = [
   { name: "Home",
    path: "/",
    icon: <HomeIcon className="h-6 w-6" /> 
   },

  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-6 w-6" />,
  },

  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },

  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-6 w-6" />,
  },

  { name: "Wallet", 
    path: "/wallet", 
    icon: <WalletIcon /> },

  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },

  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },

  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-6 w-6" />,
  },

  { name: "Logout",
     path: "/", 
     icon: <ExitIcon className="h-6 w-6" /> },
];


const Sidebar = () => {
    const navigate = useNavigate();

    
    

    return(

        <div className='mt-1 space-y-5'>
            {
                menu.map((item) => (
                   <div key={item.name}>
                     <SheetClose className='w-full'>
                        <Button variant='outline' 
                        className='flex items-center justify-start gap-2 py-5 w-50'
                        onClick ={ () => navigate(item.path) }
                        >

                            <span className='w-8'>
                                {item.icon}
                            </span>
                            <p>{item.name}</p>
                        </Button>
                    </SheetClose> 
                    </div>
                ))
            }
        </div>
            
    )
}


export default Sidebar