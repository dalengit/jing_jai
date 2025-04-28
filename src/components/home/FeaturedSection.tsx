import React from 'react'
import { motion } from 'framer-motion'

interface FeaturedItemProps {
  title: string
  description: string
  image: string
  imageAlt: string
  isReversed?: boolean
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  image,
  imageAlt,
  isReversed = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {!isReversed && (
        <div className="h-[400px] rounded-3xl overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className={`space-y-4 ${isReversed ? 'order-2 md:order-1' : ''}`}>
        <h3 className="font-display text-3xl font-semibold text-ting-burgundy">
          {title}
        </h3>
        <p className="text-gray-600 text-2xl leading-relaxed font-handwritten">
          {description}
        </p>
      </div>
      {isReversed && (
        <div className="h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
    </motion.div>
  )
}

const FeaturedSection: React.FC = () => {
  const featuredItems = [
    {
      title: 'Authentic Flavors',
      description: 'Experience the true essence of Thai cuisine with our traditional recipes passed down through generations. Each dish is crafted with authentic ingredients and techniques to bring you the genuine flavors of Thailand.',
      image: '/food.jpg',
      imageAlt: 'Thai Food',
    },
    {
      title: 'Warm Atmosphere',
      description: 'Step into a space where modern comfort meets traditional Thai aesthetics. Our carefully designed interior creates the perfect ambiance for an unforgettable dining experience.',
      image: '/interior.jpg',
      imageAlt: 'Restaurant Interior',
      isReversed: true,
    },
    {
      title: 'Expert Chefs',
      description: 'Our skilled culinary artists bring years of experience and passion to every dish. Led by master chefs trained in Thailand, our kitchen team ensures each meal is prepared to perfection.',
      image: '/chef.jpg',
      imageAlt: 'Our Chef',
    },
  ]

  return (
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
          {featuredItems.map((item, index) => (
            <FeaturedItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="curved-divider-bottom">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 58.7C1200 64 1320 64 1380 64H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="#8B1D3D"/>
        </svg>
      </div>
    </section>
  )
}

export default FeaturedSection 