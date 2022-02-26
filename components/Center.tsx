import React from 'react'
import { useRecoilValue } from 'recoil'
import { centerStyleAtom } from '../atoms/centerStyleAtom'

import Achievements from './Achievements'
import Banner from './Banner'
import Header from './Header'
import MyServices from './MyServices'
import Recommendations from './Recommendations'

function Center() {
  return (
    <div className={`mb-10 flex w-full flex-grow flex-col`}>
      <Header />
      <Banner />

      <Achievements />
      <div className="space-y-10 px-5">
        <MyServices />
        <Recommendations />
      </div>
    </div>
  )
}

export default Center
