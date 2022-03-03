import type { NextPage } from 'next'
import Achievements from '../components/Achievements'
import Banner from '../components/Banner'

import Center from '../components/Center'
import MyServices from '../components/MyServices'
import Recommendations from '../components/Recommendations'

const Home: NextPage = () => {
  return (
    <Center>
      <Banner />

      <Achievements />

      <MyServices />
      <Recommendations />
    </Center>
  )
}

export default Home
