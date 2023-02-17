import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Services from './Services'
import Banner2 from './Banner2'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <Banner />
      <Services/>
      <About/>
      <Banner2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
