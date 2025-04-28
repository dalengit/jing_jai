import { motion } from 'framer-motion'

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Somchai',
      role: 'Head Chef',
      image: '/chef-somchai.jpg',
      description: 'With over 20 years of experience in Thai cuisine, Chef Somchai brings authentic flavors from his hometown in Bangkok.',
    },
    {
      name: 'Malai',
      role: 'Restaurant Manager',
      image: '/manager-malai.jpg',
      description: 'Malai ensures every guest feels welcome and experiences the true warmth of Thai hospitality.',
    },
    {
      name: 'Pranee',
      role: 'Pastry Chef',
      image: '/chef-pranee.jpg',
      description: 'Specializing in traditional Thai desserts with a modern twist, Pranee creates unforgettable sweet experiences.',
    },
  ]

  return (
    <div className="bg-thai-cream min-h-screen">
      {/* Story Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading mb-8">Our Story</h1>
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-700 mb-6">
                Jing Jai, meaning "sincere heart" in Thai, was founded in 2010 with
                a simple mission: to share the authentic flavors and warm hospitality
                of Thailand with San Francisco.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Our journey began when Chef Somchai left his successful restaurant
                in Bangkok to bring his culinary expertise to the United States.
                Together with his family, they created a space where traditional
                Thai recipes meet contemporary dining.
              </p>
              <p className="text-xl text-gray-700">
                Today, Jing Jai is more than just a restaurant - it's a gathering
                place for food lovers, a celebration of Thai culture, and a tribute
                to the timeless art of Thai cuisine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="subheading text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="h-20 w-20 bg-thai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We stay true to traditional Thai recipes while sourcing the finest
                local ingredients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="h-20 w-20 bg-thai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Hospitality
              </h3>
              <p className="text-gray-600">
                Every guest is treated like family, with warmth and sincere care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="h-20 w-20 bg-thai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for perfection in every dish and every interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="subheading text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-thai-gold font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 