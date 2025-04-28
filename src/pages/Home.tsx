import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.jpg'

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
              <dtiv className="flex gap-4">
                <Link to="/menu" className="btn btn-outline">
                  View Menu
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Make A Reservation
                </Link>
              </dtiv>
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

      {/* Featured Section */}
      <section className="section bg-ting-pink relative">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center heading mb-24"
          >
            Why Choose Jing Jai?
          </motion.h2>
          <div className="space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="/dish1.jpg" 
                  alt="Authentic Thai Dish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-semibold text-ting-burgundy">
                  Authentic Flavors
                </h3>
                <p className="text-gray-600 text-2xl leading-relaxed font-handwritten">
                  Experience the true essence of Thai cuisine with our traditional recipes passed down through generations. Each dish is crafted with authentic ingredients and techniques to bring you the genuine flavors of Thailand.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="font-display text-3xl font-semibold text-ting-burgundy">
                  Warm Atmosphere
                </h3>
                <p className="text-gray-600 text-2xl leading-relaxed font-handwritten">
                  Step into a space where modern comfort meets traditional Thai aesthetics. Our carefully designed interior creates the perfect ambiance for an unforgettable dining experience.
                </p>
              </div>
              <div className="h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
                <img 
                  src="/interior.jpg" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="h-[400px] rounded-3xl overflow-hidden">
                <img 
                  src="/chef.jpg" 
                  alt="Our Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-semibold text-ting-burgundy">
                  Expert Chefs
                </h3>
                <p className="text-gray-600 text-2xl leading-relaxed font-handwritten">
                  Our skilled culinary artists bring years of experience and passion to every dish. Led by master chefs trained in Thailand, our kitchen team ensures each meal is prepared to perfection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="curved-divider-bottom">
          <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 58.7C1200 64 1320 64 1380 64H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="#8B1D3D"/>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  )
}

export default Home 