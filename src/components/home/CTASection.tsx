import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection: React.FC = () => {
  return (
    <section className="section bg-gradient relative">
      {/* Decorative elements */}
      <div className="absolute w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] -top-1/2 -right-1/4 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] bottom-0 -left-1/4 animate-pulse" />
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] opacity-10 mix-blend-overlay" />
      
      {/* Content */}
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="inline-block text-ting-pink font-display text-lg mb-4 bg-white/10 px-4 py-1 rounded-full">
              Join Us Today
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Experience the<br />
              <span className="text-ting-pink">Magic of Thai</span><br />
              Cuisine
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join us for an unforgettable dining experience. Our expert chefs create authentic Thai dishes that will transport you straight to the streets of Bangkok.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn btn-primary bg-white text-ting-burgundy hover:bg-ting-pink group relative overflow-hidden"
              >
                <span className="relative z-10">Make a Reservation</span>
                <div className="absolute inset-0 bg-white transform transition-transform duration-300 group-hover:scale-x-0 origin-left"></div>
              </Link>
              <Link 
                to="/menu" 
                className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-ting-burgundy group"
              >
                <span>View Our Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="/featured-dish.jpg" 
                alt="Featured Thai Dish" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ting-burgundy/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 