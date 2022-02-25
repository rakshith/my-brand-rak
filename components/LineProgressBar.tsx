import React from 'react'

interface LineProgressBarProps {
  value: number
  title: string
}

const progressBar = `relative h-[4px] w-[200px] bg-black`

const filler = `bg-[#FBCC13] h-full transition-x-0.2 ease-in`

function LineProgressBar({ value, title }: LineProgressBarProps) {
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-between text-sm">
        <div className="mb-2 justify-end">{title}</div>
        <div className="mb-2 text-xs text-[#CACACE]">
          {value}
          {'%'}
        </div>
      </div>
      <div className={progressBar}>
        <Filler value={value} />
      </div>
    </div>
  )
}

export default LineProgressBar

interface FillerProps {
  value: number
}
const Filler = ({ value }: FillerProps) => {
  return <div className={filler} style={{ width: `${value}%` }}></div>
}
