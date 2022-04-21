import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Discover from '../components/Discover'
import NavBar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Events from '../components/Events'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Discover />
      <Services />
      <Events />
      <About />
      <Footer />
    </>
  )
}

export default Home

