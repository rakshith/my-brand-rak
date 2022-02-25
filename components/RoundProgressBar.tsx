import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export interface RoundProgressBarProps {
  value: number
  title: string
}

function RoundProgressBar({ value, title }: RoundProgressBarProps) {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar
          value={value}
          maxValue={1}
          strokeWidth={5}
          text={`${value * 100}%`}
          styles={buildStyles({
            pathColor: `rgba(251,204,19, 1)`,
            backgroundColor: '#3e98c7',
            textColor: '#CACACE',
            trailColor: '#191923',
          })}
        />
      </div>

      <div className="p-4 text-sm">{title}</div>
    </div>
  )
}

export default RoundProgressBar
