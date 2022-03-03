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
    <>
      <div className="w-full space-y-5 px-5">
        <Banner />

        <Achievements />

        <MyServices />
        <Recommendations />
      </div>
    </>
  )
}

export default Center
