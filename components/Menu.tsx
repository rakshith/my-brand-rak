import React from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { centerStyleAtom } from '../atoms/centerStyleAtom'
import { showNavSidebarAtom } from '../atoms/navSidebarAtom'
import { navSidebarStyleAtom } from '../atoms/navSidebarStyleAtom'

interface MenuProps {
  showClose: boolean
}

function Menu({ showClose }: MenuProps) {
  const [showNavSidebarState, setShowNavSidebar] =
    useRecoilState(showNavSidebarAtom)

  const setCenterStyleState = useSetRecoilState(centerStyleAtom)

  const setNavSidebarStyleState = useSetRecoilState(navSidebarStyleAtom)

  const onClose = (e: MouseEvent) => {
    e.preventDefault()

    // navSidebarStyleState={w: `w-[250px]`}
    // centerStyleState = {ml: `ml-0`}
    // setNavSidebarStyleState({ cw: `w-0` })
    // setCenterStyleState({ cml: `ml-0` })

    setShowNavSidebar(!showNavSidebarState)
  }

  const onOpen = (e: MouseEvent) => {
    // centerStyleState = {`ml-[250px]`}
    // setNavSidebarStyleState({ cw: `w-[250px]` })
    // setCenterStyleState({ cml: `ml-[250px]` })
    setShowNavSidebar(!showNavSidebarState)
  }

  return (
    <div className={`flex flex-row justify-end p-5`}>
      {showClose ? (
        <IoMdClose className="brand-button" onClick={(e: any) => onClose(e)} />
      ) : (
        <IoMdMenu className="brand-button" onClick={(e: any) => onOpen(e)} />
      )}
    </div>
  )
}

export default Menu

// IoMdClose
