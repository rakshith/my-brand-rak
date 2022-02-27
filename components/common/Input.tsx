import React from 'react'

interface InputProps {
  value: any
  placeholder: string
  Icon: any
  register: any
}

function Input({ register, value, Icon, placeholder, ...rest }: InputProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <div className=" flex h-14 w-20 items-center justify-center bg-brand-dark-gray">
          <Icon className="h-6 w-6 text-brand-text-gray" />
        </div>
        <input
          {...register(value)}
          {...rest}
          placeholder={placeholder}
          autoComplete="off"
          className="my-5 h-14 w-full bg-[#242430] p-5 text-white"
        />
      </div>
    </div>
  )
}

export default Input
