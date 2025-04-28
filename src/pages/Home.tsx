import React, { lazy, Suspense, memo } from 'react'

const HeroSection = lazy(() => import('../components/home/HeroSection'))
const FeaturedSection = lazy(() => import('../components/home/FeaturedSection'))
const CTASection = lazy(() => import('../components/home/CTASection'))

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <FeaturedSection />
        <CTASection />
      </Suspense>
    </div>
  )
}

export default memo(Home) 