import React from 'react'
import Center from './Center'
import Sidebar from './Sidebar/Sidebar'
import Head from 'next/head'
import Header from './Header'

interface LayoutProps {
  children: any
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="2xl:mx-40">
      <Head>
        <title>Rakshith Raj | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-between">
        <Sidebar direction="right" />

        <div className="flex w-full flex-grow flex-col">
          <Header />
          <div className="flex h-1/4 bg-cover-pic">{children}</div>
        </div>
        <Sidebar direction="left" />
      </div>
    </div>
  )
}

export default Layout
