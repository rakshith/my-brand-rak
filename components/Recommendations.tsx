import React, { useEffect, useState } from 'react'
import {
  useRecommondationByAuthorQuery,
  Recommondation,
  RecommondationByAuthorQuery,
} from '../graphql/generated/schema'
import Card from './common/Card'
import CardView from './common/CardView'
import Rating from './common/Rating'

// const recommendationsdf = [
//   {
//     id: 1,
//     name: 'Recommendations 1',
//     designation: 'subtitle1',
//     recommendation: 'Descriptions',
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
            <div className="mt-10">
              <CardView cardStyle={`px-5 py-5 `}>
                <div className={`absolute -top-10 right-10 h-16 w-16`}>
                  <img
                    className="rounded-full border border-gray-100 shadow-lg"
                    src={item.avatar?.url}
                    alt="user image"
                  />
                </div>
                <div className="mb-2 text-sm font-semibold">{item.name}</div>
                <div className={`text-xs italic text-brand-text-gray`}>
                  {item.designation as string}
                </div>
                <p className="mt-4 text-sm text-brand-text-gray">
                  {item.recommendation}
                </p>
                <div className="mt-5">
                  <Rating value={5} />
                </div>
              </CardView>
            </div>
          </>
        ))}
      </div>
      {/* <Card
        title={recommendationsdf[0].name}
        subtitle={recommendationsdf[0].designation as string}
        content={recommendationsdf[0].recommendation}
        avatar={recommendationsdf[0].avatar?.url}
      /> */}
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
