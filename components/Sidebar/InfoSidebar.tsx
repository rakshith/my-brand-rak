import React, { useEffect } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useAuthorDetailByIdQuery } from '../../graphql/generated/schema'

import Languages from '../Languages'
import ResidenceDetail from '../ResidenceDetail'
import SkillsDetail from '../SkillsDetail'
import UserDetail from '../UserDetail'

interface InfoSidebarProps {
  screen: string
}

function InfoSidebar({ screen }: InfoSidebarProps) {
  const { loading, error, data } = useAuthorDetailByIdQuery({
    variables: { where: { id: 'cl080w96f34v70dpocmrs2z6s' } },
  })

  console.log('useAuthorDetailByIdQuery', data?.author)

  return (
    <div className={`hidden w-72 flex-col lg:flex`}>
      <UserDetail
        name={data?.author?.name}
        profession={data?.author?.professional}
        occupation={data?.author?.occupation}
        photoUrl={data?.author?.avatar?.url}
      />
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
