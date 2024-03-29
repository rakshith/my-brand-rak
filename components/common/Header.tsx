import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { showInfoSidebarAtom } from '../../atoms/infoSidebarAtom'
import { showNavSidebarAtom } from '../../atoms/navSidebarAtom'
import Menu from '../Menu'

function Header() {
  const isOpen = useRecoilValue(showNavSidebarAtom)
  const [isInfoOpen, setisInfoOpen] = useRecoilState(showInfoSidebarAtom)
  return (
    <div
      className="
      sticky
      top-0 z-40 
      flex h-16 flex-row justify-between 
    bg-[#20202A] shadow-slate-50 lg:hidden"
    >
      <BiDotsVerticalRounded
        className="mx-5 mt-5 h-5 w-5 cursor-pointer 
      text-[#8C8C8E] hover:text-white"
        onClick={() => setisInfoOpen(!isInfoOpen)}
      />
      <Menu showClose={isOpen} />
    </div>
  )
}

export default Header
