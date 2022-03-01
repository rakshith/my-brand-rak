import React, { useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {
  useAuthorDetailByIdQuery,
  Author,
} from '../../graphql/generated/schema'

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

  const [authorDetail, setAuthorDetail] = useState<Author>({} as Author)

  useEffect(() => {
    if (data) {
      setAuthorDetail(data.author as Author)
    }
  }, [data])

  return (
    <div className={`hidden w-72 flex-col lg:flex`}>
      <UserDetail
        name={authorDetail.name}
        profession={authorDetail.professional}
        occupation={authorDetail.occupation}
        photoUrl={authorDetail.avatar?.url}
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
