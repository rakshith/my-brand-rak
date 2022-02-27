import React from 'react'
import CardView from '../common/CardView'

function ContactInfo() {
  return (
    <div className="mt-8 w-full">
      <div className="text-xl font-semibold">Contact Information</div>

      <div className="grid  grid-cols-1 gap-5 py-8 md:grid-cols-2 lg:grid-cols-3">
        <CardView cardStyle={`p-11 flex`}>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-sm">Country</div>
            <div className="brand-text-gray text-sm">India</div>
            <div className="text-sm">City</div>
            <div className="brand-text-gray text-sm">Bengaluru</div>
            <div className="text-sm">Street</div>
            <div className="brand-text-gray text-sm">20 Dellbank Rd</div>
          </div>
        </CardView>

        <CardView cardStyle={`p-11  flex`}>
          <div className="grid grid-cols-2 gap-3  ">
            <div className="text-sm">Email</div>
            <div className="brand-text-gray text-sm">
              raklearnings@gmail.com
            </div>
            <div className="text-sm">City</div>
            <div className="brand-text-gray text-sm">Bengaluru</div>
            <div className="text-sm">Street</div>
            <div className="brand-text-gray text-sm">20 Dellbank Rd</div>
          </div>
        </CardView>

        <CardView cardStyle={`p-11 flex `}>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="text-sm">Support service</div>
            <div className="brand-text-gray text-sm">+78 (098) 333 11 22</div>
            <div className="text-sm">Office</div>
            <div className="brand-text-gray text-sm">+78 (098) 333 11 22</div>
            <div className="text-sm">Personal</div>
            <div className="brand-text-gray text-sm">+78 (098) 333 11 22</div>
          </div>
        </CardView>
      </div>
    </div>
  )
}

export default ContactInfo
