import React from 'react'
import { Navbar } from '../../components'
import AboutUs from '../AboutUs/AboutUs'
import Chef from '../Chef/Chef'
import FindUs from '../Findus/FindUs'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Laurels from '../Laurels/Laurels'
import SpecialMenu from '../Menu/SpecialMenu'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default Home
