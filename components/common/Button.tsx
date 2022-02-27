import React from 'react'

interface ButtonProps {
  type: 'button' | 'reset' | 'submit'
  name: string
  onClick?: any
}

function Button({ type, name, onClick }: ButtonProps) {
  return (
    <div>
      <button type={type}> {name} </button>
    </div>
  )
}

export default Button
