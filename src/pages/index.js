import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Discover from '../components/Discover'
import { events, about } from '../components/InfoSection/Data'
import NavBar from '../components/Navbar'
import Services from '../components/Services'
// import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <NavBar toggle={toggle} />
      <HeroSection />
      <Discover />
      <Services />
      <InfoSection {...events} />
      <InfoSection {...about} />
      <Footer />
    </>
  )
}

export default Home

