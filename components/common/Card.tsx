import { useRouter } from 'next/router'
import React from 'react'
import Rating from './Rating'

export interface CardProps {
  avatar?: string
  title: string
  subtitle?: string
  content: string
  btnLink?: string
  ratings?: number
}

function Card({
  title,
  content,
  btnLink,
  subtitle,
  avatar,
  ratings,
}: CardProps) {
  const router = useRouter()

  return (
    <div
      className="
    max-h-sm 
    md:max-h-md 
    md:max-h-lg
    relative
    overflow-visible 
    md:max-w-md 
    lg:max-w-lg
    "
    >
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
      <div className="bg-brand-gray shadow-sm">
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
            onClick={() => router.push(btnLink ? btnLink : '/')}
            className={`mt-5 cursor-pointer ${btnLink ? '' : 'hidden'}
            text-xs font-semibold text-brand-text-yellow`}
          >
            ORDER NOW {'>'}
          </div>
          <div className="mt-5">
            <Rating value={ratings} />
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
