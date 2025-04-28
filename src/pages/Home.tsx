import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturedSection from '../components/home/FeaturedSection'
import CTASection from '../components/home/CTASection'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <FeaturedSection />
      <CTASection />
    </div>
  )
}

export default Home 