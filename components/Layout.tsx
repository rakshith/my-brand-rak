import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Head from 'next/head'
import Header from './Header'

interface LayoutProps {
  children: any
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="lg:mx-4 2xl:mx-40">
      <Head>
        <title>Rakshith Raj | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-between">
        <div className="sidebar-container z-50 flex flex-col lg:w-1/4 2xl:w-1/5">
          <Sidebar direction="right" />
        </div>

        <div className="z-10 flex w-full flex-col lg:w-8/12 2xl:w-9/12">
          <Header />
          <div className="flex h-1/4 bg-cover-pic">{children}</div>
        </div>
        <div className="sidebar-container flex flex-col lg:w-[150px] 2xl:w-[150px]">
          <Sidebar direction="left" />
        </div>
      </div>
    </div>
  )
}

export default Layout
