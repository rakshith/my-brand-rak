import React, { useEffect, useState } from 'react'
import { showNavSidebarAtom } from '../atoms/navSidebarAtom'
import tailwindConfig from '../tailwind.config'
// @ts-ignore
import bph from 'breakpoint-helper'

export interface BreakpointHelperProps {
  getBreakpoints: any
  getMediaQuery: any
  isMatching: any
  listen: any
  listenAll: any
}
/**
 * This is only returns screens matching when the resizing of browser window happens otherwise not
 * @returns this returns instance for the matching screen breakpoints for responsive design
 */
function useBreakpoints<BreakpointHelperProps>():
  | BreakpointHelperProps
  | undefined {
  const [breakPointsHelper, setBreakpointsHelper] = useState()

  useEffect(() => {
    const instance = bph({
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    })

    // const { getBreakpoints, getMediaQuery, isMatching, listen, listenAll } =
    //   instance

    console.log('instance', instance)
    setBreakpointsHelper(instance)
  }, [])

  return breakPointsHelper
}

export default useBreakpoints

/**
 *
 * Find out if a tailwind screen value matches the current window
 *
 * @param {string} screen
 *
 * @return {Object|Boolean}
 */
// function useDetectScreens() {
//   const [screen, setScreen] = useState('')
//   const [matchedScreen, setMatchedScreen] = useState()
//   useEffect(() => {
//     const detectScreen = () => {
//       // create a keyed object of screens that match

//       const screens = tailwindConfig.theme.extend?.screens
//       console.log('default screens', screens)
//       const matches = Object.entries(screens).reduce(
//         (results, [name, size]) => {
//           const mediaQuery =
//             typeof size === 'string'
//               ? `(min-width: ${size})`
//               : `(max-width: ${size.max})`

//           results[name] = window.matchMedia(mediaQuery).matches

//           return results
//         },
//         {}
//       )
//       console.log('matched screen', matches)
//       // show all matches when there is no screen choice
//       if (screen === '') {
//         setMatchedScreen(matches)

//         return matches
//       }

//       // invalid screen choice
//       if (!screens[screen]) {
//         console.error(`No match for "${screen}"`)

//         return false
//       }

//       setMatchedScreen(matches[screen])
//     }

//     detectScreen()
//   }, [])

//   return {
//     screen,
//     setScreen,
//     matchedScreen,
//   }
// }
