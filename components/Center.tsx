import React from 'react'
import Banner from './Banner'
import Header from './Header'

function Center() {
  return (
    <div className="flex flex-grow flex-col">
      <Header />
      <Banner />
    </div>
  )
}

export default Center
