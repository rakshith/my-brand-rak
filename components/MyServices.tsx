import React, { useEffect, useState } from 'react'
import {
  useServicesByAuthorQuery,
  Service,
  Author,
  ServicesByAuthorQuery,
} from '../graphql/generated/schema'
import Card from './common/Card'

const myServices = [
  {
    name: 'Example 1',
    description: 'Description 1',
    pathTo: '/contact',
  },
  {
    name: 'Example 2',
    description: 'Description 2',
    pathTo: '/contact',
  },
  {
    name: 'Example 3',
    description: 'Description 3',
    pathTo: '/contact',
  },
  {
    name: 'Example 4',
    description: 'Description 4',
    pathTo: '/contact',
  },
  {
    name: 'Example 7',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil.`,
    pathTo: '/contact',
  },
  {
    name: 'Example 8',
    description: 'Description 8',
    pathTo: '/contact',
  },
]

function MyServices() {
  const { loading, error, data } = useServicesByAuthorQuery({
    variables: {
      where: { id: 'cl080w96f34v70dpocmrs2z6s' },
    },
    fetchPolicy: 'network-only',
  })
  const [services, setServices] = useState<Array<Service>>([])

  useEffect(() => {
    if (data) {
      setServices((data as ServicesByAuthorQuery).services as Array<Service>)
    }
  }, [data])

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
        {services.map((item) => (
          <>
            <Card
              title={item.name}
              content={item.description as string}
              btnLink={'/contact'}
            />
          </>
        ))}
      </div>
    </>
  )
}

export default MyServices
