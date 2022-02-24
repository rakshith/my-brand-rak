import React from 'react'
import TypeOut from 'react-typeout'

function Banner() {
  const words = ['Mobile apps', 'Web apps.']

  return (
    <div className="h-96 w-full bg-cover-pic py-14 px-5 lg:py-11">
      <div className="h-96 w-full bg-cover-pic-over">
        <div
          className="flex flex-grow flex-col items-center 
            justify-center lg:mx-14 lg:place-items-start lg:justify-start"
        >
          <div className="mt-8 text-5xl font-black">
            Discover my amazing
            <div className="text-center lg:text-left">Art Space</div>
          </div>
          <div className="mt-5 mb-10 flex flex-row font-mono text-lg">
            <div className="mx-2 box-border text-yellow-400">
              <span className="text-white">{'<'}</span>code
              <span className="text-white">{'>'}</span>
            </div>
            <div>I build </div>
            <div>
              <TypeOut
                caret={true}
                words={words}
                className="mx-2 text-center"
              />
            </div>
            <div className="mx-2 box-border text-yellow-400">
              <span className="text-white">{'<'}</span>code
              <span className="text-white">{'/>'}</span>
            </div>
          </div>
          <div className="bg-yellow-400 p-3 px-10 text-center text-xs font-semibold text-black">
            EXPLORE NOW
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
