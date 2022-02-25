import React from 'react'

export interface CardProps {
  avatar?: string
  title: string
  subtitle?: string
  content: string
  btnLink?: string
  ratings?: string
}

function Card({ title, content, btnLink, subtitle, avatar }: CardProps) {
  return (
    <div className="relative overflow-visible">
      <div
        className={`absolute -top-5 right-10 h-16 w-16 ${
          avatar ? '' : 'hidden'
        }`}
      >
        <img
          className="rounded-full border border-gray-100 shadow-lg"
          src={avatar}
          alt="user image"
        />
      </div>
      <div className="max-w-sm  bg-brand-gray shadow-sm">
        <div className="px-6 py-8">
          <div className="mb-2 text-sm font-semibold">{title}</div>
          <div
            className={`text-xs italic text-brand-text-gray ${
              subtitle ? '' : 'hidden'
            }`}
          >
            {subtitle}
          </div>
          <p className="mt-4 text-sm text-brand-text-gray">{content}</p>
          <div
            onClick={() => {}}
            className={`mt-5 cursor-pointer ${btnLink ? '' : 'hidden'}
            text-xs font-semibold text-brand-text-yellow`}
          >
            ORDER NOW {'>'}
          </div>
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

{
  /*  */
}
