import React from 'react'
import Hero from '../../hero.component/hero.component'

const Home = ({movies}) => {
  return (
    <Hero movies={movies} />
  )
}


export default Home;