import React from 'react'
import { useRecoilState } from 'recoil'
import { showNavSidebarAtom } from '../../atoms/navSidebarAtom'

interface DrawerProps {
  children: any
  isOpen: boolean
  setIsOpen: any
}

function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        ' fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out ' +
        (isOpen
          ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
          : ' translate-x-full opacity-0 transition-all delay-500  ')
      }
    >
      <section
        className={
          ' delay-400 sidebar-container absolute right-0 h-full w-screen max-w-xs transform shadow-xl transition-all duration-500 ease-in-out  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative flex h-full w-screen flex-col space-y-6 overflow-y-scroll p-8">
          <header
            className={`cursor-pointer text-lg font-bold hover:text-white`}
            onClick={() => setIsOpen(false)}
          >
            X
          </header>
          <section className="py-52">{children}</section>
        </article>
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}

export default Drawer
