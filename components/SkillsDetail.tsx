import React from 'react'
import { AuthorSkills } from '../graphql/generated/schema'
import LineProgressBar from './LineProgressBar'

interface SkillsDetailProps {
  skills: Array<AuthorSkills>
}

function SkillsDetail({ skills }: SkillsDetailProps) {
  return (
    <div className="flex flex-col">
      <div className="skill-header mt-4">Coding</div>

      {skills.map((skill: AuthorSkills) => (
        <div key={skill.id}>
          <LineProgressBar value={skill.level || 0} title={skill.name || ''} />
        </div>
      ))}
    </div>
  )
}

export default SkillsDetail
