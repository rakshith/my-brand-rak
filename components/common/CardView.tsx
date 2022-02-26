import React from 'react'

interface CardViewProps {
  children: any
  cardStyle: any
}

function CardView({ children, cardStyle }: CardViewProps) {
  return (
    <div className="bg-brand-gray shadow-lg">
      <div className={cardStyle}>{children}</div>
    </div>
  )
}

export default CardView
