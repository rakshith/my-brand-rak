import React, { useEffect, useState } from 'react'
import useBreakpoints, {
  BreakpointHelperProps,
} from '../../hooks/useBreakpoints'

import InfoSidebar from './InfoSidebar'
import NavSidebar from './NavSidebar'

interface SidebarProps {
  direction: string
}

function Sidebar({ direction }: SidebarProps) {
  const [screen, setScreen] = useState('sm')

  const breakPoints = useBreakpoints() as BreakpointHelperProps

  useEffect(() => {
    const listener = breakPoints?.listenAll((bps: any) => {
      console.log('bps', bps)
      const match = bps[0]

      switch (match) {
        case 'md':
        case 'sm':
        case 'lg':
        case '2xl':
          setScreen(match)
          break
      }

      if (match === 'undefined') {
        setScreen('sm')
      }
    })

    return () => {
      listener?.off()
    }
  }, [breakPoints])
  console.log('match', screen)

  return (
    <>
      {direction === 'right' ? (
        <InfoSidebar screen={screen} />
      ) : (
        <NavSidebar screen={screen} />
      )}
    </>
  )
}

export default Sidebar
