import React, { PropsWithChildren } from 'react'
import HomePage from '../../components/Home/Home'

interface HomeProps { }

const Home: React.FC<PropsWithChildren<HomeProps>> = ({ }) => {
   return (
      <HomePage />
   )
}

export default Home;