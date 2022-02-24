import React from 'react'
import Menu from '../Menu'

function NavSidebar() {
  return (
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
  )
}

export default NavSidebar
