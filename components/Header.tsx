import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Menu from './Menu'

function Header() {
  return (
    <div className="flex h-16 flex-row justify-between bg-[#20202A] lg:hidden">
      <BiDotsVerticalRounded className="mx-5 mt-5 h-5 w-5 cursor-pointer text-[#8C8C8E] hover:text-white" />
      <Menu />
    </div>
  )
}

export default Header
