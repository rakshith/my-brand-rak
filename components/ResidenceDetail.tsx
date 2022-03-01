import React from 'react'

interface ResidenceDetailProps {
  city?: string
  nationality?: string
  age?: number
}

function ResidenceDetail({ city, nationality, age }: ResidenceDetailProps) {
  return (
    <>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 gap-x-16 ">
          <div className="text-sm">Residence</div>
          <div className="brand-text-gray text-sm">{nationality}</div>
          <div className="text-sm">City</div>
          <div className="brand-text-gray text-sm">{city}</div>
          <div className="text-sm">Age</div>
          <div className="brand-text-gray text-sm">{age}</div>
        </div>
      </div>
    </>
  )
}

export default ResidenceDetail
