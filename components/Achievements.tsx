import React, { useEffect, useState } from 'react'
import {
  Author,
  Feats,
  useFeatsByAuthorQuery,
} from '../graphql/generated/schema'

function Achievements() {
  const { loading, error, data } = useFeatsByAuthorQuery({
    variables: {
      where: { id: 'cl080w96f34v70dpocmrs2z6s' },
    },
    fetchPolicy: 'network-only',
  })
  const [feats, setFeats] = useState<Array<Feats>>([])

  useEffect(() => {
    if (data) {
      console.log('Achievements', (data.author as Author).feats)
      setFeats((data.author as Author).feats)
    }
  }, [data])

  return (
    <div
      className=" 
      grid
      grid-cols-2 gap-y-5 py-5
      md:flex md:flex-row md:justify-between md:space-x-1
      lg:flex lg:flex-row 
      lg:justify-between lg:space-x-1"
    >
      {feats.map((feat: Feats) => (
        <div key={feat.id}>
          <div className="flex flex-row items-center space-x-3 lg:justify-between">
            <div className="brand-text-yellow flex text-2xl">{feat.value}</div>
            <div className="flex-wrap">{feat.name}</div>
          </div>
        </div>
      ))}
    </div>
    // <div className="mt-10 ml-5 mr-10 grid grid-cols-2 py-10 lg:grid-cols-4">
    //   <div className="flex flex-row  items-center space-x-3">
    //     <div className="brand-text-yellow flex text-2xl">10+ </div>
    //     <div className="flex-wrap">Years Experience</div>
    //   </div>
    //   <div className="flex flex-row items-center  space-x-3">
    //     <div className="brand-text-yellow flex text-2xl">143+ </div>
    //     <div className="flex-wrap">Completed Projects</div>
    //   </div>
    //   <div className="flex flex-row items-center space-x-3">
    //     <div className="brand-text-yellow flex text-2xl">114 </div>
    //     <div className="flex-wrap">Happy customerss</div>
    //   </div>
    //   <div className="flex  flex-row items-center space-x-3">
    //     <div className="brand-text-yellow flex text-2xl">20+ </div>
    //     <div className="flex-wrap">Honors and Awards</div>
    //   </div>
    // </div>
  )
}

export default Achievements
