import React from 'react'

import InfoSidebar from './InfoSidebar'
import NavSidebar from './NavSidebar'

interface SidebarProps {
  direction: string
}

function Sidebar({ direction }: SidebarProps) {
  return (
    <div className="hidden h-screen bg-[#20202A] lg:flex">
      {direction === 'right' ? <InfoSidebar /> : <NavSidebar />}
    </div>
  )
}

export default Sidebar
