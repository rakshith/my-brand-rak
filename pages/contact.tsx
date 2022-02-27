import React from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import GetInTouch from '../components/contact/GetInTouch'

function contact() {
  return (
    <div className="flex w-full flex-col px-5">
      <ContactInfo />
      <GetInTouch />
    </div>
  )
}

export default contact
