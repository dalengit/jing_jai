import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.jpg'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] bg-ting-pink">
      <div className="absolute w-[500px] h-[500px] bg-ting-pink rounded-full blur-3xl opacity-20 -top-48 -left-24" />
      <div className="absolute w-[400px] h-[400px] bg-ting-rose rounded-full blur-3xl opacity-20 top-48 -right-24" />
      <div className="container relative h-full min-h-[600px] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-ting-burgundy">
              Welcome to Jing Jai
            </h1>
            <p className="text-xl mb-8 text-ting-burgundy">
              Experience authentic Thai cuisine in a warm and inviting atmosphere.
              Our dishes are crafted with love, using traditional recipes and the
              finest ingredients.
            </p>
            <div className="flex gap-4">
              <Link to="/menu" className="btn btn-outline">
                View Menu
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Make Reservation
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
              <img 
                src={logo} 
                alt="Jing Jai Logo" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="curved-divider-bottom">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 58.7C1200 64 1320 64 1380 64H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection 