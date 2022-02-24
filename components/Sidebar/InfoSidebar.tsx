import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

function InfoSidebar() {
  return (
    <div className="mt-5 flex w-60 flex-col">
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
  )
}

export default InfoSidebar
