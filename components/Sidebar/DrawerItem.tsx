import { useRouter } from 'next/router'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { showNavSidebarAtom } from '../../atoms/navSidebarAtom'

function DrawerItem() {
  const router = useRouter()
  const setIsOpen = useSetRecoilState(showNavSidebarAtom)

  const navigateTo = (page: string) => {
    router.push(page)
    setIsOpen(false)
  }

  return (
    <>
      <h2 className="brand-text-style mt-2" onClick={() => navigateTo('/')}>
        HOME
      </h2>
      <h2 className="brand-text-style mt-2">PORTFOILO</h2>
      <h2 className="brand-text-style mt-2">HISTORY</h2>
      <h2 className="brand-text-style mt-2">BLOG</h2>
      <h2
        className="brand-text-style mt-2"
        onClick={() => navigateTo('/contact')}
      >
        CONTACT
      </h2>
    </>
  )
}

export default DrawerItem
