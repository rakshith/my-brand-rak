import React from 'react'
import Card from './common/Card'

const recommendations = [
  {
    title: 'Recommendations 1',
    subtitle: 'subtitle1',
    description: 'Descriptions',
    avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
    ratings: 5,
  },

  {
    title: 'Recommendations 2',
    subtitle: 'subtitle2',
    description: 'Descriptions',
    avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
]

function Recommendations() {
  return (
    <div>
      Recommendations
      <div
        className="
        mt-5
        grid
        grid-cols-2
        gap-14
        lg:grid-cols-3"
      >
        {recommendations.map((item) => (
          <>
            <Card
              title={item.title}
              subtitle={item.subtitle}
              content={item.description}
              avatar={item.avatar}
              ratings={item.ratings}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
