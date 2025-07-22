import React from 'react'
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

import { DotIcon } from '@radix-ui/react-icons'



function bitcoin() {
  return (
    <div className='p-5 mt-5'>
        <div className='flex justify-between'>
          <div className='flex gap-5 items-center'>
            <Avatar>
              <AvatarImage src="/imgs/324143.png"/>
            </Avatar>
          </div>

          <div>
            <div className='flex items-center gap-2'>
              <p>BTC</p>
              <DotIcon></DotIcon>
              <p>Bitcoin</p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default bitcoin