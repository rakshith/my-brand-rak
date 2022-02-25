import React from 'react'

function Achievements() {
  return (
    <div
      className=" 
      mt-10 ml-5 
      mr-10 grid
    grid-cols-2 gap-y-5 py-10
    md:flex md:flex-row md:justify-between md:space-x-1
    lg:flex lg:flex-row 
    lg:justify-between lg:space-x-1"
    >
      <div className="flex flex-row items-center space-x-3 lg:justify-between">
        <div className="brand-text-yellow flex text-2xl">10+ </div>
        <div className="flex-wrap">Years Experience</div>
      </div>
      <div className="flex flex-row items-center space-x-3 lg:justify-between">
        <div className="brand-text-yellow flex text-2xl">143+ </div>
        <div className="flex-wrap">Completed Projects</div>
      </div>
      <div className="flex flex-row items-center space-x-3 lg:justify-between">
        <div className="brand-text-yellow flex text-2xl">114 </div>
        <div className="flex-wrap">Happy customerss</div>
      </div>
      <div className="flex flex-row items-center space-x-3 lg:justify-between">
        <div className="brand-text-yellow flex text-2xl">20+ </div>
        <div className="flex-wrap">Honors and Awards</div>
      </div>
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
