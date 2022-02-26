import { useRouter } from 'next/router'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { currentNavbarItemAtom } from '../../atoms/currentNavbarItem'
import { showNavSidebarAtom } from '../../atoms/navSidebarAtom'

function DrawerItem() {
  const router = useRouter()
  const setIsOpen = useSetRecoilState(showNavSidebarAtom)
  const setCurrentNavbarItemState = useSetRecoilState(currentNavbarItemAtom)

  const navigateTo = (page: string, title: string) => {
    setCurrentNavbarItemState(title)
    router.push(page)
    setIsOpen(false)
  }

  return (
    <>
      <h2
        className="brand-text-style mt-2"
        onClick={() => navigateTo('/', 'HOME')}
      >
        HOME
      </h2>
      <h2 className="brand-text-style mt-2">PORTFOILO</h2>
      <h2 className="brand-text-style mt-2">HISTORY</h2>
      <h2 className="brand-text-style mt-2">BLOG</h2>
      <h2
        className="brand-text-style mt-2"
        onClick={() => navigateTo('/contact', 'CONTACT')}
      >
        CONTACT
      </h2>
    </>
  )
}

export default DrawerItem
