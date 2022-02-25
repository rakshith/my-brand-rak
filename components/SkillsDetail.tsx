import React from 'react'
import LineProgressBar from './LineProgressBar'

function SkillsDetail() {
  return (
    <div className="flex flex-col">
      <div className="skill-header mt-4">Coding</div>
      <LineProgressBar value={90} title={'ReacJS/NextJS'} />
      <LineProgressBar value={80} title={'React Native Mobile'} />
      <LineProgressBar value={76} title={'HTML/CSS'} />
      <LineProgressBar value={70} title={'MicroService Architecture'} />
      <LineProgressBar value={50} title={'NodeJS/NestJS'} />
      <LineProgressBar value={30} title={'Java'} />
    </div>
  )
}

export default SkillsDetail
