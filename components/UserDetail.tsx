import React from 'react'

interface UserDetailProps {
  name?: string
  profession?: string
  occupation?: string
  photoUrl?: string
}

function UserDetail({
  name,
  profession,
  occupation,
  photoUrl,
}: UserDetailProps) {
  return (
    <div
      className="flex flex-col items-center justify-center 
    bg-[#24242F] py-8"
    >
      <img
        className="flex h-[100px] w-[100px]  rounded-full"
        src={photoUrl}
        alt=""
      />
      <div className="mt-5 font-mono text-sm font-semibold">{name}</div>
      <div className="text-xs text-[#8C8C8E]">
        <div className="text-[#8C8C8E]">{profession}</div>
        <div>{occupation}</div>
      </div>
    </div>
  )
}

export default UserDetail
