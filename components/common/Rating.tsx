import React from 'react'

import { AiFillStar } from 'react-icons/ai'

export interface RatingProps {
  value?: number
}

function Rating({ value }: RatingProps) {
  return (
    <div
      className={`flex w-fit 
      flex-row space-x-1 ${value ? '' : 'hidden'}
      rounded-[12px] bg-brand-dark-gray p-1 px-3`}
    >
      {Array.apply(0, Array(value)).map(function (x, i) {
        return <AiFillStar key={i} className="brand-text-yellow h-4 w-4" />
      })}
    </div>
  )
}

export default Rating
