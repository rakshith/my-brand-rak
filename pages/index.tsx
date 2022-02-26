import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="2xl:mx-40">
      <Head>
        <title>Rakshith Raj | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar direction="right" />
        <Center />

        <Sidebar direction="left" />
      </div>
    </div>
  )
}

export default Home
