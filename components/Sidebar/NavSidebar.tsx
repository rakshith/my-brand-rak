import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentNavbarItemAtom } from '../../atoms/currentNavbarItem'

import { showNavSidebarAtom } from '../../atoms/navSidebarAtom'
import Menu from '../Menu'
import Drawer from './Drawer'
import DrawerItem from './DrawerItem'

interface NavSidebarProps {
  screen: string
}

function NavSidebar({ screen }: NavSidebarProps) {
  const showNavSidebarState = useRecoilValue(showNavSidebarAtom)

  const [isOpen, setIsOpen] = useRecoilState(showNavSidebarAtom)

  const currentNavbarItemState = useRecoilValue(currentNavbarItemAtom)

  const renderView = (match: string) => {
    switch (match) {
      case 'md':
      case 'sm':
        return (
          <>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerItem />
            </Drawer>
          </>
        )

      default:
        return (
          <>
            <div
              className={`${
                showNavSidebarState ? `lg:flex` : 'hidden lg:flex '
              } sidebar-container h-full flex-col`}
            >
              <div
                className=" hidden h-[70px] w-full
    cursor-pointer items-center justify-center
    bg-[#24242E] hover:text-red-100 lg:flex lg:justify-start"
              >
                <Menu showClose={showNavSidebarState} />
              </div>
              <div
                className={`${
                  showNavSidebarState ? 'hidden' : 'flex'
                } mt-20 rotate-90 text-xs font-normal text-[#8C8C8E]`}
              >
                {currentNavbarItemState}
              </div>
              <div
                className={`${
                  showNavSidebarState ? 'mt-20 flex flex-col p-10' : 'hidden'
                }`}
              >
                <DrawerItem />
              </div>
            </div>
          </>
        )
    }
  }

  return renderView(screen)
}

export default NavSidebar
