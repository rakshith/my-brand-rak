import React, { useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {
  useAuthorDetailByIdQuery,
  Author,
  Residence,
  AuthorLanguages,
  AuthorSkills,
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
  const [residence, setResidence] = useState<Residence>({} as Residence)
  const [languages, setLanguages] = useState<Array<AuthorLanguages>>([])
  const [skills, setSkills] = useState<Array<AuthorSkills>>([])

  useEffect(() => {
    if (data) {
      console.log('useEffect', data.author as Author)
      setAuthorDetail(data.author as Author)
      setResidence((data.author as Author).residence as Residence)
      setLanguages((data.author as Author).languages)
      setSkills((data.author as Author).skills)
    }
  }, [data])

  return (
    <div className={`hidden w-full flex-col lg:flex`}>
      <UserDetail
        name={authorDetail.name}
        profession={authorDetail.professional}
        occupation={authorDetail.occupation}
        photoUrl={authorDetail.avatar?.url}
      />
      <div className="px-10 py-5">
        <ResidenceDetail
          city={residence?.city as string}
          nationality={residence?.nationality as string}
          age={authorDetail?.age as number}
        />
        <hr className="hr" />
        <Languages languages={languages} />
        <hr className="hr" />
        <SkillsDetail skills={skills} />
      </div>
    </div>
  )
}

export default InfoSidebar
