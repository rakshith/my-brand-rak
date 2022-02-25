import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { centerStyleAtom } from '../atoms/centerStyleAtom'
import { showNavSidebarAtom } from '../atoms/navSidebarAtom'
import Achievements from './Achievements'
import Banner from './Banner'
import Header from './Header'
import MyServices from './MyServices'

function Center() {
  const centerStyleState = useRecoilValue(centerStyleAtom)

  return (
    <div className={`mb-10 flex flex-grow flex-col`}>
      <Header />
      <Banner />

      <Achievements />
      <div className="px-5">
        <MyServices />
      </div>
    </div>
  )
}

export default Center
