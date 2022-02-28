import React from 'react'

interface TextAreaProps {
  value: any
  placeholder: string
  Icon: any
  register: any
}

function TextArea({
  register,
  value,
  Icon,
  placeholder,
  ...rest
}: TextAreaProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[135px] w-full flex-row items-center">
        <div className="flex flex-col items-center">
          <div className=" flex h-14 w-20 items-center justify-center bg-brand-dark-gray">
            <Icon className="h-6 w-6 text-brand-text-gray" />
          </div>
          <div className=" flex h-20 w-20 items-center justify-center bg-brand-text-yellow"></div>
        </div>
        <textarea
          style={{ resize: 'none' }}
          {...register(value)}
          placeholder={placeholder}
          {...rest}
          name={value}
          className="my-5 h-full w-full bg-[#242430] p-5 text-white"
        ></textarea>
      </div>
    </div>
  )
}

export default TextArea
