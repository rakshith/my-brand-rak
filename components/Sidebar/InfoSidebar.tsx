import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Languages from '../Languages'
import ResidenceDetail from '../ResidenceDetail'
import SkillsDetail from '../SkillsDetail'
import UserDetail from '../UserDetail'

interface InfoSidebarProps {
  screen: string
}

function InfoSidebar({ screen }: InfoSidebarProps) {
  return (
    <div className={`hidden w-72 flex-col lg:flex`}>
      <UserDetail />
      <div className="px-10 py-5">
        <ResidenceDetail />
        <hr className="hr" />
        <Languages />
        <hr className="hr" />
        <SkillsDetail />
      </div>
    </div>
  )
}

export default InfoSidebar
