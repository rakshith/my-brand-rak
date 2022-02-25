import React from 'react'

export interface CardProps {
  title: string
  content: string
  btnLink: string
}

function Card({ title, content, btnLink }: CardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-brand-gray shadow-sm">
      <div className="px-6 py-8">
        <div className="mb-2 text-sm font-semibold">{title}</div>
        <p className="text-sm text-brand-text-gray">{content}</p>
        <div
          onClick={() => {}}
          className="mt-5 cursor-pointer 
        text-xs font-semibold text-brand-text-yellow"
        >
          ORDER NOW {'>'}
        </div>
      </div>
    </div>
  )
}

export default Card

{
  /* <div className="max-w-sm overflow-hidden rounded bg-brand-gray shadow-sm">
      <div className="px-6 py-8">
        <div className="mb-2 text-sm font-semibold">The Coldest Sunset</div>
        <p className="text-sm text-brand-text-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div
          className="mt-5 cursor-pointer 
        text-xs font-semibold text-brand-text-yellow"
        >
          ORDER NOW {'>'}
        </div>
      </div>
    </div> */
}
