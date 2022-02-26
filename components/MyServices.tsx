import React from 'react'
import Card from './common/Card'

const myServices = [
  {
    name: 'Example 1',
    description: 'Description 1',
    pathTo: 'https://google.co.in',
  },
  {
    name: 'Example 2',
    description: 'Description 2',
    pathTo: 'https://google.co.in',
  },
  {
    name: 'Example 3',
    description: 'Description 3',
    pathTo: 'https://google.co.in',
  },
  {
    name: 'Example 4',
    description: 'Description 4',
    pathTo: 'https://google.co.in',
  },
  {
    name: 'Example 7',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil.`,
    pathTo: 'https://google.co.in',
  },
  {
    name: 'Example 8',
    description: 'Description 8',
    pathTo: 'https://google.co.in',
  },
]

function MyServices() {
  return (
    <>
      <h1>My Services</h1>
      <div
        className="
        grid
        grid-cols-2
        gap-5
        pb-10
        lg:grid-cols-3"
      >
        {myServices.map((item) => (
          <>
            <Card
              title={item.name}
              content={item.description}
              btnLink={item.pathTo}
            />
          </>
        ))}
      </div>
    </>
  )
}

export default MyServices
