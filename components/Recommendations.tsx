import React, { useEffect, useState } from 'react'
import {
  useRecommondationByAuthorQuery,
  Recommondation,
  RecommondationByAuthorQuery,
} from '../graphql/generated/schema'
import Card from './common/Card'

// const recommendations = [
//   {
//     id: 1,
//     title: 'Recommendations 1',
//     subtitle: 'subtitle1',
//     description: 'Descriptions',
//     avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//     ratings: 5,
//   },

//   {
//     id: 2,
//     title: 'Recommendations 2',
//     subtitle: 'subtitle2',
//     description: 'Descriptions',
//     avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//   },
//   {
//     id: 1,
//     title: 'Recommendations 1',
//     subtitle: 'subtitle1',
//     description: 'Descriptions',
//     avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//     ratings: 5,
//   },

//   {
//     id: 2,
//     title: 'Recommendations 2',
//     subtitle: 'subtitle2',
//     description: 'Descriptions',
//     avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
//   },
// ]

function Recommendations() {
  const { loading, error, data } = useRecommondationByAuthorQuery({
    variables: {
      where: { id: 'cl080w96f34v70dpocmrs2z6s' },
    },
    fetchPolicy: 'network-only',
  })
  const [recommendations, setRecommendations] = useState<Array<Recommondation>>(
    []
  )

  useEffect(() => {
    if (data) {
      console.log('recommendations', data)
      setRecommendations(
        (data as RecommondationByAuthorQuery).author
          ?.recommondations as Array<Recommondation>
      )
    }
  }, [data])

  return (
    <div>
      Recommendations
      {/* <div
        className="
        inset-0
        right-0
        flex
      max-w-lg 
      flex-grow 
      flex-row
      justify-between
      space-x-5 overflow-x-scroll 
      overscroll-auto
      md:max-w-[765px]
      lg:max-w-[965px]"
      >
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
        <CardAvatar />
      </div> */}
      <div
        className="
        mt-5
        grid
        grid-cols-1
        gap-14
        md:grid-cols-2
        lg:grid-cols-3"
      >
        {recommendations.map((item: Recommondation) => (
          <>
            <Card
              title={item.name}
              subtitle={item.designation as string}
              content={item.recommendation}
              avatar={item.avatar?.url}
            />
          </>
        ))}
      </div>
      {/* <div
        className="
      mt-10 
      flex
      max-w-[500px]
      flex-row
      overscroll-auto
      pt-10"
      >
        <Card
          title={recommendations[0].title}
          subtitle={recommendations[0].subtitle}
          content={recommendations[0].description}
          avatar={recommendations[0].avatar}
          ratings={recommendations[0].ratings}
        />
        <Card
          title={recommendations[0].title}
          subtitle={recommendations[0].subtitle}
          content={recommendations[0].description}
          avatar={recommendations[0].avatar}
          ratings={recommendations[0].ratings}
        />
        <Card
          title={recommendations[0].title}
          subtitle={recommendations[0].subtitle}
          content={recommendations[0].description}
          avatar={recommendations[0].avatar}
          ratings={recommendations[0].ratings}
        />
        <Card
          title={recommendations[0].title}
          subtitle={recommendations[0].subtitle}
          content={recommendations[0].description}
          avatar={recommendations[0].avatar}
          ratings={recommendations[0].ratings}
        />
      </div> */}
    </div>
  )
}

export default Recommendations
