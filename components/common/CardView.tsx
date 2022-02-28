import React, { ReactNode } from 'react'

interface CardViewProps {
  children: ReactNode
  cardStyle: string
}

function CardView({ children, cardStyle }: CardViewProps) {
  return (
    <div className="bg-brand-gray shadow-lg">
      <div className={cardStyle}>{children}</div>
    </div>
  )
}

export default CardView
