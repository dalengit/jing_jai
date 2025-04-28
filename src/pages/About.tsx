import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Somchai',
      role: 'Head Chef',
      bio: 'With over 20 years of experience in traditional Thai cuisine, Chef Somchai brings authentic flavors from his hometown in Chiang Mai.',
      image: '/images/chef-somchai.jpg'
    },
    {
      name: 'Nong',
      role: 'Sous Chef',
      bio: 'Specializing in street food and modern Thai fusion, Nong adds a creative twist to our traditional dishes.',
      image: '/images/chef-nong.jpg'
    },
    {
      name: 'Pim',
      role: 'Restaurant Manager',
      bio: 'Pim ensures every guest experiences the warm hospitality that Thailand is known for.',
      image: '/images/pim.jpg'
    }
  ]

  const values = [
    {
      title: 'Authenticity',
      description: 'We stay true to traditional Thai recipes and cooking techniques, using authentic ingredients sourced directly from Thailand.',
      icon: '🌿'
    },
    {
      title: 'Quality',
      description: 'Only the freshest ingredients make it to our kitchen. We maintain the highest standards in food preparation and service.',
      icon: '✨'
    },
    {
      title: 'Community',
      description: 'We believe in building strong relationships with our customers and supporting our local community.',
      icon: '🤝'
    }
  ]

  return (
    <div className="bg-thai-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-thai-earth">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our Story
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              A journey of passion, tradition, and authentic Thai flavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-thai-earth mb-6">
                The Beginning
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2010, Jing Jai was born from a simple dream: to bring the authentic taste of Thailand to San Francisco. Our founder, Chef Somchai, wanted to create a space where people could experience the true flavors of his homeland, prepared with the same care and attention to detail as in Thailand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/images/restaurant-interior.jpg"
                  alt="Restaurant Interior"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-display font-bold text-thai-earth">
                  Our Philosophy
                </h3>
                <p className="text-gray-600">
                  At Jing Jai, we believe that great food is more than just taste - it's about creating an experience that transports you to the streets of Bangkok or the beaches of Phuket. Every dish we serve tells a story of Thai culture and tradition.
                </p>
                <p className="text-gray-600">
                  We source our ingredients carefully, working with local farmers and importing specialty items directly from Thailand to ensure authenticity in every bite.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-thai-earth">
              Meet Our Team
            </h2>
            <p className="text-gray-600 mt-4">
              The passionate people behind Jing Jai's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-thai-cream rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-thai-earth">
                    {member.name}
                  </h3>
                  <p className="text-thai-gold font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-thai-earth">
              Our Values
            </h2>
            <p className="text-gray-600 mt-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-display font-bold text-thai-earth mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 