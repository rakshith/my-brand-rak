import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { centerStyleAtom } from '../atoms/centerStyleAtom'
import { showNavSidebarAtom } from '../atoms/navSidebarAtom'
import Achievements from './Achievements'
import Banner from './Banner'
import Header from './Header'

function Center() {
  const centerStyleState = useRecoilValue(centerStyleAtom)

  return (
    <div className={`flex flex-grow flex-col `}>
      <Header />
      <Banner />
      <Achievements />
    </div>
  )
}

export default Center
