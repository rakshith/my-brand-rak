import React from 'react'
import RoundProgressBar from './RoundProgressBar'

function Languages() {
  return (
    <>
      <div className="mt-4 text-sm font-semibold">Languages</div>

      <div className="mt-5 flex flex-row justify-evenly">
        <RoundProgressBar value={0.66} title={'English'} />
        <RoundProgressBar value={1} title={'Hindi'} />
        <RoundProgressBar value={0.8} title={'Kannada'} />
      </div>
    </>
  )
}

export default Languages
