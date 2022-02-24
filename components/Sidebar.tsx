import React from 'react'

import { BiDotsVerticalRounded } from 'react-icons/bi'
import Menu from './Menu'

interface SidebarProps {
  direction: string
}

function Sidebar({ direction }: SidebarProps) {
  return (
    <div className="hidden h-screen bg-[#20202A] lg:flex">
      {direction === 'right' ? (
        <div className="mt-5 flex w-60 flex-col">
          <div className="mx-5 flex justify-end">
            <BiDotsVerticalRounded className="h-5 w-5 text-[#8C8C8E]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="flex h-[100px] w-[100px]  rounded-full"
              src="https://res.cloudinary.com/daily-now/image/upload/f_auto/v1645619179/avatars/YVgRVEdJHHNrRxSJNuLek"
              alt=""
            />
            <div className="mt-5 font-mono text-sm font-semibold">
              Rakshith Raj S
            </div>
            <div className="text-xs text-[#8C8C8E]">
              <div className="text-[#8C8C8E]">Font end engineer</div>
              <div>UI/UX Professional</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-[90px] flex-col">
          <div
            className="flex h-[70px] w-full 
          cursor-pointer items-center justify-center 
          bg-[#24242E] hover:text-red-100"
          >
            <Menu />
          </div>

          <div className="mt-20 rotate-90 text-xs font-normal text-[#8C8C8E] ">
            HOME
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar

//24242E
//8C8C8E
// BiDotsVerticalRounded
