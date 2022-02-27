import React from 'react'

interface ButtonProps {
  type: 'button' | 'reset' | 'submit'
  name: string
  onClick?: any
}

function Button({ type, name, onClick }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        className=" 
        bg-brand-text-yellow
        px-10 py-3 text-xs font-semibold
      text-black"
      >
        {name}
      </button>
    </div>
  )
}

export default Button
