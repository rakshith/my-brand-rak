import React from 'react'
import { useRecoilValue } from 'recoil'
import { centerStyleAtom } from '../atoms/centerStyleAtom'



interface CenterProps {
  children: React.ReactNode
}

function Center({ children }: CenterProps) {
  return (
    <>
      <div className="z-10 h-screen w-full space-y-5 overflow-y-scroll px-5 scrollbar-hide">
        {children}
      </div>
    </>
  )
}

export default Center
